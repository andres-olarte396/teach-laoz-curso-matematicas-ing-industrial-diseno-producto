"""Reubica enlaces de un PDF ya renderizado; no cambia contenido ni geometría."""
from pathlib import Path
from urllib.parse import unquote
from pypdf import PdfReader, PdfWriter
from pypdf.generic import TextStringObject, NameObject

base = Path(__file__).resolve().parents[2]
pdf = base.parents[1] / 'docs/cursos/matematicas/MIPD-001-Matematicas-Ingenieria-Diseno.pdf'
reader = PdfReader(pdf)
before = [page.extract_text() for page in reader.pages]
writer = PdfWriter()
writer.clone_document_from_reader(reader)
count = 0
for page in writer.pages:
    for pointer in page.get('/Annots', []):
        annotation = pointer.get_object()
        action = annotation.get('/A')
        if not action:
            continue
        action = action.get_object()
        uri = str(action.get('/URI', ''))
        if uri.startswith('file:') and '/Temp/' in uri:
            relative = unquote(uri.split('/Temp/', 1)[1])
            target = base / relative
            assert target.exists(), str(target)
            action[NameObject('/URI')] = TextStringObject(target.as_uri())
            count += 1
temporary = pdf.with_suffix('.links.tmp.pdf')
with temporary.open('wb') as stream:
    writer.write(stream)
after = PdfReader(temporary)
assert [page.extract_text() for page in after.pages] == before
temporary.replace(pdf)
print(f'{count} enlaces locales corregidos; contenido y número de páginas conservados.')
