/* ---------- Reports by question + report result “Who is falling behind?” ---------- */
const FB=[['Hanna Zhuk',1,15,2,'Poland','6.0'],['Taras Bondar',2,12,1,'Ukraine','6.5'],['Bogdan Lysenko',3,10,0,'Ukraine','7.0'],['Liam O’Connor',4,9,1,'Ireland','7.5'],['Tomas Varga',4,7,0,'Slovakia','8.0'],['Chloé Martin',4,6,1,'France','7.0'],['Mila Horak',5,5,0,'Czechia','8.5'],['Andrii Savchuk',5,4,1,'Ukraine','7.5'],['Noor Aziz',5,3,0,'Netherlands','8.0']]
 .map(([name,done,days,od,country,grade])=>({name,done,days,od,country,grade,email:name.split(' ')[0].toLowerCase().normalize('NFD').replace(/[^a-z]/g,'')+'.'+name.split(' ')[1][0].toLowerCase()+'@mail.com'}));
const FB_MEDIAN=7,FB_TOTAL=48;
const RCOLS=[['learner',[['name','Name',null],['email','Email',170],['country','Country',100]]],['progress',[['done','Lessons done',130],['behind','Behind by',96],['last','Last activity',116],['mod','Module they stopped in',160]]],['assignments',[['od','Overdue',112],['grade','Average grade',104]]]];
const RDEF={done:true,behind:true,last:true,od:true};
st.rep={behind:2,cols:{...RDEF},panel:true,all:false};
st.saved=[{name:'September cohort · falling behind',from:'Who is falling behind?',by:'You',when:'Today, 14:10',to:'admin/report/falling'},{name:'Review times · Q3',from:'How long do submissions wait for review?',by:'Ihor Petrenko',when:'30 Sep'},{name:'Event attendance',from:'Custom report',by:'Marta Koval',when:'28 Sep'}];
const fbMod=x=>{const ls=crsLessons('ux');return (ls[Math.min(x.done,ls.length-1)]||ls[0]).mod;};
function repData(){const k=st.rep.behind,mods=crsMods('ux');const rows=FB.filter(x=>FB_MEDIAN-x.done>=k).sort((a,b)=>a.done-b.done||b.days-a.days);
 const counts=mods.map((_,i)=>rows.filter(x=>fbMod(x)===i).length);const top=counts.indexOf(Math.max(...counts));const inTop=rows.filter(x=>fbMod(x)===top);
 const freq={};inTop.forEach(x=>{freq[x.done]=(freq[x.done]||0)+1;});const best=Object.entries(freq).sort((a,b)=>b[1]-a[1]||b[0]-a[0])[0];const after=best&&+best[0]>0?crsLessons('ux')[+best[0]-1]:null;
 return {rows,counts,top,inTop:inTop.length,after,mods};}
VIEWS['admin:reports']=()=>{const fb=FB.filter(x=>FB_MEDIAN-x.done>=2).length,od=ALLSUBS.filter(x=>live(x)&&isOverdue(x)).length;
 const Qs=[['users','Who is falling behind?','Learners 2 or more lessons behind their group, by course and module',`${fb} learners right now`,'','data-act="nav" data-to="admin/report/falling"'],['clock','How long do submissions wait for review?','Median wait and overdue submissions by reviewer and course',`${od} overdue`,od?'red':'','data-act="notyet" data-msg="Only “Who is falling behind?” is part of this prototype"'],['chart','Which courses do people finish?','Completion and drop-off point for every module','UX Research · 41%','','data-act="notyet" data-msg="Only “Who is falling behind?” is part of this prototype"'],['award','How are subscriptions doing?','New, renewed and cancelled subscriptions per month','+12 in September','','data-act="notyet" data-msg="Only “Who is falling behind?” is part of this prototype"']];
 return `<div class="page" style="max-width:none"><div class="row gap12"><div class="col gap4 grow"><h1 class="h1">Reports</h1><p class="m pencil" style="margin:0">Start from a question. Build a custom report only when none fits.</p></div>${btn('Custom report','secondary','data-act="notyet" data-msg="The column builder lives inside every answer – open “Who is falling behind?” and use Columns"')}</div>
  <section class="card" style="overflow:hidden"><div style="padding:16px 20px 8px"><h3 class="h3">Questions you can answer now</h3></div>
   ${Qs.map(([i,t,d,v,cls,act])=>`<div class="row gap16" style="padding:14px 20px;border-top:1px solid var(--rule);cursor:pointer" ${act}><span class="typeicon" style="background:var(--violet-wash);color:var(--ink-violet-deep)">${ic(i,18)}</span><span class="col gap2 grow" style="min-width:0"><span class="m semi">${t}</span><span class="s pencil">${d}</span></span><span class="s semi ${cls}" style="white-space:nowrap">${v}</span><span class="btn btn-secondary">Open</span></div>`).join('')}</section>
  <section class="card" style="overflow:hidden"><div style="padding:16px 20px 10px"><h3 class="h3">Saved reports</h3></div>
   <div class="tr head" style="border-top:1px solid var(--rule)"><div class="td grow" style="padding-left:20px" data-min="220"><span class="o faded">Name</span></div><div class="td" style="width:300px"><span class="o faded">Built from</span></div><div class="td" style="width:140px"><span class="o faded">Created by</span></div><div class="td" style="width:124px"><span class="o faded">Last run</span></div><div class="td" style="width:44px"></div></div>
   ${st.saved.map(r=>`<div class="tr" style="height:52px" ${r.to?`data-act="nav" data-to="${r.to}"`:'data-act="notyet" data-msg="Only “Who is falling behind?” is part of this prototype"'}><div class="td grow" style="padding-left:20px"><span class="m med trunc">${esc(r.name)}</span></div><div class="td" style="width:300px"><span class="s pencil trunc">${esc(r.from)}</span></div><div class="td" style="width:140px"><span class="s">${esc(r.by)}</span></div><div class="td" style="width:124px"><span class="s pencil">${esc(r.when)}</span></div><div class="td" style="width:44px"><span class="faded">${ic('more',16)}</span></div></div>`).join('')}</section></div>`;};
