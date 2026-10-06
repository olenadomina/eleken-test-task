# Problem statement

Sources: Eleken "Product Design Test Task" brief (screenshots shared 01.10.2026), original wireframes (Figma hVPl0GIBWLR7TC9fwFeaEO, 43 frames), submitted test file (Figma tcraZAiMnwIP7IZUSjI3V2, page "Notes").

## The product

An LMS (learning management system) with 2 roles: Learner and Admin / Teacher. Learners take courses made of lessons, assignments, quizzes and live classes. Admins create courses, lessons, interactive content and events, run reports, chat with learners and review homework.

## Problem 1 – the learner (Part 1, dashboard)

The learner opens the dashboard to answer "what should I do now?". The current dashboard does not answer it:

- A 200 px welcome banner and an achievements row sit above anything actionable.
- 2 separate lists (Checklist, My Tasks) answer the same question with different controls.
- Overdue and due-today items look the same as next week's.
- Course progress shows "Progress 10%" with no next step.
- Today's live class sits in a separate block below the fold.

## Problem 2 – the admin creating an event (Part 1, Create Event)

The admin needs to set up a recurring paid live class in 1 pass. The current form has 4 equal buttons, overlapping labels, a course link split across 2 places, contradictory repeat logic, scattered date and time controls and a "Published Yes / No" field inside the form.

## Problem 3 – the reviewer (Part 2, Homework Review Queue)

Brief, Part 2 context (verbatim): "The user is a teacher / reviewer / admin who needs to review student submissions efficiently across courses and modules."

Brief, Part 2 goal (verbatim): "Design a screen that helps the reviewer browse submissions, filter and prioritize work, open submission details, update review status, leave comments, and handle bulk actions when relevant."

Today the reviewer goes through 3 screens (Tasks review → Course → Module) and 3 page loads before seeing 1 submission, and only inside 1 course at a time. Accept and Decline are 2 checkboxes that can both be ticked.

## Why it matters

From the earlier learner research (see research-findings.md): missing homework review and feedback, and demotivating teacher comments, are among the reasons learners abandon courses. Slow review is a retention problem, not only a teacher-efficiency problem.
