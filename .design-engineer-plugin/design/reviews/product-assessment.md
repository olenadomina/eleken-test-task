# Product assessment: Learnly (Eleken test task)

Date: 02.10.2026. Scope: full assessment, all 5 areas, both roles (student, teacher). Format chosen: action plan.
Reviewed: HTML prototype v19 (`prototype/learnly-prototype.html`), Figma file tcraZAiMnwIP7IZUSjI3V2 (Notes, Part 1, Part 2, Product · all screens).

## Assessment summary

- Areas assessed: 1 user behaviors, 2 bias audit, 3 journeys, 4 communicating decisions, 5 ethics (psychology scan by the psych-scanner agent).
- Readiness at the time of the v19 assessment: needed work. The findings below describe that baseline; the implementation status is recorded at the end. Teacher research remains an explicit assumption to validate, not an unfinished deliverable in this test task.
- Deliverables referenced: `foundation/problem-statement.md`, `foundation/target-audience.md`, `research/research-findings.md`, `exploration/bias-audit.md`, `planning/mvp-requirements.md`, `prototype/decisions.md`, `interview-prep.md`, Figma Notes (A1–A3 with "How I'd validate next").
- Research used: Olena's 2024 LMS research "Scale" (FigJam M5FFvFdJjTqIa9BxiUV5Qf, same content as wchakjcyAnblEecQuw7NZW cited in research-findings.md; case olenadiomina.com/work/scale). The survey sample size was not recorded, so its percentages are directional. Scale was a cohort school with mentors; carrying its findings over to Learnly is an assumption.

## Findings by area

### Area 1 – user behaviors
- Status: partial. Student motivations and abilities are researched (Scale); the teacher side rests on assumption A1 only.
- Empathy questions: Scale asked close equivalents (ideal experience, difficulties, last course start to finish) but 1 student answered, not 5. No teacher answers.
- Story Panel, SEQs (specific empathy questions), motivation analysis by screen: not done.
- Prompt: in-product prompts exist (week list, Join turns primary 10 min before class, feedback notification); no prompt outside the product before an assignment deadline (only event reminders at 24 h and 1 h).

Student motivations by moment (from Scale data):

| Moment | Motivation | Evidence |
|---|---|---|
| Before a session | do not fall behind | deadlines motivate 67%; 67% find it hard to self-organize |
| During | see what is done and what is left | progress matters to 95%; tracking affects motivation for 73% |
| After submitting | clear feedback | "no homework review and feedback" is a reason to quit; user story "get clear feedback from the mentor" |

Scarcest ability: the student's time and energy after work ("no time" is the first reason to quit; personas "Busy professional" and "Multitasking mom"). Teacher: switching between courses (assumption, no data).

Motivation drops by screen (hypotheses, no SEQ data): "Changes requested", overdue, waiting for review.

### Area 2 – bias audit
The 01.10 audit is closed. New findings on v19:
- Identify: the bell repeats the teacher Home "Needs your attention" list and the student week list (2 entry points to the same items); the "5 badges" chip leads nowhere (research: "people may not understand what to do with earned badges"); an assignment waiting for review shows its status twice (badge and steps).
- Analyze: waiting for review has no next step; in-app back / forward arrows are unusual on the web (justified in the artifact, where the browser Back does not reach the page).
- Design: no issues (defaults, protective friction, progressive disclosure, 1 primary action per screen).
- Document: the search in the top bar does nothing although it is on every screen.

### Area 3 – journeys
- No journey map exists; assessed from the prototype.
- Jump: feedback with a name and a time that opens with "What works".
- Drop: a late review (assignment `a2`, a day past 48 h). The student sees "Feedback is late" and has nothing to do; in Scale 47% go to their mentor first when something goes wrong.
- Pit: "Changes requested", already softened ("What works" first, resubmit date, upload new version).
- Peak to raise: "Accepted · 8 / 10" can show the module moving forward.
- Transition missing: course finished → certificate.
- Waiting to use: before the live class (the host asks to bring the interview guide from Lesson 4).
- In real life test: the late review behaves like a clerk who says nothing; a teacher would apologize and give a time.

