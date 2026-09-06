# Honey Chain - UX and Screen Specification

## Screen 1: Landing

### Goal
Explain the product in seconds and move the user toward verification.

### Hero
Headline:
Know where your honey comes from.

Supporting copy:
Verify the origin, batch, and journey of your honey with one simple scan.

Primary CTA:
Get Started

Secondary CTA:
Login

### Supporting visual
A simple honey package / QR verification composition or a clean traceability path.

### Lower section
Show a compact three/four-step flow:
Farm -> Harvest -> Processing -> You

Avoid a long marketing page.

## Screen 2: Login

### Goal
Allow instant demo access.

Content:
Welcome back
Demo ID field
Password field
Login button
Small helper text indicating prototype/demo access

On invalid credentials, show a small inline error.

Do not redirect to a complex auth flow.

## Screen 3: Dashboard

### Goal
Make scan action obvious immediately.

Top:
- Honey Chain wordmark
- simple user/menu action

Greeting:
Good morning / Good afternoon

Main action:
Verify a honey batch
Scan the QR code on your honey package
[Scan QR]

Overview:
- Total scans
- Verified
- Review/flagged

Recent scans:
Show 2-4 records.

Bottom navigation:
Home | Scan | History

The dashboard is not an analytics admin panel. Keep it consumer-oriented.

## Screen 4: QR Scanner

### Goal
Scan quickly with minimal friction.

Components:
- camera viewport
- simple square scanning frame
- short instruction: Place the QR inside the frame
- cancel/back control
- permission/error state

After successful scan:
Show a small confirmation and navigate to verification.

Fallback:
Allow a demo batch ID input if camera access is unavailable. Label this clearly as a demo fallback.

## Screen 5: Verification

### Top state
VERIFIED

Honey type:
Forest Honey

Batch ID:
HC1024

### Details
Origin
Wayanad, Kerala

Producer / beekeeper
Green Valley Beekeepers

Harvested
15 Aug 2026

Manufactured
20 Aug 2026

Package
500g

### Traceability
Farm -> Harvest -> Processing -> Packaging -> Verified

### Actions
Save to History
Scan Another Batch

### Other states
REVIEW:
Use when a demo record is available but has a caution/quality note.

NOT FOUND:
Show a clear message that the batch could not be verified and provide a Scan Again action.

Do not pretend that a missing batch is authentic.

## Screen 6: History

### Goal
Show the user's saved verification records.

Each row:
- honey type
- batch ID
- date scanned
- status

Empty state:
No scans yet.
Scan a honey QR code to start your history.

Tap a history row to reopen the verification result.

## Mobile Navigation
Bottom nav stays visible in the app shell unless the scanner intentionally uses a distraction-free layout.

## Desktop Behavior
Do not create separate desktop concepts. Keep the mobile hierarchy and expand the content container naturally.

## Important Interaction Rules
- scanner is always easy to reach
- destructive or confusing actions are avoided
- verification state is visible without scrolling
- saved history should update immediately after saving
- back navigation should feel predictable
