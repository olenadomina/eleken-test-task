"""One-time patch: the roles are called Student and Teacher in the interface (01.10).
Routes and data keep learner/admin. Safe to re-run. Then run: python3 src/inject.py"""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
R = [
 ("${r.role==='admin'?'Admin':'Learner'}</span>", "${r.role==='admin'?'Teacher':'Student'}</span>"),
 ("[['admin','Admin'],['observer','Observer (read-only)']]", "[['admin','Teacher'],['observer','Observer (read-only)']]"),
 ("'Switch to Admin',()=>ACT.role", "'Switch to Teacher',()=>ACT.role"),
 ("sub:'Learner · ", "sub:'Student · "),
 ("sub:'Admin · your team'", "sub:'Teacher · your team'"),
]
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    for old, new in R:
        assert old in s or new in s, (name, old)
        s = s.replace(old, new)
    p.write_text(s, encoding='utf-8')
    print(name, 'roles: Student / Teacher')
