"""One-time patch: the app bar (src/admin-v2-report.js appbar()) goes on top of every screen.
- render() puts appbar(r) above the view
- the learner dashboard loses its own top bar (search, bell, avatar)
- Create event loses its ‹ button; "Events" in the breadcrumb leads back
- learner course, lesson and assignment pages keep their parent link without the ‹
- the sidebar logo row keeps only the panel toggle (navCtl)
Safe to re-run. Then run: python3 src/inject.py"""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
R = [
 ("""${sidebar(r)}<div class="main">${V(r)}</div>""",
  """${sidebar(r)}<div class="main">${appbar(r)}${V(r)}</div>"""),
 (""" <div class="topbar"><label class="search">${ic('search',16)}<input placeholder="Search courses, lessons, tasks"><span class="kbd">⌘K</span></label><span class="grow"></span>
  <button class="iconbtn" data-act="nav" data-to="learner/messages" aria-label="Notifications">${ic('bell',18)}${w.fb.length?'<span class="dot"></span>':''}</button>${av('Anna Kovalenko','',AVC[0])}</div>
""", ""),
 ("""  <button class="iconbtn sm" data-act="nav" data-to="admin/events" aria-label="Back to events">${ic('chevl',18)}</button>
""", ""),
 ("""<span class="c faded">Events / ${e.id?'Edit event':'New event'}</span>""",
  """<span class="c faded"><a class="crumb" href="#/admin/events">Events</a> / ${e.id?'Edit event':'New event'}</span>"""),
 # learner pages: the parent link stays, its ‹ goes (← in the app bar does that job)
 ("""style="color:var(--pencil)">${ic('chevl',14)} My courses</a>""", """style="color:var(--pencil)">My courses</a>"""),
 ("""style="color:var(--pencil)">${ic('chevl',14)} ${C.title} · Module""", """style="color:var(--pencil)">${C.title} · Module"""),
 ("""style="color:var(--pencil)">${ic('chevl',14)} Tasks</a>""", """style="color:var(--pencil)">Tasks</a>"""),
]
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    for old, new in R:
        if old in s:
            assert s.count(old) == 1, (name, old[:60])
            s = s.replace(old, new)
        else:
            assert (new and new in s) or not new, (name, 'missing: ' + old[:60])
    p.write_text(s, encoding='utf-8')
    print(name, 'app bar patched')
