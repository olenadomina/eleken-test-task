/* Screens that were only in Figma (page “Product · all screens”) until 01.10:
   Courses list with the new columns, course editor (Overview, Curriculum, Pricing & access),
   lesson editor with the activity picker, Quiz / True-False / Fill the gaps / Assignment editors,
   report result with the column panel, notifications on Home.
   Edits save straight into the data (“Saved just now”), like autosave in the real product. */
const plural=(n,one,many)=>`${n} ${n===1?one:(many||one+'s')}`;

Object.assign(P,{
 grip:'<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
 columns:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/>',
 text:'<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>',
 link2:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
 panel:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
 updown:'<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
 flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
 badge:'<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>',
 gaps:'<path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"/><path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M9 7v10"/>',
 tf:'<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
 navback:'<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
 navfwd:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
 target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
 clip:'<path d="M13.234 20.252 21 12.3"/><path d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"/>'
});

/* ---------- data ---------- */
[0,0,1,2,2,3,3,4,4,4,4].forEach((m,i)=>{const l=LESSONS.find(x=>x.id==='pa'+(i+1));if(l)l.mod=m;});
['ux10','ux11'].forEach(id=>{const l=LESSONS.find(x=>x.id===id);if(l)l.noVideo=true;});
const SD_MODS=['Basics','Research','Journeys','Blueprints','Prototyping','Final project'];
const SD_LESSONS=[['sd1',0,'What service design is',14],['sd2',0,'Front stage and back stage',17],['sd3',1,'Shadowing a service',19],['sd4',1,'Interviewing staff',16]].map(([id,mod,title,min])=>({id,course:'sd',mod,title,min,done:false,watched:0}));
const TEACHERS=['Maria Ivanova','Ihor Petrenko','Marta Koval'];
const CED={
 ux:{title:'UX Research Fundamentals',short:'Plan, run and synthesize user interviews in 6 weeks.',desc:'For designers and PMs who talk to users but never had a method. You will write research goals, recruit 5 people, run interviews and turn notes into decisions your team trusts.',category:'UX Research',level:'Beginner',language:'English',avail:'Worldwide',cover:'ux-research-cover.png',coverMeta:'1600 × 900 · 420 KB',trailer:'intro-ux-research.mp4',trailerMeta:'1:42 · 18 MB',status:'published',learners:48,completion:41,model:'one',amount:'125.00',currency:'USD',access:'12 months',who:'link',opens:'Mon, 7 Sep 2026',closes:'Sun, 18 Oct 2026',limit:false,seats:'40',cert:true,updated:'30 Sep',teacher:'Maria Ivanova',stats:[[1,47],[5,42],[12,30],[22,8],[6,2],[2,0]]},
 fig:{title:'Figma: Advanced Prototyping',short:'Build prototypes with variables and logic, then test them with people.',desc:'For product designers who use Figma every day. You will build a prototype with variables and conditional logic, test it with 5 people and hand it off to developers.',category:'Prototyping',level:'Advanced',language:'English',avail:'Worldwide',cover:'figma-prototyping-cover.png',coverMeta:'1600 × 900 · 380 KB',trailer:null,trailerMeta:'',status:'published',learners:31,completion:58,model:'sub',amount:'15.00',currency:'USD',access:'While subscribed',who:'link',opens:'Mon, 31 Aug 2026',closes:'Sun, 25 Oct 2026',limit:false,seats:'',cert:true,updated:'28 Sep',teacher:'Marta Koval',stats:[[0,31],[1,30],[2,28],[6,22],[9,13],[13,0]]},
 pa:{title:'Product Analytics for Designers',short:'Read dashboards, find drop-offs and plan experiments.',desc:'For designers who get asked “what does the data say?”. You will pick a north star metric, read funnels, find where people leave and plan an experiment.',category:'Analytics',level:'Intermediate',language:'English',avail:'Worldwide',cover:'analytics-cover.png',coverMeta:'1600 × 900 · 350 KB',trailer:'intro-analytics.mp4',trailerMeta:'2:05 · 21 MB',status:'published',learners:27,completion:22,model:'free',amount:'',currency:'USD',access:'Forever',who:'link',opens:'Mon, 14 Sep 2026',closes:'Sun, 1 Nov 2026',limit:false,seats:'',cert:false,updated:'1 Oct',teacher:'Ihor Petrenko',stats:[[4,23],[6,17],[8,9],[7,2],[2,0]]},
 sd:{title:'Service Design Basics',short:'',desc:'',category:'Service design',level:'Beginner',language:'English',avail:'Worldwide',cover:null,coverMeta:'',trailer:null,trailerMeta:'',status:'draft',learners:0,completion:null,model:'one',amount:'',currency:'USD',access:'12 months',who:'link',opens:'',closes:'',limit:false,seats:'',cert:true,updated:'Today',teacher:'Maria Ivanova',stats:[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]}
};
const crsLessons=c=>c==='sd'?SD_LESSONS:LESSONS.filter(l=>l.course===c);
const crsMods=c=>c==='sd'?SD_MODS:COURSES[c].modules;
const crsColor=c=>c==='sd'?'#8C6A2E':COURSES[c].color;
const lessonById=id=>LESSONS.find(l=>l.id===id)||SD_LESSONS.find(l=>l.id===id);
const lessonState=l=>(l.course==='sd'||l.id==='ux12'||l.isNew)?'draft':l.noVideo?'novideo':'published';
const hm=m=>{const h=Math.floor(m/60),r=Math.round(m%60/10)*10;return (h?h+' h':'')+(r?(h?' ':'')+r+' min':'');};

/* activities: quiz / tf (true-false) / gaps / assignment */
const Q=(text,answers,okIdx,expl,type)=>({text,type:type||'one',answers:answers.map((t,i)=>({t,ok:[].concat(okIdx).includes(i)})),expl:expl||''});
const GS=(text,gap,acc)=>({text,gap,acc});
const ACTS={
 uxgaps:{type:'gaps',course:'ux',lesson:'ux1',title:'Fill the gaps: Name the research method',status:'published',updated:'25 Sep',sel:1,sentences:[
  GS('To learn why people behave a certain way, run user interviews.','interviews',['interviews','interview']),
  GS('To measure how many people finish a task, run a usability test with 5 participants.','usability test',['usability test','usability testing']),
  GS('A diary study shows how habits change over 2–3 weeks.','diary study',['diary study','diary']),
  GS('Use card sorting to see how people group menu items.','card sorting',['card sorting','card sort'])]},
 uxtf:{type:'tf',course:'ux',lesson:'ux4',alsoIn:['fig8'],title:'True/False: Interview do and don’t',status:'published',updated:'28 Sep',sel:1,showAll:false,settings:{pass:'6 of 8',shuffle:true},statements:[
  {text:'Start with easy questions about the person’s role.',ans:true,expl:'Warm-up questions help people relax before the main topic.'},
  {text:'It’s fine to ask “Don’t you think the onboarding is too long?”',ans:false,expl:'It is a leading question: it suggests the answer you want.'},
  {text:'Ask about the last time they did the task, not what they usually do.',ans:true,expl:'Concrete stories are more reliable than general habits.'},
  {text:'Explain your design before asking for feedback.',ans:false,expl:'Explaining first tells people how to see it. Let them react first.'},
  {text:'Silence is fine: give people time to think before the next question.',ans:true,expl:'Pauses often bring the most honest answers.'},
  {text:'You can record the session without telling the participant.',ans:false,expl:'Always ask for consent before you record.'},
  {text:'Ask 1 question at a time.',ans:true,expl:'Double questions get half answers.'},
  {text:'If people like your idea, the interview went well.',ans:false,expl:'Interviews are for learning how people behave, not for approval.'}]},
 uxscript:{type:'assignment',course:'ux',lesson:'ux4',title:'Assignment: Interview script draft',name:'Interview script draft',status:'published',updated:'20 Sep',instr:'1. Opening: introduce yourself and the goal in 2–3 sentences.\n2. 8–12 open questions grouped by topic.\n3. Closing question and thank-you.',materials:[{name:'interview-guide-template.docx',size:'52 KB'}],submit:'file',due:'Sun, 27 Sep 2026',dueShort:'Sun, 27 Sep',time:'23:59 · learner’s time zone',late:true,grade:'Out of 10',reviewers:'Course reviewers · 3',within:'48 hours',stats:{submitted:31,of:45,ontime:27,late:4,status:'1 waiting for review · overdue',tone:'b-over'}},
 uxplan:{type:'assignment',course:'ux',lesson:'ux5',title:'Assignment: Interview recruiting plan',name:'Interview recruiting plan',status:'published',updated:'29 Sep',instr:'1. Who you will recruit: 3–5 participants and why they fit.\n2. Where you will find them + 3 screener questions.\n3. Schedule for the sessions and the thank-you you will offer.',materials:[{name:'recruiting-plan-template.docx',size:'48 KB'},{name:'screener-examples.pdf',size:'120 KB'}],submit:'file',due:'Tue, 29 Sep 2026',dueShort:'Tue, 29 Sep',time:'23:59 · learner’s time zone',late:true,grade:'Out of 10',reviewers:'Course reviewers · 3',within:'48 hours',stats:{submitted:24,of:31,ontime:21,late:3,status:'All 24 reviewed',tone:'b-neutral'}},
 uxtest:{type:'quiz',course:'ux',lesson:'ux8',title:'Quiz: Usability testing basics',status:'published',updated:'22 Sep',sel:0,settings:{pass:'70%',attempts:'2',show:'After the due date',shuffle:true},questions:[
  Q('How many people find most usability problems in a small test?',['About 5','1','20','100'],0,'5 people usually show the main problems; test again after you fix them.'),
  Q('What should you do when a participant gets stuck?',['Ask what they expected to happen','Show them the right button','Skip the task without a word','Explain the design'],0,'Their expectation tells you why the design failed.'),
  Q('What do you write down during a session?',['What people do and say, with the time','Only your own opinion','Only the final score','Nothing, you will remember it'],0,'Notes with time stamps make the recording easy to search.')]},
 uxfinal:{type:'assignment',course:'ux',lesson:'ux12',title:'Assignment: Final research report',name:'Final research report',status:'draft',updated:'Today',instr:'1. Your research question and why it matters.\n2. What you did: methods, people, dates.\n3. 3–5 findings with quotes and what the team should do next.',materials:[],submit:'file',due:'Sun, 8 Nov 2026',dueShort:'Sun, 8 Nov',time:'23:59 · learner’s time zone',late:false,grade:'Out of 10',reviewers:'Course reviewers · 3',within:'48 hours',stats:null},
 pafunnel:{type:'quiz',course:'pa',lesson:'pa7',title:'Quiz: Funnel metrics',status:'published',updated:'30 Sep',sel:2,settings:{pass:'70%',attempts:'2',show:'After the due date',shuffle:true},questions:[
  Q('What does a funnel show?',['How many people complete each step of a flow','How long people stay in the app','Which pages people visit most','How many people sign up each day'],0,'A funnel counts people at each step, so you see where they stop.'),
  Q('Which step loses most users in the example?',['Visit → Start signup: 58% leave','Start signup → Verify email: 50% leave','Verify email → Finish profile: 14% leave','Every step loses the same share'],0,'1 000 visits → 420 starts is the biggest drop.'),
  Q('Which metric shows where most users leave the funnel?',['Conversion rate between steps','Daily active users','Average session length','Net promoter score'],0,'Step-to-step conversion shows the exact step where people drop off. Daily users and session length don’t tell you where they leave.'),
  Q('What is a step-to-step conversion?',['The share of people who reach a step and finish the next one','The share of all visitors who finish the funnel','The time between 2 steps','The number of steps in a funnel'],0,'It compares each step with the one before it, not with the start.'),
  Q('Which events start the signup funnel?',['Clicked “Sign up” on the landing page','Opened the signup form from an invite','Logged in','Opened the pricing page','Changed the password'],[0,1],'Both are the first step of signing up; the others happen to people who already have an account or are not signing up.','many'),
  Q('Why compare funnels by cohort?',['To see if a change helped people who joined after it','To make the funnel look better','Because cohorts have fewer steps','To count all users'],0,'Cohorts separate people who saw the old flow from people who saw the new one.'),
  Q('Which chart fits a 5-step funnel?',['Horizontal bars in step order','Pie chart','Line chart over time','Scatter plot'],[],''),
  Q('What does a 0% step usually mean?',['The event is not tracked or is broken','Nobody likes the feature','The funnel is perfect','The step is optional'],0,'Check the tracking before you redesign the step.'),
  Q('When should you split a funnel by device?',['When the flow looks or works differently on mobile and desktop','Always, for every funnel','Only for paid users','Never, devices don’t matter'],0,'Different screens can break in different places.'),
  Q('What is a good next step after finding a drop-off?',['Watch recordings or talk to people who left at that step','Remove the step right away','Add more steps','Wait a month and check again'],0,'Find out why people leave before you change the step.')]},
 pavocab:{type:'gaps',course:'pa',lesson:null,title:'Fill the gaps: Metrics vocabulary',status:'draft',updated:'Today',sel:0,sentences:[
  GS('The share of people who come back after 7 days is the 7-day retention.','retention',['retention','retention rate']),
  GS('A metric that changes before the result you care about is a leading metric.','leading',['leading']),
  GS('The step where most people leave is the drop-off.','drop-off',['drop-off','dropoff'])]},
 figtest:{type:'assignment',course:'fig',lesson:'fig8',title:'Essay: Prototype testing plan',name:'Prototype testing plan',status:'published',updated:'22 Sep',instr:'1. What you will test and the 3 tasks you will give people.\n2. Who takes part and how you will recruit them.\n3. How you will record what happens.',materials:[{name:'test-plan-template.docx',size:'40 KB'}],submit:'link',due:'Sun, 4 Oct 2026',dueShort:'Sun, 4 Oct',time:'23:59 · learner’s time zone',late:true,grade:'Out of 10',reviewers:'Course reviewers · 3',within:'48 hours',stats:{submitted:9,of:31,ontime:9,late:0,status:'1 waiting for review · overdue',tone:'b-over'}}
};
Object.entries(ACTS).forEach(([k,a])=>{a.id=k;});
const ACT_ICON={quiz:'quiz',tf:'tf',gaps:'gaps',assignment:'pen'};
const ACT_TYPE={quiz:'Quiz',tf:'True/False',gaps:'Fill the gaps',assignment:'Assignment'};
const actsOf=lid=>Object.values(ACTS).filter(a=>!a.deleted&&(a.lesson===lid||(a.alsoIn||[]).includes(lid)));
function actSize(a){return a.type==='quiz'?`${a.questions.length} question${a.questions.length===1?'':'s'}`:a.type==='tf'?`${a.statements.length} statement${a.statements.length===1?'':'s'}`:a.type==='gaps'?`${a.sentences.length} sentence${a.sentences.length===1?'':'s'}`:'Graded out of 10';}
function actMeta(a){if(a.status==='draft')return 'Draft · learners don’t see it yet';
 if(a.type==='assignment')return `Activity · due ${a.dueShort}${a.stats?` · ${a.stats.submitted} submitted`:''}`;return 'Activity · '+actSize(a);}
const actPill=a=>a.status==='draft'?'<span class="badge b-neutral"><i></i>Draft</span>':(a.type==='assignment'&&a.stats)?`<span class="badge ${a.stats.tone}">${a.stats.status}</span>`:'';

/* ---------- shared editor parts ---------- */
const stBadge=s=>s==='published'?'<span class="badge b-accepted"><i></i>Published</span>':s==='novideo'?'<span class="badge b-needs"><i></i>Needs video</span>':s==='empty'?'<span class="c faded">No lessons yet</span>':'<span class="badge b-neutral"><i></i>Draft</span>';
function edHead(o){return `<div class="edhead">
 <div class="col gap2 grow" style="min-width:0"><span class="c faded trunc">${o.crumbs}</span><div class="row gap10" style="min-width:0"><span class="h2 trunc" ${o.bind?`data-show="${o.bind}" data-empty="${esc(o.empty||'Untitled')}"`:''}>${esc(o.title||o.empty||'Untitled')}</span>${stBadge(o.status)}</div></div>
 <span class="row gap6 s faded" id="ed-saved" style="white-space:nowrap">${ic('check',14,'green')}Saved just now</span>
 ${btn('Preview','secondary',o.preview)}${btn(o.status==='published'?'Update':'Publish','primary',o.primary)}
 <button class="iconbtn sm" data-act="edmore" data-kind="${o.kind}" data-id="${o.id}" aria-label="More actions">${ic('more',18)}</button></div>`;}
