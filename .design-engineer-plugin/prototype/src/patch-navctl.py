"""One-time patch: the sidebar logo row gets the panel toggle plus back/forward (navCtl in src/admin-v2.js).
Also adds the navback/navfwd icons (Lucide arrow-left/arrow-right) to src/lucide-map.json.
Safe to re-run. Then run: python3 src/patch-icons.py && python3 src/inject.py"""
import json, pathlib
HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent

OLD = """<button class="iconbtn sm ghost tip" data-act="navtoggle" aria-label="Hide sidebar" data-tip="Hide sidebar">${ic('panel',18)}</button></div>"""
NEW = """${navCtl(false)}</div>"""
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    if NEW not in s:
        assert s.count(OLD) == 1, name + ': logo row button not found'
        s = s.replace(OLD, NEW)
        p.write_text(s, encoding='utf-8')
    print(name, 'navCtl in logo row')

m = HERE / 'lucide-map.json'
d = json.load(open(m, encoding='utf-8'))
d['map'].update({'navback': 'arrow-left', 'navfwd': 'arrow-right'})
d['svg'].update({'navback': '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
                 'navfwd': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'})
json.dump(d, open(m, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('lucide-map.json: navback, navfwd')
