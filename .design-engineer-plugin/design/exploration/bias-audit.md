# Bias audit: learner flow and reviewer flow

Scope (approved 01.10.2026): full scenario, 2 flows, all 12 screens from information-architecture.md.
- Learner: Dashboard → Lesson → Assignment (submit) → feedback on Assignment and Dashboard.
- Reviewer: Review queue → side panel → decision → Send & next; bulk actions; Create event.

Sources: problem-statement.md, target-audience.md, research-findings.md, mvp-requirements.md, information-architecture.md, Figma tcraZAiMnwIP7IZUSjI3V2. Method: skills/ux-bias-audit (Identify → Analyze → Design → Document).

## Identify

### Blocking triggers found
- Course page listing every module and lesson at once – high effort, gets skimmed.
- Assignment brief as a text wall – high effort.
- Dashboard "All / Assignments / Classes" tabs on a 5-item list – an extra choice that saves nothing (Hick's law).
- Queue header: 6 tabs + search + 5 filters + sort + Shortcuts; the Module filter alone would list 20+ modules across courses.
- Sidebar badge "Review queue 9" (= Assigned to me) while the queue opens on "Needs review 24" – the number the user sees does not match the number they expect.

### Attention captors present
- Red only on overdue (dashboard row tint, queue row bar, panel badge) – a working pattern break, 3 of 10 queue rows.
- Personal greeting with a status line on the dashboard.
- Toast after Send & next names the student just reviewed (priming).

### Decisions (user, 01.10.2026)
1. Dashboard type tabs appear only when the week list has 8+ items. Hidden in the prototype (5 items).
2. Queue opens on "Needs review"; the sidebar badge counts the same thing (24). Figma badge changed 9 → 24.
3. Accepted: Course page expands only the current module, completed modules collapse; Assignment brief = 3 "what to submit" bullets + due date + upload zone; Lesson = video + short summary + Mark complete (user story "short summaries"); red stays reserved for overdue on every new screen; after Submit, promise the review date ("Review by Sat, 3 Oct", from the 48 h rule in A2); new feedback is the only pattern break on the dashboard (note-blue row "Changes requested · New feedback"); queue Module filter shows only after a course is chosen.

## Analyze

### Current framing
- Overdue assignment: "2 days overdue" with no answer to "can I still hand it in?".
- Submit flow (new): would read as "Upload file" – a mechanism, not an outcome.
- Course progress: "42% · 7 lessons left" – percentage anchor.
- Live class: "Join" is a secondary button all day.
- Queue panel: "Waiting 3 days" describes the work, not the person.
- Bulk action: result appears at once; a partial failure can read as a glitch.

### Recommended reframe (accepted by the user, 01.10.2026)
1. Learner overdue: "2 days overdue" + "You can still submit". No loss framing for learners (research: demotivating comments are a reason to drop out; persona pain points include motivation and self-discipline).
2. Join becomes primary 10 min before the class; before that it is secondary with "opens 18:50". The prototype has a time toggle to show both states.
3. Assignment upload reuses the Create event "Materials" file row and drop zone (familiarity).
4. Benefit line under Submit: "Your reviewer replies with written feedback by Sat, 3 Oct" (48 h rule, A2).
5. Course progress anchors on time: "5 of 12 lessons · about 2 h left" (research: 95% want to see how much is done and how much is left).
6. Feedback shows who reviewed and when: "Kateryna M. reviewed your plan · today, 15:20" (labor illusion, human effort).
7. Queue panel: "Anna has been waiting 3 days" (genuine consequence, not manufactured urgency).
8. Bulk actions show per-item progress ("Assigning 4 of 6…") before the result.
9. Kept as is: inbox-style queue with J / K and Send & next (familiarity); "Accept 25 submissions?" with 147 selected / 122 skipped (anchoring).

### Principles applied
Familiarity, benefits, anchoring, loss aversion (ethical, reviewer side only), discoverability, labor illusion.

## Design

### Friction points
- Create event asks for every setting even for a simple one-off event.
- Lesson completion depends on a manual "Mark complete" that people forget, so progress drifts.
- Review decision: a pre-selected Accept would be fast but irreversible (the student gets an email) – friction here is protective.

### Decisions (user, 01.10.2026)
1. Create event defaults: time zone from the admin profile, price Free, repeat "Does not repeat", reminder emails on (24 h and 1 h). Advanced fields stay behind their triggers (password toggle, Paid, Weekly).
2. Review panel: no decision pre-selected; Send & next stays disabled until Accept or Request changes is chosen and at least 1 feedback part is filled.
3. Lesson auto-completes at 90% of the video, with "Marked complete · Undo" and a button to the next lesson.
4. Nudges: 1 only – an honest curiosity gap on the dashboard feedback row ("Kateryna M. left 2 notes on your recruiting plan"), content not quoted.
5. No social proof for learners (research: 10% are negative about others seeing their work; comparison next to an overdue task risks shame). No scarcity.

### Reactance risk
Green: 1 nudge, truthful, tied to the learner's own work.

## Document

### Current storage
- Learner after Submit: no confirmation of what happens next → "did it arrive?" doubt.
- Learner after "Changes requested": a list of fixes with no way forward → "wrong again".
- Reviewer after the last item: nothing happens → the session has no ending.

### Improvement opportunities (accepted by the user, 01.10.2026)
1. Clear feedback after Submit: "Submitted today, 15:02 · Review by Sat, 3 Oct"; the dashboard row moves from Overdue to a grey "Waiting for review".
2. Reassurance: "You can replace the file until review starts."
3. Caring: no blame in any overdue copy; feedback opens with "What works".
4. Peak-end, learner: under "What to fix" – "Resubmit by Mon, 5 Oct" and an "Upload new version" button.
5. Peak-end, reviewer: after the last item – "You're all caught up · 12 reviewed today · Next deadline: Sat, 3 Oct" (already promised in Notes).
6. Delighter: finishing the last lesson of a module shows "Module 2 done · 3 of 6 modules" with the progress bar filling (research: 95% want to see progress). No confetti, no badges.

### Peak-end assessment
Learner flow ends on a clear next step (resubmit or module done). Reviewer flow ends on "all caught up".

## Priority actions (for the prototype)
1. Close the loop: Submit → "Waiting for review" with a review date → feedback with "What works / What to fix" → "Upload new version".
2. Keep red for overdue only; never shame the learner (no loss framing, no social proof, "You can still submit").
3. Time-aware primary actions: Join becomes primary 10 min before class; Send & next disabled until a decision and feedback exist.
4. Human framing on both sides: "Anna has been waiting 3 days"; "Kateryna M. reviewed your plan · today, 15:20".
5. Honest endings: module done (learner), all caught up (reviewer).
6. Lower effort: current module only on the course page; 3-bullet assignment brief; Create event defaults; Module filter after course; dashboard type tabs only at 8+ items; lesson auto-completes at 90% with Undo.
7. Show the work: per-item bulk progress before results.

## Ethical check
- All recommendations pass the Regret Test: Yes. Every nudge is truthful and about the user's own work; no fake scarcity, no comparison with peers.
- Reactance risk level: Low.