let savedT=null;
function edSaving(){const el=document.getElementById('ed-saved');if(!el)return;el.innerHTML=`${ic('refresh',14)}Saving…`;clearTimeout(savedT);savedT=setTimeout(()=>{const e=document.getElementById('ed-saved');if(e)e.innerHTML=`${ic('check',14,'green')}Saved just now`;},650);}
const LES={};
const ROOTS={ced:()=>CED,les:()=>LES,act:()=>ACTS};
function edGet(p){const [r,...ks]=p.split('.');let o=ROOTS[r]();for(const k of ks){if(o==null)return;o=o[k];}return o;}
function edSet(p,v){const [r,...ks]=p.split('.');let o=ROOTS[r]();for(let i=0;i<ks.length-1;i++)o=o[ks[i]];o[ks[ks.length-1]]=v;}
const eIn=(p,v,o={})=>`<label class="input ${o.err?'err':''} ${o.ro?'ro':''}" ${o.w?`style="width:${o.w}px;flex:none"`:''}>${o.icon?ic(o.icon,16):''}<input data-ed="${p}" value="${esc(v)}" placeholder="${esc(o.ph||'')}" ${o.ro?'readonly':''}>${o.suffix?`<span class="s faded" style="white-space:nowrap">${o.suffix}</span>`:''}</label>`;
const eArea=(p,v,o={})=>`<textarea class="textarea" data-ed="${p}" placeholder="${esc(o.ph||'')}" ${o.h?`style="min-height:${o.h}px"`:''}>${esc(v)}</textarea>`;
const eSel=(p,v,opts)=>`<label class="input"><select data-edsel="${p}">${opts.map(x=>`<option ${x===v?'selected':''}>${esc(x)}</option>`).join('')}</select>${ic('down',16)}</label>`;
const eSeg=(p,v,opts)=>`<div class="seg light auto">${opts.map(([val,l])=>`<button class="${v===val?'on':''}" data-act="edseg" data-p="${p}" data-v="${val}">${l}</button>`).join('')}</div>`;
const eTog=(p,on,label,hint)=>`<div class="row gap12"><button class="toggle ${on?'on':''}" data-act="edtog" data-p="${p}" aria-label="${esc(label)}"></button><span class="col gap2"><span class="m med">${label}</span>${hint?`<span class="c faded">${hint}</span>`:''}</span></div>`;
const sideNote=t=>`<div class="note s pencil">${ic('info',16)}<span>${t}</span></div>`;
document.addEventListener('input',e=>{const t=e.target;const p=t.dataset&&t.dataset.ed;if(!p)return;edSet(p,t.value);edSaving();
 document.querySelectorAll(`[data-show="${p}"]`).forEach(n=>{n.textContent=t.value||n.dataset.empty||'';});
 document.querySelectorAll(`[data-len="${p}"]`).forEach(n=>{n.textContent=t.value.length;});
 edAfterInput(p,t.value);});
document.addEventListener('change',e=>{const t=e.target;const p=t.dataset&&t.dataset.edsel;if(!p)return;edSet(p,t.value);edSaving();render();});
function edAfterInput(p,v){const k=p.split('.');
 if(k[0]==='les'&&k[2]==='title'){const l=lessonById(k[1]);if(l)l.title=v;}
 if(k[0]==='ced'&&k[2]==='amount'){const d=CED[k[1]];document.querySelectorAll('[data-calc="price"]').forEach(n=>n.textContent=priceShort(d));document.querySelectorAll('[data-calc="price-big"]').forEach(n=>n.textContent=priceBig(d));}
 if(k[0]==='act')actAfterInput(k,v);}
ACT.edtog=(el)=>{const p=el.dataset.p;edSet(p,!edGet(p));edSaving();render();};
ACT.edseg=(el)=>{edSet(el.dataset.p,el.dataset.v);edSaving();render();};
ACT.edmore=(el)=>{const k=el.dataset.kind,id=el.dataset.id;
 const items=k==='course'?[['plus','Duplicate as a draft','edfake','Duplicated as a draft'],['inbox','Archive course','edfake','Archived · learners keep access until it ends']]
  :k==='lesson'?[['plus','Duplicate lesson','edfake','Duplicated as a draft'],['trash','Delete lesson','edfake','Only empty lessons can be deleted. Move or delete its activities first.']]
  :[['plus','Duplicate','edfake','Duplicated as a draft'],['trash','Delete','actdel','']];
 openMenu(el,items.map(([i,l,a,m])=>`<button class="mi" data-act="${a}" data-id="${id}" data-msg="${esc(m)}">${ic(i,14)}${l}</button>`).join(''),'edmore',{w:240});};
ACT.edfake=(el)=>{st.menu=null;renderLayer();toast(el.dataset.msg);};

/* ---------- Courses list (new columns, rows open the course editor) ---------- */
const priceShort=d=>d.model==='free'?'Free':!(+d.amount>0)?'No price yet':d.model==='sub'?`$${+d.amount} / month`:`$${Math.round(+d.amount)}`;
const priceList=d=>d.model==='free'?'Free':!(+d.amount>0)?'<span class="amber">No price yet</span>':d.model==='sub'?`$${+d.amount} / month`:`$${Math.round(+d.amount)} · one-time`;
const priceBig=d=>d.model==='free'?'Free':!(+d.amount>0)?'—':d.model==='sub'?`$${+d.amount}/mo`:`$${Math.round(+d.amount)}`;
const priceSub=d=>d.model==='free'?`No payment · access ${d.access.toLowerCase()}${d.cert?' · certificate included':''}`:d.model==='sub'?`Billed monthly · cancel any time${d.cert?' · certificate included':''}`:`One payment · ${d.access} of access${d.cert?' · certificate included':''}`;
const priceCta=d=>d.model==='free'?'Enroll for free':!(+d.amount>0)?'Enroll':d.model==='sub'?`Subscribe for $${+d.amount}/month`:`Enroll for $${Math.round(+d.amount)}`;
st.crsTab='all';st.crsQ='';st.crsCat='';st.crsTeacher='';st.cedTab={};st.curOpen={};
VIEWS['admin:courses']=()=>{const all=['ux','fig','pa','sd'].filter(c=>!CED[c].archived);const q=st.crsQ.toLowerCase();
 const inTabC=c=>st.crsTab==='all'||(st.crsTab==='published'&&CED[c].status==='published')||(st.crsTab==='drafts'&&CED[c].status==='draft');
 const list=all.filter(c=>inTabC(c)&&(!q||CED[c].title.toLowerCase().includes(q))&&(!st.crsCat||CED[c].category===st.crsCat)&&(!st.crsTeacher||CED[c].teacher===st.crsTeacher));
 const needs=ALLSUBS.filter(s=>live(s)&&(s.status==='needs'||s.status==='resub')).length;
 const COLS=[['',44],['Course',0],['Status',110],['Learners',88],['Curriculum',168],['Completion',120],['Price',108],['Updated',96,'c-last'],['',44]];
 const allOn=list.length&&list.every(c=>st.crsSel.has(c)),someOn=list.some(c=>st.crsSel.has(c));
 const cell=(i,inner,x='')=>`<div class="td ${COLS[i][1]?'':'grow'} ${COLS[i][2]||''}" ${COLS[i][1]?`style="width:${COLS[i][1]}px"`:'data-min="192"'} ${x}>${inner}</div>`;
 return `<div class="page" style="max-width:none"><div class="row gap12"><div class="col gap4 grow"><h1 class="h1">Courses</h1><p class="m pencil" style="margin:0">4 courses · 106 learners · ${needs} submissions waiting for review</p></div>${btn('New course','primary','data-act="notyet" data-msg="A new course starts as an empty draft – open Service Design Basics to see one"')}</div>
 <div class="tabs">${[['all','All',all.length],['published','Published',all.filter(c=>CED[c].status==='published').length],['drafts','Drafts',all.filter(c=>CED[c].status==='draft').length],['archived','Archived',0]].map(([v,l,n])=>`<button class="tab ${st.crsTab===v?'on':''}" data-act="crstab" data-v="${v}">${l}<span class="count">${n}</span></button>`).join('')}</div>
 <div class="row gap8"><label class="search" style="width:280px">${ic('search',16)}<input data-crsq placeholder="Search courses" value="${esc(st.crsQ)}"></label>
  <button class="btn btn-secondary" data-act="crsfilter" data-k="crsCat">${st.crsCat?'Category: '+esc(st.crsCat):'Category'}${ic('down',14)}</button><button class="btn btn-secondary" data-act="crsfilter" data-k="crsTeacher">${st.crsTeacher?'Teacher: '+esc(st.crsTeacher):'Teacher'}${ic('down',14)}</button>${st.crsCat||st.crsTeacher||st.crsQ?`<button class="link" data-act="crsclear">Clear all</button>`:''}</div>
 <div class="tbl"><div class="tr head">${COLS.map(([k],i)=>cell(i,i===0?cbx(allOn,!allOn&&someOn,'data-act="crsselall" aria-label="Select all"'):`<span class="o faded">${k}</span>`)).join('')}</div>
 ${list.map(c=>{const d=CED[c],ls=crsLessons(c),on=st.crsSel.has(c);return `<div class="tr ${on?'sel':''}" data-act="cedopen" data-c="${c}">${cell(0,cbx(on,false,`data-act="crssel" data-c="${c}" aria-label="Select ${esc(d.title)}"`),`data-act="crssel" data-c="${c}"`)}${cell(1,`<span class="cover" style="width:36px;height:36px;background:${crsColor(c)}"></span><span class="col gap2" style="min-width:0"><span class="m med trunc">${esc(d.title)}</span><span class="c faded">${esc(d.category)}</span></span>`)}
  ${cell(2,stBadge(d.status))}${cell(3,`<span class="s">${d.learners||'–'}</span>`)}${cell(4,`<span class="s pencil" style="white-space:nowrap">${plural(crsMods(c).length,'module')} · ${plural(ls.length,'lesson')}</span>`)}
  ${cell(5,d.completion==null?'<span class="s faded">Not started</span>':`${bar(d.completion)}<span class="s semi" style="width:36px;text-align:right">${d.completion}%</span>`)}${cell(6,`<span class="s">${priceList(d)}</span>`)}${cell(7,`<span class="s pencil">${d.updated}</span>`)}${cell(8,`<button class="iconbtn sm ghost" data-act="edmore" data-kind="course" data-id="${c}" aria-label="More actions">${ic('more',16)}</button>`)}</div>`;}).join('')||`<div class="empty"><span class="h3">No courses match</span><button class="link" data-act="crsclear">Clear filters</button></div>`}
 <div class="tfoot"><span class="s pencil">1–${list.length} of ${list.length}</span></div></div>
 ${st.crsSel.size?`<div class="bulkbar"><span class="semi">${st.crsSel.size} selected</span><span class="sep"></span><button class="bb" data-act="crsbulk" data-msg="Duplicated as drafts">${ic('plus',14)}Duplicate as drafts</button><button class="bb" data-act="crsbulk" data-msg="Archived · learners keep access until their access ends">${ic('inbox',14)}Archive</button><button class="bb" data-act="crsclearsel" aria-label="Clear selection">${ic('x',16)}</button></div>`:''}</div>`;};
st.crsSel=new Set();
ACT.crssel=(el)=>{const c=el.dataset.c;st.crsSel.has(c)?st.crsSel.delete(c):st.crsSel.add(c);render();};
ACT.crsselall=()=>{const all=['ux','fig','pa','sd'].filter(c=>!CED[c].archived),on=all.every(c=>st.crsSel.has(c));all.forEach(c=>on?st.crsSel.delete(c):st.crsSel.add(c));render();};
ACT.crsclearsel=()=>{st.crsSel.clear();render();};
ACT.crsbulk=(el)=>{const n=st.crsSel.size;st.crsSel.clear();render();toast(`${n} course${n>1?'s':''}: ${el.dataset.msg.charAt(0).toLowerCase()+el.dataset.msg.slice(1)}`);};
ACT.crstab=(el)=>{st.crsTab=el.dataset.v;st.crsSel.clear();render();};
ACT.crsclear=()=>{st.crsCat='';st.crsTeacher='';st.crsQ='';render();};
ACT.crsfilter=(el)=>{const k=el.dataset.k;const opts=k==='crsCat'?['UX Research','Prototyping','Analytics','Service design']:TEACHERS;
 openMenu(el,`<button class="mi" data-act="crsset" data-k="${k}" data-v="">All</button>`+opts.map(o=>`<button class="mi" data-act="crsset" data-k="${k}" data-v="${esc(o)}">${st[k]===o?ic('check',14,'violet'):'<span style="width:14px"></span>'}${esc(o)}</button>`).join(''),'crsfilter',{w:220});};
ACT.crsset=(el)=>{st[el.dataset.k]=el.dataset.v;st.menu=null;render();};
document.addEventListener('input',e=>{if(e.target.dataset&&e.target.dataset.crsq!==undefined){st.crsQ=e.target.value;render();const i=document.querySelector('[data-crsq]');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length);}}});
ACT.cedopen=(el)=>{st.cedTab[el.dataset.c]=el.dataset.tab||'overview';go('admin/course/'+el.dataset.c);};

/* ---------- Course editor ---------- */
function cedHealth(c,d){const ls=crsLessons(c),na=ls.reduce((s,l)=>s+actsOf(l.id).length,0),nv=ls.filter(l=>l.noVideo).length;
 return [['Title and description',!!(d.title.trim()&&d.short.trim()),'overview','Add a short description'],[`Curriculum: ${plural(ls.length,'lesson')}, ${na} activit${na===1?'y':'ies'}`,ls.length>0,'curriculum','Open Curriculum'],['Price and access',d.model==='free'||+d.amount>0,'pricing','Set a price'],[nv?`${nv} lesson${nv>1?'s have':' has'} no video yet`:'Every lesson has a video',nv===0,'curriculum','Open Curriculum to fix']];}
VIEWS['admin:course']=(r)=>{const c=CED[r.id]?r.id:'ux',d=CED[c],tab=st.cedTab[c]||'overview',ls=crsLessons(c);
 return edHead({backAttrs:'data-act="nav" data-to="admin/courses"',crumbs:'<a class="crumb" href="#/admin/courses">Courses</a> / '+esc(d.title||'Untitled course'),title:d.title,empty:'Untitled course',bind:`ced.${c}.title`,status:d.status,preview:`data-act="cedpreview" data-c="${c}"`,primary:`data-act="cedupdate" data-c="${c}"`,kind:'course',id:c})+
 `<div class="page" style="max-width:none;padding-top:18px"><div class="tabs">${[['overview','Overview'],['curriculum','Curriculum',ls.length],['pricing','Pricing & access']].map(([v,l,n])=>`<button class="tab ${tab===v?'on':''}" data-act="cedtab" data-c="${c}" data-v="${v}">${l}${n!=null?`<span class="count">${n}</span>`:''}</button>`).join('')}</div>
 ${tab==='overview'?cedOverview(c,d):tab==='curriculum'?cedCurriculum(c,d):cedPricing(c,d)}</div>`;};
ACT.cedtab=(el)=>{st.cedTab[el.dataset.c]=el.dataset.v;render(true);};
ACT.cedpreview=(el)=>{const c=el.dataset.c;if(c==='sd'){toast('Draft courses have no learner page yet');return;}go('learner/course/'+c);setTimeout(()=>toast('You are previewing the course as a learner','Back to editor',()=>{go('admin/course/'+c);}),60);};
ACT.cedupdate=(el)=>{const c=el.dataset.c,d=CED[c];if(d.status!=='published'){const H=cedHealth(c,d).filter(h=>!h[1]);if(H.length){toast(`Before publishing: ${H.map(h=>h[0].toLowerCase()).join(', ')}`);if(H[0][2]!==(st.cedTab[c]||'overview')){st.cedTab[c]=H[0][2];render(true);}return;}d.status='published';render();toast('Published · the course is in the catalog');return;}
 toast(`Changes are live for ${d.learners} learners`);};
const mediaRow=(c,k,name,meta,video)=>`<div class="media"><span class="thumb" style="background:linear-gradient(135deg,${crsColor(c)},${crsColor(c)}99)">${video?ic('play',18):''}</span><span class="col gap2 grow"><span class="m med">${esc(name)}</span><span class="c faded">${meta}</span></span><button class="link" data-act="notyet" data-msg="The file picker is simulated in this prototype">Replace</button><button class="link" style="color:var(--pencil)" data-act="cedmedia" data-c="${c}" data-k="${k}">Remove</button></div>`;
ACT.cedmedia=(el)=>{const d=CED[el.dataset.c],k=el.dataset.k;if(d[k]){d['_'+k]=d[k];d[k]=null;toast((k==='cover'?'Cover':'Trailer')+' removed','Undo',()=>{d[k]=d['_'+k];render();});}else{d[k]=d['_'+k]||(k==='cover'?'service-design-cover.png':'intro-service-design.mp4');d[k+'Meta']=d[k+'Meta']||(k==='cover'?'1600 × 900 · 400 KB':'1:30 · 16 MB');}edSaving();render();};
function cedOverview(c,d){const H=cedHealth(c,d),ok=H.filter(h=>h[1]).length,fix=H.find(h=>!h[1]);
 return `<div class="ed-cols"><div class="col gap20 grow" style="min-width:0">
 ${section(1,'Basics','What learners see in the catalog and on the course page.',`
  ${fld('Course title',eIn(`ced.${c}.title`,d.title,{ph:'For example: UX Research Fundamentals'}))}
  ${fld('Short description',eIn(`ced.${c}.short`,d.short,{ph:'1 sentence: what learners will be able to do'}),{hint:`<span><span data-len="ced.${c}.short">${d.short.length}</span> / 120 · shown on the course card</span>`})}
  ${fld('Description',eArea(`ced.${c}.desc`,d.desc,{ph:'Who the course is for and what they will do'}))}`)}
 ${section(2,'Details','',`<div class="row gap16">${fld('Category',eSel(`ced.${c}.category`,d.category,['UX Research','Prototyping','Analytics','Service design']))}${fld('Level',eSel(`ced.${c}.level`,d.level,['Beginner','Intermediate','Advanced']))}</div>
  <div class="row gap16" style="align-items:flex-start">${fld('Language',eSel(`ced.${c}.language`,d.language,['English','Ukrainian','Polish']))}${fld('Available in',eSel(`ced.${c}.avail`,d.avail,['Worldwide','Europe','Ukraine']),{hint:'<span>Countries where the course is listed</span>'})}</div>`)}
 ${section(3,'Media','A cover and a short trailer help learners decide.',`
  ${fld('Cover image',d.cover?mediaRow(c,'cover',d.cover,d.coverMeta,false):`<button class="dropzone" data-act="cedmedia" data-c="${c}" data-k="cover">${ic('upload',16)} Add a cover image <span class="faded">· 1600 × 900</span></button>`)}
  ${fld('Trailer',d.trailer?mediaRow(c,'trailer',d.trailer,d.trailerMeta,true):`<button class="dropzone" data-act="cedmedia" data-c="${c}" data-k="trailer">${ic('upload',16)} Add a trailer <span class="faded">· up to 2 min</span></button>`)}`)}
 </div><div class="ed-side">
  <section class="card pad col gap12"><div class="row gap8 s pencil">${ic('eye',16)}How it looks in the catalog</div>
   <div style="border:1px solid var(--rule);border-radius:10px;overflow:hidden"><div style="height:104px;background:${d.cover?`linear-gradient(135deg,${crsColor(c)},${crsColor(c)}99)`:'var(--margin)'}"></div>
    <div class="col gap6" style="padding:14px"><span class="o faded">${esc((d.category+' · '+d.level).toUpperCase())}</span><span class="h3" data-show="ced.${c}.title" data-empty="Untitled course">${esc(d.title||'Untitled course')}</span><span class="s pencil" data-show="ced.${c}.short" data-empty="Add a short description">${esc(d.short||'Add a short description')}</span><span class="c faded">${plural(crsMods(c).length,'module')} · ${plural(crsLessons(c).length,'lesson')}</span>
    <div class="row between" style="padding-top:6px"><span class="h3" data-calc="price">${priceShort(d)}</span><span class="btn btn-primary btn-sm">Enroll</span></div></div></div></section>
  <section class="card pad col gap12"><div class="row between"><h3 class="h3">Course health</h3><span class="badge ${ok===4?'b-accepted':'b-needs'}">${ok} of 4</span></div>
   ${H.map(([l,v])=>`<div class="row s" style="gap:10px"><span class="chk ${v?'ok':'warn'}">${ic(v?'check':'alert',12)}</span><span class="${v?'':'amber'}">${l}</span></div>`).join('')}
   ${fix?`<button class="link" data-act="cedtab" data-c="${c}" data-v="${fix[2]}">${fix[3]}</button>`:''}</section>
 </div></div>`;}
