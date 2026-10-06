# Learnly – product audit (as-is)

Source: Eleken base wireframes, Figma hVPl0GIBWLR7TC9fwFeaEO (42 frames), walked through as a clickable prototype (flows "Learner" and "Admin"). Audit date: 01.10.2026.

Totals: 42 frames · 25 screens · 41 issues.

Method: every frame grouped into unique screens and states; each issue rated on Nielsen's severity scale (0 not a problem · 1 cosmetic · 2 minor · 3 major · 4 catastrophe) and tied to frame IDs; heuristics (H1–H10) plus the 4 lenses of the bias audit already run for Part 1–2. Structural findings first, cosmetic last. Wireframes are grey on purpose, so visual styling is not judged.

## 1. Inventory: 42 frames → 25 screens

| # | Screen | Frames (states) |
|---|---|---|
| S1 | Learner dashboard | 2:185 (role menu open) |
| S2 | Admin home | 2:393 · 2:475 (Tasks review tile, +4) · 2:558 (notifications open) |
| S3 | Courses list | 2:676 |
| S4 | Course editor · Overview | 2:5912 |
| S5 | Course editor · Pricing | 2:5804 |
| S6 | Lessons list | 2:808 · 2:929 |
| S7 | Lesson editor · Overview | 2:3221 |
| S8 | Lesson editor · Details | 2:3327 |
| S9 | Lesson editor · Content & Activities | 2:3431 (empty, delete popover) · 2:3574 (filled) |
| S10 | Interactive content list | 2:1058 · 2:1216 |
| S11 | Select content type | 2:3707 · 2:3808 · 2:3906 · 2:4004 (4 hover states) |
| S12 | Quiz editor | 2:4102 · 2:4668 (questions expanded) |
| S13 | True/False editor | 2:4868 (empty) · 2:4996 (with questions) |
| S14 | Fill the gaps editor | 2:5297 · 2:5150 (gap added) · 2:5437 (list, delete popover) |
| S15 | Essay editor | 2:5664 |
| S16 | Events list | 2:1374 · 2:1500 |
| S17 | Event editor · Basic info | 2:4264 |
| S18 | Event editor · LMS Courses | 2:4583 |
| S19 | Reports list | 2:1626 · 2:1744 (sort menu open) |
| S20 | Report editor | 2:2774 (Users, type menu) · 2:2885 (saved) · 2:2991 (Education) · 2:3098 (Subscriptions) |
| S21 | Report result | 2:1862 |
| S22 | Tasks review · courses | 2:2038 |
| S23 | Tasks review · modules of a course | 2:2135 |
| S24 | Tasks review · tasks of a module | 2:2276 |
| S25 | Chat | 2:2466 (conversation) · 2:2640 (new conversation) |

The product is an authoring and admin tool: 24 of 25 screens are for the admin. The learner has 1 screen.

## 2. Findings

### A. Structure and flows

- **A1 · 4 · No course outline; parents are chosen from inside children.** Course content is split across 3 top-level sections (Courses, Lessons, Interactive content). A lesson gets its course from a dropdown on its 2nd tab ("Lesson Course", 2:3327). Every interactive editor asks for Course and Lesson again (2:4102, 2:4868, 2:5297, 2:5664). The course editor has only Overview and Pricing (2:5912, 2:5804). Building 1 course means jumping between 3 sections and reselecting the same course each time, and lesson order is undefined (2:808 has no order or module). H4, H6, H7.
- **A2 · 4 · Reviewing homework takes 3 screens and the decision is ambiguous.** Tasks review → course → module (2:2038 → 2:2135 → 2:2276), 1 course at a time, no dates or urgency. Accept and Decline are 2 checkboxes that can both be ticked (2:2276). "Leave comment" leaves the submission for a general chat (2:2276 → 2:2466), so feedback is detached from the work. H1, H5, H7. (Part 2 answers this.)
- **A3 · 3 · Modules exist but cannot be created.** Review lists modules (2:2135), yet no editor has modules. H4.
- **A4 · 3 · Missing screens.** Learner nav (Courses, Calendar, Tasks) and the dashboard "Submit" lead nowhere (2:185). There is no course page, lesson player, assignment submission or feedback view for learners; no learner/enrolment management for admins; no report output for Education or Subscriptions (only Users, 2:1862). H3.
- **A5 · 2 · Admin home repeats the sidebar.** 6 tiles with the same 6 destinations (2:393); only Tasks review shows a count, on hover (2:475). Nothing says what needs attention. H8.
- **A6 · 2 · Role switch is hidden** in a header dropdown as radio buttons (2:185, header of every admin frame). H1.
- **A7 · 2 · Activity type is chosen in a dropdown with buttons inside** (2:3707), outside the lesson it belongs to. H4.

### B. Consistency and standards

