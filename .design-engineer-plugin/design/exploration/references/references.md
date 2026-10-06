# References and design direction

Source of truth: the submitted Figma file tcraZAiMnwIP7IZUSjI3V2 (pages Part 1, Part 2, Design system). The prototype must look like the same product the reviewer at Eleken sees in Figma, so the direction below is taken from that file, not invented for the prototype.

## Design feel

Precise like a well-kept gradebook: calm, dense where work happens (the queue), airy where the learner decides what to do next (the dashboard). Urgency is quiet but impossible to miss: red only for overdue, amber only for due today.

## Bold aesthetic flavor

Industrial-utilitarian, softened for education: a working tool with warm paper-like neutrals and 1 confident ink-violet accent. No decoration that does not carry information.

## Signature element

The "Waiting 3d" overdue marker: red bar on the row edge + clock icon + text, the same everywhere a submission or a task is late (dashboard row tint, queue row bar, panel badge). It is the product's main promise to learners: someone will look at your work in time.

## Color world (from Figma variables, collection "Color")

- Paper `#F6F6F3` (canvas), sheet `#FFFFFF` (surfaces), margin `#F1F0EC` (subtle fills)
- Rule lines `#E6E4DE`, `#D3D0C8` (borders)
- Ink `#1A1A19`, pencil `#5F5E5A`, faded pencil `#8C8B86` (text)
- Ink violet `#5B47E0` (actions, focus, selection), violet wash `#EEEBFF`
- Red pen `#C8322B` / `#FDECEA` (overdue), highlighter amber `#A15C07` / `#FEF3E2` (due today), approved green `#1D7A4A` / `#E6F4EC`, note blue `#2563C9` / `#E8F0FC` (changes requested)

## Typography

Inter, 9 text styles (28/36 display down to 11/16 overline). WHY: it is the typeface of the submitted Figma design; changing it in the prototype would make the prototype look like a different product than the one being reviewed. Tabular figures matter in the queue (dates, counts), and Inter has them.

## Token naming for the prototype

Use domain names that map 1:1 to the Figma variables: `--paper`, `--sheet`, `--margin`, `--rule`, `--rule-strong`, `--ink`, `--pencil`, `--pencil-faded`, `--ink-violet`, `--violet-wash`, `--red-pen`, `--red-wash`, `--highlighter`, `--highlighter-wash`, `--approved`, `--approved-wash`, `--note-blue`, `--note-wash`.

## Named defaults to avoid

1. Hero metric dashboard (big numbers + sparklines) – the dashboard leads with the next action, not stats.
2. Modal for opening a submission – the queue uses a non-modal side panel so the list stays visible.
3. Every button primary – 1 primary action per view (Resume lesson, Submit for the most urgent task, Publish, Send & next).

## Known tension with the plugin's anti-pattern list

The plugin bans Inter without a WHY and warns about purple accents. Both are kept on purpose (WHY above): the prototype must match the submitted design 1:1. The purple gradient on course covers is the only gradient and carries no text.