function crsOutline(c){const ls=crsLessons(c);return crsMods(c).map((name,i)=>{const lessons=ls.filter(l=>l.mod===i);return {i,name,lessons,acts:lessons.reduce((s,l)=>s.concat(actsOf(l.id)),[])};});}
function modState(m){if(!m.lessons.length)return 'empty';if(m.lessons.every(l=>lessonState(l)==='draft'))return 'draft';if(m.lessons.some(l=>lessonState(l)==='novideo'))return 'novideo';return 'published';}
function modMeta(m){const n=m.lessons.length,a=m.acts.length,nv=m.lessons.filter(l=>l.noVideo).length;if(!n)return 'Add the first lesson';return `${n} lesson${n>1?'s':''}`+(nv?` · no video in ${nv} lesson${nv>1?'s':''}`:a?` · ${a} activit${a>1?'ies':'y'}`:'');}
function cedCurriculum(c,d){const O=crsOutline(c),ls=crsLessons(c),na=O.reduce((s,m)=>s+m.acts.length,0),vm=ls.filter(l=>!l.noVideo).reduce((s,l)=>s+l.min,0);
 const open=st.curOpen[c]!==undefined?st.curOpen[c]:(c==='ux'?1:0);const om=O[open];
 const S=(d.stats||[])[open]||[0,0];const L=d.learners||0;const asg=om?om.acts.find(a=>a.type==='assignment'&&a.stats&&a.status!=='draft'&&a.stats.tone==='b-over')||om.acts.find(a=>a.type==='assignment'&&a.stats):null;
 return `<div class="ed-cols"><div class="col gap16 grow" style="min-width:0">
  <span class="s pencil">${plural(O.length,'module')} · ${plural(ls.length,'lesson')} · ${na} activit${na===1?'y':'ies'}${vm?` · about ${hm(vm)} of video`:''}</span>
  <div class="card ol">${O.map(m=>{const isOpen=open===m.i;return `<div class="ol-mod ${isOpen?'open':''}" data-act="curtoggle" data-c="${c}" data-m="${m.i}"><span class="grip">${ic('grip',14)}</span><span class="numtile ${isOpen?'on':''}">${m.i+1}</span><span class="col gap2 grow"><span class="m med">${esc(m.name)}</span><span class="c faded">${modMeta(m)}</span></span>${stBadge(modState(m))}${ic(isOpen?'down':'chev',16,'faded')}</div>
   ${isOpen?m.lessons.map((l,li)=>`<div class="ol-item" data-act="nav" data-to="admin/lesson/${l.id}"><span class="grip">${ic('grip',14)}</span><span class="typeicon sm">${ic('video',16)}</span><span class="col gap2 grow" style="min-width:0"><span class="m med trunc">${esc(l.title)}</span><span class="c faded">${l.noVideo?'Lesson · no video yet':`Lesson · ${l.min}:00 from video`}</span></span>${stBadge(lessonState(l))}</div>
    ${actsOf(l.id).map(a=>`<div class="ol-item act" data-act="nav" data-to="admin/activity/${a.id}"><span class="grip">${ic('grip',14)}</span><span class="typeicon sm">${ic(ACT_ICON[a.type],16)}</span><span class="col gap2 grow" style="min-width:0"><span class="m med trunc">${esc(a.title)}</span><span class="c faded">${actMeta(a)}</span></span>${actPill(a)}</div>`).join('')}
    ${li===m.lessons.length-1?`<button class="addrow act" data-act="addact" data-l="${l.id}">${ic('plus',14)}Add activity to “${esc(l.title)}”</button>`:''}`).join('')+`<button class="addrow" data-act="addlesson" data-c="${c}" data-m="${m.i}">${ic('plus',14)}Add lesson to ${esc(m.name)}</button>`:''}`;}).join('')}
   <button class="addrow" style="padding-left:16px" data-act="addmod" data-c="${c}">${ic('plus',14)}Add module</button></div>
 </div><div class="ed-side">
  ${om?`<section class="card pad col gap12"><h3 class="h3">Module ${om.i+1} · ${esc(om.name)}</h3>
   <div class="row between s"><span class="pencil">Working on it now</span><span class="semi">${S[0]}</span></div>
   <div class="row between s"><span class="pencil">Finished the module</span><span class="semi">${S[1]} of ${L}${L?` · ${Math.round(S[1]/L*100)}%`:''}</span></div>${bar(L?Math.round(S[1]/L*100):0)}
   ${asg?`<div class="divider"></div><span class="s med">${esc(asg.title)}</span><span class="c faded">${asg.stats.submitted} submitted · ${asg.stats.status.toLowerCase()}</span><button class="link" data-act="msgq" data-tab="${asg.stats.tone==='b-over'?'overdue':'needs'}">Open in review queue ${ic('arrow',14)}</button>`:''}</section>`:''}
  ${sideNote('Drag modules, lessons and activities to change the order. Learners see exactly this order.')}
 </div></div>`;}
ACT.curtoggle=(el)=>{const c=el.dataset.c,m=+el.dataset.m;const cur=st.curOpen[c]!==undefined?st.curOpen[c]:(c==='ux'?1:0);st.curOpen[c]=cur===m?-1:m;render();};
ACT.addmod=(el)=>{const c=el.dataset.c;const mods=crsMods(c);mods.push('New module');st.curOpen[c]=mods.length-1;edSaving();render();toast(`Module ${mods.length} added · rename it from its “…” menu`);};
ACT.addlesson=(el)=>{const c=el.dataset.c,m=+el.dataset.m;const arr=c==='sd'?SD_LESSONS:LESSONS;const id=c+'n'+(arr.length+1);arr.push({id,course:c,mod:m,title:'New lesson',min:0,done:false,watched:0,noVideo:true,isNew:true});go('admin/lesson/'+id);setTimeout(()=>toast('Lesson added as a draft'),40);};
function evWhen(e){const s=isoToDate(e.start);if(e.status==='draft')return 'Draft · from '+fmtDay(s);const t=s&&s.getDate()===1&&s.getMonth()===9;return (t?'Today':fmtDow(s))+', '+e.from;}
function cedPricing(c,d){const ev=EVENTS.filter(e=>(e.linked||[]).includes(c)).sort((a,b)=>a.start<b.start?-1:1);
 return `<div class="ed-cols"><div class="col gap20 grow" style="min-width:0">
 ${section(1,'Price','How learners pay for this course.',`<div class="field"><span class="label">Model</span>${eSeg(`ced.${c}.model`,d.model,[['free','Free'],['one','One-time'],['sub','Subscription']])}</div>
  ${d.model==='free'?'':`<div class="row gap12" style="align-items:flex-start">${fld('Amount',eIn(`ced.${c}.amount`,d.amount,{ph:'0.00',err:!(+d.amount>0)}),{w:150,hint:+d.amount>0?'':'<span class="errtext">Add a price</span>'})}${fld('Currency',eSel(`ced.${c}.currency`,d.currency,['USD','EUR','UAH','PLN']),{w:110})}${d.model==='one'?fld('Access after payment',eSel(`ced.${c}.access`,d.access,['6 months','12 months','Forever']),{hint:'<span>Learners keep access to lessons for this long</span>'}):''}</div>`}`)}
 ${section(2,'Enrollment','Who can join and when.',`<div class="field"><span class="label">Who can enroll</span>${eSeg(`ced.${c}.who`,d.who,[['link','Anyone with the link'],['invite','Invite only']])}</div>
  <div class="row gap16" style="align-items:flex-start">${fld('Enrollment opens',eIn(`ced.${c}.opens`,d.opens,{icon:'cal',ph:'Pick a date'}))}${fld('Enrollment closes',eIn(`ced.${c}.closes`,d.closes,{icon:'cal',ph:'Pick a date'}),{hint:'<span>After this date the course disappears from the catalog</span>'})}</div>
  ${eTog(`ced.${c}.limit`,d.limit,'Limit the group size','Useful for cohorts with live classes and personal feedback')}${d.limit?fld('Seats',eIn(`ced.${c}.seats`,d.seats,{ph:'40'}),{w:120}):''}`)}
 ${section(3,'Certificate','',eTog(`ced.${c}.cert`,d.cert,'Issue a certificate when all modules are done','Includes accepted assignments; learners download it from My courses'))}
 ${section(4,'Linked events','Learners of this course see these live classes in their calendar.',`<div class="row gap8" style="flex-wrap:wrap">${ev.map(e=>`<span class="evchip">${ic('cal',14,'pencil')}<span class="s med">${esc(e.title)}</span><span class="c faded">${evWhen(e)}</span><button class="faded" data-act="cedunlink" data-c="${c}" data-e="${e.id}" aria-label="Unlink ${esc(e.title)}">${ic('x',13)}</button></span>`).join('')||'<span class="s faded">No linked events yet</span>'}</div><span><button class="link" data-act="cedlinkev" data-c="${c}">${ic('plus',14)}Link an event</button></span>`)}
 </div><div class="ed-side">
  <section class="card pad col gap10"><div class="row gap8 s pencil">${ic('eye',16)}What learners see at checkout</div><span class="h1" data-calc="price-big">${priceBig(d)}</span><span class="s pencil">${priceSub(d)}</span><span>${btn(priceCta(d),'primary','data-act="notyet" data-msg="Checkout is not part of this prototype"')}</span></section>
  ${sideNote(`Price changes apply to new enrollments after you click ${d.status==='published'?'Update':'Publish'}.${d.learners?` ${d.learners} current learners keep their terms.`:''}`)}
 </div></div>`;}
ACT.cedunlink=(el)=>{const e=EVENTS.find(x=>x.id===el.dataset.e),c=el.dataset.c;e.linked=e.linked.filter(x=>x!==c);edSaving();render();toast(`“${e.title}” unlinked`,'Undo',()=>{e.linked.push(c);render();});};
ACT.cedlinkev=(el)=>{const c=el.dataset.c;const left=EVENTS.filter(e=>!(e.linked||[]).includes(c));openMenu(el,left.length?left.map(e=>`<button class="mi" data-act="cedlink" data-c="${c}" data-e="${e.id}">${ic('cal',14)}<span class="col gap2"><span>${esc(e.title)}</span><span class="c faded">${evWhen(e)}</span></span></button>`).join(''):'<div class="mgroup s faded">Every event is linked</div>','cedlinkev',{w:300});};
ACT.cedlink=(el)=>{const e=EVENTS.find(x=>x.id===el.dataset.e);e.linked=(e.linked||[]).concat(el.dataset.c);st.menu=null;edSaving();render();};

/* ---------- Lesson editor + activity picker ---------- */
const LES_UX5={teacher:'Maria Ivanova',summary:'Plan 5 interviews: goals, people, schedule and how you will take notes.',points:['Decide what you need to learn before you choose who to talk to.','Plan 5 sessions of 30–45 minutes, 15 minutes apart.','Write down how you will record answers.','Run 1 practice interview to test timing.'],video:'planning-interviews.mp4',videoMeta:'Uploaded 29 Sep · 210 MB',file:'planning-interviews-slides.pdf',fileMeta:'12 pages · 1.4 MB'};
function lesData(id){if(LES[id])return LES[id];const l=lessonById(id);const slug=l.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 const base=id==='ux5'?LES_UX5:l.isNew?{teacher:CED[l.course].teacher,summary:'',points:[],video:null,videoMeta:'',file:null,fileMeta:''}
  :{teacher:CED[l.course].teacher,summary:`What you will learn in “${l.title}” and how it helps with the module assignment.`,points:SUMMARY[id]||['The main idea in 1 sentence.','What to try right after watching.','Where it shows up in the module assignment.'],video:l.noVideo?null:slug+'.mp4',videoMeta:'Uploaded 21 Sep · '+(l.min*8)+' MB',file:slug+'-slides.pdf',fileMeta:'10 pages · 1.1 MB'};
 LES[id]=Object.assign(JSON.parse(JSON.stringify(base)),{title:l.title});return LES[id];}
VIEWS['admin:lesson']=(r)=>{const l=lessonById(r.id)||lessonById('ux5');const c=l.course,d=lesData(l.id),mods=crsMods(c),ls=crsLessons(c),idx=ls.indexOf(l)+1,state=lessonState(l),acts=actsOf(l.id);
 const hasAsg=acts.some(a=>a.type==='assignment');const checks=[['Title and summary',!!(d.title.trim()&&d.summary.trim())],[d.video?'Video with subtitles':'No video yet',!!d.video],['Teacher',!!d.teacher],hasAsg?['Activity with a due date',true]:['Materials for learners',!!d.file]];const ok=checks.filter(x=>x[1]).length;
 const modName=`Module ${l.mod+1} · ${mods[l.mod]}`;const S=(CED[c].stats||[])[l.mod]||[0,0];
 return edHead({backAttrs:`data-act="cedopen" data-c="${c}" data-tab="curriculum"`,crumbs:`<a class="crumb" href="#/admin/courses">Courses</a> / <button class="crumb" data-act="cedopen" data-c="${c}" data-tab="curriculum">${esc(CED[c].title)}</button> / ${esc(modName)}`,title:d.title,empty:'Untitled lesson',bind:`les.${l.id}.title`,status:state==='novideo'?'draft':state,preview:`data-act="lespreview" data-l="${l.id}"`,primary:`data-act="lesupdate" data-l="${l.id}"`,kind:'lesson',id:l.id})+
 `<div class="page" style="max-width:none;padding-top:24px"><div class="ed-cols"><div class="col gap20 grow" style="min-width:0">
  ${section(1,'Basics',`The lesson already belongs to ${esc(modName)}.`,`
   ${fld('Title',eIn(`les.${l.id}.title`,d.title,{ph:'For example: Planning user interviews'}))}
   <div class="row gap16" style="align-items:flex-start">${fld('Teacher',eSel(`les.${l.id}.teacher`,d.teacher,TEACHERS),{hint:'<span>From the course team</span>'})}${fld('Length',`<label class="input ro"><span class="m" style="color:var(--ink)">${d.video?l.min+' min':'—'}</span><span class="s faded">· ${d.video?'from the video':'add a video'}</span></label>`)}</div>
   ${fld('Summary for learners',eIn(`les.${l.id}.summary`,d.summary,{ph:'1 sentence: what learners will be able to do'}),{hint:`<span><span data-len="les.${l.id}.summary">${d.summary.length}</span> / 140 · shown in the course outline and on the dashboard</span>`})}`)}
  ${section(2,'Content','Blocks learners go through, top to bottom.',`
   ${d.video?`<div class="block"><div class="block-h"><span class="grip">${ic('grip',14)}</span>${ic('video',16,'pencil')}<span class="s med grow">Video</span><span class="c faded">${l.min}:00 · subtitles: English</span><span class="faded">${ic('more',16)}</span></div><div class="block-b">${`<div class="media" style="border:0;padding:0"><span class="thumb" style="background:linear-gradient(135deg,${crsColor(c)},${crsColor(c)}99)">${ic('play',18)}</span><span class="col gap2 grow"><span class="m med">${esc(d.video)}</span><span class="c faded">${d.videoMeta}</span></span><button class="link" data-act="notyet" data-msg="The file picker is simulated in this prototype">Replace</button></div>`}</div></div>`
    :`<button class="dropzone" data-act="lesvideo" data-l="${l.id}">${ic('upload',16)} Add a video <span class="faded">· MP4 up to 2 GB · the length is read from the file</span></button>`}
   ${d.points.length?`<div class="block"><div class="block-h"><span class="grip">${ic('grip',14)}</span>${ic('text',16,'pencil')}<span class="s med grow">In short</span><span class="c faded">${d.points.length} points</span><span class="faded">${ic('more',16)}</span></div><div class="block-b"><div class="s" style="background:var(--margin);border-radius:8px;padding:10px 14px;line-height:22px">${d.points.map(p=>'• '+esc(p)).join('<br>')}</div></div></div>`:''}
   ${d.file?`<div class="block"><div class="block-h"><span class="grip">${ic('grip',14)}</span>${ic('file',16,'pencil')}<span class="s med grow">File</span><span class="c faded">${d.fileMeta}</span><span class="faded">${ic('more',16)}</span></div><div class="block-b"><span class="s">${esc(d.file)}</span></div></div>`:''}
   <div class="row gap8"><span class="s pencil">Add block:</span>${[['video','Video'],['text','Text'],['file','File'],['link2','Link']].map(([i,lb])=>`<button class="chipbtn" data-act="lesblock" data-l="${l.id}" data-v="${lb}">${ic(i,14)}${lb}</button>`).join('')}</div>`)}
  ${section(3,'Activities','Practice after the lesson. Assignments go to the review queue.',`
   ${acts.map(a=>`<div class="block"><div class="block-h" style="padding:12px"><span class="grip">${ic('grip',14)}</span><span class="typeicon sm">${ic(ACT_ICON[a.type],16)}</span><span class="col gap2 grow" style="min-width:0"><span class="m med trunc">${esc(a.title)}</span><span class="c faded">${a.type==='assignment'&&a.status!=='draft'?`Due ${a.dueShort} · graded out of 10${a.stats?` · ${a.stats.submitted} submitted`:''}`:actMeta(a)}</span></span>${a.status==='draft'?stBadge('draft'):''}<button class="link" data-act="nav" data-to="admin/activity/${a.id}">Edit</button></div></div>`).join('')||'<span class="s faded">No activities yet.</span>'}
   <span><button class="btn btn-secondary" data-act="addact" data-l="${l.id}">${ic('plus',14)}Add activity</button></span>`)}
 </div><div class="ed-side">
  <section class="card pad col gap12"><div class="row gap8 s pencil">${ic('eye',16)}In the course outline</div>
   <div class="row gap10" style="background:var(--violet-wash);border-radius:8px;padding:10px 12px">${ic('play',16,'violet')}<span class="col gap2" style="min-width:0"><span class="s med trunc" data-show="les.${l.id}.title" data-empty="Untitled lesson">${esc(d.title||'Untitled lesson')}</span><span class="c faded">Lesson ${idx} of ${ls.length}${d.video?' · '+l.min+' min':''}</span></span></div>
   <span class="s pencil" data-show="les.${l.id}.summary" data-empty="Add a summary for learners">${esc(d.summary||'Add a summary for learners')}</span></section>
  <section class="card pad col gap12"><div class="row between"><h3 class="h3">Lesson check</h3><span class="badge ${ok===4?'b-accepted':'b-needs'}">${ok} of 4</span></div>
   ${checks.map(([lb,v])=>`<div class="row s" style="gap:10px"><span class="chk ${v?'ok':'warn'}">${ic(v?'check':'alert',12)}</span><span class="${v?'':'amber'}">${lb}</span></div>`).join('')}</section>
  ${sideNote(state==='published'?`Update shows your changes to the ${S[0]+S[1]||'enrolled'} learners who reached Module ${l.mod+1}. Changes save automatically.`:`Publish shows this lesson in Module ${l.mod+1}. Changes save automatically.`)}
 </div></div></div>`;};