VIEWS['admin:report']=()=>{const R=repData(),k=st.rep.behind,n=R.rows.length,C=st.rep.cols;const max=Math.max(5,...R.counts);
 const cols=RCOLS.flatMap(g=>g[1]).filter(([key])=>key!=='name'&&C[key]);const ncols=1+cols.length;
 const shown=st.rep.all?R.rows:R.rows.slice(0,6);
 const val=(x,key)=>key==='email'?`<span class="s pencil trunc">${x.email}</span>`:key==='country'?`<span class="s">${x.country}</span>`:key==='done'?`<span style="width:52px;display:flex">${bar(Math.round(x.done/12*100))}</span><span class="s" style="white-space:nowrap">${x.done} of 12</span>`:key==='behind'?`<span class="s">${FB_MEDIAN-x.done} lessons</span>`:key==='last'?`<span class="s pencil">${x.days} days ago</span>`:key==='mod'?`<span class="s trunc">M${fbMod(x)+1} · ${R.mods[fbMod(x)]}</span>`:key==='od'?(x.od?`<span class="badge b-over"><i></i>${x.od} overdue</span>`:'<span class="s faded">None</span>'):`<span class="s">${x.grade}</span>`;
 return `<div class="edhead"><div class="col gap2 grow" style="min-width:0"><span class="c faded"><a class="crumb" href="#/admin/reports">Reports</a> / Answers</span><span class="h2 trunc">Who is falling behind?</span></div>
  ${btn('Export CSV','secondary','data-act="repexport"')}${btn('Save report','secondary','data-act="repsave"')}${btn(`Message ${n} learner${n===1?'':'s'}`,'primary','data-act="repmsg"')}</div>
 <div class="row" style="align-items:stretch;min-height:calc(100% - 69px)"><div class="col gap20 grow" style="padding:20px 32px 40px 40px;min-width:0">
  <div class="row gap8" style="flex-wrap:wrap"><button class="btn btn-secondary" data-act="notyet" data-msg="Only UX Research Fundamentals has learner data in this prototype">Course: UX Research Fundamentals${ic('down',14)}</button><button class="btn btn-secondary" data-act="notyet" data-msg="Only the September cohort has learner data in this prototype">Group: September cohort${ic('down',14)}</button><button class="btn btn-secondary" data-act="repbehind">Behind by: ${k}+ lessons${ic('down',14)}</button><span class="grow"></span><button class="btn ${st.rep.panel?'btn-secondary':'btn-secondary'}" style="${st.rep.panel?'border-color:var(--ink-violet);background:var(--violet-wash);color:var(--ink-violet-deep)':''}" data-act="repcols">${ic('columns',14)}Columns · ${ncols}</button></div>
  <div class="col gap4"><h2 class="h2">${n} of ${FB_TOTAL} learners are ${k} or more lessons behind their group.</h2><p class="m pencil" style="margin:0">${n?`${R.inTop} of them stopped in Module ${R.top+1} · ${R.mods[R.top]}${R.after?`, most often after “${esc(R.after.title)}”`:''}. `:''}The group median is ${FB_MEDIAN} of 12 lessons.</p></div>
  <section class="card pad24 col gap12"><h3 class="h3">Where they stopped</h3>
   ${R.mods.map((m,i)=>`<div class="chartrow"><span class="s pencil trunc">M${i+1} ${esc(m)}</span><span style="height:14px;position:relative">${R.counts[i]?`<span class="chartbar ${i===R.top?'top':''}" style="display:block;width:${R.counts[i]/max*100}%"></span>`:''}</span><span class="s semi ${i===R.top?'violet':''}">${R.counts[i]}</span></div>`).join('')}
   <div class="chartrow"><span></span><span class="row between c faded">${Array.from({length:max+1},(_,t)=>`<span>${t}</span>`).join('')}</span><span></span></div>
   <span class="c faded">Learners per module where they stopped · scale 0–${max}</span></section>
  <div class="tbl" style="overflow-x:auto"><div style="min-width:${148+cols.reduce((s,c)=>s+c[2],0)}px">
   <div class="tr head"><div class="td grow" style="min-width:148px"><span class="o faded">Learner</span></div>${cols.map(([key,l,w])=>`<div class="td" style="width:${w}px"><span class="o faded" style="white-space:nowrap">${l}</span></div>`).join('')}</div>
   ${shown.map(x=>`<div class="tr" style="height:54px;cursor:default"><div class="td grow" style="min-width:148px">${av(x.name,'av28')}<span class="m med trunc">${esc(x.name)}</span></div>${cols.map(([key,l,w])=>`<div class="td" style="width:${w}px">${val(x,key)}</div>`).join('')}</div>`).join('')||'<div class="empty"><span class="h3">Nobody is that far behind</span></div>'}
   <div class="tfoot"><span class="s pencil">${shown.length} of ${n} shown · sorted by lessons behind</span>${n>6?`<button class="link" data-act="repall">${st.rep.all?'Show fewer':`Show all ${n}`}</button>`:''}</div></div></div>
 </div>
 ${st.rep.panel?`<aside class="colpanel"><div class="row between"><h3 class="h3">Columns</h3><button class="faded" data-act="repcols" aria-label="Close columns">${ic('x',16)}</button></div><span class="s pencil">Changes show in the table right away.</span>
  ${RCOLS.map(([g,items])=>`<div class="col gap10"><span class="o faded">${g}</span>${items.map(([key,l])=>key==='name'?`<div class="row gap10 s" style="opacity:.6">${cbx(true,false,'')}${l}</div>`:`<button class="row gap10 s" style="text-align:left" data-act="repcol" data-k="${key}">${cbx(!!C[key],false,'')}${l}</button>`).join('')}</div>`).join('')}
  <button class="link" style="align-self:flex-start" data-act="represet">Reset to default</button></aside>`:''}
 </div>`;};
