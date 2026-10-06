"""Inject src/admin-v2.css and src/admin-v2.js into both prototype files.

Re-running replaces the block between the START/END markers, so both files stay identical
in this part. Run from the prototype folder: python3 src/inject.py
"""
import re, sys, pathlib

HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parent
CSS = (HERE / 'admin-v2.css').read_text(encoding='utf-8').strip() + '\n'
PARTS = ['admin-v2.js', 'admin-v2-editors.js', 'admin-v2-report.js']
JS = '/* ===== ADMIN V2 SCREENS START ===== */\n' + '\n'.join((HERE / f).read_text(encoding='utf-8').strip() for f in PARTS if (HERE / f).exists()) + '\n/* ===== ADMIN V2 SCREENS END ===== */\n'
JS_ANCHOR = '/* render hook: clear stale panel when leaving queue */'

OLD_ACTIVE = ":(r.view==='lessons'||r.view==='interactive')?'library':r.view==='chat'?'messages':r.view;"
NEW_ACTIVE = ":(r.view==='lessons'||r.view==='interactive')?'library':r.view==='chat'?'messages':r.view==='activity'?'courses':r.view==='report'?'reports':r.view;"


def put(s, start, end, block, anchor, before=True):
    if start in s:
        a = s.index(start)
        b = s.index(end, a) + len(end)
        # keep a trailing newline after the END marker line
        if s[b:b + 1] == '\n':
            b += 1
        return s[:a] + block + s[b:]
    i = s.index(anchor)
    return s[:i] + block + s[i:] if before else s[:i + len(anchor)] + block + s[i + len(anchor):]


for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    s = put(s, '/* ===== ADMIN V2 CSS START', '/* ===== ADMIN V2 CSS END ===== */', CSS, '</style>')
    s = put(s, '/* ===== ADMIN V2 SCREENS START', '/* ===== ADMIN V2 SCREENS END ===== */', JS, JS_ANCHOR)
    if OLD_ACTIVE in s:
        s = s.replace(OLD_ACTIVE, NEW_ACTIVE)
    assert NEW_ACTIVE in s, name + ': sidebar mapping not patched'
    p.write_text(s, encoding='utf-8')
    print('injected', name, len(s))