ACT.lespreview=(el)=>{const l=lessonById(el.dataset.l);if(!l||l.course==='sd'||l.isNew){toast('Draft lessons have no learner page yet');return;}go('learner/lesson/'+l.id);setTimeout(()=>toast('You are previewing the lesson as a learner','Back to editor',()=>go('admin/lesson/'+l.id)),60);};
ACT.lesupdate=(el)=>{const l=lessonById(el.dataset.l),d=lesData(l.id);if(l.course==='sd'){toast('Publish the course first: it is still a draft');return;}
 if(lessonState(l)==='published'){toast('Changes are live for learners');return;}
 if(!d.title.trim()||!d.summary.trim()){toast('Add a title and a summary before publishing');return;}if(!d.video){toast('Add a video before publishing');return;}l.isNew=false;l.noVideo=false;render();toast('Published · learners see it in the course outline');};
ACT.lesvideo=(el)=>{const l=lessonById(el.dataset.l),d=lesData(l.id);const slug=(d.title||'lesson').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');l.min=l.min||18;d.video=slug+'.mp4';d.videoMeta='Uploaded just now · '+(l.min*8)+' MB';l.noVideo=false;edSaving();render();toast(`Video uploaded · length ${l.min} min read from the file`);};
ACT.lesblock=(el)=>{const l=lessonById(el.dataset.l),d=lesData(l.id),v=el.dataset.v;if(v==='Video'){if(d.video){toast('This lesson already has a video');return;}ACT.lesvideo(el);return;}
 if(v==='Text'){d.points=d.points.length?d.points:['Write the main idea here.'];}else if(v==='File'){d.file=d.file||'lesson-materials.pdf';d.fileMeta=d.fileMeta||'1 page · 120 KB';}else{toast('Link block added');}edSaving();render();};
ACT.addact=(el)=>{const lid=el.dataset.l;const O=[['quiz','Quiz','Questions with 1 or more correct answers'],['tf','True / False','Statements learners mark as true or false'],['gaps','Fill the gaps','Sentences with missing words'],['assignment','Assignment','Learners upload work; it goes to the review queue']];
 openMenu(el,O.map(([t,l,dsc])=>`<button class="mi tall" data-act="newact" data-t="${t}" data-l="${lid}"><span class="typeicon sm">${ic(ACT_ICON[t],16)}</span><span class="col gap2"><span class="s med">${l}</span><span class="c faded">${dsc}</span></span></button>`).join('')+`<div class="divider" style="margin:6px 0"></div><button class="mi tall" data-act="fromlib" data-l="${lid}"><span class="typeicon sm">${ic('layers',16)}</span><span class="col gap2"><span class="s med">Add from Library</span><span class="c faded">Reuse an activity from another lesson or course</span></span></button>`,'addact',{w:340,up:true});};
let newSeq=1;
ACT.newact=(el)=>{st.menu=null;const t=el.dataset.t,lid=el.dataset.l,l=lessonById(lid);const id='new'+(newSeq++);
 const T={quiz:{title:'',sel:0,settings:{pass:'70%',attempts:'2',show:'After the due date',shuffle:true},questions:[{text:'',type:'one',answers:[{t:'',ok:false},{t:'',ok:false}],expl:''}]},
  tf:{title:'',sel:0,showAll:true,settings:{pass:'1 of 1',shuffle:true},statements:[{text:'',ans:true,expl:''}]},
  gaps:{title:'',sel:0,sentences:[{text:'',gap:null,acc:[],edit:true}]},
  assignment:{title:'',name:'',instr:'',materials:[],submit:'file',due:'',dueShort:'',time:'23:59 · learner’s time zone',late:true,grade:'Out of 10',reviewers:'Course reviewers · 3',within:'48 hours',stats:null}}[t];
 ACTS[id]=Object.assign({id,type:t,course:l.course,lesson:lid,status:'draft',updated:'Today',isNew:true},T);go('admin/activity/'+id);setTimeout(()=>toast(`New ${ACT_TYPE[t].toLowerCase()} added to “${l.title}” as a draft`),40);};
ACT.fromlib=(el)=>{const lid=el.dataset.l;const pool=Object.values(ACTS).filter(a=>!a.deleted&&a.status==='published'&&a.lesson!==lid&&!(a.alsoIn||[]).includes(lid));
 openMenu(el,`<div class="mgroup o faded">Library</div>`+pool.map(a=>`<button class="mi" data-act="libuse" data-a="${a.id}" data-l="${lid}">${ic(ACT_ICON[a.type],14)}<span class="col gap2" style="min-width:0"><span class="trunc">${esc(a.title)}</span><span class="c faded">${esc(CED[a.course].title)}</span></span></button>`).join(''),'fromlib',{w:340,up:true});};
ACT.libuse=(el)=>{const a=ACTS[el.dataset.a],l=lessonById(el.dataset.l);a.alsoIn=(a.alsoIn||[]).concat(l.id);st.menu=null;edSaving();render();toast(`“${a.title}” is now also used in “${l.title}”`,'Undo',()=>{a.alsoIn=a.alsoIn.filter(x=>x!==l.id);render();});};

/* ---------- Account menu (replaces the always-on role switch; roles read Student / Teacher) ---------- */
ACT.acct=(el)=>{const admin=route().role==='admin';openMenu(el,`<button class="mi" data-act="acctrole" data-v="${admin?'learner':'admin'}">${ic('repeat',14)}Switch to ${admin?'student':'teacher'} view</button><div class="divider" style="margin:6px 0"></div><button class="mi" data-act="acctfake" data-msg="Profile and settings are not part of this prototype">${ic('user',14)}Profile and settings</button><button class="mi" data-act="acctfake" data-msg="Signing out is not part of this prototype">${ic('arrow',14)}Log out</button>`,'acct',{w:240,up:true});};
ACT.acctrole=(el)=>{st.menu=null;renderLayer();ACT.role(el);};
ACT.acctfake=(el)=>{st.menu=null;renderLayer();toast(el.dataset.msg);};

/* ---------- Sidebar toggle: the panel folds into an icon rail ---------- */
st.navCollapsed=(()=>{try{return localStorage.getItem('learnly-nav')==='rail';}catch(e){return false;}})();
/* Responsive shell: >=1200 full sidebar (or the rail by choice), 768-1199 the rail, <768 no sidebar.
   Below 1200 the panel icon opens the full sidebar as a drawer over the page. */
st.navOpen=false;
const mqPhone=matchMedia('(max-width:767px)'),mqNarrow=matchMedia('(max-width:1199px)');/* the same breakpoints as the CSS */
function navMode(){if(mqPhone.matches)return 'none';if(mqNarrow.matches)return 'rail';return st.navCollapsed?'rail':'full';}
function appClass(){const m=navMode();return m==='rail'?'collapsed':m==='none'?'mobile':'';}
const onBreakpoint=()=>{if(navMode()==='full')st.navOpen=false;render();};
mqPhone.addEventListener('change',onBreakpoint);mqNarrow.addEventListener('change',onBreakpoint);
ACT.navclose=()=>{st.navOpen=false;render();};
/* Messages on a phone: the list and a conversation are 2 screens; ‹ in the conversation header returns to the list */
st.msgPane='list';
const threadBase=ACT.thread;ACT.thread=(el)=>{st.msgPane='thread';threadBase(el);};
ACT.msgback=()=>{st.msgPane='list';render();};
AFTER.push(()=>{const m=document.querySelector('.msgs');if(!m)return;m.classList.toggle('show-thread',st.msgPane==='thread');
 const head=m.children[1]&&m.children[1].firstElementChild;if(mqPhone.matches&&head&&!head.querySelector('[data-act="msgback"]'))head.insertAdjacentHTML('afterbegin',`<button class="iconbtn sm ghost" data-act="msgback" aria-label="All conversations">${ic('chevl',18)}</button>`);});
/* each table knows its narrowest readable width (fixed columns + 240 for the main one) and scrolls inside its box below it */
AFTER.push(()=>{document.querySelectorAll('.tbl,.card:has(>.tr)').forEach(t=>{const h=t.querySelector(':scope>.tr.head')||t.querySelector(':scope>.tr');if(!h)return;let w=0;
 h.querySelectorAll(':scope>.td').forEach(td=>{if(getComputedStyle(td).display==='none')return;w+=td.classList.contains('grow')?(+td.dataset.min||240):(td.getBoundingClientRect().width||parseFloat(td.style.width)||120);});t.style.setProperty('--tmin',(w+16)+'px');});});
function railSidebar(r,nav,activeView){const admin=r.role==='admin';
 return `<aside class="side rail">${navCtl(true)}<div style="height:14px"></div>
  ${nav.map(([v,i,l,b])=>`<a class="nav ${activeView===v?'on':''}" href="#/${r.role}/${v}" title="${l}" aria-label="${l}">${ic(i,18)}${b?`<span class="badge-n ${r.role==='learner'?'alert':''}">${b}</span>`:''}</a>`).join('')}
  <button class="acct" data-act="acct" aria-label="Account menu" title="${admin?'Kateryna Mudryk · Teacher':'Anna Kovalenko · Student'}">${admin?av('Kateryna Mudryk','av28','var(--violet-wash)'):av('Anna Kovalenko','av28',AVC[0])}</button></aside>`;}
ACT.navtoggle=()=>{if(mqNarrow.matches){st.navOpen=!st.navOpen;render();return;}
 st.navCollapsed=!st.navCollapsed;try{localStorage.setItem('learnly-nav',st.navCollapsed?'rail':'full');}catch(e){}render();};

/* ---------- From Olena's Scale project (02.10) ---------- */
/* Assignment waiting for review: where the work is between submit and feedback, and when feedback is due (48 h) */
function reviewSteps(a){const today=a.submittedAt>=D(10,1,0,0),due=new Date(+a.submittedAt+48*36e5),late=!today&&NOW>due;
 const days=Math.max(1,Math.floor((NOW-a.submittedAt)/864e5));
 const step=(cls,label,sub,subCls)=>`<li class="${cls}"><span class="sdot"></span><span class="col gap2"><span class="s med">${label}</span><span class="c ${subCls||'faded'}">${sub}</span></span></li>`;
 return `<div class="col gap10"><span class="label">Status</span><ol class="steps">${step('done','Submitted',`${today?'Today':fmtDay(a.submittedAt)}, ${fmtTime(a.submittedAt)}`)}${step('now','In the review queue',today?'A teacher picks it up next':`${days} days so far`)}${step('',late?'Feedback is late':'Feedback',late?`Was due ${fmtDay(due)}, ${fmtTime(due)}`:`By ${REVIEW_BY}`,late?'red':'')}</ol>
  ${late?`<div class="row gap12" style="flex-wrap:wrap;align-items:center"><span class="c faded grow" style="min-width:220px">Your teacher has been reminded – late reviews go to the top of the teachers’ queue. You get an email when the feedback is ready.</span>${btn('Ask Kateryna M.','secondary btn-sm',`data-act="askteacher" data-a="${a.id}"`,'msg')}</div>`:'<span class="c faded">Teachers reply within 48 h. You get an email when the feedback is ready.</span>'}</div>`;}
/* Course page: the course's next live session, with Join */
function nextLiveCard(c){if(LIVE.course!==c)return '';const soon=liveSoon();
 return `<section class="card row gap16 livecard" style="padding:16px 20px"><span class="typeicon" style="background:var(--violet-wash);color:var(--ink-violet-deep)">${ic('video',18)}</span>
  <span class="col gap2 grow" style="min-width:0"><span class="o violet">Next live session</span><span class="m med">${esc(LIVE.title)}</span><span class="s pencil">Today, 19:00–20:00 · with ${esc(LIVE.host)}</span>${livePrep()}<span class="c faded">${soon?'Starts in 8 min':'Join opens 18:50'} · the recording appears here afterwards</span></span>
  ${soon?btn('Join now','primary','data-act="join"'):btn('Join','secondary','data-act="join" disabled')}</section>`;}

/* Learner Tasks as a board (from Scale). Columns follow the review loop, so a card moves by itself:
   submit → In review, the teacher asks for changes → back to To do, accepts → Done. */
VIEWS['learner:tasks']=()=>{
 const todo=[],review=[],done=[];
 const card=o=>`<a class="tcard" ${o.href?`href="#/${o.href}"`:`data-act="notyet" data-msg="${o.msg}"`}>
   <span class="row gap8"><span class="cdot" style="background:${COURSES[o.course].color}"></span><span class="c faded trunc grow">${COURSES[o.course].title}</span>${ic(o.icon,16,'faded')}</span>
   <span class="m med">${esc(o.title)}</span>
   <span class="row gap8" style="flex-wrap:wrap;row-gap:4px">${o.status}${o.who?`<span class="grow"></span>${av(o.who,'av22','var(--violet-wash)')}`:''}</span></a>`;
 for(const a of Object.values(ASSIGN)){const base={course:a.course,title:a.title,href:'learner/assignment/'+a.id,icon:a.status==='todo'?'pen':'file'};
  if(a.status==='overdue')todo.push({...base,rank:0,status:`<span class="c row gap4 red">${ic('alert',13)}2 days overdue</span><span class="c faded">· you can still submit</span>`});
  else if(a.status==='changes')todo.push({...base,rank:1,status:`<span class="c row gap4 blue">${ic('repeat',13)}Changes requested</span><span class="c faded">· resubmit by ${resubmitBy(a)}</span>`,who:'Kateryna M.'});
  else if(a.status==='todo')todo.push({...base,rank:3,status:`<span class="c row gap4 faded">${ic('clock',13)}Due ${fmtDow(a.due)}</span>`});
  else if(a.status==='waiting'){const today=a.submittedAt>=D(10,1,0,0),due=new Date(+a.submittedAt+48*36e5),late=!today&&NOW>due;
   review.push({...base,status:`<span class="c row gap4 ${late?'red':'faded'}">${ic(late?'alert':'clock',13)}${late?`Feedback was due ${fmtDay(due)}`:`Feedback by ${REVIEW_BY}`}</span>`});}
  else if(a.status==='accepted')done.push({...base,status:`<span class="c row gap4 green">${ic('check',13)}Accepted · ${a.feedback.grade} / 10</span>`,who:'Kateryna M.'});}
 todo.push({course:'pa',title:QUIZ.title,icon:'quiz',rank:2,msg:'The quiz player is not part of this prototype',status:`<span class="c row gap4 amber">${ic('clock',13)}Due today, 23:59</span>`});
 done.push({course:'ux',title:'Research goals',icon:'file',msg:'Accepted on 24 Sep · 9 / 10',status:`<span class="c row gap4 green">${ic('check',13)}Accepted · 9 / 10</span>`,who:'Kateryna M.'});
 todo.sort((x,y)=>x.rank-y.rank);
 const col=(title,list,empty)=>`<section class="tcol" aria-label="${title}"><div class="row gap8 tcol-h"><span class="s semi">${title}</span><span class="tcount">${list.length}</span></div>${list.length?list.map(card).join(''):`<span class="c faded" style="padding:6px 4px">${empty}</span>`}</section>`;
 return `<div class="page"><div class="col gap4"><h1 class="h1">Tasks</h1><p class="m pencil" style="margin:0">Assignments and quizzes from all your courses. Cards move by themselves: you submit → In review, the teacher accepts → Done.</p></div>
  <div class="tboard">${col('To do',todo,'Nothing to do right now')}${col('In review',review,'Nothing is waiting for a teacher')}${col('Done',done,'Nothing accepted yet')}</div></div>`;
};

/* ---------- Product assessment 02.10: student side ---------- */
/* Weekly goal instead of a streak: the student picks the number of days, missing one resets nothing */
st.weekGoal=3;st.weekDone=2;
function weekGoalChip(){const met=st.weekDone>=st.weekGoal;
 return `<button class="chip" data-act="weekgoal" aria-label="Weekly goal, change">${ic(met?'check':'target',14,met?'green':'violet')}${st.weekDone} of ${st.weekGoal} days this week</button>`;}
ACT.weekgoal=(el)=>{openMenu(el,`<div class="c faded" style="padding:8px 14px 4px">Your goal for this week</div>${[2,3,4,5].map(n=>`<button class="mi" data-act="setgoal" data-v="${n}">${n} days${st.weekGoal===n?`<span class="grow"></span>${ic('check',14,'violet')}`:''}</button>`).join('')}<div class="c faded" style="padding:8px 14px;border-top:1px solid var(--rule);margin-top:4px;max-width:240px">Missing a day resets nothing.</div>`);};
ACT.setgoal=(el)=>{st.weekGoal=+el.dataset.v;st.menu=null;render();};
/* Badges are named after real steps; each says what was done and when */
/* Badges as medals (like activity awards): colour by kind, the newest one large, the next one grey with its progress */
const MEDAL={course:['#F7C948','#C98A0B','award'],accepted:['#4CC38A','#1D7A4A','check'],module:['#A08FF6','#4A37C9','layers'],live:['#FF9C8C','#D4493B','video'],next:['#EEECE7','#D6D3CB','layers']};
let medalN=0;
function medal(kind,size,progress){const [a,b,icon]=MEDAL[kind],id='md'+(medalN++),s=size,c=s/2,r=c-8,ir=r-6,ic2=Math.round(s*0.36);
 const ring=progress==null?'':`<circle cx="${c}" cy="${c}" r="${c-2.5}" fill="none" stroke="var(--rule)" stroke-width="4"/><circle cx="${c}" cy="${c}" r="${c-2.5}" fill="none" stroke="var(--ink-violet)" stroke-width="4" stroke-linecap="round" stroke-dasharray="${(2*Math.PI*(c-2.5)).toFixed(1)}" stroke-dashoffset="${(2*Math.PI*(c-2.5)*(1-progress)).toFixed(1)}" transform="rotate(-90 ${c} ${c})"/>`;
 return `<svg class="medal" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient><linearGradient id="${id}h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="${kind==='next'?0:.5}"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>${ring}
  <circle cx="${c}" cy="${c}" r="${r}" fill="url(#${id})"/><ellipse cx="${c}" cy="${c-r*0.38}" rx="${r*0.72}" ry="${r*0.5}" fill="url(#${id}h)"/><circle cx="${c}" cy="${c}" r="${ir}" fill="none" stroke="#fff" stroke-opacity=".4" stroke-width="1.5"/>
  <g transform="translate(${c-ic2/2} ${c-ic2/2}) scale(${ic2/24})" fill="none" stroke="${kind==='next'?'#8C8B86':'#fff'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${P[icon]}</g></svg>`;}
function nextBadgeProgress(){const ml=courseLessons('ux').filter(l=>l.mod===1),ma=Object.values(ASSIGN).filter(x=>x.course==='ux'&&x.mod===1);return {done:ml.filter(l=>l.done).length+ma.filter(x=>x.status==='accepted').length,total:ml.length+ma.length};}
VIEWS['learner:badges']=()=>{
 const earned=[['course','Information Architecture finished','Certificate · 2 Aug'],['course','Design Thinking Basics finished','Certificate · 24 Sep'],['accepted','Research goals accepted','9 / 10 from Kateryna M.'],['module','Module 1 finished: Discovery','UX Research Fundamentals']];
 const pr=nextBadgeProgress();
 /* 06.10 review: no “Dashboard” back link (← in the app bar goes back, and Badges is not a child of Dashboard); the badge in progress comes first */
 return `<div class="page" style="max-width:1080px">
  <div class="col gap4"><h1 class="h1">Badges</h1><p class="m pencil" style="margin:0">Each badge marks a step you finished. <a class="link" href="#/learner/certificates" style="display:inline;font-size:inherit">Certificates</a> come separately, when a whole course is done.</p></div>
  <section class="card badge-next">${medal('next',88,pr.done/pr.total)}<div class="col gap6" style="min-width:0"><span class="o faded">Next · ${pr.done} of ${pr.total} steps</span><span class="m med">Module 2 finished: Interviews</span><span class="s pencil">${nextBadgeLine()}</span></div></section>
  <section class="card badge-hero">${medal('live',112)}<div class="col gap6" style="min-width:0"><span class="o violet">Latest · 30 Sep</span><h2 class="h2">First live class attended</h2><p class="m pencil" style="margin:0">Live class: Writing an interview guide</p></div></section>
  <div class="medals">${earned.map(([k,t,s])=>`<div class="card medal-card">${medal(k,80)}<span class="m med">${t}</span><span class="c faded">${s}</span></div>`).join('')}</div></div>`;};
/* 06.10 review: the “2 certificates” chip opens the certificates themselves, each with its own download;
   finished courses already live in My courses → Completed. Newest first, the same card as on a finished course */
const CERT_ORDER=['dt','ia'];
const certSlug=C=>C.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
VIEWS['learner:certificates']=()=>`<div class="page" style="max-width:1080px">
  <div class="col gap4"><h1 class="h1">Certificates</h1><p class="m pencil" style="margin:0">1 for each course you finish. Download the PDF or add it to your LinkedIn profile.</p></div>
  <div class="certs">${CERT_ORDER.map(id=>COURSES[id]).filter(C=>C&&C.completed).map(C=>`<section class="card pad col gap16">
   <div class="cert" style="--cert:${C.color}"><span class="row gap8 c faded">${ic('award',14)}Learnly · certificate of completion</span><span class="h2">Anna Kovalenko</span><span class="m">finished ${esc(C.title)}</span><span class="c faded">${plural(C.modules.length,'module')} · ${C.cert} 2026</span></div>
   <div class="row gap8" style="flex-wrap:wrap">${btn('Download PDF','secondary',`data-act="notyet" data-msg="certificate-${certSlug(C)}.pdf downloaded (simulated)"`,'dl')}${btn('Add to LinkedIn','ghost','data-act="notyet" data-msg="LinkedIn opens with the certificate filled in (simulated)"')}</div></section>`).join('')}</div></div>`;
/* What is left for the Module 2 badge, from the same data as the module progress on an accepted assignment */
const andList=xs=>xs.length<3?xs.join(' and '):xs.slice(0,-1).join(', ')+' and '+xs[xs.length-1];
function nextBadgeLine(){const ml=courseLessons('ux').filter(l=>l.mod===1&&!l.done),ma=Object.values(ASSIGN).filter(x=>x.course==='ux'&&x.mod===1&&x.status!=='accepted'),n=ml.length+ma.length,q=t=>`“${esc(t)}”`;
 if(!n)return 'All steps are done: the badge is yours.';
 const parts=[];if(ma.length)parts.push(`${andList(ma.map(x=>q(x.title)))} accepted`);if(ml.length)parts.push(`${andList(ml.map(l=>q(l.title)))} watched`);
 return `${n} step${n>1?'s':''} left: ${parts.join(', ')}.`;}
/* While waiting for review: the next lesson, or a clear stop for today */
st.waitDone={};
function waitNext(a){if(st.waitDone[a.id])return '';const n=nextLesson(a.course);if(!n)return '';const left=Math.round(n.min*(1-(n.watched||0)/100));
 return `<section class="card row gap16 livecard" style="padding:16px 20px"><span class="typeicon" style="background:var(--violet-wash);color:var(--ink-violet-deep)">${ic('play',18)}</span><span class="col gap2 grow" style="min-width:0"><span class="o violet">While you wait</span><span class="m med">${esc(n.title)}</span><span class="s pencil">${COURSES[n.course].title} · ${left} min left</span></span><span class="row gap8" style="flex-wrap:wrap">${btn('I’m done for today','secondary',`data-act="waitdone" data-a="${a.id}"`)}${btn('Continue','primary',`data-act="nav" data-to="learner/lesson/${n.id}"`,'play')}</span></section>`;}
ACT.waitdone=(el)=>{st.waitDone[el.dataset.a]=true;render();toast('Good work today. You’ll get an email when the feedback is ready.');};
/* Late review: ask the teacher with a soft message the student can edit */
ACT.askteacher=(el)=>{const a=ASSIGN[el.dataset.a];st.msgThread='olena';st.msgOpenThread=true;st.msgPrefill=`Hi Kateryna, just checking in on my feedback for “${a.title}”. No rush – let me know if the timing has changed.`;go('learner/messages');};
AFTER.push(()=>{if(!st.msgPrefill)return;const i=document.querySelector('form[data-form="msg"] input[name="m"]');if(i){i.value=st.msgPrefill;i.focus();i.setSelectionRange(i.value.length,i.value.length);}st.msgPrefill=null;});
/* Accepted: the module moves forward, and the next step is 1 click away */
function acceptedProgress(a){const C=COURSES[a.course],mi=a.mod,ml=courseLessons(a.course).filter(l=>l.mod===mi),ma=Object.values(ASSIGN).filter(x=>x.course===a.course&&x.mod===mi);
 const total=ml.length+ma.length,done=ml.filter(l=>l.done).length+ma.filter(x=>x.status==='accepted').length;
 const n=nextLesson(a.course),left=n?Math.round(n.min*(1-(n.watched||0)/100)):0;
 return `<div class="col gap10" style="border-top:1px solid var(--rule);padding-top:16px"><div class="row between" style="gap:12px;flex-wrap:wrap"><span class="s med">Module ${mi+1} · ${esc(C.modules[mi])}</span><span class="s semi">${done} of ${total} done <span class="c faded" style="font-weight:400">· was ${done-1}</span></span></div>${bar(Math.round(done/total*100))}
  ${n?`<div class="row gap12" style="flex-wrap:wrap"><span class="s pencil grow">Next: ${esc(n.title)} · ${left} min</span>${btn('Continue','primary',`data-act="nav" data-to="learner/lesson/${n.id}"`,'play')}</div>`:''}</div>`;}

/* ---------- Back / forward in the app bar. The prototype keeps its own route history:
   inside the artifact the browser's Back never reaches the page ---------- */
const NAVH={list:[],i:-1,jump:null};
function navPath(){return typeof CUR!=='undefined'?CUR:(location.hash||'#/learner/dashboard').slice(2);}
function navRecord(){const p=navPath();
 if(NAVH.jump!==null){NAVH.i=NAVH.jump;NAVH.jump=null;return;}
 if(NAVH.list[NAVH.i]===p)return;
 NAVH.list=NAVH.list.slice(0,NAVH.i+1);NAVH.list.push(p);NAVH.i=NAVH.list.length-1;}
const renderBase=render;
render=function(routeChanged){navRecord();if(routeChanged){st.notifOpen=false;st.navOpen=false;st.evDirty=false;st.keep=null;st.msgPane=st.msgOpenThread?'thread':'list';st.msgOpenThread=false;}
 const out=renderBase(routeChanged),m=navMode();
 document.body.classList.toggle('nav-collapsed',m==='rail');document.body.classList.toggle('nav-mobile',m==='none');document.body.classList.toggle('drawer-open',m!=='full'&&st.navOpen);return out;};
function navJump(d){const j=NAVH.i+d;if(j<0||j>=NAVH.list.length)return;const p=NAVH.list[j];
 if(p.startsWith('learner/courses'))st.courseTab=p.includes('?done')?'done':'progress';
 NAVH.jump=j;go(p);}
ACT.navback=()=>navJump(-1);
ACT.navfwd=()=>navJump(1);
function navCtl(rail){const l=rail?'Show sidebar':navMode()==='full'?'Hide sidebar':'Close sidebar';
 return `<button class="iconbtn sm ghost${rail?'':' tip'}" data-act="navtoggle" aria-label="${l}" ${rail?`title="${l}"`:`data-tip="${l}"`}>${ic('panel',18)}</button>`;}

/* ---------- Product assessment 02.10: batch D ---------- */
/* Live class preparation: Maria asked to bring the script from Lesson 4, so link the student's own file */
function livePrep(){const a=ASSIGN.a2;return `<span class="c row gap6 prep">${ic('clip',12,'violet')}<span>Bring <a class="link c" href="#/learner/assignment/a2" title="${esc(a.file?a.file.name:a.title)}">your interview script</a> from Lesson 4</span></span>`;}
/* Deadline reminder: an email the evening before at 19:00, only while the work isn't submitted.
   The teacher switches it per assignment (editor → Submission); the student can turn it off for 1 assignment */
for(const x of Object.values(ACTS))if(x.type==='assignment'&&x.remind===undefined)x.remind=true;
const asgAct=a=>Object.values(ACTS).find(x=>x.type==='assignment'&&(x.name===a.title||x.title===a.title));
st.remindOff={};
function asgReminder(a){const x=asgAct(a);if(a.status!=='todo'||(x&&!x.remind))return '';
 const d=new Date(+a.due);d.setDate(d.getDate()-1);d.setHours(19,0,0,0);const off=st.remindOff[a.id];
 return `<span class="c faded row gap6 remline">${ic('mail',12)}<span>${off?'No reminder email for this assignment':`We’ll email you on ${fmtDow(d)} at 19:00 if it isn’t submitted`}</span></span><button class="link c" style="align-self:flex-start" data-act="remindoff" data-a="${a.id}">${off?'Turn the reminder back on':'Turn off for this assignment'}</button>`;}
ACT.remindoff=(el)=>{const id=el.dataset.a;st.remindOff[id]=!st.remindOff[id];render();toast(st.remindOff[id]?'No reminder email for this assignment':'The reminder is back on');};
/* Course finished: the certificate, a post to finish in her own words, a next course only when one genuinely fits.
   Information Architecture → Card Sorting fits; Design Thinking Basics has no fitting course, so nothing is pushed */
const NEXT_FIT={ia:{title:'Card Sorting',why:'Card sorting tests a structure like the ones you built in Information Architecture with real people: they group the cards, you see where your labels confuse them.'}};
st.post={};
const learnerCourseBase=VIEWS['learner:course'];
VIEWS['learner:course']=(r)=>{const C=COURSES[r.id];if(!C||!C.completed)return learnerCourseBase(r);
 const mods=C.modules,list=mods.slice(0,-1).join(', ')+' and '+mods[mods.length-1],nf=NEXT_FIT[r.id];
 const post=st.post[r.id]!==undefined?st.post[r.id]:`I finished ${C.title} on Learnly: ${plural(mods.length,'module')} – ${list}.\nWhat I’ll use most: `;
 return `<div class="page" style="max-width:820px">
  <div class="row gap16">${cover(r.id,56,56)}<div class="col gap4" style="min-width:0"><span class="o violet">Course finished · ${C.cert}</span><h1 class="h1">${esc(C.title)}</h1><p class="m pencil" style="margin:0">${plural(mods.length,'module')}: ${esc(list)}.</p></div></div>
  <section class="card pad24 col gap16"><h3 class="h3">Your certificate</h3>
   <div class="cert" style="--cert:${C.color}"><span class="row gap8 c faded">${ic('award',14)}Learnly · certificate of completion</span><span class="h2">Anna Kovalenko</span><span class="m">finished ${esc(C.title)}</span><span class="c faded">${plural(mods.length,'module')} · ${C.cert} 2026</span></div>
   <div class="row gap8" style="flex-wrap:wrap">${btn('Download PDF','primary','data-act="notyet" data-msg="Certificate PDF downloaded (simulated)"','dl')}${btn('Add to LinkedIn','secondary','data-act="notyet" data-msg="LinkedIn opens with the certificate filled in (simulated)"')}</div></section>
  <section class="card pad24 col gap12"><div class="col gap4"><h3 class="h3">A post for LinkedIn</h3><p class="s pencil" style="margin:0">Finish the last line in your own words. Nothing is posted from here.</p></div>
   <textarea class="textarea" rows="4" data-post="${r.id}" aria-label="Post text">${esc(post)}</textarea>
   <div class="row gap8">${btn('Copy text','secondary',`data-act="copypost" data-c="${r.id}"`)}</div></section>
  ${nf?`<section class="card pad24 col gap12"><span class="o faded">A course that fits</span><span class="m med">${esc(nf.title)}</span><p class="s pencil" style="margin:0">${esc(nf.why)}</p><div>${btn('See the course','secondary','data-act="notyet" data-msg="The course catalog is not part of this prototype"')}</div></section>`:''}
 </div>`;};
document.addEventListener('input',e=>{const t=e.target.closest&&e.target.closest('textarea[data-post]');if(t)st.post[t.dataset.post]=t.value;});
ACT.copypost=(el)=>{const t=document.querySelector(`textarea[data-post="${el.dataset.c}"]`);if(!t)return;
 const fail=()=>{t.focus();t.select();toast('The text is selected – press ⌘C to copy');};
 try{navigator.clipboard.writeText(t.value).then(()=>toast('Copied. Paste it into a new LinkedIn post.'),fail);}catch(e){fail();}};
/* ---------- Messages as in Figma (02.10 review, 05.10): list with search (and tabs for teachers), time and role on every row,
   the thread with day separators, sender names, an attached file, a system event and a composer with attach ---------- */
const msgDay=t=>/^Mon/.test(t)?'Mon, 28 Sep':/^yesterday/i.test(t)?'Yesterday':'Today';
const msgTime=t=>{const m=String(t).match(/(\d{1,2}:\d{2})/);return m?m[1]:(t==='now'?'now':'');};
const listTime=t=>/^Mon/.test(t)?'Mon':/^yesterday/i.test(t)?'Yesterday':(t==='now'?'now':msgTime(t));
const threadsBase=threads;
threads=function(role){const T=threadsBase(role);if(T.__v2)return T;Object.defineProperty(T,'__v2',{value:true});
 if(role==='admin'){
  if(T.iryna){T.iryna.cohort='September cohort';T.iryna.msgs=[['them','Hi! Here is my recruiting plan. I wasn’t sure how many people to invite, so I planned 5 interviews and 2 backups.','Mon, 18:20',{file:['recruiting-plan-v1.pdf','PDF · 240 KB']}],['sys','You requested changes on Interview recruiting plan','yesterday, 17:05',{link:['Open review','data-act="msgq" data-tab="changes"']}],['me','Good screener questions. The main fix: all 5 people are your colleagues. Invite at least 3 people from outside your company. Details are in the review.','yesterday, 17:06'],['them','Thanks! Can I send the new version on Monday?','14:48']];}
  if(T.anna)T.anna.cohort='September cohort';
 }else{
  if(T.maria){T.maria.sub='Teacher · UX Research Fundamentals';T.maria.about={icon:'cal',t:'Live class: Running your first interview',s:'Today, 19:00 – 20:00 · Join opens 18:50',btn:['Open in calendar','data-act="nav" data-to="learner/calendar"']};}
  if(T.olena){T.olena.sub='Reviewer · UX Research Fundamentals';T.olena.about=()=>{const a=ASSIGN.a2,w=a.status==='waiting',late=w&&NOW>new Date(+a.submittedAt+48*36e5);
   return {icon:'file',t:'Assignment · '+a.title,s:'Module 2 · Interviews · '+(w?(late?'feedback was due 30 Sep':'waiting for review'):a.status==='accepted'?'accepted':'changes requested'),badge:w?(late?'Feedback is late':'Waiting for review'):a.status==='accepted'?'Accepted':'Changes requested',cls:w?(late?'b-over':'b-neutral'):a.status==='accepted'?'b-accepted':'b-changes',btn:['Open assignment','data-act="nav" data-to="learner/assignment/a2"']};};}
  if(T.cohort){T.cohort.name='UX Research';T.cohort.sub='Course group · 48 members';T.cohort.group=true;}
  if(T.olena){const k=T.olena;delete T.olena;T.olena=k;}/* newest first, as in Figma: Maria 12:31, the group 10:15, Kateryna yesterday */
 }
 return T;};
st.msgTab='all';st.msgQ='';
const msgLast=v=>{const m=[...v.msgs].reverse().find(x=>x[0]!=='sys')||v.msgs[v.msgs.length-1];return {text:(m[0]==='me'?'You: ':'')+m[1],time:m[2]};};
const msgTabs=[['all','All'],['unread','Unread'],['learners','Learners'],['team','Team']];
const msgIn=(v,tab)=>tab==='unread'?!!v.unread:tab==='learners'?/^Student/.test(v.sub):tab==='team'?/your team/.test(v.sub):true;
msgView=function(role,title){const T=threads(role);const sk=role==='admin'?'adminThread':'msgThread';const cur=T[st[sk]]?st[sk]:Object.keys(T)[0];const t=T[cur];const ab=typeof t.about==='function'?t.about():t.about;
 const admin=role==='admin',tab=admin?st.msgTab:'all',unread=Object.values(T).filter(v=>v.unread).length,q=st.msgQ.trim().toLowerCase();
 const rows=Object.entries(T).filter(([k,v])=>msgIn(v,tab)).map(([k,v])=>{const L=msgLast(v),hay=(v.name+' '+v.sub+' '+L.text).toLowerCase();
  return `<button class="conv ${k===cur?'on':''}" data-act="thread" data-v="${k}" data-search="${esc(hay)}" ${q&&!hay.includes(q)?'hidden':''}>${av(v.name,'av36')}<span class="col gap2 grow" style="min-width:0"><span class="row gap8"><span class="m med trunc grow">${esc(v.name)}</span><span class="c ${v.unread?'violet':'faded'}" style="flex:none">${listTime(L.time)}</span></span><span class="c pencil trunc">${esc(v.sub)}</span><span class="row gap8"><span class="s ${v.unread?'med':'pencil'} trunc grow" ${v.unread?'style="color:var(--ink)"':''}>${esc(L.text)}</span>${v.unread?'<span class="udot" style="margin:0" aria-label="Unread"></span>':''}</span></span></button>`;}).join('')||`<span class="c faded" style="padding:12px 16px">No conversations here</span>`;
 let lastDay=null;const body=t.msgs.map(([who,txt,time,x])=>{let h='';const day=msgDay(time);if(day!==lastDay){h+=`<div class="mday">${day}</div>`;lastDay=day;}
  if(who==='sys')return h+`<div class="msys">${ic('file',14)}<span>${esc(txt)} · ${msgTime(time)}</span>${x&&x.link?`<button class="link c" ${x.link[1]}>${x.link[0]}</button>`:''}</div>`;
  if(who==='me')return h+`<div class="mrow me"><div class="col gap4" style="align-items:flex-end;min-width:0"><span class="row gap8"><span class="s med">You</span><span class="c faded">${msgTime(time)}</span></span><div class="bubble me">${esc(txt)}</div></div></div>`;
  let name=t.name.split(' ')[0],text=txt;const gm=t.group&&txt.match(/^([^:]{1,20}):\s(.*)$/);if(gm){name=gm[1];text=gm[2];}
  return h+`<div class="mrow">${av(gm?name:t.name,'av28')}<div class="col gap4" style="min-width:0"><span class="row gap8"><span class="s med">${esc(name)}</span><span class="c faded">${msgTime(time)}</span></span><div class="bubble">${esc(text)}${x&&x.file?`<span class="mfile">${ic('file',16,'faded')}<span class="col"><span class="s med">${x.file[0]}</span><span class="c faded">${x.file[1]}</span></span></span>`:''}</div></div></div>`;}).join('');
 const student=/^Student/.test(t.sub);
 return `<div class="page"><div class="row gap12" style="align-items:flex-start"><div class="col gap4 grow"><h1 class="h1">${title}</h1><p class="m pencil" style="margin:0">${admin?'Each conversation shows who the person is, their course and the work it is about.':'Your teachers, reviewers and course group.'}</p></div>${admin?btn('New message','secondary','data-act="notyet" data-msg="Starting a new conversation is not part of this prototype"'):''}</div>
 <div class="card msgs" style="overflow:hidden">
  <div class="mlist"><div class="mlist-top"><label class="input" style="height:36px">${ic('search',16,'faded')}<input data-msgsearch value="${esc(st.msgQ)}" placeholder="${admin?'Search people, courses or tasks':'Search messages'}" aria-label="Search conversations"></label>
   ${admin?`<div class="tabs mtabs">${msgTabs.map(([v,l])=>`<button class="tab ${tab===v?'on':''}" data-act="msgtab" data-v="${v}">${l}${v==='unread'&&unread?`<span class="count">${unread}</span>`:''}</button>`).join('')}</div>`:''}</div>
   <div class="mrows">${rows}</div></div>
  <div class="col mthread"><div class="mhead">${av(t.name,'av40')}<span class="col gap2 grow" style="min-width:0"><span class="h3 trunc">${esc(t.name)}</span><span class="s pencil trunc">${esc(t.sub+(t.cohort?' · '+t.cohort:''))}</span></span>${admin&&student?btn('View progress','secondary btn-sm',`data-act="searchgo" data-student="${esc(t.name)}"`):''}${admin?`<button class="iconbtn sm ghost" data-act="notyet" data-msg="Mute and archive are not part of this prototype" aria-label="More">${ic('more',18)}</button>`:''}</div>
   ${ab?`<div class="mabout"><span class="typeicon">${ic(ab.icon||'file',18,'faded')}</span><span class="col gap2 grow" style="min-width:0"><span class="s med trunc">${esc(ab.t)}</span><span class="c faded trunc">${esc(ab.s)}</span></span>${ab.badge?`<span class="badge ${ab.cls}"><i></i>${esc(ab.badge)}</span>`:''}${ab.btn?btn(ab.btn[0],'secondary btn-sm',ab.btn[1]):btn('Open in review queue','secondary btn-sm',ab.act)}</div>`:''}
   <div class="mbody">${body}</div>
   <form class="mcompose" data-form="msg" data-role="${role}" data-thread="${cur}"><button type="button" class="iconbtn sm ghost" data-act="notyet" data-msg="Attachments are not part of this prototype" aria-label="Attach a file">${ic('clip',18)}</button><label class="input grow"><input name="m" placeholder="Write to ${esc(t.name.split(' ')[0])}…" autocomplete="off"></label>${btn('Send','primary','type="submit"')}</form></div></div></div>`;};
ACT.msgtab=(el)=>{st.msgTab=el.dataset.v;render();};
document.addEventListener('input',e=>{const i=e.target.closest&&e.target.closest('[data-msgsearch]');if(!i)return;st.msgQ=i.value;const q=i.value.trim().toLowerCase();document.querySelectorAll('.mrows .conv').forEach(c=>{c.hidden=!!q&&!c.dataset.search.includes(q);});});
AFTER.push(()=>{const b=document.querySelector('.mbody');if(b)b.scrollTop=b.scrollHeight;});

/* ---------- Events list as in Figma (06.10): Upcoming / Drafts / Past, search, Course and Type filters,
   the type and host under the title, registrations, a row menu; checkboxes select rows for the bulk bar.
   Below 1440 px Repeat and Course hide and their text moves under the date and the title, so titles keep their width.
   Upcoming lists every future event, drafts included (Drafts is the subset); Past holds the 12 sessions of September ---------- */
const EV_TYPES=[['Live class','video'],['Q&A','cal'],['Community','users']];
const EV_X={e1:{type:'Live class',host:'Maria Ivanova',cap:40},e2:{type:'Live class',host:'Maria Ivanova',reg:31,cap:40},e3:{type:'Community',reg:54},e4:{type:'Q&A',host:'Ihor Petrenko',reg:12}};
EVENTS.forEach(e=>Object.assign(e,EV_X[e.id]));
const CSHORT={ux:'UX Research',fig:'Figma Prototyping',pa:'Product Analytics',sd:'Service Design'};
const PAST_EVENTS=[
 ['p1','Writing an interview guide','Live class','Maria Ivanova','2026-09-30','19:00','',['ux'],33,38,0],
 ['p2','Recruiting participants','Live class','Maria Ivanova','2026-09-23','19:00','',['ux'],35,40,0],
 ['p3','Office hours: Product Analytics','Q&A','Ihor Petrenko','2026-09-22','17:00','Every 2 weeks · Tue',['pa'],9,12,0],
 ['p4','Portfolio review night','Community','','2026-09-25','19:00','',[],24,31,15],
 ['p5','Smart animate clinic','Q&A','Marta Koval','2026-09-24','18:30','',['fig'],14,19,0],
 ['p6','Prototype for a test: live demo','Live class','Marta Koval','2026-09-18','18:00','',['fig'],22,26,0],
 ['p7','Reading a dashboard','Live class','Ihor Petrenko','2026-09-17','19:00','',['pa'],19,27,0],
 ['p8','Writing research goals','Live class','Maria Ivanova','2026-09-16','19:00','',['ux'],37,40,0],
 ['p9','Kick-off: September cohort','Community','','2026-09-14','18:00','',[],58,66,0],
 ['p10','Variables and modes in practice','Live class','Marta Koval','2026-09-10','18:30','',['fig'],21,30,20],
 ['p11','Office hours: Product Analytics','Q&A','Ihor Petrenko','2026-09-08','17:00','Every 2 weeks · Tue',['pa'],11,14,0],
 ['p12','Onboarding seminar','Community','','2026-09-02','18:00','Every month',[],41,47,0]
].map(([id,title,type,host,start,from,rep,linked,att,reg,amount])=>({id,title,type,host,start,from,to:pad2((+from.slice(0,2)+1)%24)+from.slice(2),rep:rep||'Does not repeat',linked,att,reg,price:amount?'paid':'free',amount:String(amount||''),status:'ended',past:true}));
st.evTab='upcoming';st.evQ='';st.evCourse='';st.evType='';st.evSel=new Set();
const evType=e=>e.type||'Live class';
const evIconOf=e=>(EV_TYPES.find(t=>t[0]===evType(e))||EV_TYPES[0])[1];
const evHostLine=e=>`${evType(e)} · ${e.host?'host '+e.host:'online'}`;
const evCourseShort=e=>{const l=e.linked||[];return l.length?(CSHORT[l[0]]||COURSES[l[0]]?.title||l[0])+(l.length>1?' + '+(l.length-1):''):'–';};
const evRepShort=e=>{if(e.rep)return e.rep;if(e.repeat!=='weekly')return repeatLabel(e);const s=isoToDate(e.start),days=e.days&&e.days.length?e.days:s?[DOW[s.getDay()]]:[];
 return (e.every>1?`Every ${e.every} weeks${days.length?' · '+days.join(', '):''}`:days.length?'Every '+days.join(', '):'Every week')+(e.ends==='after'?` · ${e.count} sessions`:'');};
const evWhenCell=e=>{const s=isoToDate(e.start);if(!s)return '<span class="s faded">No date yet</span>';
 return s.toDateString()===NOW.toDateString()?`<span class="s violet">Today, ${e.from}</span>`:`<span class="s">${fmtDow(s)} · ${e.from}</span>`;};
const evRegCell=e=>e.past?`${e.att} of ${e.reg}`:e.status==='draft'||e.reg==null?'–':e.cap?`${e.reg} of ${e.cap}`:String(e.reg);
const evPrice=e=>e.price==='paid'&&+e.amount?'$'+Math.round(+e.amount):'Free';
const evLists=()=>{const up=EVENTS.slice().sort((a,b)=>(a.start||'9').localeCompare(b.start||'9'));
 return {upcoming:up,drafts:up.filter(e=>e.status==='draft'),past:PAST_EVENTS.slice().sort((a,b)=>b.start.localeCompare(a.start))};};
const evVisible=()=>{const q=st.evQ.trim().toLowerCase();return evLists()[st.evTab].filter(e=>(!q||[e.title,evType(e),e.host||''].join(' ').toLowerCase().includes(q))&&(!st.evCourse||(e.linked||[]).includes(st.evCourse))&&(!st.evType||evType(e)===st.evType));};
const evFind=id=>EVENTS.find(e=>e.id===id)||PAST_EVENTS.find(e=>e.id===id);
VIEWS['admin:events']=()=>{const tab=st.evTab,LS=evLists(),list=evVisible(),past=tab==='past';
 const COLS=[['',44],['Event',0],[past?'Date':'Next session',150,'ev-when'],['Repeat',170,'ev-wide'],['Course',134,'ev-wide'],[past?'Attended':'Registered',100],['Price',62],['Status',110],['',44]];
 const cell=(i,inner,x='')=>`<div class="td ${COLS[i][1]?'':'grow'} ${COLS[i][2]||''}" ${COLS[i][1]?`style="width:${COLS[i][1]}px"`:'data-min="200"'} ${x}>${inner}</div>`;
 const allOn=list.length&&list.every(e=>st.evSel.has(e.id)),someOn=list.some(e=>st.evSel.has(e.id));
 const status=e=>e.past?'<span class="badge b-neutral"><i></i>Ended</span>':stBadge(e.status==='published'?'published':'draft');
 return `<div class="page" style="max-width:none">
 <div class="row gap12"><div class="col gap4 grow"><h1 class="h1">Events</h1><p class="m pencil" style="margin:0">Live classes, seminars and office hours</p></div>${btn('New event','primary','data-act="nav" data-to="admin/event/new"','plus')}</div>
 <div class="tabs">${[['upcoming','Upcoming'],['drafts','Drafts'],['past','Past']].map(([v,l])=>`<button class="tab ${tab===v?'on':''}" data-act="evtab" data-v="${v}">${l}<span class="count">${LS[v].length}</span></button>`).join('')}</div>
 <div class="row gap8"><label class="search" style="width:280px">${ic('search',16)}<input data-evq placeholder="Search events" value="${esc(st.evQ)}" aria-label="Search events"></label>
  <button class="btn btn-secondary" data-act="evfilter" data-k="evCourse">${st.evCourse?'Course: '+esc(CSHORT[st.evCourse]):'Course'}${ic('down',14)}</button><button class="btn btn-secondary" data-act="evfilter" data-k="evType">${st.evType?'Type: '+esc(st.evType):'Type'}${ic('down',14)}</button>${st.evCourse||st.evType||st.evQ?`<button class="link" data-act="evclear">Clear all</button>`:''}</div>
 <div class="tbl"><div class="tr head">${COLS.map(([k],i)=>cell(i,i===0?cbx(allOn,!allOn&&someOn,'data-act="evselall" aria-label="Select all"'):`<span class="o faded">${k}</span>`)).join('')}</div>
 ${list.map(e=>{const on=st.evSel.has(e.id);return `<div class="tr ${on?'sel':''}" ${e.past?'style="cursor:default"':`data-act="nav" data-to="admin/event/${e.id}"`}>${cell(0,cbx(on,false,`data-act="evsel" data-id="${e.id}" aria-label="Select ${esc(e.title)}"`),`data-act="evsel" data-id="${e.id}"`)}
  ${cell(1,`<span class="typeicon">${ic(evIconOf(e),18)}</span><span class="col gap2" style="min-width:0"><span class="m med trunc">${esc(e.title||'Untitled event')}</span><span class="c faded trunc">${esc(evHostLine(e))}${(e.linked||[]).length?`<span class="ev-crs2"> · ${esc(evCourseShort(e))}</span>`:''}</span></span>`)}
  ${cell(2,`<span class="col gap2" style="min-width:0">${evWhenCell(e)}<span class="c faded trunc ev-rep2">${esc(evRepShort(e))}</span></span>`)}${cell(3,`<span class="s pencil trunc">${esc(evRepShort(e))}</span>`)}
  ${cell(4,`<span class="s pencil trunc">${esc(evCourseShort(e))}</span>`)}${cell(5,`<span class="s">${evRegCell(e)}</span>`)}${cell(6,`<span class="s">${evPrice(e)}</span>`)}${cell(7,status(e))}
  ${cell(8,`<button class="iconbtn sm ghost" data-act="evmore" data-id="${e.id}" aria-label="More actions">${ic('more',16)}</button>`)}</div>`;}).join('')||`<div class="empty"><span class="h3">No events match</span><button class="link" data-act="evclear">Clear filters</button></div>`}
 <div class="tfoot"><span class="s pencil">${list.length?`1–${list.length} of ${list.length}`:'0 events'}${tab==='upcoming'?` · ${LS.past.length} past events`:''}</span></div></div>
 ${st.evSel.size?`<div class="bulkbar"><span class="semi">${st.evSel.size} selected</span><span class="sep"></span><button class="bb" data-act="evdupsel">${ic('plus',14)}Duplicate as drafts</button><button class="bb" data-act="evexport">${ic('dl',14)}Export ${past?'attendance':'registrations'}</button><button class="bb" data-act="evclearsel" aria-label="Clear selection">${ic('x',16)}</button></div>`:''}</div>`;};
ACT.evtab=(el)=>{st.evTab=el.dataset.v;st.evSel.clear();render();};
ACT.evclear=()=>{st.evCourse='';st.evType='';st.evQ='';render();};
ACT.evfilter=(el)=>{const k=el.dataset.k;const opts=k==='evCourse'?['ux','fig','pa'].map(c=>[c,CSHORT[c]]):EV_TYPES.map(t=>[t[0],t[0]]);
 openMenu(el,`<button class="mi" data-act="evset" data-k="${k}" data-v="">All</button>`+opts.map(([v,l])=>`<button class="mi" data-act="evset" data-k="${k}" data-v="${esc(v)}">${st[k]===v?ic('check',14,'violet'):'<span style="width:14px"></span>'}${esc(l)}</button>`).join(''),'evfilter',{w:220});};
ACT.evset=(el)=>{st[el.dataset.k]=el.dataset.v;st.menu=null;render();};
document.addEventListener('input',e=>{if(e.target.dataset&&e.target.dataset.evq!==undefined){st.evQ=e.target.value;render();const i=document.querySelector('[data-evq]');if(i){i.focus();i.setSelectionRange(i.value.length,i.value.length);}}});
ACT.evsel=(el)=>{const id=el.dataset.id;st.evSel.has(id)?st.evSel.delete(id):st.evSel.add(id);render();};
ACT.evselall=()=>{const L=evVisible(),on=L.every(e=>st.evSel.has(e.id));L.forEach(e=>on?st.evSel.delete(e.id):st.evSel.add(e.id));render();};
ACT.evclearsel=()=>{st.evSel.clear();render();};
const evDup=src=>{const c=Object.assign(NEW_EVENT(),JSON.parse(JSON.stringify(src)),{id:'e'+Date.now().toString(36)+Math.floor(Math.random()*1e3),title:(src.title||'Untitled event')+' (copy)',status:'draft',reg:null});
 if(src.past){c.start=NEW_EVENT().start;delete c.rep;delete c.att;delete c.past;}EVENTS.push(c);return c;};
ACT.evdupsel=()=>{const ids=[...st.evSel];ids.forEach(id=>evDup(evFind(id)));st.evSel.clear();render();toast(`${ids.length} draft${ids.length>1?'s':''} created`,'Show drafts',()=>{st.evTab='drafts';render();});};
ACT.evexport=()=>{const L=[...st.evSel].map(evFind),past=L.some(e=>e.past),n=L.reduce((s,e)=>s+(e.past?e.att:(e.reg||0)),0);st.evSel.clear();render();toast(`${past?'attendance':'registrations'}.csv · ${n} ${n===1?'person':'people'}`);};
ACT.evmore=(el)=>{const e=evFind(el.dataset.id);if(!e)return;
 const items=e.past?[['dl','Download attendance','evattend'],['plus','Duplicate as a draft','evdup']]
  :[['pen','Edit event','evedit'],['plus','Duplicate as a draft','evdup'],e.status==='published'?['link2','Copy registration link','evlink']:['trash','Delete draft','evdel']];
 openMenu(el,items.map(([i,l,a])=>`<button class="mi" data-act="${a}" data-id="${e.id}">${ic(i,14)}${l}</button>`).join(''),'evmore',{w:240});};
ACT.evedit=(el)=>{st.menu=null;go('admin/event/'+el.dataset.id);};
ACT.evdup=(el)=>{st.menu=null;const c=evDup(evFind(el.dataset.id));render();toast(`“${c.title}” is in Drafts`,'Open',()=>go('admin/event/'+c.id));};
ACT.evlink=(el)=>{st.menu=null;renderLayer();const e=evFind(el.dataset.id);const url='https://learnly.app/events/'+e.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
 try{const p=navigator.clipboard&&navigator.clipboard.writeText(url);p&&p.catch(()=>{});}catch(_){}toast('Registration link copied');};
ACT.evdel=(el)=>{st.menu=null;const i=EVENTS.findIndex(e=>e.id===el.dataset.id);if(i<0)return;const[e]=EVENTS.splice(i,1);st.evSel.delete(e.id);render();toast(`“${e.title}” deleted`,'Undo',()=>{EVENTS.splice(i,0,e);render();});};
ACT.evattend=(el)=>{st.menu=null;renderLayer();const e=evFind(el.dataset.id);toast(`attendance-${e.start}.csv · ${e.att} of ${e.reg} came`);};

/* ---------- Learner screens brought up to Figma (06.10) ---------- */
/* dashboard: My courses lists only the courses in progress (06.10): the dashboard answers “what now”. Finished courses live in
   My courses · Completed and on the Certificates page; the sidebar already opens My courses, the catalog is not part of this cut */
function dashCourses(){const list=['ux','fig','pa'];
 const rows=list.map(c=>{const s=courseStats(c);const extra=c==='pa'?'<span class="amber trunc">· Quiz due today</span>':`<span class="faded trunc">· ${fmtLeft(s.leftMin)}</span>`;
   return `<a class="row gap12" href="#/learner/course/${c}" style="padding:12px 16px 12px 20px">${cover(c,40,40)}<span class="col gap6 grow" style="min-width:0"><span class="m med trunc">${COURSES[c].title}</span>${bar(s.pct)}<span class="c row gap6" style="font-weight:500"><span style="color:var(--ink);white-space:nowrap;flex:none">${s.done} of ${s.total} lessons</span>${extra}</span></span>${ic('chev',16,'faded')}</a>`;});
 return `<div class="row gap12" style="padding:20px 20px 12px"><h3 class="h3">My courses</h3><span class="s faded">${list.length} in progress</span></div>
  ${rows.join('')}<div style="height:8px"></div>`;}
/* Contacts under My courses, as in Olena's Scale (06.10): the people behind the student's courses. Names and roles come
   from Messages; a row opens that conversation (on a phone, straight into the thread), the icon only marks it */
function dashContacts(){const T=threads('learner');
 const rows=['maria','olena','cohort'].filter(k=>T[k]).map(k=>{const v=T[k];return `<button class="row gap12 contact" data-act="dmopen" data-v="${k}" aria-label="Message ${esc(v.name)}">${av(v.name,'av36')}<span class="col gap2 grow" style="min-width:0"><span class="m med trunc">${esc(v.name)}</span><span class="c pencil trunc">${esc(v.sub)}</span></span><span class="iconbtn sm" aria-hidden="true">${ic('msg',16)}</span></button>`;}).join('');
 return `<section class="card" style="overflow:hidden;padding-bottom:8px"><div class="row gap12" style="padding:20px 20px 8px"><h3 class="h3">Contacts</h3></div>${rows}</section>`;}
ACT.dmopen=(el)=>{st.msgThread=el.dataset.v;st.msgOpenThread=true;go('learner/messages');};
/* The file the feedback is about, under the feedback card (as in Figma, 06.10) */
function yourSubmission(a){if(!a.file||!a.submittedAt)return '';const late=Math.ceil((a.submittedAt-a.due)/864e5);
 const meta=[a.file.pages,a.file.size,`sent ${fmtDow(a.submittedAt).replace(/^[A-Za-z]+, /,'')}, ${fmtTime(a.submittedAt)}${late>0?`, ${late} day${late>1?'s':''} after the deadline`:''}`].filter(Boolean).join(' · ');
 return `<section class="card pad24 col gap12"><h3 class="h3">Your submission</h3><div class="filerow">${ic('file',18,'pencil')}<span class="col gap2 grow"><span class="m med">${esc(a.file.name)}</span><span class="c faded">${meta}</span></span></div></section>`;}
/* course page and lesson rail: every lesson is followed by its activities, the same ones the teacher edits in Curriculum */
const LRES={uxgaps:'4 of 4 correct',uxtf:'8 of 8 correct'};
const actAsg=x=>x.type==='assignment'?Object.values(ASSIGN).find(a=>a.course===x.course&&(a.title===x.name||a.title===x.title)):null;
const ACT_LICON={quiz:'quiz',tf:'tf',gaps:'gaps',assignment:'file'};
function modItems(c,mi){const out=[];courseLessons(c).filter(l=>l.mod===mi).forEach(l=>{out.push({l});actsOf(l.id).forEach(x=>out.push({x,a:actAsg(x),after:l}));});return out;}
const actState=it=>{const {x,a,after}=it;if(a)return {asg:a};if(LRES[x.id])return {done:true,label:LRES[x.id],short:'Done'};
 if(x.id==='pafunnel'&&QUIZ)return {due:true,label:'Due today',short:'Due today'};return after.done?{done:true,label:'Done',short:'Done'}:{label:'Not started',short:''};};
const asgShort=a=>({overdue:'Overdue',todo:`Due ${fmtDay(a.due)}`,waiting:'Waiting',changes:'Changes requested',accepted:'Accepted'})[a.status]||'';
const learnerCourseV1=VIEWS['learner:course'];
VIEWS['learner:course']=(r)=>{const c=r.id||'ux',C=COURSES[c];if(!C||C.completed)return learnerCourseV1(r);
 const s=courseStats(c),n=nextLesson(c),ls=courseLessons(c),teacher=CED[c]&&CED[c].teacher;
 const curMod=n?n.mod:0;if(st.openModule[c]===undefined)st.openModule[c]=curMod;
 return `<div class="page">
  <section class="card" style="overflow:hidden"><div style="height:8px;background:${C.color}"></div>
   <div class="pad24 row gap24"><div class="col gap8 grow"><h1 class="h1">${C.title}</h1>
    <div class="row gap12" style="max-width:520px">${bar(s.pct)}<span class="s semi">${s.done} of ${s.total} lessons done</span></div>
    <span class="s pencil">${fmtLeft(s.leftMin)} · ${plural(C.modules.length,'module')}${teacher?` · teacher ${esc(teacher)}`:''}</span></div>
    ${n?btn(`Continue: ${n.title}`,'primary',`data-act="nav" data-to="learner/lesson/${n.id}"`,'play'):''}</div></section>
  ${nextLiveCard(c)}
  <section class="card" style="overflow:hidden">${C.modules.map((mname,mi)=>{
   const items=modItems(c,mi),ml=items.filter(i=>i.l).map(i=>i.l),na=items.length-ml.length,md=ml.filter(l=>l.done).length,open=st.openModule[c]===mi,cur=mi===curMod&&!(md===ml.length&&ml.length);
   const status=md===ml.length&&ml.length?'<span class="badge b-accepted"><i></i>Done</span>':(mi===curMod?'<span class="badge b-resub"><i></i>Current</span>':'<span class="c faded">Upcoming</span>');
   return `<div style="border-bottom:1px solid var(--rule)"><button class="row gap16" style="width:100%;padding:16px 20px;text-align:left" data-act="mod" data-c="${c}" data-m="${mi}" aria-expanded="${open}">
    <span class="typeicon" style="width:32px;height:32px;font-weight:500;${cur?'background:var(--violet-wash);color:var(--ink-violet-deep)':''}">${mi+1}</span><span class="col gap2 grow"><span class="m med">${mname}</span><span class="c pencil" style="font-weight:500">${plural(ml.length,'lesson')}${na?' · '+plural(na,'activity','activities'):''}</span></span>${status}${ic(open?'up':'down',16,'faded')}</button>
    ${open?`<div style="padding:0 20px 12px 68px" class="col">${items.map(it=>{
     if(it.l){const l=it.l;return `<a class="row gap12" href="#/learner/lesson/${l.id}" style="padding:10px 0;border-top:1px solid var(--rule)">${l.done?`<span style="color:var(--approved)">${ic('check',16)}</span>`:`<span class="${l===n?'violet':'faded'}">${ic('play',16)}</span>`}<span class="m grow ${l===n?'semi':''}">${esc(l.title)}</span><span class="c faded">${l.done?'Done':l.watched?`${Math.round(l.min*(1-l.watched/100))} min left`:l.min+' min'}</span></a>`;}
     const S=actState(it),x=it.x;
     if(S.asg)return `<a class="row gap12" href="#/learner/assignment/${S.asg.id}" style="padding:10px 0;border-top:1px solid var(--rule)">${ic('file',16,'pencil')}<span class="m grow">${esc(x.title)}</span>${asgBadge(S.asg)}</a>`;
     return `<button class="row gap12" data-act="notyet" data-msg="The activity player is not part of this prototype" style="width:100%;text-align:left;padding:10px 0;border-top:1px solid var(--rule)">${S.done?`<span style="color:var(--approved)">${ic('check',16)}</span>`:ic(ACT_LICON[x.type]||'file',16,'pencil')}<span class="m grow">${esc(x.title)}</span>${S.due?'<span class="badge b-needs"><i></i>Due today</span>':`<span class="c faded" style="font-weight:500">${S.label}</span>`}</button>`;}).join('')}</div>`:''}</div>`;}).join('')}</section></div>`;};
function lessonRail(l){const C=COURSES[l.course];
 return `<section class="card" style="overflow:hidden"><div style="padding:16px 16px 8px" class="o faded">Module ${l.mod+1} · ${C.modules[l.mod]}</div>
  ${modItems(l.course,l.mod).map(it=>{
   if(it.l){const x=it.l,on=x.id===l.id;return `<a class="row gap10" href="#/learner/lesson/${x.id}" style="padding:10px 16px;${on?'background:var(--violet-wash)':''}">${x.done?`<span class="green">${ic('check',16)}</span>`:ic('play',16,on?'violet':'faded')}<span class="s grow ${on?'semi':''}">${esc(x.title)}</span><span class="c faded" style="font-weight:500">${x.min} min</span></a>`;}
   const S=actState(it),x=it.x,name=S.asg?S.asg.title:x.title;
   const right=S.asg?`<span class="c ${S.asg.status==='overdue'?'red':'faded'}" style="font-weight:500">${asgShort(S.asg)}</span>`:`<span class="c ${S.due?'amber':'faded'}" style="font-weight:500">${S.short}</span>`;
   const icon=S.done||(S.asg&&S.asg.status==='accepted')?`<span class="green">${ic('check',16)}</span>`:ic(S.asg?'file':(ACT_LICON[x.type]||'file'),16,'pencil');
   return S.asg?`<a class="row gap10" href="#/learner/assignment/${S.asg.id}" style="padding:10px 16px">${icon}<span class="s grow">${esc(name)}</span>${right}</a>`
    :`<button class="row gap10" data-act="notyet" data-msg="The activity player is not part of this prototype" style="width:100%;text-align:left;padding:10px 16px">${icon}<span class="s grow">${esc(name)}</span>${right}</button>`;}).join('')}</section>`;}
const SLIDES={ux5:'planning-interviews-slides.pdf'};
const slidesName=l=>SLIDES[l.id]||l.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'-slides.pdf';
/* assignment: the teacher's materials sit between the brief and the learner's file */
const ASG_MAT={a1:[['recruiting-plan-template.docx','48 KB'],['screener-examples.pdf','120 KB']]};
function asgMaterials(a){const M=ASG_MAT[a.id];if(!M)return '';
 return `<div class="field"><span class="label">Materials</span>${M.map(([n,z])=>`<div class="filerow">${ic('file',18,'pencil')}<span class="col gap2 grow"><span class="m med">${n}</span><span class="c faded">${z}</span></span><button class="link" data-act="notyet" data-msg="Downloaded (simulated)">${ic('dl',14)} Download</button></div>`).join('')}</div>`;}
Object.values(ASSIGN).forEach(a=>{if(a.brief)a.brief=a.brief.map(b=>/[.?!]$/.test(b)?b:b+'.');});

/* queue at 10 rows per page (as in Figma): when Send & next or j / k opens a submission on another page, the table follows the panel */
AFTER.push(()=>{if(route().view!=='queue'||!st.panel||st.panel==='caught')return;const L=queueList(),i=L.findIndex(x=>x.id===st.panel);if(i<0)return;
 const pg=Math.floor(i/st.perPage)+1;if(pg!==st.page){st.page=pg;render();}});

/* ---------- Calendar: Week and Month (06.10 review). One event source for any date, so both views and the arrows work.
   The weekly “Synthesizing interview data” classes appear only after the teacher publishes the draft event. ---------- */
st.calView='week';st.calOff=0;
const CAL_TODAY=new Date(2026,9,1);
const sameDay=(a,b)=>a.getFullYear()===b.getFullYear()&&a.getMonth()===b.getMonth()&&a.getDate()===b.getDate();
const mondayOf=d=>{const x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()-(x.getDay()+6)%7);return x;};
const daysBetween=(a,b)=>Math.round((new Date(b.getFullYear(),b.getMonth(),b.getDate())-new Date(a.getFullYear(),a.getMonth(),a.getDate()))/864e5);
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
function calEvents(d){const L=[];if(d.getFullYear()!==2026)return L;const k=d.getMonth()*100+d.getDate();
 if(k===829)L.push({cls:ASSIGN.a1.status==='overdue'?'over':'dl done',t:'23:59',title:'Interview recruiting plan',short:'Recruiting plan',sub:ASSIGN.a1.status==='overdue'?'Overdue':'Submitted',to:'learner/assignment/a1'});
 if(k===830)L.push({cls:'class done',t:'19:00',title:'Live class: Writing an interview guide',short:'Live class',sub:'Attended'});
 if(k===901){L.push({cls:'class',t:'19:00',title:LIVE.title,short:'Live class',sub:'with '+LIVE.host+' · '+(liveSoon()?'Starts in 8 min':'Join opens 18:50'),act:'join'});L.push({cls:'dl',t:'23:59',title:QUIZ.title,short:'Quiz',sub:COURSES.pa.title});}
 if(k===902||k===1102)L.push({cls:'',t:'18:00',title:SEMINAR.title,short:'Onboarding',sub:'Online'});
 if(k===903&&ASSIGN.a1.status==='waiting')L.push({cls:'',t:'by 15:02',title:'Feedback on your recruiting plan',short:'Feedback',sub:'Expected'});
 if(k===904)L.push({cls:'dl',t:'23:59',title:ASSIGN.a3.title,short:'Essay',sub:COURSES.fig.title,to:'learner/assignment/a3'});
 const oh=daysBetween(new Date(2026,9,6),d);if(oh>=0&&oh%14===0)L.push({cls:'',t:'17:00',title:'Office hours: Product Analytics',short:'Office hours',sub:'with Ihor Petrenko'});
 const e1=EVENTS.find(e=>e.id==='e1');if(e1&&e1.status==='published'&&e1.start){const dd=daysBetween(isoToDate(e1.start),d);if(dd>=0&&dd%7===0&&dd/7<(e1.count||8))L.push({cls:'class',t:e1.from,title:'Live class: '+e1.title,short:'Live class',sub:'with Maria Ivanova'});}
 return L;}
