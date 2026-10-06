"""Every icon = official Lucide (lucide-static@0.469.0, src/lucide-map.json).
Rewrites the icon map `const P={...}` in both HTML files and the extra icons in src/admin-v2.js."""
import json, re, pathlib
HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
L = json.load(open(HERE / 'lucide-map.json', encoding='utf-8'))['svg']

def rewrite(block):
    unmapped = []
    def sub(m):
        k = m.group(1)
        if k in L:
            return f"{k}:'{L[k]}'"
        unmapped.append(k)
        return m.group(0)
    return re.sub(r"\b([a-zA-Z0-9_]+):'(<[^']*)'", sub, block), unmapped

for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    a = s.index('const P={')
    b = s.index('};', a)
    block, unmapped = rewrite(s[a:b])
    s = s[:a] + block + s[b:]
    p.write_text(s, encoding='utf-8')
    print(name, 'unmapped:', unmapped)

js = HERE / 'admin-v2.js'
s = js.read_text(encoding='utf-8')
a = s.index('Object.assign(P,{')
b = s.index('});', a)
extra = ['grip', 'columns', 'text', 'link2', 'panel', 'updown', 'flame', 'badge', 'gaps', 'tf', 'navback', 'navfwd', 'target', 'clip']
s = s[:a] + 'Object.assign(P,{\n' + ',\n'.join(f" {k}:'{L[k]}'" for k in extra) + '\n' + s[b:]
s = s.replace("const ACT_ICON={quiz:'quiz',tf:'lessons',gaps:'puzzle',assignment:'pen'};", "const ACT_ICON={quiz:'quiz',tf:'tf',gaps:'gaps',assignment:'pen'};")
js.write_text(s, encoding='utf-8')
print('admin-v2.js extra icons:', extra, "ACT_ICON ok" if "tf:'tf',gaps:'gaps'" in s else 'ACT_ICON NOT updated')
