"""Extrae valores y fórmulas del XLSX fuente sin modificarlo (stdlib)."""
import hashlib
import json
import posixpath
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

base = Path(__file__).resolve().parent
source = base / 'RUTA_ING_realista.xlsx'
ns = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with zipfile.ZipFile(source) as book:
    strings = []
    if 'xl/sharedStrings.xml' in book.namelist():
        strings = [''.join(si.itertext()) for si in ET.fromstring(book.read('xl/sharedStrings.xml')).findall('m:si', ns)]
    relations = {r.attrib['Id']: r.attrib['Target'] for r in ET.fromstring(book.read('xl/_rels/workbook.xml.rels'))}
    sheets = {}
    for sheet in ET.fromstring(book.read('xl/workbook.xml')).findall('m:sheets/m:sheet', ns):
        target = relations[sheet.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']]
        path = target.lstrip('/') if target.startswith('/') else posixpath.normpath('xl/' + target)
        cells = {}
        for cell in ET.fromstring(book.read(path)).findall('m:sheetData/m:row/m:c', ns):
            node = cell.find('m:v', ns)
            value = node.text if node is not None else ''
            kind = cell.attrib.get('t')
            if kind == 's' and value:
                value = strings[int(value)]
            elif kind == 'inlineStr':
                value = ''.join(cell.find('m:is', ns).itertext())
            formula = cell.find('m:f', ns)
            cells[cell.attrib['r']] = {'value': value, 'formula': formula.text if formula is not None else None}
        sheets[sheet.attrib['name']] = cells
daily = sheets['Plan progresivo']
weeks = []
for week in range(1, 23):
    start = 2 + (week - 1) * 7
    days = [{'row': row, 'day': daily[f'B{row}']['value'], 'topic': daily[f'D{row}']['value'], 'minutes': int(daily[f'I{row}']['value'])} for row in range(start, start + 7)]
    weeks.append({'week': week, 'source_range': f'Plan progresivo!C{start}:D{start+6}', 'topic': days[0]['topic'], 'daily_minutes': days[0]['minutes'], 'weekly_minutes': sum(day['minutes'] for day in days), 'days': days})
result = {'source': source.name, 'sha256': hashlib.sha256(source.read_bytes()).hexdigest(), 'size_bytes': source.stat().st_size, 'note': 'Valores de minutos cotejados con Progresión!E2:E23; XLSX es fuente de temario y tiempo, no de demostraciones matemáticas.', 'weeks': weeks, 'total_minutes': sum(week['weekly_minutes'] for week in weeks), 'sheets': sheets}
(base / 'fuente_extraida.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
assert result['total_minutes'] == 3920
for week in weeks:
    assert int(sheets['Progresión'][f'E{week["week"]+1}']['value']) == week['daily_minutes']
print(f"Fuente extraída: {len(weeks)} semanas, {result['total_minutes']} minutos; SHA256 {result['sha256']}")