const calAttrs=x=>x.to?`data-act="nav" data-to="${x.to}"`:x.act?`data-act="${x.act}"`:'data-act="notyet" data-msg="Event details are not part of this prototype"';
const calCard=x=>`<button class="ev ${x.cls}" ${calAttrs(x)}><span class="c ${x.cls.includes('over')?'red':x.cls.includes('dl')&&!x.cls.includes('done')?'amber':'faded'}">${x.t}</span><span class="s med">${esc(x.title)}</span><span class="c faded">${esc(x.sub)}</span></button>`;
const calChip=x=>`<button class="mchip ${x.cls}" ${calAttrs(x)} title="${esc(x.title)}"><span>${x.t}</span>${esc(x.short)}</button>`;
VIEWS['learner:calendar']=()=>{const month=st.calView==='month';let sub,body;
 if(!month){const start=mondayOf(CAL_TODAY);start.setDate(start.getDate()+7*st.calOff);const days=[...Array(7)].map((_,i)=>{const x=new Date(start);x.setDate(start.getDate()+i);return x;});
  sub=`${fmtDay(days[0])} – ${fmtDay(days[6])} ${days[6].getFullYear()}`;
  body=`<div class="week">${days.map(d=>{const t=sameDay(d,CAL_TODAY);return `<div class="day ${t?'today':''}"><div class="dayhead"><span class="o ${t?'violet':'faded'}">${DOW[d.getDay()]}</span><span class="h3">${d.getDate()} ${t?'<span class="c violet" style="margin-left:4px">Today</span>':''}</span></div>${calEvents(d).map(calCard).join('')}</div>`;}).join('')}</div>`;}
 else{const m=new Date(2026,9+st.calOff,1),last=new Date(m.getFullYear(),m.getMonth()+1,0),start=mondayOf(m),end=new Date(last);end.setDate(end.getDate()+(6-(last.getDay()+6)%7));
  const days=[];for(const x=new Date(start);x<=end;x.setDate(x.getDate()+1))days.push(new Date(x));
  sub=`${MONTHS[m.getMonth()]} ${m.getFullYear()}`;
  body=`<div class="month"><div class="mhead">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(x=>`<span class="o faded">${x}</span>`).join('')}</div><div class="mgrid">${days.map(d=>{const t=sameDay(d,CAL_TODAY),out=d.getMonth()!==m.getMonth(),E=calEvents(d);
   return `<div class="mcell ${t?'today':''} ${out?'out':''}"><button class="mday" data-act="calday" data-d="${+d}" aria-label="Open the week of ${fmtDow(d)}">${d.getDate()}${t?'<span class="c violet">Today</span>':''}</button>${E.slice(0,3).map(calChip).join('')}${E.length>3?`<span class="c faded">+${E.length-3} more</span>`:''}</div>`;}).join('')}</div></div>`;}
 const atToday=st.calOff===0;
 return `<div class="page"><div class="row between gap12" style="flex-wrap:wrap"><div class="col gap4"><h1 class="h1">Calendar</h1><p class="m pencil" style="margin:0">${sub}</p></div>
  <div class="row gap8"><button class="iconbtn sm" data-act="calnav" data-d="-1" aria-label="${month?'Previous month':'Previous week'}">${ic('chevl',16)}</button><button class="btn btn-secondary btn-sm" data-act="caltoday" ${atToday?'aria-current="date"':''}>Today</button><button class="iconbtn sm" data-act="calnav" data-d="1" aria-label="${month?'Next month':'Next week'}">${ic('chev',16)}</button>
   <div class="seg light auto sm" role="tablist" aria-label="Calendar view">${[['week','Week'],['month','Month']].map(([v,l])=>`<button class="${st.calView===v?'on':''}" role="tab" aria-selected="${st.calView===v}" data-act="calview" data-v="${v}">${l}</button>`).join('')}</div></div></div>
  ${body}</div>`;};
