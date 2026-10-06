# Design system (from Figma tcraZAiMnwIP7IZUSjI3V2, page "Design system")

Cleaned up on 06.10.2026: every spacing, radius, colour and shadow on the product screens now comes from a variable or a style, and buttons and icons are component instances. Every variable has its WEB code syntax set to the prototype CSS name below.

## Color variables (collection "Color", mode Light)

| Figma variable | Prototype token | Value |
|---|---|---|
| bg/canvas | --paper | #F6F6F3 |
| bg/surface | --sheet | #FFFFFF |
| bg/subtle | --margin | #F1F0EC |
| bg/accent-subtle | --violet-wash | #EEEBFF |
| bg/inverse | --night | #1A1A19 |
| border/default | --rule | #E6E4DE |
| border/strong | --rule-strong | #D3D0C8 |
| text/primary | --ink | #1A1A19 |
| text/secondary | --pencil | #5F5E5A |
| text/tertiary | --pencil-faded | #8C8B86 |
| text/on-accent | --on-violet | #FFFFFF |
| accent/default | --ink-violet | #5B47E0 |
| accent/hover, accent/text | --ink-violet-deep | #4A37C9 |
| status/danger, -subtle | --red-pen, --red-wash | #C8322B, #FDECEA |
| status/warning, -subtle | --highlighter, --highlighter-wash | #A15C07, #FEF3E2 |
| status/success, -subtle | --approved, --approved-wash | #1D7A4A, #E6F4EC |
| status/info, -subtle | --note-blue, --note-wash | #2563C9, #E8F0FC |
| avatar/peach … avatar/teal (7) | `AVC[0…6]` in the prototype | #FAD6BA #CCE3FA #D9F2DB #EDDBFA #FCEBBF #F7D4DC #D3EEEA |
| course/ux-research, figma, analytics, design-thinking, ia | `COURSES.<id>.color` | #5B47E0 #0E8C7A #DB7330 #2563C9 #8C6A2E |