ACT.repcols=()=>{st.rep.panel=!st.rep.panel;render();};
ACT.repcol=(el)=>{const k=el.dataset.k;st.rep.cols[k]=!st.rep.cols[k];render();};
ACT.represet=()=>{st.rep.cols={...RDEF};render();};
ACT.repall=()=>{st.rep.all=!st.rep.all;render();};
ACT.repbehind=(el)=>openMenu(el,[2,3,4].map(v=>`<button class="mi" data-act="repsetb" data-v="${v}">${st.rep.behind===v?ic('check',14,'violet'):'<span style="width:14px"></span>'}${v}+ lessons</button>`).join(''),'repbehind',{w:200});
ACT.repsetb=(el)=>{st.rep.behind=+el.dataset.v;st.menu=null;render();};
ACT.repexport=()=>{const n=repData().rows.length;toast(`falling-behind.csv exported · ${n} rows, ${1+RCOLS.flatMap(g=>g[1]).filter(([k])=>k!=='name'&&st.rep.cols[k]).length} columns`);};
ACT.repsave=()=>{const k=st.rep.behind;const name=`September cohort · ${k}+ lessons behind`;if(!st.saved.some(r=>r.name===name))st.saved.unshift({name,from:'Who is falling behind?',by:'You',when:'Just now',to:'admin/report/falling'});toast(`Saved as “${name}”`,'Open Reports',()=>go('admin/reports'));};
ACT.repmsg=()=>{const n=repData().rows.length;st.dialog={html:`<div class="row between"><h2 class="h2">Message ${n} learners</h2><button class="faded" data-act="dialog-close" aria-label="Close">${ic('x',18)}</button></div>
 <p class="s pencil" style="margin:0">Each learner gets it as a personal message in Messages and by email.</p>
 <textarea class="textarea" style="min-height:120px">Hi! You are a few lessons behind the group in UX Research Fundamentals. Is something getting in the way? Reply here, or join the office hours on Tuesday – we can plan the next 2 weeks together.</textarea>
 <div class="row gap8" style="justify-content:flex-end">${btn('Cancel','secondary','data-act="dialog-close"')}${btn('Send to '+n+' learners','primary','data-act="repsend"')}</div>`};renderLayer();};
ACT.repsend=()=>{const n=repData().rows.length;st.dialog=null;renderLayer();toast(`Sent to ${n} learners · replies come to Messages`);};