ACT.calview=(el)=>{if(st.calView===el.dataset.v)return;st.calView=el.dataset.v;st.calOff=0;render();};
ACT.calnav=(el)=>{st.calOff+=+el.dataset.d;render();};
ACT.caltoday=()=>{st.calOff=0;render();};
ACT.calday=(el)=>{const d=new Date(+el.dataset.d);st.calView='week';st.calOff=Math.round(daysBetween(mondayOf(CAL_TODAY),mondayOf(d))/7);render();};

/* 06.10: on the first visit the Prototype controls open with hints: what each control does, with an arrow to it.
   Only on screens 1000 px and wider; “Got it”, the × of the panel or a click outside ends it, and that is remembered.
   The “i” next to × shows the hints again, on screens 760 px and wider (there the hints fit beside the panel) */
const TOUR_KEY='learnly.tour.v1';
const tourSeen=()=>{try{return localStorage.getItem(TOUR_KEY)==='1';}catch(e){return false;}};
const tourRemember=()=>{st.tour=false;try{localStorage.setItem(TOUR_KEY,'1');}catch(e){}};
if(!tourSeen()&&innerWidth>=1000){st.proto=true;st.tour=true;}
ACT.tourdone=()=>{tourRemember();renderLayer();};
ACT.tourshow=()=>{if(st.tour)tourRemember();else st.tour=true;renderLayer();};
const tourProtoToggle=ACT.proto;ACT.proto=(el,e)=>{if(st.tour)tourRemember();tourProtoToggle(el,e);};
const TOUR_HINTS=[
 ['time','<b>Click 18:52</b> → Join on the student’s dashboard becomes active. It opens 10 min before the class.'],
 ['queue','<b>Click Empty, No results, Loading or Error</b> → the teacher’s review queue in that state.'],
 ['viewer','<b>Click Observer</b> → the queue opens read-only.'],
 ['fill','<b>Open a submission</b> in the queue, then click here → a sample review fills the form.'],
 ['reset','<b>Click</b> → start over: Thu 1 Oct, 15:02.'],
 ['acct','<b>Click your name</b> → switch between the student and the teacher.']];
