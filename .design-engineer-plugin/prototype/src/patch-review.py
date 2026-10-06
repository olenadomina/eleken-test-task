"""One-time patch (02.10, product assessment): student-side hooks for the new blocks in src/admin-v2.js.
- dashboard: weekly goal chip instead of the streak; badges chip links to the badges page
- assignment: no status badge while the review steps are shown; "While you wait" after the waiting card;
  accepted feedback shows the module progress and the next step
- teacher side: past 48 h is amber, red only after 72 h (queue row, Submitted cell, panel badge, Overdue tab count, Home)
- live class: a preparation line on the week row; Maria asks for the interview script (1 name for the file)
- assignment: the deadline reminder sits under the due date; completed courses open their finished page
- My courses rows get hooks (mcrow, mcprog) so phones put the progress under the title
- feedback: the status shows once, in the header badge (with the grade when accepted), not again in the card
- the badges page keeps Dashboard active in the sidebar (it opens from the dashboard chips)
- queue: Last activity says “Reviewed 30 Sep” for decided work; the status column already says which decision
- event header: both halves of the Publish / Update split button stretch to 1 height (the arrow half was 30 px next to 34 px)
- Events table: Course takes the free width and titles truncate, so the table fits at 1280–1440 instead of being cut on the right
- My courses: no subtitle (the tabs count), the caption spans the bar; assignment: the title spans both columns so the cards align
- queue: Status is 164 px, so “Changes requested” no longer runs into the reviewer avatar (06.10)
- event preview: the type line reads the event type instead of a fixed “LIVE CLASS”
- queue: Submission may shrink to 200 px before the table scrolls, so the table fits a 1220 px window
- as in Figma (06.10): dashboard My courses lists the courses in progress (src/admin-v2.js); lesson rail lists activities after their lesson
  (no separate “Module assignment” card); lesson meta, summary and slides name; assignment materials; calendar join time;
  queue shows 10 rows per page
- avatars (06.10): .av22 and .av24 use 12 px initials, as the Figma Avatar component (Caption 12/16 for 22–28 px)
- assignment (06.10 review): no “Tasks” back link above the title — it repeated the active sidebar item and ← in the app bar
- Prototype controls (06.10): an “i” button next to × shows the first-visit hints again
- dashboard (06.10): Contacts under My courses, as in Scale (the block is dashContacts() in src/admin-v2.js)
- as in Figma (06.10, check against the mockups): new feedback leads the greeting; the feedback row is the task with “Kateryna M. reviewed it today, 15:10”;
  “your interview script”; the reviewed assignment shows “Your submission” (yourSubmission() in src/admin-v2.js)
- review queue and Create event as in Figma (06.10): page 1 holds the 10 rows from the mockups (the other 14 submissions came in after 14:42);
  example review for the script; no heading in the Assign menu; failure lines and selection wording; observer sees Kateryna M.;
  header row in Empty and Error; full course name in the chip; Activity with the earlier review (actLog); “On time”;
  a reviewed row stays until the tab changes; Create event: New event for drafts, Saved 2 min ago, date as “Wed, 14 Oct 2026”,
  “Weekly · 8 sessions”, reminder Edit, a formatting bar over Description
Safe to re-run. Then run: python3 src/inject.py"""
import pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
R = [
 ("""<span class="chip">${ic('flame',14,'amber')}12-day streak</span>""", """${weekGoalChip()}"""),
 ("""<span class="chip">${ic('badge',14,'pencil')}5 badges</span>""", """<a class="chip" href="#/learner/badges">${ic('badge',14,'pencil')}5 badges</a>"""),
 ("""const head=`<div class="row gap12">${asgBadge(a)}""", """const head=`<div class="row gap12">${a.status==='waiting'?'':asgBadge(a)}"""),
 ("""<span class="hint">You can replace the file until review starts.</span></div></section>`;}""",
  """<span class="hint">You can replace the file until review starts.</span></div></section>${waitNext(a)}`;}"""),
 ("""${a.status==='accepted'?`<div class="row gap12" style="border-top:1px solid var(--rule);padding-top:16px"><span class="s pencil grow">This counts toward Module ${a.mod+1} of ${C.title}.</span><a class="link" href="#/learner/course/${a.course}">Back to the course ${ic('arrow',14)}</a></div>`:''}""",
  """${a.status==='accepted'?acceptedProgress(a):''}"""),
 # teacher side: the first day past 48 h is amber, red after 72 h (reviewLate in src/admin-v2-report.js)
 ("${isOverdue(s)?'<span class=\"overbar\"></span>':''}", "${isOverdue(s)?`<span class=\"overbar${reviewLate(s)?'':' amber'}\"></span>`:''}"),
 ("<span class=\"c row gap4 ${od?'red':'faded'}\">${od?ic('alert',12):''}", "<span class=\"c row gap4 ${od?(reviewLate(s)?'red':'amber'):'faded'}\">${od?ic(reviewLate(s)?'alert':'clock',12):''}"),
 ("${od?`<span class=\"badge b-over\">${ic('alert',12)}${esc(firstName(s.student))} has been waiting ${days} days</span>`:''}", "${od?`<span class=\"badge ${reviewLate(s)?'b-over':'b-needs'}\">${ic(reviewLate(s)?'alert':'clock',12)}${esc(firstName(s.student))} has been waiting ${days} days</span>`:''}"),
 ("""const tile=(i,red)=>`<span style="width:36px;height:36px;border-radius:8px;display:grid;place-items:center;flex:none;background:var(${red?'--red-wash':'--violet-wash'});color:var(${red?'--red-pen':'--ink-violet-deep'})">""",
  """const tile=(i,red)=>`<span style="width:36px;height:36px;border-radius:8px;display:grid;place-items:center;flex:none;background:var(${red==='amber'?'--highlighter-wash':red?'--red-wash':'--violet-wash'});color:var(${red==='amber'?'--highlighter':red?'--red-pen':'--ink-violet-deep'})">"""),
 ("""if(od.length)items.push(item('clock',true,`${od.length} submission${od.length>1?'s':''} waiting more than 48 h`,esc(od.map(x=>x.student).join(', ')),'<span class="badge b-over"><i></i>Overdue</span>',""",
  """if(od.length)items.push(item('clock',od.some(reviewLate)||'amber',`${od.length} submission${od.length>1?'s':''} waiting more than 48 h`,esc(od.map(x=>x.student).join(', ')),od.some(reviewLate)?`<span class="badge b-over"><i></i>${od.filter(reviewLate).length} over 72 h</span>`:'',"""),
 ("""<span class="count ${v==='overdue'&&tabCount(v)?'red':''}">""", """<span class="count ${v==='overdue'&&tabCount(v)?(ALLSUBS.some(x=>live(x)&&reviewLate(x))?'red':'amber'):''}">"""),
 ("""if(C.completed)return `<div class="row gap16" style="padding:16px 20px;border-bottom:1px solid var(--rule)">${cover(c,56,56)}<span class="col gap4 grow"><span class="m med">${C.title}</span><span class="s pencil">${C.modules.length} modules · Completed ${C.cert}</span></span><span class="badge b-accepted"><i></i>Certificate earned</span>${btn('Download certificate','secondary','data-act="notyet" data-msg="Certificate PDF downloaded (simulated)"','dl')}</div>`;""",
  """if(C.completed)return `<a class="row gap16 mcrow" href="#/learner/course/${c}" style="padding:16px 20px;border-bottom:1px solid var(--rule)">${cover(c,56,56)}<span class="col gap4 grow"><span class="m med">${C.title}</span><span class="s pencil">${C.modules.length} modules · Completed ${C.cert}</span></span><span class="badge b-accepted"><i></i>Certificate earned</span>${ic('chev',16,'faded')}</a>`;"""),
 ("""<span class="s pencil trunc">${esc(o.meta)}</span></span>""",
  """<span class="s pencil trunc">${esc(o.meta)}</span>${o.prep||''}</span>"""),
 ("""rows.today.push(wlRow({icon:'video',title:LIVE.title,meta:`${COURSES.ux.title} · with ${LIVE.host}`,""",
  """rows.today.push(wlRow({icon:'video',title:LIVE.title,meta:`${COURSES.ux.title} · with ${LIVE.host}`,prep:livePrep(),"""),
 ("""['Reviewer','Kateryna M. · teacher']].map(([k,v])=>`<div class="col gap2"><span class="c faded">${k}</span><span class="s med">${esc(v)}</span></div>`).join('')}""",
  """['Reviewer','Kateryna M. · teacher']].map(([k,v])=>`<div class="col gap2"><span class="c faded">${k}</span><span class="s med">${esc(v)}</span>${k==='Due'?asgReminder(a):''}</div>`).join('')}"""),
 ("""bring the guide you wrote in Lesson 4""",
  """bring the interview script you wrote in Lesson 4"""),
 ("""return `<a class="row gap16" href="#/learner/course/${c}" style="padding:16px 20px;border-bottom:1px solid var(--rule)">${cover(c,56,56)}<span class="col gap6 grow"><span class="m med">${C.title}</span><span class="s pencil">Next: ${esc(n.title)}</span></span><span class="col gap6" style="width:260px">""",
  """return `<a class="row gap16 mcrow" href="#/learner/course/${c}" style="padding:16px 20px;border-bottom:1px solid var(--rule)">${cover(c,56,56)}<span class="col gap6 grow"><span class="m med">${C.title}</span><span class="s pencil">Next: ${esc(n.title)}</span></span><span class="col gap6 mcprog" style="width:260px">"""),
 ("""Attempt ${a.feedback.attempt}`:''}</span></span>${a.status==='accepted'?`<span class="badge b-accepted"><i></i>Accepted · ${a.feedback.grade} / 10</span>`:'<span class="badge b-changes"><i></i>Changes requested</span>'}</div>""",
  """Attempt ${a.feedback.attempt}`:''}</span></span></div>"""),
 ("""accepted:'<span class="badge b-accepted"><i></i>Accepted</span>'}[a.status]""",
  """accepted:`<span class="badge b-accepted"><i></i>Accepted${a.feedback?` · ${a.feedback.grade} / 10`:''}</span>`}[a.status]"""),
 ("""const activeView=(r.view==='course'||r.view==='lesson')?'courses':""",
  """const activeView=(r.view==='badges'||r.view==='certificates')?'dashboard':(r.view==='course'||r.view==='lesson')?'courses':"""),
 ("""  else if(s.status==='changes')t='Changes requested '+fmtDay(s.reviewedAt);else if(s.status==='accepted')t='Accepted '+fmtDay(s.reviewedAt);else t='Submitted '+agoLabel(s.submitted);}""",
  """  else if(s.status==='changes'||s.status==='accepted')t='Reviewed '+fmtDay(s.reviewedAt);else t='Submitted '+agoLabel(s.submitted);}"""),
 ("""<div class="row" style="gap:1px"><button class="btn btn-primary" style="border-radius:8px 0 0 8px" data-act="evpublish">""",
  """<div class="row" style="gap:1px;align-items:stretch"><button class="btn btn-primary" style="border-radius:8px 0 0 8px" data-act="evpublish">"""),
 ("""[['Event',0],['Next session',200],['Repeat',200],['Course',230],['Price',90],['Status',120]]""",
  """[['Event',0],['Next session',170],['Repeat',160],['Course',0],['Price',80],['Status',120]]"""),
 ("""<div class="td grow col" style="align-items:flex-start;justify-content:center;gap:2px"><span class="m med">${esc(e.title||'Untitled event')}</span>""",
  """<div class="td grow col" style="align-items:flex-start;justify-content:center;gap:2px;min-width:0"><span class="m med trunc" style="max-width:100%">${esc(e.title||'Untitled event')}</span>"""),
 ("""<div class="td" style="width:200px"><span class="s">${e.start?""",
  """<div class="td" style="width:170px"><span class="s">${e.start?"""),
 ("""<div class="td" style="width:200px"><span class="s pencil trunc">${repeatLabel(e)}""",
  """<div class="td" style="width:160px"><span class="s pencil trunc">${repeatLabel(e)}"""),
 ("""<div class="td" style="width:230px"><span class="s pencil trunc">${e.linked.length""",
  """<div class="td grow" style="min-width:0"><span class="s pencil trunc">${e.linked.length"""),
 ("""<div class="td" style="width:90px"><span class="s">${e.price==='paid'""",
  """<div class="td" style="width:80px"><span class="s">${e.price==='paid'"""),
 ("""[['Event',0],['Next session',170],['Repeat',160],['Course',0],['Price',80],['Status',120]].map(([k,w])=>`<div class="td ${w?'':'grow'}" ${w?`style="width:${w}px"`:''}>""",
  """[['Event',0],['Next session',170],['Repeat',160],['Course',0],['Price',80],['Status',120]].map(([k,w])=>`<div class="td ${w?'':'grow'}" ${w?`style="width:${w}px"`:'data-min="170"'}>"""),
 ("""<div class="col gap4"><h1 class="h1">My courses</h1><p class="m pencil" style="margin:0">3 in progress · 2 completed</p></div>""",
  """<div class="col gap4"><h1 class="h1">My courses</h1></div>"""),
 ("""<span class="col gap6 mcprog" style="width:260px">${bar(s.pct)}<span class="c faded"><span style="color:var(--ink)">${s.done} of ${s.total} lessons</span> · ${fmtLeft(s.leftMin)}</span></span>""",
  """<span class="col gap6 mcprog" style="width:260px">${bar(s.pct)}<span class="c row between gap8"><span style="color:var(--ink)">${s.done} of ${s.total} lessons</span><span class="faded">${fmtLeft(s.leftMin)}</span></span></span>"""),
 ("""<div class="row gap24" style="align-items:flex-start"><div class="col gap20 grow">
   <div class="col gap8"><span class="s pencil">${C.title} · Module ${a.mod+1}: ${C.modules[a.mod]}</span><h1 class="h1">${esc(a.title)}</h1>${head}</div>
   """,
  """<div class="col gap8"><span class="s pencil">${C.title} · Module ${a.mod+1}: ${C.modules[a.mod]}</span><h1 class="h1">${esc(a.title)}</h1>${head}</div>
  <div class="row gap24" style="align-items:flex-start"><div class="col gap20 grow">
   """),
 ("""const COLS=[['cb',44],['Submission',0],['Student',176],['Submitted',118],['Status',136],['Reviewer',118],['Last activity',168],['act',44]];""",
  """const COLS=[['cb',44],['Submission',0],['Student',176],['Submitted',118],['Status',164],['Reviewer',118],['Last activity',168],['act',44]];"""),
 ("""<span class="o faded">${esc((e.category||'Event').toUpperCase())} · LIVE CLASS</span>""",
  """<span class="o faded">${esc([...new Set([e.category||'Event',e.type||'Live class'])].join(' · ').toUpperCase())}</span>"""),
 ("""return `<div class="td ${w?'':'grow'} ${k==='Last activity'?'c-last':''}" ${w?`style="width:${w}px"`:''}><span class="o faded">${k}</span>""",
  """return `<div class="td ${w?'':'grow'} ${k==='Last activity'?'c-last':''}" ${w?`style="width:${w}px"`:'data-min="200"'}><span class="o faded">${k}</span>"""),
 ("""<div class="row between" style="padding:20px 20px 12px"><h3 class="h3">My courses</h3><span class="s faded">3 in progress</span></div>
    ${['ux','fig','pa'].map(c=>{const s=courseStats(c);const extra=c==='pa'?'<span class="amber">Quiz due today</span>':fmtLeft(s.leftMin);
     return `<a class="row gap12" href="#/learner/course/${c}" style="padding:12px 16px 12px 20px">${cover(c,40,40)}<span class="col gap6 grow"><span class="m med trunc">${COURSES[c].title}</span>${bar(s.pct)}<span class="c faded"><span style="color:var(--ink)">${s.done} of ${s.total} lessons</span> · ${extra}</span></span>${ic('chev',16,'faded')}</a>`;}).join('')}
    <div class="cardfoot"><a class="link" href="#/learner/courses">All my courses ${ic('arrow',14)}</a></div>""",
  """${dashCourses()}"""),
 ("""'Plan 5 sessions of 30–45 minutes; leave 15 minutes between them for notes.'""",
  """'Plan 5 sessions of 30–45 minutes, 15 minutes apart, so you have time for notes.'"""),
 ("""<span class="s pencil">${l.min} min · ${C.title}</span>""",
  """<span class="s pencil">${l.min} min · ${C.title} · completes when you watch 90% of the video</span>"""),
 ("""<span class="m med">${l.id}-slides.pdf</span>""",
  """<span class="m med">${slidesName(l)}</span>"""),
 ("""<section class="card" style="overflow:hidden"><div style="padding:16px 16px 8px" class="o faded">Module ${l.mod+1} · ${C.modules[l.mod]}</div>
     ${ml.map(x=>`<a class="row gap12" href="#/learner/lesson/${x.id}" style="padding:10px 16px;${x.id===l.id?'background:var(--violet-wash)':''}">${x.done?`<span class="green">${ic('check',16)}</span>`:ic('play',16,x.id===l.id?'violet':'faded')}<span class="s grow ${x.id===l.id?'semi':''}">${esc(x.title)}</span><span class="c faded">${x.min} min</span></a>`).join('')}
     ${asg?`<a class="row gap12" href="#/learner/assignment/${asg.id}" style="padding:12px 16px;border-top:1px solid var(--rule)">${ic('file',16,'faded')}<span class="s grow">${esc(asg.title)}</span>${ic('chev',14,'faded')}</a>`:''}</section>
    ${asg?`<section class="card pad col gap8"><span class="o faded">Module assignment</span><span class="m med">${esc(asg.title)}</span>${asgBadge(asg)}<a class="link" href="#/learner/assignment/${asg.id}">Open assignment ${ic('arrow',14)}</a></section>`:''}""",
  """${lessonRail(l)}"""),
 ("""<ol style="margin:0;padding-left:20px" class="col gap8 m">${a.brief.map(b=>`<li>${esc(b)}</li>`).join('')}</ol></div>
   <div class="field"><span class="label">Your file</span>${fileBlock}</div>""",
  """<ol style="margin:0;padding-left:20px" class="col gap8 m">${a.brief.map(b=>`<li>${esc(b)}</li>`).join('')}</ol></div>
   ${asgMaterials(a)}
   <div class="field"><span class="label">Your file</span>${fileBlock}</div>"""),
 ("""sub:'with '+LIVE.host,act:'join'""",
  """sub:'with '+LIVE.host+' · '+(liveSoon()?'Starts in 8 min':'Join opens 18:50'),act:'join'"""),
 ("""loadingUntil:0, page:1, perPage:25,""",
  """loadingUntil:0, page:1, perPage:10,"""),
 (""".av22{width:22px;height:22px;font-size:11px;font-weight:500}""",
  """.av22{width:22px;height:22px;font-size:12px;font-weight:500}"""),
 (""".av24{width:24px;height:24px;font-size:11px;font-weight:500}""",
  """.av24{width:24px;height:24px;font-size:12px;font-weight:500}"""),
 (""" return `<div class="page" style="max-width:1080px">
  <a class="link" href="#/learner/tasks" style="color:var(--pencil)">Tasks</a>
  <div class="col gap8"><span class="s pencil">${C.title}""",
  """ return `<div class="page" style="max-width:1080px">
  <div class="col gap8"><span class="s pencil">${C.title}"""),
 ("""<a class="chip" href="#/learner/courses?done">${ic('award',14,'violet')}2 certificates</a>""",
  """<a class="chip" href="#/learner/certificates">${ic('award',14,'violet')}2 certificates</a>"""),
 ("""   <section class="card pad row gap24">
    <a href="#/learner/lesson/${n.id}">${cover('ux',220,136,true)}</a>
    <div class="col gap6 grow"><span class="o violet">Continue learning</span><h2 class="h2">${esc(n.title)}</h2>
     <span class="s pencil">${COURSES.ux.title} · Lesson ${courseLessons('ux').indexOf(n)+1} of ${cs.total} · ${left} min left</span>
     <div class="row gap12" style="padding-top:10px">${bar(cs.pct)}<span class="s semi">${cs.done} of ${cs.total} lessons</span></div>
     <div style="padding-top:12px">${btn('Resume lesson',liveSoon()?'secondary':(ASSIGN.a1.status==='overdue'?'secondary':'primary'),`data-act="nav" data-to="learner/lesson/${n.id}"`,'play')}</div></div>
   </section>""",
  """   <section class="card continue">
    <a class="continue-cover" href="#/learner/lesson/${n.id}" tabindex="-1" aria-hidden="true">${cover('ux',240,200)}</a>
    <div class="continue-body"><div class="row between gap12"><span class="o violet">Continue learning</span><span class="c faded row gap6">${ic('clock',13)}${left} min left</span></div>
     <h2 class="h2">${esc(n.title)}</h2><span class="m pencil">${COURSES.ux.title}</span>
     <div class="continue-tags"><span class="badge b-neutral">${ic('play',12)}Video</span>${lesData(n.id)&&lesData(n.id).file?`<span class="badge b-neutral">${ic('file',12)}Slides</span>`:''}</div>
     <div class="col gap6" style="padding-top:14px">${bar(cs.pct)}<span class="c pencil">${cs.pct}% · lesson ${courseLessons('ux').indexOf(n)+1} of ${cs.total}</span></div>
     <div style="padding-top:12px">${btn('Resume lesson',liveSoon()?'secondary':(ASSIGN.a1.status==='overdue'?'secondary':'primary'),`data-act="nav" data-to="learner/lesson/${n.id}"`,'play')}</div></div>
   </section>"""),
 ("""<div class="row between"><span class="semi" style="color:#fff">Prototype controls</span><button data-act="proto" style="color:#9C9B95">${ic('x',14)}</button></div>""",
  """<div class="row between"><span class="semi" style="color:#fff">Prototype controls</span><span class="row gap4"><button class="proto-ic proto-tour${st.tour?' on':''}" data-act="tourshow" aria-pressed="${st.tour?'true':'false'}" aria-label="Show hints" title="Show hints">${ic('info',14)}</button><button class="proto-ic" data-act="proto" aria-label="Close" title="Close">${ic('x',14)}</button></span></div>"""),
 ("""   <section class="card" style="overflow:hidden">
    ${dashCourses()}
   </section>
  </div>""",
  """   <section class="card" style="overflow:hidden">
    ${dashCourses()}
   </section>
   ${dashContacts()}
  </div>"""),
 ("""function greetingLine(){const a1=ASSIGN.a1;let first;
 if(a1.feedback&&!a1.feedbackSeen)first=a1.status==='accepted'?'Your recruiting plan was accepted':'Kateryna M. left feedback on your recruiting plan';""",
  """function greetingLine(){const a1=ASSIGN.a1;let first;
 const fresh=Object.values(ASSIGN).find(a=>a.feedback&&!a.feedbackSeen);
 if(fresh)return (fresh.status==='accepted'?`Your ${shortTitle(fresh)} was accepted`:`New feedback on your ${shortTitle(fresh)}`)+'. You have a live class at 19:00 today.';"""),
 ("""title:a.status==='accepted'?`Kateryna M. accepted your ${shortTitle(a)}`:`Kateryna M. left ${a.feedback.notes} notes on your ${shortTitle(a)}`,meta:`${COURSES[a.course].title} · ${a.title}`""",
  """title:a.title,meta:`Kateryna M. reviewed it today, ${a.feedback.at}`"""),
 (""".replace('script draft','script');""",
  """.replace('script draft','interview script');"""),
 ("""at:'15:20',attempt:a.attempt""",
  """at:'15:10',attempt:a.attempt"""),
 ("""${a.status==='changes'||a.status==='accepted'?fb+body:""",
  """${a.status==='changes'||a.status==='accepted'?fb+yourSubmission(a):"""),
 ("""file:{name:'interview-script-v1.pdf',size:'380 KB'},submittedAt:D(9,28,14,20)""",
  """file:{name:'interview-script-v1.pdf',size:'380 KB',pages:'4 pages'},submittedAt:D(9,28,14,20)"""),
 ("S('Affinity map photos','ux',2,'Mateus Silva',D(9,30,15,10)",
  "S('Affinity map photos','ux',2,'Mateus Silva',D(10,1,14,44)"),
 ("S('Variables setup','fig',1,'Hanna Kowalska',D(9,30,16,40)",
  "S('Variables setup','fig',1,'Hanna Kowalska',D(10,1,14,45)"),
 ("S('North star metric memo','pa',0,'Arjun Mehta',D(9,30,18,5)",
  "S('North star metric memo','pa',0,'Arjun Mehta',D(10,1,14,46)"),
 ("S('Smart animate study','fig',2,'Lea Schneider',D(9,30,19,30)",
  "S('Smart animate study','fig',2,'Lea Schneider',D(10,1,14,47)"),
 ("S('Research goals','ux',0,'Bogdan Lysenko',D(9,30,21,15)",
  "S('Research goals','ux',0,'Bogdan Lysenko',D(10,1,14,48)"),
 ("S('Goals tree','pa',1,'Sara Lindqvist',D(10,1,8,10)",
  "S('Goals tree','pa',1,'Sara Lindqvist',D(10,1,14,49)"),
 ("S('Component properties','fig',0,'Noah Dubois',D(10,1,8,45)",
  "S('Component properties','fig',0,'Noah Dubois',D(10,1,14,50)"),
 ("S('Screener questions','ux',1,'Iryna Hnatiuk',D(10,1,9,20)",
  "S('Screener questions','ux',1,'Iryna Hnatiuk',D(10,1,14,51)"),
 ("S('Funnel drop-off notes','pa',3,'Lucas Moreau',D(10,1,10,40)",
  "S('Funnel drop-off notes','pa',3,'Lucas Moreau',D(10,1,14,52)"),
 ("S('Scroll and overlays','fig',2,'Olivia Brown',D(10,1,11,5)",
  "S('Scroll and overlays','fig',2,'Olivia Brown',D(10,1,14,53)"),
 ("S('Note taking template','ux',2,'Kenji Watanabe',D(10,1,11,30)",
  "S('Note taking template','ux',2,'Kenji Watanabe',D(10,1,14,55)"),
 ("S('Experiment plan','pa',4,'Zofia Nowak',D(10,1,12,25)",
  "S('Experiment plan','pa',4,'Zofia Nowak',D(10,1,14,56)"),
 ("S('Nested instances','fig',0,'Daniel Okafor',D(10,1,13,10)",
  "S('Nested instances','fig',0,'Daniel Okafor',D(10,1,14,58)"),
 ("S('Dashboard critique','pa',2,'Elif Yilmaz',D(10,1,13,40)",
  "S('Dashboard critique','pa',2,'Elif Yilmaz',D(10,1,15,0)"),
 ("Object.assign(d,{decision:'changes',grade:'6',works:'Clear recruiting criteria and a realistic schedule for 5 sessions.',fix:'Add 2 screener questions that exclude people who work in UX themselves, and say how you will thank participants.'});",
  "const sp=ALLSUBS.find(x=>x.id===st.panel),script=sp&&sp.task==='Interview script draft';Object.assign(d,{decision:'changes',grade:'6',works:script?'Clear goals and a good flow from easy to deep questions.':'Clear recruiting criteria and a realistic schedule for 5 sessions.',fix:script?'Move the warm-up questions to the start. Rewrite the 3 leading questions on page 2 (“Don’t you think…”) as open ones.':'Add 2 screener questions that exclude people who work in UX themselves. Say how you will thank participants.'});"),
 ('openMenu(el,`<div class="mgroup o faded">Assign ${st.sel.size} to</div>`+REVIEWERS.map(',
  'openMenu(el,REVIEWERS.map('),
 ("${esc(s.task)} · ${esc(s.student.split(' ')[0])} ${esc(s.student.split(' ')[1]?s.student.split(' ')[1][0]+'.':'')}: ${why==='access'?`${RFULL[fail.to]||'They'} has no access",
  "${esc(s.task.split(':')[0])} · ${esc(s.student.split(' ')[0])} ${esc(s.student.split(' ')[1]?s.student.split(' ')[1][0]+'.':'')}: ${why==='access'?`${(RFULL[fail.to]||'They').split(' ')[0]} has no access"),
 ('${!ro()&&st.sel.size&&!loading&&!fail?`<div class="row gap6 s"',
  '${!ro()&&st.sel.size&&!loading&&!fail&&L.length>rows.length&&st.sel.size<L.length?`<div class="row gap6 s"'),
 ('`${st.sel.size} selected.${L.length>st.sel.size?',
  "`${st.sel.size} submission${st.sel.size===1?'':'s'}${[...st.sel].every(id=>rows.some(r=>r.id===id))?' on this page':''} ${st.sel.size===1?'is':'are'} selected.${L.length>st.sel.size?"),
 ('`<span class="semi">${st.sel.size} selected</span><span class="sep"></span>',
  '`<span class="semi">${st.sel.size>=L.length&&L.length>rows.length?`All ${st.sel.size} selected · across ${Math.ceil(L.length/st.perPage)} pages`:`${st.sel.size} selected`}</span>${st.sel.size>=L.length&&L.length>rows.length?\'<button class="bb" data-act="clearsel">Clear selection</button>\':\'\'}<span class="sep"></span>'),
 ("You selected ${items.length}${st.tab==='all'&&items.length===ALLSUBS.filter(live).length?' in “All”':''}. ${skip?`${skip} will be skipped: ${already.length} already accepted",
  "You selected ${st.tab==='all'&&items.length===ALLSUBS.filter(live).length?'all '+items.length+' in “All”':items.length}. ${skip?`${skip} will be skipped: ${already.length} are already reviewed"),
 ('function revCell(s){if(!s.reviewer)return \'<span class="s faded">Unassigned</span>\';const me=s.reviewer===\'You\';',
  'function revCell(s){if(!s.reviewer)return \'<span class="s faded">Unassigned</span>\';if(s.reviewer===\'You\'&&ro())return `${av(\'Kateryna M.\',\'av22\',\'var(--margin)\')}<span class="s trunc">Kateryna M.</span>`;const me=s.reviewer===\'You\';'),
 ("else if(s.viewed)t='Viewed by you 1d ago';",
  "else if(s.viewed)t=ro()?'Viewed 1d ago':'Viewed by you 1d ago';"),
 ('${btn(\'Shortcuts\',\'secondary\',\'data-act="shortcuts"\',\'kbd\')}</div>',
  '${ro()?\'\':btn(\'Shortcuts\',\'secondary\',\'data-act="shortcuts"\',\'kbd\')}</div>'),
 ("const showTable=!['error','empty'].includes(st.qState);",
  'const showTable=true;'),
 ("'Course: '+COURSES[f.course[0]].title.split(':')[0].split(' ').slice(0,2).join(' ')",
  "('Course: '+COURSES[f.course[0]].title)"),
 ("${s.late?' · '+s.late:''} · Attempt ${s.attempt}",
  "${' · '+(s.late||'On time')} · Attempt ${s.attempt}"),
 ('let L=ALLSUBS.filter(s=>inTab(s,st.tab));',
  'let L=ALLSUBS.filter(s=>inTab(s,st.tab)||(st.keep&&st.keep.has(s.id)));'),
 ("s.lastText=d.decision==='accept'?'Accepted just now':'Changes requested just now';",
  "s.lastText='You reviewed just now';(st.keep=st.keep||new Set()).add(s.id);"),
 ('ACT.qtab=(el)=>{st.tab=el.dataset.v;st.page=1;',
  'ACT.qtab=(el)=>{st.tab=el.dataset.v;st.page=1;st.keep=null;'),
 ("/ ${e.id?'Edit event':'New event'}</span>",
  "/ ${e.id&&e.status==='published'?'Edit event':'New event'}</span>"),
 ("${ic('check',14,'green')}Saved just now</span>\n  ${btn('Save draft'",
  "${ic('check',14,'green')}${st.evDirty?'Saved just now':'Saved 2 min ago'}</span>\n  ${btn('Save draft'"),
 ("document.addEventListener('input',e=>{const t=e.target;if(t.dataset.ev&&st.evDraft){st.evDraft[t.dataset.ev]=t.value;",
  "document.addEventListener('input',e=>{const t=e.target;if(t.dataset.ev&&st.evDraft){st.evDirty=true;st.evDraft[t.dataset.ev]=t.value;"),
 ("${fld('Date',inp('start',e.start,{type:'date',icon:'cal'}),{req:true})}",
  "${fld('Date',evDateField(e.start),{req:true})}"),
 ("${repeatLabel(e)}${e.repeat==='weekly'&&e.ends==='after'?' · '+e.count+' sessions':''}</span>",
  "${e.repeat==='weekly'?(e.every>1?'Every '+e.every+' weeks':'Weekly'):repeatLabel(e)}${e.repeat==='weekly'&&e.ends==='after'?' · '+e.count+' sessions':''}</span>"),
 ('<button class="toggle ${e.reminders?\'on\':\'\'}" data-act="evtoggle" data-k="reminders" aria-label="Reminder emails"></button>',
  '<button class="link" data-act="notyet" data-msg="Reminder timing is not part of this prototype">Edit</button>'),
 ('fld(\'Description\',`<textarea class="textarea" data-ev="desc" placeholder="Agenda, what to prepare, who it is for">${esc(e.desc)}</textarea>`)',
  'fld(\'Description\',`<div class="rte"><div class="rte-bar">${[\'bold\',\'italic\',\'list\',\'link\'].map(i=>`<button type="button" class="iconbtn sm ghost" data-act="notyet" data-msg="Text formatting is not part of this prototype" aria-label="${i}">${ic(i,16)}</button>`).join(\'\')}</div><textarea class="textarea" data-ev="desc" placeholder="Agenda, what to prepare, who it is for">${esc(e.desc)}</textarea></div>`)'),
 ('else if(st.ptab===\'act\')body=`<div class="col gap12">${[[s.student,\'submitted \'+(s.attempt>1?\'version \'+s.attempt:\'the work\'),fmtDay(s.submitted)+\', \'+fmtTime(s.submitted)],...(s.attempt>1?[[\'Kateryna M.\',\'requested changes\',\'27 Sep, 10:15\']]:[]),[\'Learnly\',\'added it to the queue · review due \'+fmtDow(new Date(s.submitted.getTime()+48*36e5)),fmtDay(s.submitted)]].map(([w,t,when])=>`<div class="row gap12">${av(w,\'av24\')}<span class="s grow"><span class="med">${esc(w)}</span> ${esc(t)}</span><span class="c faded">${when}</span></div>`).join(\'\')}</div>`;',
  "else if(st.ptab==='act')body=actLog(s);"),
 ('<span class="kb">J</span> <span class="kb">K</span> next / previous',
  '<span class="kb">J</span> / <span class="kb">K</span> next / previous'),
 ('{const d=(isOverdue(b)?1:0)-(isOverdue(a)?1:0);if(d)return d;return a.submitted-b.submitted;}',
  '{const ov=x=>st.keep&&st.keep.has(x.id)?!!x.keepOver:isOverdue(x);const d=(ov(b)?1:0)-(ov(a)?1:0);if(d)return d;return a.submitted-b.submitted;}'),
 ("s.status=d.decision==='accept'?'accepted':'changes';s.reviewer=s.reviewer||'You';",
  "s.keepOver=isOverdue(s);s.status=d.decision==='accept'?'accepted':'changes';s.reviewer=s.reviewer||'You';"),
 # 1 spelling of the name, so Liam has 1 avatar colour everywhere (the colour comes from the name)
 ('"Liam O\'Connor",D(9,30,10,5)',
  "'Liam O’Connor',D(9,30,10,5)"),
 # every cut student name shows the full name on hover (the tooltip itself checks that the text is cut)
 ('<span class="s trunc tip" ${s.student.length>18?`data-tip="${esc(s.student)}"`:\'\'}>${esc(s.student)}</span>',
  '<span class="s trunc tip" data-tip="${esc(s.student)}">${esc(s.student)}</span>'),
]
for name in ['prototype.html', 'learnly-prototype.html']:
    p = ROOT / name
    s = p.read_text(encoding='utf-8')
    for old, new in R:
        if new in s: continue
        assert s.count(old) == 1, (name, old[:70], s.count(old))
        s = s.replace(old, new)
    p.write_text(s, encoding='utf-8')
    print(name, 'review hooks patched')