Icons take their colour from the text/* variables (secondary by default, tertiary for faded, on-accent inside primary buttons).

## Spacing and radius (collection "Spacing & Radius", mode Default)

- **Spacing** `space/N`: 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 64. Code syntax `var(--space-N)`.
- **Radius** `radius/N`: 2 (progress bars), 4 (checkboxes, tags), 6 (segments, tiles; `--r-sm`), 8 (buttons, inputs), 10 (file rows, menus; `--r-md`), 12 (panels in cards), 14 (cards; `--r-lg`), full = 999 (pills, avatars, badges). Corners are bound one by one, so a split button keeps square inner edges.
- **Left off the scale on purpose:**
  - 1 px — count pills;
  - 3 px — inner padding of segmented controls and badges, which keeps them 22 px high;
  - 7 px — segment buttons;
  - 18, 28, 52, 68, 92 and 96 px — layout offsets: the toast, badge cards, curriculum indents and the 92 px top offset under the app bar.

Coverage on the 41 product screens: padding 3 681 of 4 063 bound (the rest are the values above), gaps 2 184 of 2 188, radius 1 012 of 1 014, fills 3 553 of 3 581 (the rest are translucent overlays), strokes 772 of 778.

## Shadows (effect styles)

| Style | Value | Use |
|---|---|---|
| Shadow/Control | 0 1 2 rgba(0,0,0,.08) | Active segment, active pill, document page |
| Shadow/Raised | 0 6 10 rgba(26,26,26,.14) | Medals and other objects above a card |
| Shadow/Overlay | 0 12 32 rgba(26,26,26,.16) | Menus, popovers, search results, notifications, dialogs |
| Shadow/Toast | 0 8 24 rgba(0,0,0,.25) | Dark surfaces: toast, bulk action bar |
| Shadow/Side panel | −8 0 32 rgba(26,26,26,.12) | The review panel over the queue |

All 34 shadows on the screens use these styles. The prototype CSS still has `--lift` (0 8 24 .14) and `--lift-strong` (0 16 40 .22) for menus and dialogs. Figma merged both into Shadow/Overlay.

## Text styles (Inter)

Display/H1 28/36 Semi Bold −0.5 · Heading/H2 20/28 Semi Bold −0.3 · Heading/H3 16/24 Semi Bold −0.1 · Body/M 14/20 Regular · Body/M Medium 14/20 Medium · Body/S 13/18 Regular · Body/S Medium 13/18 Medium · **Body/S Semibold 13/18 Semi Bold** (actions in toasts, emphasised small text) · Caption 12/16 Medium +0.1 · Overline 11/16 Semi Bold +0.6 uppercase. Each style's description names its CSS class.

Text without a style on the screens is limited to rich text with mixed weights; avatar initials now come from the Avatar component. Annotations and the Before frames keep their own type on purpose.

## Components (frames "Components" and "Icons")

- **Button:**
  - Type Primary / Secondary / Ghost / Danger;
  - Size M 34 px and S 30 px;
  - Label;
  - Leading icon and Trailing icon slots, each switched on with a toggle and swapped to any Icon/* component; the icon takes the label colour.
  
  The Secondary button now has 8/14 padding with the border drawn inside instead of 7/13 + 1 px, so all M buttons are 34 px.

  Rules for buttons on the screens:
  - a disabled button is an instance at 45% opacity, as `.btn[disabled]` in the CSS (for example Join before 18:50); there is no Disabled variant yet;
  - in a split button (Publish ▾, Update ▾) the left half is a Button instance with square right corners, and the arrow half is still a frame.
- **Icon/\*:** 64 Lucide 0.469 icons, drawn at 24 px with a 2 px stroke. Every icon in the file is an instance of them: on the screens and inside the sidebars, the app bar, Field and the editor header. Screens use instances scaled to 12–28 px, so the stroke stays 1/12 of the size. Each description gives the prototype alias, e.g. `ic('dl')` → Icon/download.
- **Avatar:**
  - Size 22 / 24 / 28 / 36 / 40, the same as `.av22` … `.av40` in the CSS. Initials use Caption 12/16 at 22–28 px and Body/S Semibold 13/18 at 36–40 px.
  - Tone:
    - Person: the palette colour; a Person instance gets its own avatar/* colour as a fill override, in AVC order;
    - You: the signed-in teacher or student;
    - Muted: teammates and other staff;
    - Success: a person in a row that has just gone through.
  - Initials is a text property.
  - On 06.10, 219 avatars on the screens and 12 in the sidebars became instances. The 26 px avatars in the report and the 32 px ones in the feedback card and sidebar account block are now 28 px, as in the prototype.
- **Split button:**
  - Type Primary / Secondary, Size M / S. Publish ▾ and Update ▾ in the event editor.
  - The left half is a Button instance, exposed so its label and icons stay editable. The right half (Menu) holds Icon/chevron-down.
  - The halves are 1 px apart and only the outer corners use radius/8.
  - On 06.10 the 3 split buttons on the screens became instances: 109×34, the layout is unchanged.
- **Editor header:** the status is a Badge (Draft → Neutral, Published → Success), and the actions are Button instances: Save draft / Preview and Publish / Update. The primary button is exposed, which replaced the old Primary text property. The status became 22 px high, the standard Badge height.
- **Others:** Badge (6 tones), Checkbox, Toggle, Field, Tab, Sidebar · Admin, Sidebar · Learner, App bar. Each has a description.

**Status badges.** On 06.10, 113 status pills became Badge instances:
- 58 on the screens: Needs review → Warning, Resubmitted → Accent, Changes requested → Info, Draft → Neutral;
- 53 in the Part 2 states;
- 2 in the Part 1 Create Event frames.

The queue badges were identical to the component, so the queue screen renders pixel for pixel the same. The event header's Draft gained the dot, as in the prototype: 46×20 → 58×22.

Badge also has a lead option, the same as `.badge` in the CSS:
- **Dot** is on by default. Turn it off for counters: the “4 of 4” in Create event, 3 of them, now 22 px high like the CSS (was 20).
- **Show icon** with an **Icon** swap is for alerts. The “Anna / Dmytro has been waiting N days” pills, 3 of them, use Danger with circle-alert; the gap is now 6 px like the CSS, so they are 2 px wider.
- The icon takes the label colour.

**Status line** is the component for deadlines and statuses inside rows and cards: “2 days overdue”, “Due today, 23:59”, “Accepted · 9 / 10”.
- **Size:**
  - M: 14 px icon, Body/S Medium, 20 px high — the dashboard This week list;
  - S: 13 px icon, Caption — the Tasks board, as `ic(…,13)` in the prototype.
- **Tone:** Danger, Warning, Success, Info, Neutral (text/secondary) or Muted (text/tertiary). It colours the icon and the label.
- **Properties:** Label, Show icon + Icon, Show note + Note (a tertiary tail such as “· you can still submit”).
- **What changed on 06.10:**
  - 26 lines became instances: 5 on the Tasks board, 11 on the 2 dashboard screens, 10 on the Part 1 After frames.
  - The dashboards render pixel for pixel the same.
  - On Tasks, “Feedback was due 30 Sep” and “Accepted · 9 / 10” had 12 px icons drawn as frames; they are now 13 px, like the other lines.
  - In the Accepted line, the reviewer avatar stays next to the instance.
- **Gotcha:** swapping the icon to the component it already shows resets its colour to the Icon default (text/secondary). Re-apply the tone colour to the icon's vectors after such a swap.