/* ---------- Home with notifications ---------- */
st.notifOpen=false;st.notifRead=new Set();
/* The bell holds events since the last visit; standing to-dos (overdue, drafts) live on Home and the week list */
function notifs(){const today=[],earlier=[];
 if(ASSIGN.a1.subId)today.push({k:'anna',ic:'file',t:'Anna Kovalenko submitted “Interview recruiting plan”',s:'Just now · UX Research Fundamentals · Module 2',a:'Review now',act:`data-act="notifgo" data-k="anna" data-sub="${ASSIGN.a1.subId}"`});
 const so=ALLSUBS.find(x=>x.student==='Sofia Rossi'&&(x.status==='resub'||x.status==='needs'));if(so)today.push({k:'sofia',ic:'refresh',t:`Sofia Rossi resubmitted “${esc(so.task)}”`,s:'10:02 · UX Research Fundamentals · Module 1',a:'Review now',act:`data-act="notifgo" data-k="sofia" data-sub="${so.id}"`});
 today.push({k:'marta',ic:'msg',t:'Marta Koval: “I can’t take the 2 Product Analytics submissions: no access to that course.”',s:'10:05 · Messages',a:'Reply',act:'data-act="notifgo" data-k="marta" data-go="marta"'});
 earlier.push({k:'ihor',ic:'msg',t:'Ihor Petrenko: “I ran the review times report for Q3.”',s:'Yesterday · Messages',a:'Open chat',act:'data-act="notifgo" data-k="ihor" data-go="ihor"'});
 return {today,earlier};}
function notifPanel(N){const item=x=>`<div class="nitem ${st.notifRead.has(x.k)?'':'unread'}"><span class="typeicon sm" style="${x.red?'background:var(--red-wash);color:var(--red-pen)':'background:var(--sheet);border:1px solid var(--rule)'}">${ic(x.ic,16)}</span><span class="col gap2 grow" style="min-width:0"><span class="s med">${x.t}</span><span class="c faded">${x.s}</span><button class="link" style="align-self:flex-start;margin-top:4px" ${x.act}>${x.a}</button></span></div>`;
 return `<div class="dropdown"><div class="row between" style="padding:14px 16px"><span class="h3">Notifications</span><button class="link" data-act="notifall">Mark all as read</button></div>
  ${N.today.length?`<div class="o faded" style="padding:2px 16px 8px">Since your last visit</div>${N.today.map(item).join('')}`:'<div class="s pencil" style="padding:2px 16px 12px">Nothing new since your last visit.</div>'}${N.earlier.length?`<div class="o faded" style="padding:12px 16px 8px;border-top:1px solid var(--rule)">Earlier</div>${N.earlier.map(item).join('')}`:''}
  <div style="padding:12px 16px;border-top:1px solid var(--rule)"><button class="link" style="color:var(--pencil)" data-act="notyet" data-msg="Notification settings are not part of this prototype">Notification settings</button></div></div>`;}
ACT.notif=()=>{st.notifOpen=!st.notifOpen;render();};
ACT.notifall=()=>{const N=route().role==='admin'?notifs():learnerNotifs();N.today.concat(N.earlier).forEach(x=>st.notifRead.add(x.k));render();};
ACT.notifgo=(el)=>{st.notifRead.add(el.dataset.k);st.notifOpen=false;const g=el.dataset.go,sub=el.dataset.sub;
 if(el.dataset.to){go(el.dataset.to);return;}
 if(sub){openPanel(sub);return;}if(g==='overdue'){st.tab='overdue';st.page=1;st.panel=null;go('admin/queue');return;}
 if(g==='marta'||g==='ihor'){st.adminThread=g;const t=threads('admin')[g];if(t)t.unread=false;go('admin/messages');return;}if(g==='e1'){go('admin/event/e1');return;}render();};
/* Learner bell: what happened since the last visit (feedback, replies, recordings). Deadlines and today's class stay in the week list. */
['ihor','l-maria','l-rec'].forEach(k=>st.notifRead.add(k));
function learnerNotifs(){const a1=ASSIGN.a1,today=[],earlier=[];
 if(a1.feedback){const k='l-fb-'+a1.status;today.push({k,ic:'msg',t:a1.status==='accepted'?`Your “${esc(a1.title)}” was accepted`:`Kateryna M. left feedback on “${esc(a1.title)}”`,s:'Just now · '+COURSES.ux.title,a:'Read feedback',act:`data-act="notifgo" data-k="${k}" data-to="learner/assignment/a1"`});}
 earlier.push({k:'l-maria',ic:'msg',t:'Maria Ivanova: “Yes, within an hour after the class.”',s:'12:31 · Messages',a:'Open chat',act:'data-act="notifgo" data-k="l-maria" data-to="learner/messages"'});
 earlier.push({k:'l-rec',ic:'video',t:'The recording of “Live class: Writing an interview guide” is ready',s:'Yesterday · '+COURSES.ux.title,a:'Open the course',act:'data-act="notifgo" data-k="l-rec" data-to="learner/course/ux"'});
 return {today,earlier};}