### Area 4 – communicating decisions
- Business alignment: present ("Slow review is a retention problem"; metrics in A1–A3).
- Story: material exists (Scale quote "everything is in different places – chaos", 3 screens → 1, "Anna has been waiting 3 days"); no walkthrough script for the Head of Design stage (`interview-prep.md` covers the recruiter call).
- Vocabulary: present (labor illusion, anchoring, Hick's law, peak-end in the bias audit; plain language in Notes).
- Gaps: no "what I want feedback on"; alternatives are rarely written ("why this", seldom "why not that"); scope risk (brief ≈ 2 screens and a queue; delivered 34 screens, an audit and a prototype) is not framed in the letters or out loud.

### Area 5 – ethics
- Regret test: mostly pass. Fails: "12-day streak" (loss mechanic for a time-poor audience; Scale lists progress and deadlines as motivators, not daily attendance) and "5 badges" without a destination.
- Black Mirror test: 2 live risks – streak anxiety for the student; red-urgency fatigue for the teacher, which leads to rushed feedback (the dropout cause the research names).
- Caution: bulk "Remind students" sends a template in the teacher's voice to many students at once (confirmation exists, but no names, no personal line, no frequency limit).
- Pass: "You can still submit", "Anna has been waiting 3 days", auto-complete at 90% with Undo, no peer comparison, protective friction in the review panel.
- Humane: saves time – yes; values attention – yes except bulk reminders and all-red urgency; reflects human values – yes once the streak and badges are fixed.

## Action plan

Accepted on 02.10.2026. Priority 1 is visible to an Eleken reviewer in the prototype; priority 2 is what they read in Figma; priority 3 is what the presentation covers.

### Priority 1 – prototype (HTML) and the matching Figma screens

| # | Action | Where | From |
|---|---|---|---|
| 1 | Search with results: courses, lessons, assignments (and students for teachers) from prototype data; a result opens its screen | App bar, both roles | Area 2 |
| 2 | The bell shows only what is new since the last visit (feedback, chat replies, new submissions); the dot goes off when nothing is new; standing to-dos stay on Home / This week | Notifications, both roles | Areas 2, 5 |
| 3 | "12-day streak" → a weekly goal the student picks ("3 days this week · 2 done"), no reset; "5 badges" → a page with badges named after real steps ("First interview plan reviewed") | Student dashboard + new badges page | Area 5 |
| 4 | Late review: "Your teacher has been reminded" + "Ask Kateryna M." that opens the chat with a soft, editable message ("Hi Kateryna, just checking in on my feedback… No rush") | Assignment, waiting state | Areas 3, 5 |
| 5 | While waiting: "While you wait – Lesson 6 · 20 min" next to "I'm done for today"; drop the status badge when the steps are shown | Assignment, waiting state | Areas 2, 5 |
| 6 | Accepted feedback shows "Module 2 · 4 of 4 done" with the bar moving and the next step | Assignment, accepted state | Area 3 |
| 7 | Teacher reminders: the confirmation lists the names and takes 1 personal line; no more than 1 reminder per student per 7 days; new bulk action "Extend the deadline by a week" | Review queue, bulk bar | Area 5 |
| 8 | Amber at 48 h ("due for review"), red at 72 h on the teacher side; update A2 in Notes | Review queue, teacher Home, Notes | Area 5 |
| 9 | Assignment deadline reminder about 24 h before due: sent only if the work is not submitted; "Remind me later" silences it for that assignment; teacher toggle in the assignment editor | Assignment editor, student notifications | Areas 1, 5 |
| 10 | Live class preparation line: "Bring your interview guide from Lesson 4" with a link | Student dashboard row, course page card | Area 3 |
| 11 | Course finished: certificate, a ready text for LinkedIn, a next course only if one genuinely fits | New student state after the last assignment | Areas 3, 5 |

### Priority 2 – Figma Notes and research artifacts

| # | Action | Where | From |
|---|---|---|---|
| 12 | Alternatives considered for 3 decisions: side panel vs separate page (queue); 1 list vs widgets or a board (dashboard); 1 page with sections vs a wizard (Create event) | Notes | Area 4 |
| 13 | "What I'd like feedback on": 2–3 questions for the Head of Design | Notes, walkthrough script | Area 4 |
| 14 | A1 validation: add the 3 empathy questions (hope, pain, barrier) to the existing plan of 5–6 teacher interviews | Notes, A1 | Area 1 |
| 15 | Story Panel for the student: 6–8 frames, an evening after work → dashboard → submit → wait → feedback | New Figma frame | Area 1 |
| 16 | Student motivations by moment and the scarcest resource (table above) | This report; Notes "Based on my earlier research" | Area 1 |

### Priority 3 – communication

| # | Action | Where | From |
|---|---|---|---|
| 17 | Walkthrough script for the Head of Design, 5–7 minutes, English with Ukrainian translation: scope → problem → evidence → 3 decisions with alternatives → how I'd validate | `eleken/presentation-script.md` | Area 4 |
| 18 | Scope sentence in the EN / UA letters: "Part 1 and Part 2 answer the brief; the rest checks that the decisions hold across the whole product" | Letters with the links | Area 4 |

## Status (02.10.2026)

- **Priority 1 – done** in the HTML prototype (artifact version 25) and in Figma: 7 new frames on “Product · all screens”, amber / red on the queue frames and Part 2, Part 1 dashboards, Notes A2. Changes from the plan: #7 “Give them another week” sits inside the reminder dialog; #9 the email goes the evening before at 19:00 and its button turns the reminder off for 1 assignment instead of “Remind me later”; #11 lives on the completed course page. The reminder dialog is drawn as “Admin · Review queue · remind students”.
- **Priority 2 – done** on the Figma Notes page: new section “1 · Story” (9 panels with real screens), “Alternatives I considered”, “What moves the student at each moment”, “What I’d like feedback on” in the header, the 3 empathy questions in A1.
- **Priority 3 – done:** `eleken/presentation-script.md` (English with Ukrainian translation, 6–7 minutes, likely questions) and `eleken/letters.md` with the scope sentence.
- **06.10:** the HTML prototype was checked screen by screen against the Figma frames and brought up to them: Events (tabs, search, filters, Registered, row menu), the learner course page and lesson rail (activities after their lesson), assignment materials, the dashboard My courses switch, the teacher home. Artifact version 32.

## Skills for a deeper pass
- Teacher behaviors: `ux-behavior-mapping` after the teacher interviews (A1).
- Story: `ux-story-panels` for action 15.
- Journeys: `ux-journey-mapping` for both roles once actions 4–6 and 11 are in.
- Walkthrough: `ux-communicating-decisions` for actions 12, 13 and 17.
- Ethics: `ux-ethics-review` if the weekly goal (action 3) grows into a habit feature.

## Cross-reference map
- Done before this assessment: problem statement, target audience, research findings, bias audit (01.10), MVP requirements, IA, references, design system, base audit (41 issues), prototype decisions and notes.
- Delivered after this assessment: the 11 prototype actions and matching Figma states, the 9-panel Story, alternatives and motivation tables, A1 empathy questions, feedback questions, walkthrough script and EN/UA letters.
- Future research, outside the accepted 18 actions: teacher interviews and a journey/behavior map informed by those interviews. These are validation proposals, not submission blockers.
- Independent verification and any remaining discrepancies: `../../../review-2026-10-03/verification.md`.
