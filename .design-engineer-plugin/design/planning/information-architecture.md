# Information architecture (prototype)

Screen list approved on 01.10.2026. ★ = screen exists in the submitted Figma file tcraZAiMnwIP7IZUSjI3V2; other screens are new for the prototype and reuse the same components.

## Global navigation

Left sidebar (248 px) with the product mark "Learnly" and a hide-sidebar icon next to it (the sidebar folds into a 68 px icon rail), nav items for the current role and an account block at the bottom (avatar, name, role). Switching between learner and admin views is an item in the account menu, because few people have 2 roles. Switching role keeps the user on the role's main screen: Learner → Dashboard, Admin → Review queue (the demo starts there). The admin logo leads to Home.

Top bar on every screen (64 px): ← → through the screens opened in this session (→ is grey until there is somewhere to go), global search (⌘K: courses, lessons, tasks for learners; courses, learners, submissions for admins) and the notifications bell. There is no avatar in the top bar: the account lives only at the bottom of the sidebar. Editors and Create event have no ‹ button: the breadcrumb leads up.

## Learner role (Anna Kovalenko)

| # | Screen | Depth | In from | Out to |
|---|---|---|---|---|
| 1 | ★ Dashboard | Deep | Role switch, logo | Lesson (Resume), Assignment (Submit / Open), Course page, Calendar, Tasks, My courses |
| 2 | My courses | Medium | Sidebar, Dashboard "Browse catalog" | Course page |
| 3 | Course page | Deep | My courses, Dashboard course rows | Lesson, Assignment |
| 4 | Lesson | Deep | Dashboard Resume, Course page | Next lesson, Assignment, Course page |
| 5 | Assignment (submit + feedback) | Deep | Dashboard, Tasks, Course page, Lesson | Course page; after Submit appears in the reviewer's queue |
| 6 | Calendar | Simple | Sidebar | Lesson / live class, Assignment |
| 7 | Tasks | Simple | Sidebar, Dashboard "Open all tasks" | Assignment |
| 8 | Messages | Simple | Sidebar | – |

## Admin role (reviewer "You", Kateryna M.)

Updated on 01.10.2026 to the v2 IA from the product audit (`v2/product-audit.md`, section 4). Sidebar: **Home · Courses · Library · Review queue · Events · Reports · Messages**. Old names map as: Lessons and Interactive content → Library, Chat → Messages, + Home. The role switch still lands on the Review queue, so the cross-role demo stays 1 click.

| # | Screen | Depth | In from | Out to |
|---|---|---|---|---|
| 9 | Home: what needs attention today (overdue reviews, Marta's access, event and course drafts), today's class and quiz, courses with "to review" counts | Medium | Sidebar, logo | Review queue (Overdue tab), Create event (draft), Events, Courses |
| 10 | ★ Review queue (side panel, Send & next, bulk selection, partial failure, 147-selected confirmation, empty / no results / loading / error, read-only) | Deep | Role switch, sidebar, Home, Messages | Submission panel |
| 11 | Events | Medium | Sidebar, Home | Create event |
| 12 | ★ Create event | Deep | Events "New event", Home "Open draft" | Events (after Publish / back) |
| 13 | Messages: role and course under each name, the work a thread is about pinned on top with "Open in review queue", unread count in the sidebar | Simple | Sidebar | Review queue (opens the submission) |
| 14 | Courses, Library, Reports (by question) | Simple | Sidebar | – |

Full v2 admin UI (course editor tabs Overview · Curriculum · Pricing & access, lesson and activity editors, report result) is designed in Figma, page "v2 · Redesign"; the HTML prototype shows those as notices.

## Cross-role loop

Anna submits an assignment (5) → it appears at the top of the Review queue (10) → the reviewer sends "What works / What to fix" → switching back to Learner shows the feedback on the Assignment screen (5) and a "Changes requested" row on the Dashboard (1).

## In Figma

Page “Product · all screens” in tcraZAiMnwIP7IZUSjI3V2 shows the same IA as static screens: 11 learner + 23 admin. The clickable version is the HTML prototype, which has all of these screens; Figma has no prototype links.
