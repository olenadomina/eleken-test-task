"""Keep the original learner and queue markup in sync with reminder state.

Safe to re-run. Then run: python3 src/inject.py
"""
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
REPLACEMENTS = [
    ('${RESUBMIT_BY}', '${resubmitBy(a)}'),
    ("'Resubmit by '+RESUBMIT_BY", "'Resubmit by '+resubmitBy(a)"),
    ("a.due=D(10,5,23,59);render();", "a.due=new Date(resubmitDate(a));render();"),
    ("about:{t:'Assignment · Interview recruiting plan',s:'Module 2 · Interviews · resubmit by Mon, 5 Oct',badge:'Changes requested',cls:'b-changes',act:'data-act=\"msgq\" data-tab=\"changes\"'}",
     "about:()=>({t:'Assignment · Interview recruiting plan',s:'Module 2 · Interviews · resubmit by '+resubmitBy(CHANGES.find(x=>x.student==='Iryna Bondarenko')),badge:'Changes requested',cls:'b-changes',act:'data-act=\"msgq\" data-tab=\"changes\"'})"),
    ("${fmtDay(s.reviewedAt||NOW)}</span></div></div>`:",
     "${fmtDay(s.reviewedAt||NOW)}</span></div>${s.status==='changes'?`<span class=\"s pencil\">Resubmit by ${resubmitBy(s)}</span>`:''}</div>`:"),
]

for name in ['prototype.html', 'learnly-prototype.html']:
    path = ROOT / name
    text = path.read_text(encoding='utf-8')
    for old, new in REPLACEMENTS:
        if old in text:
            text = text.replace(old, new)
        else:
            assert new in text, (name, old)
    path.write_text(text, encoding='utf-8')
    print(name, 'reminder state patched')
