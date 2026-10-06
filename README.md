# Learnly: Eleken product design test task

Learnly is a learning management system with 2 roles. Teachers run courses and live classes and review homework. Students study after work.

## Links

- **Prototype:** https://learnly-prototype.vercel.app
- **Figma file:** https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2
  - [Notes](https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2?node-id=1-4): how to read the file, the student’s story, rationale, assumptions and behavior specs
  - [Part 1 · Dashboard](https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2?node-id=0-1)
  - [Part 1 · Create Event](https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2?node-id=1-2)
  - [Part 2 · Review Queue](https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2?node-id=1-3)
  - [Product audit](https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2?node-id=35-2): 41 issues found in the base file
  - [Product · all screens](https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2?node-id=41-2): every screen for both roles
  - [Design system](https://www.figma.com/design/tcraZAiMnwIP7IZUSjI3V2?node-id=1-5)

## Using the prototype

- **Switch roles:** open the account block at the bottom of the sidebar and choose “Switch to teacher view” or “Switch to student view”.
- **Prototype controls:** the Prototype button in the bottom-left corner sets the time of day (Join opens at 18:50), the review queue state (empty, no results, loading, error) and the reviewer role (teacher or read-only observer).
- **Direct links:** [teacher home](https://learnly-prototype.vercel.app/#/admin/home), [review queue](https://learnly-prototype.vercel.app/#/admin/queue), [event editor](https://learnly-prototype.vercel.app/#/admin/event/e1), [student dashboard](https://learnly-prototype.vercel.app/#/learner/dashboard), [calendar](https://learnly-prototype.vercel.app/#/learner/calendar).

The prototype is 1 HTML file. To run it locally, open `.design-engineer-plugin/prototype/prototype.html` in a browser.

## What is in this repository

- `.design-engineer-plugin/design/`: problem statement, target audience, research findings, information architecture, MVP requirements, bias audit, visual references, product assessment and the design system (tokens and components mapped to the Figma variables).
- `.design-engineer-plugin/prototype/`:
  - `prototype.html`: the prototype;
  - `decisions.md`: design decisions with the reasons behind them;
  - `prototype-notes.md`: how to build and open the prototype and which screens it covers;
  - `src/`: the sources that the build injects into the HTML;
  - `learnly-prototype.html`: the same build for a page without URL routes;
- `v2/`: the audit of the base file (`product-audit.md`) with thumbnails of the base screens.
