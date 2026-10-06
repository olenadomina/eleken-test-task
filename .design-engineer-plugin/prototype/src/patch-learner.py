"""One-time edits to the original prototype code (not the injected block), applied to both files.
Safe to re-run: every edit checks whether it was already applied."""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
OLD_ROLE = """  <div class="role"><span class="o faded">Viewing as</span>
   <div class="seg"><button class="${r.role==='learner'?'on':''}" data-act="role" data-v="learner">Learner</button><button class="${r.role==='admin'?'on':''}" data-act="role" data-v="admin">Admin</button></div>
  </div></aside>`;"""
NEW_ROLE = """  <button class="acct" data-act="acct" aria-label="Account menu">${r.role==='admin'?av('Kateryna Mudryk','av28','var(--violet-wash)'):av('Anna Kovalenko','av28',AVC[0])}<span class="col gap2 grow" style="min-width:0;text-align:left"><span class="s med trunc">${r.role==='admin'?'Kateryna Mudryk':'Anna Kovalenko'}</span><span class="c faded">${r.role==='admin'?'Admin':'Learner'}</span></span>${ic('updown',16,'faded')}</button></aside>`;"""
OLD_GREET = """ <div class="col gap4" style="padding-top:8px"><h1 class="h1">Good afternoon, Anna</h1><p class="m pencil" style="margin:0">${greetingLine()}</p></div>"""
NEW_GREET = """ <div class="row gap16" style="padding-top:8px;align-items:flex-end"><div class="col gap4 grow"><h1 class="h1">Good afternoon, Anna</h1><p class="m pencil" style="margin:0">${greetingLine()}</p></div><div class="row gap8" aria-label="Your progress"><span class="chip">${ic('flame',14,'amber')}12-day streak</span><a class="chip" href="#/learner/courses?done">${ic('award',14,'violet')}2 certificates</a><span class="chip">${ic('badge',14,'pencil')}5 badges</span></div></div>"""
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    if OLD_ROLE in s:
        s = s.replace(OLD_ROLE, NEW_ROLE)
    assert NEW_ROLE in s, name + ': role block'
    if OLD_GREET in s:
        s = s.replace(OLD_GREET, NEW_GREET)
    assert NEW_GREET in s, name + ': greeting'
    a = s.find('<h3 class="h3">Achievements</h3>')
    if a >= 0:
        start = s.rfind('<section', 0, a)
        end = s.index('</section>', a) + len('</section>')
        line_start = s.rfind('\n', 0, start) + 1
        s = s[:line_start] + s[end:].lstrip('\n') if s[line_start:start].strip() == '' else s[:start] + s[end:]
    assert 'Achievements</h3>' not in s, name + ': achievements'
    p.write_text(s, encoding='utf-8')
    print('patched', name)

# sidebar toggle: hide the panel to an icon rail (like the Claude app)
SHELL = [
 ("""  <a class="logo" href="#/${r.role}/${r.role==='admin'?'home':'dashboard'}"><span class="mark">${ic('cap',18)}</span><span class="h3">Learnly</span></a>""",
  """  <div class="row" style="gap:8px;padding:0 0 20px 8px"><a class="logo" style="padding:0;flex:1" href="#/${r.role}/${r.role==='admin'?'home':'dashboard'}"><span class="mark">${ic('cap',18)}</span><span class="h3">Learnly</span></a><button class="iconbtn sm ghost tip" data-act="navtoggle" aria-label="Hide sidebar" data-tip="Hide sidebar">${ic('panel',18)}</button></div>"""),
 ("document.getElementById('app').innerHTML=`<div class=\"app\">${sidebar(r)}",
  "document.getElementById('app').innerHTML=`<div class=\"app ${st.navCollapsed?'collapsed':''}\">${sidebar(r)}"),
 ("""${ic('sliders',14)} Prototype</button></div>`;""", """${ic('sliders',14)}<span class="lbl">Prototype</span></button></div>`;"""),
]
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    for old, new in SHELL:
        if old in s:
            s = s.replace(old, new)
        assert new in s, name + ': ' + new[:40]
    a = s.index(' const activeView=')
    b = s.index('\n', a) + 1
    hook = " if(st.navCollapsed)return railSidebar(r,nav,activeView);\n"
    if hook not in s:
        s = s[:b] + hook + s[b:]
    p.write_text(s, encoding='utf-8')
    print('shell patched', name)
