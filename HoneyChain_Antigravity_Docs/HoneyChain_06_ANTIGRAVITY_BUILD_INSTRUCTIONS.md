# Honey Chain - Antigravity Build Instructions

Use the following documents as the project source of truth:
1. MASTER_BUILD_BRIEF
2. DESIGN_SYSTEM
3. UX_AND_SCREENS
4. TECH_ARCHITECTURE
5. MOCK_DATA_SPEC

## Build Order

### Phase 1 - Foundation
- create the Next.js app with TypeScript
- configure Tailwind
- establish design tokens
- establish app shell and navigation
- create typed mock data

### Phase 2 - Public Flow
- build landing page
- build demo login
- implement client-side demo session

### Phase 3 - App Flow
- build dashboard
- build history
- implement localStorage persistence

### Phase 4 - QR
- add camera QR scanner
- normalize QR payloads
- resolve mock batch IDs
- handle scanner errors and fallback

### Phase 5 - Verification
- build verification states
- add traceability timeline
- add save-to-history interaction

### Phase 6 - Polish
- test at 360px, 390px, 412px widths
- test keyboard/focus states
- test QR permission failure
- test unknown QR
- test refresh persistence
- test responsive desktop layout

## Coding Preferences
- TypeScript everywhere
- small reusable components
- meaningful names
- no unnecessary abstractions
- avoid overengineering
- keep visual styling in the design system
- avoid hardcoded repeated UI values
- keep mock data separate from UI

## UI Constraints
Do not introduce:
- gradients
- glassmorphism
- neon colors
- crypto/blockchain-themed visuals
- AI imagery
- excessive dashboard cards
- large decorative illustrations that reduce usable space
- automatic carousels
- unnecessary charts

## Content Constraints
Use simple human language.

Preferred wording:
- Verify your honey
- Scan QR
- Batch details
- Where it came from
- Traceability
- Verified
- Scan history

Avoid jargon such as:
- decentralized consumer assurance architecture
- AI-powered provenance intelligence
- blockchain-enabled trust layer

## Important Product Rule
The UI should look simpler than the technology behind it.

## Final Acceptance Test
The complete working flow must be:

Landing
-> Login
-> Dashboard
-> Scan
-> QR result
-> Verification
-> Save
-> History

A judge should be able to complete this without instructions.
