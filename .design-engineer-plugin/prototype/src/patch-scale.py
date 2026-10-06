"""One-time patch (02.10): 2 ideas from Olena's Scale project.
- learner assignment, waiting state: the review status steps replace the "Submitted" alert
- learner course page: the next live session card under the course header
Safe to re-run. Then run: python3 src/inject.py"""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
R = [
 ("""<div class="alert info row gap12" style="align-items:center">${ic('check',18,'blue')}<span class="col gap2 grow"><span class="m med">Submitted ${today?'today':fmtDay(a.submittedAt)}, ${fmtTime(a.submittedAt)}</span><span class="s pencil">${today?`Review by ${REVIEW_BY}. You will get an email when it is ready.`:'Waiting for review. You will get an email when it is ready.'}</span></span></div>""",
  """${reviewSteps(a)}"""),
 ("""${n?btn(`Continue: ${n.title}`,'primary',`data-act="nav" data-to="learner/lesson/${n.id}"`,'play'):''}</div></section>
  <section class="card" style="overflow:hidden">${C.modules.map(""",
  """${n?btn(`Continue: ${n.title}`,'primary',`data-act="nav" data-to="learner/lesson/${n.id}"`,'play'):''}</div></section>
  ${nextLiveCard(c)}
  <section class="card" style="overflow:hidden">${C.modules.map("""),
 # the 48 h promise now lives in the status steps and next to Submit; the side card just names the teacher
 ("['Reviewer','Kateryna M. · usually within 2 days']", "['Reviewer','Kateryna M. · teacher']"),
]
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    for old, new in R:
        if new in s: continue
        assert s.count(old) == 1, (name, old[:70])
        s = s.replace(old, new)
    p.write_text(s, encoding='utf-8')
    print(name, 'scale ideas patched')
