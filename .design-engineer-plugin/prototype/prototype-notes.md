# Prototype notes

File: `prototype.html` (self-contained local HTML). Open locally via http://127.0.0.1:8767/eleken/.design-engineer-plugin/prototype/prototype.html (the job-applications static server) or double-click the file. Responsive HTML; Figma shows the desktop layout.

`learnly-prototype.html` is the Claude artifact variant, with its own in-memory router. Its host supplies the viewport metadata. Run `python3 src/inject.py` from this folder after changing the shared source blocks in `src/`; the script updates both HTML files. Do not replace the two wrappers with one another.

The 03.10 reminder fix also touches the original learner/queue markup. `python3 src/patch-reminders.py` reproduces those base changes safely; run it before `src/inject.py` when restoring an older wrapper. Normal source updates still use `src/inject.py`.

Changes to the original markup (review queue, Create event, student pages) are tuples in `src/patch-review.py`. Full rebuild from this folder: `python3 src/patch-review.py && python3 src/patch-reminders.py && python3 src/inject.py`. The other `src/patch-*.py` files are one-time patches that are already applied; they are safe to re-run.

## Screens covered

Learner: Dashboard with a weekly goal, Badges, My courses (in progress / completed), Course page and completion certificate, Lesson, Assignment (submit, waiting, late review, feedback, new version), Calendar, Tasks, Messages.
Admin (every screen since 01.10): Home with notifications, Courses (new columns, filters), course editor (Overview, Curriculum, Pricing & access), lesson editor with the activity picker, Quiz / True-False / Fill the gaps / Assignment editors, Library, Review queue (6 tabs, filters, sort, side panel, Send & next, all caught up, bulk actions, partial failure, 147-selected confirmation, empty / no results / loading / error, read-only observer), Events, Create / edit event, Reports by question, report result “Who is falling behind?” with the column panel, Messages.

## Cross-role loop (the main demo)

1. Learner → Dashboard → Submit on "Interview recruiting plan" → pick file → Submit.
2. Toast "Switch to Admin" (or the account menu at the bottom of the sidebar) → toast "New submission from Anna Kovalenko · Open".
3. Choose Request changes, write What works / What to fix (or Prototype → Fill example review) → Send & next.
4. Account menu → Switch to student view → blue "New feedback" row → Open feedback → Upload new version.

## Prototype controls (bottom of the sidebar)

Time 15:02 / 18:52 (Join becomes primary), queue state (Live, Empty, No results, Loading, Error), reviewer role (Admin / Observer), fill example review, reset.

## Design decisions

See `decisions.md` (per screen) and `../design/exploration/bias-audit.md` (priority actions). Key ones: 1 primary action per view; teacher reviews turn amber after 48 h and red after 72 h; no loss framing or social proof for learners; human framing for reviewers ("Anna has been waiting 3 days"); no pre-selected decision in review; honest endings (module done, all caught up).

## Context sources

Read and used: design/foundation/problem-statement.md, target-audience.md; design/research/research-findings.md; design/planning/information-architecture.md, mvp-requirements.md; design/exploration/references/references.md, bias-audit.md; design/dev/design-system.md; Figma tcraZAiMnwIP7IZUSjI3V2 (tokens, copy, data); Olena's earlier LMS research (FigJam wchakjcyAnblEecQuw7NZW).

## Figma and prototype

The earlier bias-audit differences were incorporated into Figma on 01.10. The 02.10 UX actions added 7 Figma states. Figma is intentionally static; the HTML is the clickable product. See `../../review-2026-10-03/verification.md` for the independent check, local fixes and remaining differences.

## Open questions

- Done 01.10: audit changes are applied in Figma too, so Figma and the prototype match.
- Done 01.10: admin navigation follows the v2 IA from the product audit (Home · Courses · Library · Review queue · Events · Reports · Messages), same as every frame in Figma. Messages and Home use the same data as Figma "v2 · Redesign": 24 to review (9 + 7 + 8 by course), 3 overdue, 3 unread messages.
- The quiz player, video room, file viewer and full-page review are outside the IA and show a notice instead of a screen.
- Survey sample size from the earlier research is not on the board; percentages are quoted without n.

- The link to send is https://learnly-prototype.vercel.app: it is public and opens without a login (deploy: `vercel deploy --prod --yes` in this folder). The same build is also a private Claude artifact (version 38, 06.10).

- 01.10 final: this HTML prototype is the clickable prototype that goes into the letters, with every screen of Figma page “Product · all screens”. The new admin screens live in `src/` (admin-v2.css, admin-v2.js, admin-v2-editors.js, admin-v2-report.js); `python3 src/inject.py` puts them into both HTML files. Only the learner quiz player and checkout stay notices.