- **B1 · 3 · Toolbars with 4–5 equal buttons on every editor.** Save / Save & Close / Save & New / Cancel (2:5912, 2:5804, 2:4264, 2:2774) or Save / Publish / Unpublish / Delete (2:3221, 2:4102, 2:5664). Publish and Unpublish are shown at the same time; destructive Delete sits next to Save; there is no primary action. H4, H5, H8.
- **B2 · 3 · Publishing is a checkbox column** next to the row-selection checkbox (2:676, 2:808, 2:1058, 2:1374): 2 checkboxes per row, easy to publish or unpublish by accident. The event form repeats it as "Published Yes / No" (2:4264). H5, H4.
- **B3 · 2 · The sidebar changes between screens.** Chat is missing on 2:3808–2:4004 and on the True/False, Fill the gaps and Essay editors; the active item is wrong on 2:929 (Interactive content) and 2:1500 (Reports). H4.
- **B4 · 2 · Lists show only names.** No status, dates or owners; sorting through a "Sort Table By" dropdown instead of column headers (2:676, 2:808, 2:1374, 2:1626); "$" as its own column (2:676, 2:1374). H6, H8.
- **B5 · 2 · Labels and dropdowns.** Labels sit left on some screens and above on others; course "Basic info" uses placeholders as labels (country, level, category, 2:5912). H4, H6.
- **B6 · 1 · Copy-pasted helper text.** "If you want to use a title for the content and activity section" under Quiz, True/False, Fill the gaps and Essay titles; True/False and Fill the gaps call the title "Section Title". H2.

### C. Visibility of status and feedback

- **C1 · 3 · 2 levels of saving.** Each activity card has its own Save and Delete inside a page that has its own Save (2:3431); each sentence in Fill the gaps has its own Save (2:5150, 2:5437). It is unclear what is saved. H1, H5.
- **C2 · 2 · Confirmation after saving exists only in reports** ("The Report Was Saved", 2:2885). H1.
- **C3 · 2 · Pricing help points to a missing button**: "click Save or Publish", but the course editor has no Publish (2:5804). H1, H10.

### D. Error prevention and recovery

- **D1 · 2 · Deletes are tiny popovers with "Yes / No"** (2:3431, 2:5437), no undo; list toolbars keep Delete always visible. H3, H5, H9.
- **D2 · 2 · Lesson duration typed by hand as "00:00:00"** (2:3327) although it comes from the video. H5, H7.

### E. Recognition, efficiency, authoring editors

- **E1 · 3 · Quiz questions are hidden in an accordion** ("Questions", 2:4102 / 2:4668) above an always-open "Add Question" form; no numbering, reordering or editing in place; the correct answer is an unlabeled radio. H6, H7.
- **E2 · 2 · True/False**: the True/False switch is squeezed beside the rich-text box; "+" and trash icons without labels (2:4996). H6.
- **E3 · 2 · Fill the gaps**: the gap-on-selection idea is good, but there is no learner preview and each sentence saves separately (2:5150). H1.
- **E4 · 3 · Essay has 3 overlapping instruction fields** (Description, Instructions file, Assignment instructions) plus resources, but no due date, grading or rubric – and essays are what end up in review (2:5664). H8, H2.
- **E5 · 2 · Every activity needs an icon upload** (2:3431) – effort with little value. H8.
- **E6 · 1 · Course image and video** use a text input + Upload button next to large empty boxes (2:5912). H4.

### F. Reports

- **F1 · 2 · The report builder is a column picker.** Choose a type, tick columns (2:2774, 2:2991, 2:3098); metrics like retention rate are mixed with columns; nothing is visible until "Run Report". H1, H6.
- **F2 · 2 · The result is a raw table** with a search box per column; "Export to PDF" looks primary; Delete sits next to Save&Close (2:1862). H8, H5.
- **F3 · 1 · Report types are named by data source** (Users, Education, Subscriptions), not by the question they answer. H2.

### G. Events (detailed in Part 1, screen 2)

- **G1 · 3** 4 equal buttons; **G2 · 3** contradictory repeat logic; **G3 · 2** course link in 2 places (Lesson Course + LMS Courses tab, 2:4583); **G4 · 2** scattered date and time; **G5 · 2** overlapping labels "Title / Details"; **G6 · 2** publish as a field; **G7 · 2** no grouping (2:4264).

### H. Messages and notifications

- **H1 · 2 · Chat is reached through review breadcrumbs** ("Tasks review › Course name › Module name › Chat", 2:2466) but works as a general inbox; file names are used as separators; contacts show no course, role or context (2:2466, 2:2640). H2, H6.
- **H2 · 1 · Notifications are split by role** ("Student / Teacher (+3)") inside the admin view, and items are not linked to the place to act (2:558). H7.

### L. Learner dashboard (detailed in Part 1, screen 1)

- **L1 · 3** greeting banner and rewards above the work; **L2 · 3** 2 lists for the same question; **L3 · 2** no urgency; **L4 · 2** progress without a next step; **L5 · 2** live class below the fold (2:185).

## 3. Top 10

