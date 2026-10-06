# Prototype decisions log

Each decision below lists the alternatives so the reasoning can be revisited.

Global: desktop web 1440 px; tokens and Inter from the submitted Figma (references.md); bias-audit.md priority actions are binding.

## Screen 1: Dashboard (learner)

Source: information-architecture.md (#1), bias-audit.md (Identify 1, Analyze 1–2, Design 4, Document 1, 4).
- **Layout**: kept the Figma layout (continue card + week list left, courses + achievements right) over a new layout. Reason: ★ screen, must match Figma.
- **Week list**: no type tabs under 8 items (audit). Overdue row: "2 days overdue · You can still submit".
- **Primary action**: Submit on the overdue task; Join turns primary 10 min before class (time toggle in the prototype panel).
- **Feedback row**: note-blue row "Kateryna M. left 2 notes on your recruiting plan" appears only after a review (the only pattern break).
- **Start quiz**: shows a notice that the quiz player is outside the prototype (not in the IA) rather than inventing a screen.

## Screen 2: My courses

- **Layout**: list rows (cover tile, title, progress, time left) over a card grid. Reason: avoids identical card grids; scannable.
- **Tabs**: In progress / Completed, completed rows offer the certificate.

## Screen 3: Course page

- **Structure**: modules as an accordion, only the current module expanded (audit Identify 3).
- **Anchor**: "4 of 12 lessons done · about 2 h 40 min left" (audit Analyze 5).
- **Assignments** sit inside their module with the same status markers as the dashboard.

## Screen 4: Lesson

- **Layout**: video on top, short summary + materials below, right rail with the module's lesson list. Reason: familiar course-player pattern.
- **Completion**: auto at 90% of the video with "Marked complete · Undo" (audit Design 3); simulated playback.
- **Delighter**: finishing the last lesson of a module shows "Module 2 done · 2 of 6 modules" with the bar filling (audit Document 6).

## Screen 5: Assignment (submit + feedback)

- **Brief**: 3 "what to submit" bullets + due date (audit Identify 3).
- **Upload**: same file row and drop zone as Create event Materials (audit Analyze 3); file selection is simulated.
- **Benefit line**: "Your reviewer replies with written feedback by Sat, 3 Oct" (audit Analyze 4).
- **After submit**: "Submitted today, 15:02 · Review by Sat, 3 Oct", replace allowed until review starts (audit Document 1–2).
- **After review**: reviewer name + time, What works / What to fix, "Resubmit by Mon, 5 Oct" + "Upload new version" (audit Document 4).

## Screen 6: Calendar

- **View**: 1 week (Mon 28 Sep – Sun 4 Oct 2026) as day columns over a month grid. Reason: matches the "This week" mental model; short list per day.

## Screen 7: Tasks

- **Reuse**: same row component as the dashboard week list, grouped Overdue / Waiting for review / Today / Later / Done.

## Screen 8: Messages

- **Layout**: conversation list + thread; sending appends a message. Simple depth.

## Screen 9: Review queue

Source: Figma Part 2, mvp-requirements.md, bias-audit.md.
- **Data**: 24 items in Needs review (counts match tabs), 5 Changes requested, 118 Reviewed generated so tabs are real.
- **Default**: Needs review, sorted overdue first then oldest; sidebar badge = Needs review count (audit Identify 2).
- **Rows per page**: 25 so a new submission is visible on page 1; arriving work also shows a toast "New submission from Anna Kovalenko · Open".
- **Panel**: non-modal right panel; "Anna has been waiting 3 days" (audit Analyze 7); no pre-selected decision; Send & next disabled until decision + at least 1 feedback part (audit Design 2).
- **Filters**: applied instantly; Module filter disabled until a course is chosen (audit Identify 3); Course filter has search and pinned selected items; Clear all.
- **Bulk**: per-item progress "Assigning 4 of 6…" (audit Analyze 8); partial failure rules: Marta has no access to Product Analytics for Designers; "Dashboard wireframes" is withdrawn mid-action. Confirmation only for actions that email students or are not reversible in bulk; assign/unassign use Undo.
- **Ending**: "You're all caught up · N reviewed today · Next deadline: Sat, 3 Oct" (audit Document 5).
- **States**: Empty, No results, Loading (also 350 ms on tab change), Error with Retry, Read-only (Observer) – via the prototype panel.

## Screen 10: Events

- **Layout**: table (title, next session, repeat, course, price, status) with New event as the page's primary action.

## Screen 11: Create event

- **Layout**: kept Figma (5 sections + sticky preview and checklist).
- **Defaults for a new event**: time zone from profile (Kyiv), Free, Does not repeat, reminders on (audit Design 1). The Figma draft "Synthesizing interview data" opens pre-filled as in Figma.
- **Validation**: end before start shows an inline error; Publish needs a title.

## Screen 12: Courses, Lessons, Interactive content, Reports, Chat

- **Depth**: simple lists on the same table and row components; Reports as a list of report types with "last run", not hero metrics; Chat reuses Messages.

## Prototype panel (approved in the brief)

- Collapsible, bottom-left: time (15:02 / 18:52), queue state, reviewer role (Admin / Observer), fill example review, reset.

## v2 navigation (01.10.2026)

Source: `v2/product-audit.md` (Target IA, section 4) after the full audit of the base file.
- **Sidebar**: Home · Courses · Library · Review queue · Events · Reports · Messages, the same component as in Figma. Lessons and Interactive content → Library; Chat → Messages.
- **Home**: "Needs your attention" with real actions (Overdue tab, Give access, Open draft) instead of tiles that repeat the sidebar (audit A5).
- **Messages**: role and course under every name, the submission a thread is about pinned on top with "Open in review queue", unread dot and sidebar count (audit H1).
- **Reports**: named by the question they answer, with today's answer in the row (audit F3). The result screen and the column panel are in Figma only.
- **Role switch** still lands on the Review queue so the cross-role demo stays 1 click; the logo leads to Home.

## Every screen (01.10.2026, later)

The HTML prototype is the only clickable version, so it has to hold the whole product.
- **Editors save as you type** (“Saving… → Saved just now”); Update / Publish is the 1 primary action, the rest is in “…” (audit B1, C1, C2).
- **Each editor shows its audit fix in action**: an unmarked quiz question blocks Update and opens that question (E1); a gap is made by clicking words and the learner preview updates live, delete has Undo (E3, D1); lesson length is read from the video (D2); the activity type is picked inside the lesson (A7); the report answers first and its columns change without a “Run” step (F1, F2).
- **New activities** start as drafts inside the lesson they were added to; a draft needs a title (and a correct answer, a gap or a due date) before it can be published.
- **Data stays the same as Figma**: 24 to review (9 + 7 + 8), report median 7 of 12, Module 2 finished by 42 of 48.

## Sidebar and dashboard after the review on 01.10.2026

- **No always-on role switch.** It took space on every screen for something few people use. The account block at the bottom shows who is signed in and the role; “Switch to student / teacher view” is in its menu. The prototype keeps the guided toasts (“Switch to Admin”).
- **Hide sidebar.** The icon next to the logo folds the sidebar into a 68 px icon rail with the same badges (choice remembered per viewer).
- **Top bar on every screen** (2nd review, 01.10): ← → on the left, search ⌘K and the bell on the right. The arrows first sat next to the hide icon; they moved next to search, so they live with the content, not with the menu. Search and notifications used to exist only on the 2 dashboards; now they work from every screen. The prototype keeps its own history because the browser’s Back does not reach a page inside the artifact; → is grey until there is somewhere to go.
- **1 place for the account.** The avatar in the top right repeated the account block at the bottom of the sidebar, so it is gone; the block keeps the role switch and stays visible in the rail.
- **No ‹ buttons.** Editors, Create event and the report lose their ‹ (it repeated ←); the breadcrumb leads up instead (“Courses / UX Research Fundamentals”, “Events”, “Reports” are links). Learner course, lesson and assignment pages keep their parent link (“My courses”, “Tasks”) without the arrow.
- **The learner bell opens notifications** instead of the Messages page, which the sidebar already has: new feedback (unread, lights the dot), the overdue task, today’s class and quiz, the seminar.
- **All icons are Lucide** (lucide-static 0.469.0, ISC licence) in the prototype and in Figma. SF Symbols were ruled out: Apple’s licence allows them only in apps for Apple platforms, and Learnly is a web product.
- **Achievements** moved from a big card at the bottom of the dashboard to 3 chips next to the greeting (weekly goal, certificates → the Certificates page, badges): seen first, 1 line, never above the work.

## Roles and responsive layout (01.10.2026, 3rd review)

- **Roles read Student and Teacher** in the interface: the account block, its menu (“Switch to student / teacher view”), conversation subtitles, the report column. Routes, data and the brief keep learner / admin; frame names in Figma follow the brief.
- **The prototype works from 1440 px down to a phone.**
  - From 1200 px: full sidebar, or the 68 px rail if the person hides it.
  - 768–1199 px: the rail by default; the panel icon opens the full sidebar as a drawer over the page.
  - Under 768 px: no sidebar; the panel icon in the top bar opens the drawer. ⌘K hints are hidden, the search fills the bar.
  - Under 1000 px two-column screens (editors, Create event, admin home, lesson, assignment, quiz editor) become 1 column; review queue rows become 2-line cards (title + status, then student + waiting time); other tables scroll sideways inside their card.
  - Phones: the review panel is full screen; Messages shows the list first and a conversation on its own screen with ‹ back to the list; the calendar lists the days top to bottom; rows with an action put the action under the text.
- **The top bar is pinned** (02.10): it stays on top while the page scrolls; editor and Create event headers stick right under it (on phones they scroll away to save height).
- **Learner dashboard 1000–1439 px:** Continue learning across the top, then This week and, beside it, My courses with Contacts as 2 halves (her call: the half-width My courses card under a full-width week looked empty). A week row in a narrow card moves the due date and the button to a second line.

## Taken from Olena’s Scale project (02.10.2026)

Scale (her 2024 learning platform, tested in Maze with 13 people) solved the same loop: lesson → homework → teacher feedback. Not copied 1:1: the brief redesigns Eleken’s product, Scale is a cohort school with a curator, group chat and a shared work wall, and its dashboard kanban shows Done items that need no action. Taken where it fits:
- **Review status steps** on an assignment waiting for review: Submitted → In the review queue → Feedback by Sat, 3 Oct, with “Teachers reply within 48 h”. A late review says so in red (“Feedback was due 30 Sep”) and explains that late reviews go to the top of the teachers’ queue. The side card no longer repeats the reply time.
- **Next live session** on the course page under the header, with Join (opens at 18:50) and a note that the recording appears there afterwards.
- **Tasks as a board**: To do → In review → Done follows the review loop, so a card moves by itself (submit → In review; changes requested → back to To do; accepted → Done). The dashboard keeps 1 list sorted by urgency, because there the question is “what now”.


## Product assessment, priority 1 (02.10.2026)

From the 5-area UX review (`design/reviews/product-assessment.md`, actions 1–11). Each change answers a finding there.
- **Search returns results.** The top bar search lists courses, lessons and assignments from the prototype data (a teacher also gets students); a result opens its screen, a student opens the review queue filtered to that person. Arrows, Enter and Esc work; ⌘K puts the cursor in it.
- **The bell shows only what is new** since the last visit: feedback, chat replies and recordings for a student; new submissions and messages for a teacher. With nothing new the dot goes off and the panel says so. Standing to-dos stay on Home and This week, so the bell no longer repeats them.
- **A weekly goal instead of the streak:** “2 of 3 days this week”. The student picks 2–5 days; missing one resets nothing. A streak punishes a missed evening; this audience is short of time first of all (Scale: “no time” is the first reason to quit).
- **Badges lead to a page** where each badge names a real step (“Research goals accepted”, “Module 1 finished: Discovery”) and the next one is shown.
- **A late review gives the student something to do:** “Your teacher has been reminded” and “Ask Kateryna M.”, which opens the chat with a soft message the student can edit (“…No rush”). In Scale 47% go to their mentor first when something goes wrong.
- **While waiting:** the next lesson with the minutes left, or “I’m done for today”. The status badge is gone while the review steps show the same thing.
- **Accepted moves the module forward:** “Module 2 · 3 of 5 done · was 2” with the bar and the next lesson.
- **Softer teacher reminders.** The confirmation names the students and takes 1 line from the teacher. Only students who owe a new version (Changes requested) get one, at most 1 a week; the rest are listed as skipped. “Give them another week” moves their resubmit date from Mon, 5 Oct to Mon, 12 Oct instead of sending a reminder.
- **Amber, then red.** Past the 48 h promise a submission turns amber: the bar on the row, “Waiting 2d”, the badge in the review panel, the Overdue tab count. After 72 h it turns red. Home shows “3 submissions waiting more than 48 h” in red with “1 over 72 h” while Anna waits; once she is reviewed the row turns amber. Red keeps meaning “act now” instead of becoming background noise that pushes teachers into rushed feedback.
- **Bulk bar:** its labels stay on 1 line (at 1280 px they wrapped).
- **Live class preparation:** the class row on This week and the card on the course page say “Bring your interview script from Lesson 4”, linked to her own file. Maria’s message now says “interview script” too: it said “guide” while the assignment and the file say script.
- **Deadline reminder by email:** the evening before the due date at 19:00, only if the work isn’t submitted (exactly 24 h before a 23:59 deadline would land at bedtime). The assignment shows it under the due date (“We’ll email you on Sat, 3 Oct at 19:00 if it isn’t submitted”) with “Turn off for this assignment”; the button says what it does instead of a “Remind me later” that sounds like a snooze. The teacher switches it in the assignment editor (Submission → Reminder email, on by default); off there, the line disappears for students. It is an email, not a bell item: the bell shows only what is new.
- **Course finished:** a completed course opens a page with the certificate (Download PDF, Add to LinkedIn), a post to finish in her own words with Copy text and a next course only when one genuinely fits: Information Architecture → Card Sorting, with the reason; Design Thinking Basics gets none. My courses · Completed rows lead there, so the Download button moved from the row to the page.
- **Fixed along the way:** progress bars inside a column were 0 px tall, so the dashboard My courses card and the My courses page showed no bars; on a phone My courses rows overlapped because of the 260 px progress column, now the progress goes under the title. The feedback status showed twice (header badge and card), now once in the header, with the grade when accepted. Search results with mixed matches repeated a group (Students twice); each group is 1 block now. The Badges page keeps Dashboard active in the sidebar.

## 06.10.2026

- **Certificates page.** The “2 certificates” chip opens the certificates themselves with Download PDF and Add to LinkedIn; finished courses stay in My courses · Completed.
- **Continue learning as in Scale:** the cover fills the left edge at full height and carries no play button, so Resume is the only action on the card; time left at the top right, Video / Slides as labels, the bar with “33% · lesson 5 of 12”.
- **Contacts under My courses**, the only block of the Scale dashboard not used yet: the teacher, the reviewer and the course group with the names and roles from Messages. A row opens that conversation (on a phone, the thread itself). Scale’s Upcoming events stayed out: live classes are already in This week, so it would bring back 2 lists answering 1 question (L2 in the audit).
- **My courses on the dashboard lists only the courses in progress:** the dashboard answers “what now”. Finished courses are in My courses · Completed and on the Certificates page; the catalog link went, the catalog is not part of this cut.
- **1440 px and wider, the 2 rows line up:** Continue learning takes the height of My courses (its progress and Resume sit at the bottom), so This week and Contacts start on 1 line.
- **Student pages take the width the sidebar leaves**, like the teacher pages: hiding the sidebar widens the content instead of an empty strip on the right. Reading pages (assignment, badges, certificates, finished course) keep their max width.
- **Prototype controls explain themselves.** On the first visit (1000 px and wider) the panel opens with hints and arrows; ⓘ next to × shows them again (760 px and wider, where they fit beside the panel).
- **Figma and the prototype were compared state by state**; each difference was fixed on the side that was wrong. The decisions that came out of it:
  - a reviewed row stays where it was with “You reviewed just now” until the teacher switches tabs, so the next row doesn’t jump under the cursor; Send & next stays off until there is a decision and a comment;
  - on a second attempt Activity starts with the earlier review (cut at 4 lines, Show more), then the new upload with the student’s note and reply;
  - the assignment page shows “Your submission”: the file, its size, when it was sent and how many days after the deadline; the dashboard greeting names the newest feedback;
  - Create event reads “New event” until the event has a title, the date opens a calendar and the description has a formatting bar.
