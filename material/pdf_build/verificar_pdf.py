"""Comprueba el índice contra el texto de las páginas físicas del PDF final."""
import json
import re
import unicodedata
from pathlib import Path
from pypdf import PdfReader

base = Path(__file__).resolve().parents[2]
repo = base.parents[1]
pdf = repo / 'docs/cursos/matematicas/MIPD-001-Matematicas-Ingenieria-Diseno.pdf'
mapping = json.loads((base / 'material/pdf_build/paginas_indice.json').read_text(encoding='utf-8'))
reader = PdfReader(pdf)
texts = [page.extract_text() or '' for page in reader.pages]
def normalize(text):
    return re.sub(r'[^a-z0-9]', '', unicodedata.normalize('NFKD', text).lower())
bad = []
for entry in mapping['entries']:
    page = mapping['pageMap'][entry['id']]
    if normalize(entry['text']) not in normalize(texts[page - 1]):
        bad.append({'heading': entry['text'], 'page': page})
empty = [index + 1 for index, text in enumerate(texts) if not text.strip()]
notes = sum(text.count('Fuente interna:') for text in texts)
report = {'pages': len(reader.pages), 'toc_entries': len(mapping['entries']), 'incorrect_toc_pages': bad, 'empty_pages': empty, 'source_notes': notes, 'bytes': pdf.stat().st_size, 'cover_separate_from_toc': 'Índice' not in texts[0], 'known_limit': 'La revisión visual se realiza además con renderizados PNG; extracción de texto no demuestra maquetación.'}
(base / 'material/pdf_build/verificacion_pdf.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
print(json.dumps(report, ensure_ascii=False))
assert not bad, 'Índice con destinos incorrectos'
assert not empty, 'Páginas vacías'
assert report['cover_separate_from_toc'], 'Portada e índice mezclados'
assert notes == 67, 'Faltan notas de trazabilidad'