/* ---------- App bar on every screen: back / forward, search, notifications ---------- */
function appbar(r){const admin=r.role==='admin',N=admin?notifs():learnerNotifs();
 const unread=N.today.concat(N.earlier).filter(x=>!st.notifRead.has(x.k)).length;
 const hb=(act,icon,label,on)=>`<button class="iconbtn sm ghost tip" data-act="${act}" aria-label="${label}" data-tip="${label}"${on?'':' disabled'}>${ic(icon,18)}</button>`;
 return `<header class="appbar">${navMode()==='none'?`<button class="iconbtn sm ghost" data-act="navtoggle" aria-label="Open menu">${ic('panel',18)}</button>`:''}<div class="navhist">${hb('navback','navback','Back',NAVH.i>0)}${hb('navfwd','navfwd','Forward',NAVH.i<NAVH.list.length-1)}</div><span class="grow"></span>
  <div class="searchwrap"><label class="search">${ic('search',16)}<input data-search autocomplete="off" placeholder="${admin?'Search courses, learners, submissions':'Search courses, lessons, tasks'}"><span class="kbd">⌘K</span></label><div class="sbox" role="listbox" aria-label="Search results"></div></div>
  <div style="position:relative"><button class="iconbtn" data-act="notif" aria-label="Notifications${unread?`, ${unread} unread`:''}">${ic('bell',18)}${unread?'<span class="dot"></span>':''}</button>${st.notifOpen?notifPanel(N):''}</div></header>`;}
/* ---------- Product assessment 02.10: teacher side ---------- */
/* Past the 48 h promise a submission is overdue; the first day shows amber, red only after 72 h, so red keeps meaning "act now" */
const reviewLate=s=>isOverdue(s)&&hoursSince(s.submitted)>72;
/* Reminders go only to students who owe a new version, at most 1 a week, with the teacher's own line; or give them another week */
st.reminded={};st.reminderLog=[];
const needsNewVersion=s=>s&&live(s)&&s.status==='changes'&&(!s.assign||(ASSIGN[s.assign]?.status==='changes'&&ASSIGN[s.assign].subId===s.id));
const reminderKey=s=>s.student.trim().toLowerCase();
const reminderRecent=s=>st.reminded[reminderKey(s)]!==undefined&&NOW-st.reminded[reminderKey(s)]<7*24*36e5;
const reminderStudents=items=>[...new Map(items.map(s=>[reminderKey(s),s])).values()];
function resubmitDate(s){return s.resubmitAt||D(10,5,23,59);}
function resubmitBy(s){return fmtDow(resubmitDate(s));}
ACT.bulkremind=()=>{const sel=[...st.sel].map(id=>ALLSUBS.find(x=>x.id===id)).filter(x=>x&&live(x)),owe=sel.filter(needsNewVersion),people=reminderStudents(owe),recent=people.filter(reminderRecent),to=people.filter(x=>!reminderRecent(x)),waiting=sel.length-owe.length;
 if(!to.length){st.dialog={owe:owe.map(x=>x.id),html:`<h2 class="h2">Nobody to remind</h2><p class="m pencil" style="margin:0">${people.length?`The ${people.length===1?'student who owes':people.length+' students who owe'} a new version got a reminder in the last 7 days.`:`Reminders go only to students who owe a new version (Changes requested). None of the selected submissions needs a new version.`}</p><div class="row gap8" style="justify-content:flex-end;flex-wrap:wrap">${owe.length?btn('Give them another week','secondary','data-act="doextend"'):''}${btn('OK','primary','data-act="dialog-close"')}</div>`};renderLayer();return;}
 const names=to.map(x=>esc(x.student)),list=names.slice(0,5).join(', ')+(names.length>5?` and ${names.length-5} more`:'');
 st.dialog={to:to.map(x=>x.id),owe:owe.map(x=>x.id),html:`<h2 class="h2">Remind ${to.length===1?'1 student':to.length+' students'}?</h2>
  <p class="m pencil" style="margin:0">${list} ${to.length===1?'gets':'get'} an email: “Your reviewer is waiting for your next version”, with a link to the feedback.</p>
  <div class="field"><span class="label">Add a line from you <span class="faded" style="font-weight:400">· optional</span></span><textarea class="textarea" data-reminder-note placeholder="For example: the examples from Monday’s class will help with the fixes."></textarea></div>
  <p class="c faded" style="margin:0">${waiting?`Skipped: ${waiting} submission${waiting===1?' does':'s do'} not need a new version. `:''}${recent.length?`${recent.length} reminded in the last 7 days. `:''}Each student gets at most 1 reminder a week.</p>
  <div class="row gap8" style="justify-content:flex-end;flex-wrap:wrap">${btn('Cancel','secondary','data-act="dialog-close"')}${btn('Give them another week','secondary','data-act="doextend"')}${btn(`Send ${to.length===1?'1 reminder':to.length+' reminders'}`,'primary','data-act="doremind"')}</div>`};renderLayer();};