function drawTour(){
 if(!st.tour||!st.proto||innerWidth<760)return;
 const card=document.querySelector('.proto-card');if(!card)return;
 const cols=card.querySelectorAll(':scope > .col'),btns=card.querySelectorAll(':scope > .pbtn');
 const T={time:cols[0],queue:cols[1],viewer:cols[2],fill:btns[0],reset:btns[1],acct:document.querySelector('.acct')};
 const wrap=document.createElement('div');wrap.className='tour';
 wrap.innerHTML=`<div class="tour-scrim" data-act="tourdone"></div><svg class="tour-arrows" aria-hidden="true"><defs><marker id="tourhead" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L8 4L0 8z" fill="#fff"/></marker></defs></svg>
  <div class="tour-card tour-intro" role="dialog" aria-label="How the prototype controls work"><span class="m semi">Prototype controls</span><span class="s pencil">Shortcuts to states that are hard to reach by clicking. They are not part of the product.</span><span class="s pencil">To see these hints again, click ${ic('info',13)} next to ×.</span><div>${btn('Got it','primary','data-act="tourdone"')}</div></div>
  ${TOUR_HINTS.filter(([k])=>T[k]&&T[k].offsetWidth).map(([k,t])=>`<div class="tour-card" data-k="${k}"><span class="s">${t}</span></div>`).join('')}`;
 document.getElementById('layer').appendChild(wrap);
 const cr=card.getBoundingClientRect(),x=Math.round(cr.right+56),gap=10,minY=16,maxY=innerHeight-16;
 const H=[...wrap.querySelectorAll('.tour-card[data-k]')].map(h=>{const t=T[h.dataset.k].getBoundingClientRect();return {h,t,ty:Math.round(t.top+t.height/2),hh:h.offsetHeight};});
 // each hint opposite its target; push down to avoid overlap, then pull the column up if it runs past the bottom
 let y=minY;H.forEach(o=>{o.top=Math.max(y,o.ty-Math.round(o.hh/2));y=o.top+o.hh+gap;});
 let limit=maxY;for(let i=H.length-1;i>=0;i--){H[i].top=Math.min(H[i].top,limit-H[i].hh);limit=H[i].top-gap;}
 let paths='';
 H.forEach(o=>{o.h.style.left=x+'px';o.h.style.top=o.top+'px';const hy=o.top+Math.round(o.hh/2),x1=x-8,x2=Math.round(o.t.right+8);
  paths+=`<path d="M${x1} ${hy} C${x1-30} ${hy} ${x2+30} ${o.ty} ${x2} ${o.ty}" marker-end="url(#tourhead)"/>`;});
 wrap.querySelector('svg').insertAdjacentHTML('beforeend',paths);
 // the intro sits above the first hint; when there is no room, in a second column; on narrow screens, above the panel
 const intro=wrap.querySelector('.tour-intro'),iw=intro.offsetWidth,ih=intro.offsetHeight,first=H.length?H[0].top:Math.round(cr.top),it=first-ih-16;
 if(it>=minY){intro.style.left=x+'px';intro.style.top=it+'px';}
 else if(x+2*iw+24<=innerWidth-16){intro.style.left=(x+iw+24)+'px';intro.style.top=Math.max(minY,first)+'px';}
 else{intro.style.left=Math.round(cr.left)+'px';intro.style.top=Math.max(minY,Math.round(cr.top)-ih-16)+'px';}
}
const tourBaseLayer=renderLayer;renderLayer=function(){tourBaseLayer();drawTour();};
addEventListener('resize',()=>{if(st.tour)renderLayer();});

