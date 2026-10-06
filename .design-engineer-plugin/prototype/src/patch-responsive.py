"""One-time patch: responsive shell (01.10). The sidebar markup is built once and placed by navMode():
full (>=1200), rail + drawer on demand (768-1199), drawer only (<768). Safe to re-run. Then: python3 src/inject.py"""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
R = [
 (" if(st.navCollapsed)return railSidebar(r,nav,activeView);\n return `<aside class=\"side\">",
  " const _m=navMode();\n const _full=`<aside class=\"side${_m==='full'?'':' drawer'}\">"),
 ("${ic('updown',16,'faded')}</button></aside>`;\n}\nfunction learnerTaskBadge",
  "${ic('updown',16,'faded')}</button></aside>`;\n return _m==='full'?_full:(_m==='rail'?railSidebar(r,nav,activeView):'')+(st.navOpen?'<div class=\"drawer-scrim\" data-act=\"navclose\"></div>'+_full:'');\n}\nfunction learnerTaskBadge"),
 ("<div class=\"app ${st.navCollapsed?'collapsed':''}\">", "<div class=\"app ${appClass()}\">"),
]
def tag_queue_cells(s):
    # queue rows: each cell says which column it is (data-k), so a phone can lay a row out as a card
    a = s.index('function qrow(s,i){'); b = s.index('function qhead(L){', a)
    body = s[a:b]
    if 'data-k="${k}"' not in body:
        body = body.replace('return `<div class="td', 'return `<div data-k="${k}" class="td')
    return s[:a] + body + s[b:]
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    for old, new in R:
        if new in s: continue
        assert s.count(old) == 1, (name, old[:60])
        s = s.replace(old, new)
    s = tag_queue_cells(s)
    p.write_text(s, encoding='utf-8')
    print(name, 'responsive shell patched')