ACT.doremind=()=>{const ids=(st.dialog&&st.dialog.to)||[],to=reminderStudents(ids.map(id=>ALLSUBS.find(x=>x.id===id)).filter(s=>needsNewVersion(s)&&!reminderRecent(s))),line=(document.querySelector('[data-reminder-note]')?.value||'').trim();
 to.forEach(s=>{st.reminded[reminderKey(s)]=+NOW;st.reminderLog.push({student:s.student,at:new Date(NOW),line});});st.dialog=null;st.sel.clear();render();toast(`Reminders sent to ${to.length===1?'1 student':to.length+' students'}`);};
/* Extend the selected changed submissions; the linked learner assignment uses the same deadline. */
ACT.doextend=()=>{const ids=(st.dialog&&st.dialog.owe)||[],items=ids.map(id=>ALLSUBS.find(x=>x.id===id)).filter(needsNewVersion);
 items.forEach(s=>{const due=new Date(resubmitDate(s));due.setDate(due.getDate()+7);s.resubmitAt=due;s.lastText='Deadline extended to '+fmtDay(due);if(s.assign&&ASSIGN[s.assign])ASSIGN[s.assign].resubmitAt=new Date(due);});
 const dates=[...new Set(items.map(resubmitBy))],people=reminderStudents(items).length;st.dialog=null;st.sel.clear();render();toast(items.length?`Deadline extended for ${people===1?'1 student':people+' students'}${dates.length===1?': '+dates[0]:': each deadline moved by 7 days'}. They get an email.`:'No deadlines changed.');};
/* Search: matches prototype data by title, opens the screen; for teachers a student opens the queue filtered to that student */
function searchIndex(role){const out=[];
 if(role==='admin'){
  for(const [c,d] of Object.entries(CED))out.push({g:'Courses',ic:'book',t:d.title,s:(d.status==='draft'?'Draft course':'Course')+' · '+crsLessons(c).length+' lessons',to:'admin/course/'+c});
  for(const c of Object.keys(CED))for(const l of crsLessons(c))out.push({g:'Lessons',ic:'video',t:l.title,s:CED[c].title+' · Module '+(l.mod+1),to:'admin/lesson/'+l.id});
  for(const a of Object.values(ACTS))if(!a.deleted)out.push({g:'Activities',ic:ACT_ICON[a.type]||'file',t:a.title,s:CED[a.course]?CED[a.course].title:'',to:'admin/activity/'+a.id});
  for(const n of [...new Set(ALLSUBS.map(x=>x.student))])out.push({g:'Students',ic:'user',t:n,s:'Their submissions in the review queue',student:n});
  for(const e of EVENTS)out.push({g:'Events',ic:'cal',t:e.title,s:e.status==='draft'?'Draft event':'Event',to:'admin/event/'+e.id});
 }else{
  for(const [c,C] of Object.entries(COURSES))out.push({g:'Courses',ic:'book',t:C.title,s:C.completed?'Finished · certificate':'Course',to:'learner/course/'+c});
  for(const c of Object.keys(COURSES))for(const l of courseLessons(c))out.push({g:'Lessons',ic:'video',t:l.title,s:COURSES[c].title+' · Module '+(l.mod+1),to:'learner/lesson/'+l.id});
  for(const a of Object.values(ASSIGN))out.push({g:'Assignments',ic:'file',t:a.title,s:COURSES[a.course].title,to:'learner/assignment/'+a.id});
  out.push({g:'Assignments',ic:'quiz',t:QUIZ.title,s:COURSES[QUIZ.course].title+' · due today',to:'learner/tasks'});}
 return out;}