/* ---------- Checked against the mockups (06.10) ---------- */
/* Event date reads as on the mockup (“Wed, 14 Oct 2026”); a click opens the browser's date picker */
function evDateField(v){const d=isoToDate(v);const txt=d?`${DOW[d.getDay()]}, ${d.getDate()} ${MON[d.getMonth()]} ${d.getFullYear()}`:'Pick a date';
 return `<label class="input evdate" data-act="pickdate">${ic('cal',16,'faded')}<span class="${d?'':'faded'}">${txt}</span><input type="date" data-ev="start" value="${esc(v||'')}" tabindex="-1" aria-label="Event date"></label>`;}
ACT.pickdate=(el)=>{const i=el.querySelector('input[type=date]');if(!i)return;try{i.showPicker();}catch(e){i.focus();}};
/* Cut names show their full text in a floating tooltip, so the cell that cuts them does not clip it */
document.addEventListener('mouseover',e=>{const t=e.target.closest&&e.target.closest('[data-tip]');let tip=document.getElementById('ftip');
 if(!t||t.scrollWidth<=t.clientWidth){if(tip)tip.remove();return;}
 if(!tip){tip=document.createElement('div');tip.id='ftip';tip.className='ftip';document.body.appendChild(tip);}
 tip.textContent=t.dataset.tip;const r=t.getBoundingClientRect();tip.style.left=Math.round(r.left)+'px';tip.style.top=Math.round(r.top-6)+'px';});
/* Activity in the review panel (as on Part 2 · Long comment): for a new version, the earlier review comes first,
   then the upload and the student's reply; a long comment is cut at 4 lines with Show more */
const PREV_REVIEW={'Prototype testing plan':'Thanks Maria, a solid first draft. A few things before I can accept it. 1) Tasks: task 2 tells people where to click (“Use the filter to find…”). Describe the goal instead and let them find the way. 2) Participants: 5 colleagues from your team know the product too well. Invite at least 3 people from outside it. 3) Notes: say who takes notes and how you will record the sessions. 4) Timing: plan 30 minutes per session with 15 minutes between them.',
 'Competitive audit':'Good start. Add 2 more competitors that your users really compare you with. For each one write in 1 line what it does better than us.'};
const STUDENT_REPLY={'Prototype testing plan':'Thanks! I rewrote task 2. Is the wording clearer now?','Competitive audit':'Added the 2 competitors. Should the summary go before the table?'};
function actLog(s){const line=(who,when,text,extra='')=>`<div class="row gap12" style="align-items:flex-start">${who==='You'?av('K M','av24','var(--violet-wash)'):av(who,'av24')}<div class="col gap4 grow" style="min-width:0"><span class="row gap8 s"><span class="med">${esc(who)}</span><span class="c faded">${when}</span>${extra}</span>${text}</div></div>`;
 if(s.attempt<2)return `<div class="col gap12">${line(s.student,fmtDay(s.submitted)+', '+fmtTime(s.submitted),`<span class="s pencil">Submitted ${esc(s.file||'the work')}</span>`)}${line('Learnly',fmtDay(s.submitted),`<span class="s pencil">Added it to the queue · review due ${fmtDow(new Date(s.submitted.getTime()+48*36e5))}</span>`)}</div>`;
 const c=PREV_REVIEW[s.task]||'Please see the notes in the file.',open=st.more&&st.more[s.id],long=c.length>220;
 return `<div class="col gap16">${line('You','27 Sep, 10:15',`<p class="s clamp4 ${open?'open':''}">${esc(c)}</p>${long?`<button class="link c" style="align-self:flex-start" data-act="showmore" data-id="${s.id}">${open?'Show less':'Show more'}</button>`:''}`,'<span class="badge b-changes"><i></i>Changes requested</span>')}
  ${line(s.student,fmtDay(s.submitted)+', '+fmtTime(s.submitted),`<span class="s pencil">Uploaded ${esc(s.file||'a new version')}${s.note?' · '+esc(s.note):''}</span>`)}
  ${s.unread?line(s.student,s.task==='Competitive audit'?'2 h ago':'1 h ago',`<span class="s">${esc(STUDENT_REPLY[s.task]||'Thanks for the review!')}</span>`):line('Learnly',fmtDay(s.submitted),`<span class="s pencil">Added it to the queue · review due ${fmtDow(new Date(s.submitted.getTime()+48*36e5))}</span>`)}</div>`;}
ACT.showmore=(el)=>{st.more=st.more||{};st.more[el.dataset.id]=!st.more[el.dataset.id];render();};

