# Honey Chain - Design System

## 1. Design Direction
Use a minimalist premium food-traceability aesthetic.

Reference feeling:
- sustainable food brand
- premium honey packaging
- clean editorial product design
- calm utility app

Do not copy any specific brand. The goal is the feeling: natural, trustworthy, restrained, modern.

## 2. Visual Principles
1. One clear action per screen.
2. Whitespace is a feature.
3. Information hierarchy is more important than decoration.
4. Use color sparingly.
5. Use borders and spacing instead of piles of cards.
6. Avoid visual effects that suggest AI, crypto, or gaming.

## 3. Color Tokens
Primary background: #FAF9F5
Surface: #FFFFFF
Primary dark green: #173C2C
Secondary green: #365B49
Honey accent: #C99532
Primary text: #18201B
Muted text: #737A74
Border: #E4E5DF
Success: #2F6B46
Warning: #A66A16
Error: #A33A32

Use the honey accent only for important highlights, selected states, or small visual moments.

## 4. Typography
Preferred font family:
- Geist, Inter, or Manrope

Rules:
- headings should be confident but not oversized
- body text should be highly readable
- use medium/semibold weights for labels and buttons
- avoid ultra-light text
- avoid futuristic display fonts

Suggested scale:
- Hero: 40-48px desktop, 34-40px mobile
- Page title: 28-32px
- Section heading: 18-22px
- Body: 15-17px
- Small metadata: 12-14px

## 5. Shape Language
- Medium corner radius, around 14-18px for major controls
- Smaller radius around 10-12px for small elements
- Avoid making every text element a pill
- Pills are reserved for statuses, tags, and compact states

## 6. Borders and Shadows
Prefer thin neutral borders.

Use shadows rarely and softly.

Do not use:
- glowing shadows
- colored shadows
- glassmorphism
- neon effects
- heavy drop shadows

## 7. Buttons
Primary button:
- deep green background
- white text
- strong readable label
- full width on small screens where appropriate

Secondary button:
- white/off-white surface
- dark green text
- thin border

Text actions:
- use only for low-priority actions

## 8. Icons
Use a single consistent line-icon library such as Lucide.

Icons should support text, not replace it.

Avoid:
- 3D icons
- emoji as UI icons
- glossy icons
- mixed icon styles

## 9. Cards
Cards are allowed but should be used for grouped information.

Do not create a card inside a card inside a card.

Good:
A single verification surface containing related honey details.

Bad:
A dashboard full of ten nested cards with redundant containers.

## 10. Layout
Mobile:
- 16-20px horizontal page padding
- 24-32px vertical section spacing
- generous gap between major sections

Desktop:
- centered content area
- max width around 1100-1200px
- mobile information hierarchy remains unchanged

## 11. Signature Visual
Use a traceability timeline as a recurring Honey Chain identity element:

Farm
  |
Harvest
  |
Processing
  |
Packaging
  |
Verified

Keep it thin, simple, and editorial. Do not use glowing blockchain-chain graphics.

## 12. Backgrounds
Primary UI should remain light.

Large parts of the page should use solid off-white or white backgrounds.

No gradients.

## 13. Motion
Use subtle motion only:
- page transitions
- button press feedback
- scanner opening transition
- success state reveal

Animations should be short and almost invisible.

Avoid floating animations, parallax, excessive spring effects, and decorative motion.

## 14. Accessibility
- maintain readable contrast
- do not communicate status through color alone
- use clear labels for camera/scanner actions
- large touch targets
- visible focus states
- screen-reader-friendly labels

## 15. Overall UI Test
Before accepting a screen, ask:
"Could this look like a serious consumer food product in 2026 without looking like an AI dashboard?"

If the answer is no, simplify it.