function searchPanel(q,role){const qq=q.trim().toLowerCase();
 const hits=searchIndex(role).filter(x=>x.t.toLowerCase().includes(qq)||(x.s||'').toLowerCase().includes(qq));
 hits.sort((a,b)=>b.t.toLowerCase().startsWith(qq)-a.t.toLowerCase().startsWith(qq));
 /* keep each group in 1 block: groups come in the order of their best match, the (stable) sort keeps the ranking inside a group */
 const gs=[];for(const x of hits)if(!gs.includes(x.g))gs.push(x.g);hits.sort((a,b)=>gs.indexOf(a.g)-gs.indexOf(b.g));
 const per={},R=hits.filter(x=>(per[x.g]=(per[x.g]||0)+1)<=3).slice(0,9);
 if(!R.length)return `<div class="s pencil" style="padding:14px 16px">Nothing found for “${esc(q.trim())}”. Try a course, lesson or ${role==='admin'?'student':'assignment'} name.</div>`;
 let g='',h='';R.forEach((x,i)=>{if(x.g!==g){g=x.g;h+=`<div class="o faded" style="padding:10px 16px 4px">${g}</div>`;}
  h+=`<button class="sitem${i===0?' on':''}" role="option" data-act="searchgo" ${x.to?`data-to="${x.to}"`:''} ${x.student?`data-student="${esc(x.student)}"`:''}>${ic(x.ic,16,'faded')}<span class="col gap2 grow" style="min-width:0;text-align:left"><span class="s med trunc">${esc(x.t)}</span><span class="c faded trunc">${esc(x.s||'')}</span></span></button>`;});
 return h;}
ACT.searchgo=(el)=>{const w=document.querySelector('.searchwrap');if(w)w.classList.remove('open');
 if(el.dataset.student){st.filters.student=el.dataset.student;st.tab='all';st.page=1;st.panel=null;go('admin/queue');return;}
 go(el.dataset.to);};
document.addEventListener('input',e=>{const i=e.target;if(!i.matches||!i.matches('input[data-search]'))return;const w=i.closest('.searchwrap'),b=w.querySelector('.sbox');
 if(!i.value.trim()){w.classList.remove('open');b.innerHTML='';return;}b.innerHTML=searchPanel(i.value,route().role);w.classList.add('open');});
window.addEventListener('keydown',e=>{const i=e.target;if(!i||!i.matches||!i.matches('input[data-search]'))return;const w=i.closest('.searchwrap');
 if(e.key==='Escape'){e.stopPropagation();i.value='';w.classList.remove('open');i.blur();}
 else if(e.key==='Enter'){const f=w.querySelector('.sitem.on')||w.querySelector('.sitem');if(f){e.preventDefault();e.stopPropagation();f.click();}}
 else if(e.key==='ArrowDown'||e.key==='ArrowUp'){const L=[...w.querySelectorAll('.sitem')];if(!L.length)return;e.preventDefault();e.stopPropagation();let k=L.findIndex(x=>x.classList.contains('on'));L.forEach(x=>x.classList.remove('on'));k=(k+(e.key==='ArrowDown'?1:-1)+L.length)%L.length;L[k].classList.add('on');L[k].scrollIntoView({block:'nearest'});}},true);