| # | Issue | Severity | Why it ranks here |
|---|---|---|---|
| 1 | A1 No course outline, parents chosen inside children | 4 | Core authoring task; touches 10+ screens |
| 2 | A2 3-level review, ambiguous decision, feedback in chat | 4 | Core teaching task; learners drop out without feedback (research) |
| 3 | A4 Learner side missing | 3 | Half of the product's users have 1 screen |
| 4 | B1 Toolbars without a primary action, Publish + Unpublish together | 3 | Every editor (9 screens) |
| 5 | B2 Publishing as a checkbox in lists | 3 | 4 lists; accidental publishing |
| 6 | C1 2 levels of saving | 3 | Data loss risk in the lesson and gaps editors |
| 7 | E1 Quiz questions hidden, no reordering | 3 | Most common activity type |
| 8 | E4 Essay without due date or grading | 3 | Feeds the review queue |
| 9 | A5 Admin home without status | 2 | First screen of every admin session |
| 10 | F1 Reports as column pickers | 2 | No answers without a manual export |

## 4. Target IA

Admin sidebar: **Home · Courses · Library · Review queue · Events · Reports · Messages** (7 items, same count as today).
- Courses → course editor with tabs **Overview · Curriculum · Pricing & access**. Curriculum = modules → lessons → activities. Lessons and activities are created in place, so the parent is always known (fixes A1, A3, A7).
- Library = reusable activities across courses (replaces "Interactive content" as a creation place; keeps reuse).
- Review queue = Part 2 (replaces the 3 Tasks review screens).
- Messages = conversations linked to submissions and courses (replaces Chat).
- Home = what needs attention today (replaces the tiles).
Learner sidebar: **Dashboard · My courses · Calendar · Tasks · Messages** (screens on Figma page “Product · all screens”).

Rules for every editor: 1 primary action (Publish / Update), Save draft secondary, autosave status, Delete in a "…" menu with undo; status badge in the header; labels above fields; sections with numbers only where the order matters.

## 5. Screen list (new ↔ base)

| New screen | Replaces base frames | Fixes |
|---|---|---|
| Admin home | 2:393, 2:475, 2:558 (notifications as a panel) | A5, H2, A6 |
| Courses list | 2:676 | B2, B4 |
| Course · Overview | 2:5912 | B1, B5, E6, C2 (save status in every editor header) |
| Course · Curriculum (new) | 2:808, 2:929, modules from 2:2135 | A1, A3 |
| Course · Pricing & access | 2:5804 | C3, B1 |
| Lesson editor | 2:3221, 2:3327, 2:3431, 2:3574 | A1, C1, D2, E5 |
| Add activity (state of lesson editor) | 2:3707, 2:3808, 2:3906, 2:4004 | A7 |
| Quiz editor | 2:4102, 2:4668 | E1, B6 |
| True/False editor | 2:4868, 2:4996 | E2, B6 |
| Fill the gaps editor | 2:5297, 2:5150, 2:5437 | E3, C1, D1 |
| Assignment editor (was Essay) | 2:5664 | E4 |
| Library | 2:1058, 2:1216 | A1, B2 |
| Events list | 2:1374, 2:1500 | B2, B4 |
| ★ Create event (Part 1) | 2:4264, 2:4583 | G1–G7 |
| Reports | 2:1626, 2:1744 | F3, B4 |
| Report result + builder panel | 2:1862, 2:2774, 2:2885, 2:2991, 2:3098 | F1, F2 |
| ★ Review queue (Part 2) | 2:2038, 2:2135, 2:2276 | A2 |
| Messages | 2:2466, 2:2640 | H1 |
| ★ Learner dashboard (Part 1) | 2:185 | L1–L5, A6 |
| Learner screens (page “Product · all screens”) | – | A4 |

## 6. What changes outside the new screens

The new IA renames admin navigation (Lessons and Interactive content → Library, Event Manager → Events, Tasks review → Review queue, Chat → Messages, + Home). To keep 1 product:
- the sidebars on the existing Create Event and Review queue frames are updated to the new nav;
- Notes and information-architecture.md get the new IA;
- the published HTML prototype gets the same admin nav before the link goes into the letter.

Done on 01.10.2026: every admin frame in Part 1, Part 2 and the Figma prototype uses the v2 Sidebar component (prototype links rewired), Notes has a "How to read this file" block, information-architecture.md has the v2 admin IA, and the HTML prototype (artifact version 3) has Home, Library and Messages.

Later on 01.10.2026: the redesign became 1 clickable product. Figma page "Product · all screens" (renamed from "v2 · Redesign") holds all 34 screens of both roles: 11 learner screens (Dashboard, Dashboard after a review, My courses, Course page, Lesson, Assignment to submit / submitted / feedback, Calendar, Tasks, Messages) and 23 admin screens, including the Review queue and Create event frames moved from the old "Prototype" page (that page is deleted). Flows "Learner" (27:3) and "Admin" (41:3); every sidebar item, the role switch and the main in-page actions are linked; a script checked that every screen is reachable and no link points outside the page. The audit page is now called "Product audit".

Final on 01.10.2026: the Figma prototype links and flows were removed. Page “Product · all screens” keeps all 34 screens as static designs with their “Fixes” tags; the clickable version that goes into the letters is the HTML prototype (https://learnly-prototype.vercel.app).