document.addEventListener('click',e=>{const w=document.querySelector('.searchwrap.open');if(w&&!e.target.closest('.searchwrap'))w.classList.remove('open');});
/* ⌘K / Ctrl+K focuses the search in the app bar on any screen (before the queue's J / K keys see it) */
window.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){const i=document.querySelector('.appbar input[data-search]');if(i){e.preventDefault();e.stopPropagation();i.focus();}}},true);
document.addEventListener('click',e=>{if(st.notifOpen&&!e.target.closest('.dropdown')&&!e.target.closest('[data-act="notif"]')){st.notifOpen=false;render();}});
VIEWS['admin:home']=()=>{
 const od=ALLSUBS.filter(x=>live(x)&&isOverdue(x));const hour=st.time==='18:52'?'evening':'afternoon';
 const tone=t=>t==='amber'?'background:var(--highlighter-wash);color:var(--highlighter)':t?'background:var(--red-wash);color:var(--red-pen)':'background:var(--violet-wash);color:var(--ink-violet-deep)';
 const tile=(i,red)=>`<span class="typeicon" style="${tone(red)}">${ic(i,18)}</span>`;
 const item=(i,red,title,sub,extra,action)=>`<div class="row gap12" style="padding:16px 20px;border-top:1px solid var(--rule);${red==='amber'?'background:var(--highlighter-wash)':red?'background:var(--red-wash)':''}">${tile(i,red)}<span class="col gap2 grow" style="min-width:0"><span class="m med">${title}</span><span class="s pencil trunc">${sub}</span></span>${extra||''}${action}</div>`;
 const items=[];
 /* amber once past the 48 h promise, red when someone has waited more than 72 h */
 const late=od.filter(reviewLate);
 if(od.length)items.push(item('inbox',late.length?true:'amber',`${od.length} submission${od.length>1?'s':''} waiting more than 48 h`,esc(od.map(x=>x.student).join(', ')),late.length?`<span class="badge b-over"><i></i>${late.length} over 72 h</span>`:'',btn('Open review queue','primary btn-sm','data-act="msgq" data-tab="overdue"')));
 if(!st.marta)items.push(item('lock',false,'Marta Koval has no access to Product Analytics for Designers','2 submissions could not be assigned to her this morning','',btn('Give access','secondary btn-sm','data-act="homeaccess"')));
 const e1=EVENTS.find(e=>e.id==='e1');if(e1&&e1.status==='draft')items.push(item('cal',false,`Event draft: ${esc(e1.title)}`,'Starts Wed, 14 Oct · 8 weekly sessions · not published yet','',btn('Open draft','secondary btn-sm','data-act="nav" data-to="admin/event/e1"')));
 if(CED.sd.status==='draft')items.push(item('book',false,'Course draft: Service Design Basics','2 of 6 modules have lessons · no price yet','',btn('Continue','secondary btn-sm','data-act="cedopen" data-c="sd" data-tab="curriculum"')));
 const needs=ALLSUBS.filter(x=>live(x)&&(x.status==='needs'||x.status==='resub'));const load=[['You','You'],['Marta K.','Marta Koval'],['Ihor P.','Ihor Petrenko'],[null,'Unassigned']].map(([k,l])=>[l,needs.filter(x=>(x.reviewer||null)===k).length]);const lmax=Math.max(...load.map(x=>x[1]),1);
 /* as in Figma (06.10): the time leads each Today row; course rows read bar, then 1 line of numbers */
 const todayRow=(time,i,title,sub,action)=>`<div class="row gap14 today-row" style="padding:12px 20px;border-top:1px solid var(--rule)"><span class="s med pencil" style="width:92px;flex:none">${time}</span><span class="typeicon">${ic(i,18)}</span><span class="col gap2 grow" style="min-width:0"><span class="m med">${title}</span><span class="s pencil trunc">${sub}</span></span>${action}</div>`;
 const cs=['ux','fig','pa'].map((c,i)=>`<div class="row gap12" style="padding:12px 16px 12px 20px;border-top:${i?'0':'1px solid var(--rule)'};cursor:pointer" data-act="cedopen" data-c="${c}">${cover(c,40,40)}<span class="col gap6 grow" style="min-width:0"><span class="m med trunc">${COURSES[c].title}</span>${bar(CED[c].completion)}<span class="c row gap6" style="font-weight:500"><span style="color:var(--ink);white-space:nowrap;flex:none">${CED[c].completion}% completion</span><span class="faded trunc">· ${CED[c].learners} learners · ${needs.filter(x=>x.course===c).length} to review</span></span></span>${ic('chev',16,'faded')}</div>`).join('');
 return `<div class="page" style="max-width:none">
  <div class="col gap4"><h1 class="h1">Good ${hour}, Kateryna</h1><p class="m pencil" style="margin:0">${od.length?`${od.length} submission${od.length>1?'s are':' is'} overdue for review and you`:'Nothing is overdue for review. You'} host a live class at 19:00.</p></div>
  <div style="display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px;align-items:start">
   <div class="col gap24">
    <div class="card" style="overflow:hidden"><div class="row gap8" style="padding:16px 20px"><h2 class="h3 grow">Needs your attention</h2><span class="c faded">${plural(items.length,'item')}</span></div>${items.join('')}</div>
    <div class="card" style="overflow:hidden"><div class="row gap8" style="padding:16px 20px"><h2 class="h3 grow">Today</h2><span class="c faded">Thu, 1 Oct</span></div>
     ${todayRow('19:00 – 20:00','video','Live class: Running your first interview','UX Research Fundamentals · host Maria Ivanova · 31 registered',btn('Open event','secondary btn-sm','data-act="nav" data-to="admin/event/e2"'))}
     ${todayRow('Due 23:59','quiz','Quiz: Funnel metrics','Product Analytics for Designers · 18 of 27 learners submitted',btn('Open quiz','secondary btn-sm','data-act="nav" data-to="admin/activity/pafunnel"'))}
    </div>
   </div>
   <div class="col gap24"><div class="card" style="overflow:hidden"><div class="row gap8" style="padding:16px 20px"><h2 class="h3 grow">Courses</h2><span class="c faded">${['ux','fig','pa','sd'].filter(c=>CED[c].status==='published').length} published</span></div>${cs}<div class="cardfoot"><button class="link" data-act="nav" data-to="admin/courses">All courses ${ic('arrow',14)}</button></div></div>
    <div class="card pad col gap12"><div class="row between"><h2 class="h3">Review load</h2><span class="c faded">Needs review · ${needs.length}</span></div>${load.map(([l,v])=>`<div class="row gap10">${l==='Unassigned'?`<span class="avatar av24" style="background:var(--margin)"></span>`:(l==='You'?av('Kateryna M.','av24','var(--violet-wash)'):av(l,'av24','var(--margin)'))}<span class="s" style="width:110px">${l}</span>${bar(Math.round(v/lmax*100),l==='Unassigned'?'var(--highlighter)':'')}<span class="s semi" style="width:20px;text-align:right">${v}</span></div>`).join('')}</div></div>
  </div></div>`;};
