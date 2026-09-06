# Honey Chain - Master Build Brief

## 1. Product
Honey Chain is a mobile-first honey traceability and consumer verification web app prototype for the SIH problem statement 26021.

The prototype demonstrates a simple consumer journey:

Landing Page -> Demo Login -> Dashboard -> Scan QR -> Read Batch JSON -> Verify Honey -> Save Scan -> Scan History

The SIH problem statement asks for QR-code consumer verification, secure batch tracking, and a broader blockchain/AI/IoT ecosystem for honey traceability and smart beekeeping. This MVP intentionally focuses only on the consumer-facing QR verification experience.

## 2. MVP Goal
Build a polished frontend that can be deployed on Vercel and later wrapped as an Android APK.

The prototype does NOT need:
- a real backend
- a real database
- real authentication
- a real blockchain network
- real AI models
- real IoT hardware integration
- payments
- admin panels
- beekeeper management

Use local mock data and browser localStorage.

## 3. Core User Journey
1. User lands on Honey Chain.
2. User taps Get Started or Login.
3. User enters the fixed demo credentials.
4. User reaches the dashboard.
5. User taps Scan QR.
6. Camera opens on supported mobile browsers.
7. QR code contains a batch identifier or verification URL.
8. App resolves the batch to local JSON/mock data.
9. App displays a clean verification result.
10. User can save the verification to local scan history.
11. History persists through localStorage.

## 4. Recommended Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- A lightweight browser QR scanning library
- Local JSON/mock data
- localStorage for demo persistence
- Vercel for hosting
- Capacitor later for Android packaging

Avoid unnecessary dependencies.

## 5. Primary Screens
### Public
- Landing
- Login

### App
- Dashboard
- QR Scanner
- Honey Verification
- Scan History

Keep navigation small and intentional.

## 6. Mobile First
The phone layout is the primary design target. Desktop is a responsive enhancement, not the other way around.

Design targets:
- 360px wide phone minimum
- comfortable one-hand interaction
- large tap targets
- sticky or fixed bottom navigation inside the app shell
- minimal text entry
- QR scanner designed around the camera viewport

## 7. Navigation
Mobile bottom navigation:
- Home
- Scan
- History

Profile/logout can live in a simple top-right menu or settings sheet.

The Scan action should be visually prominent because it is the core product action.

## 8. Demo Authentication
Use a hardcoded prototype account.

Example:
Demo ID: demo@honeychain.app
Password: honeychain123

Do not store real credentials or build a fake production authentication system.

## 9. Mock Data
Keep mock batch records in a single structured JSON/TypeScript source so the UI behaves as though it is consuming an API.

Example fields:
- batchId
- honeyType
- producer
- beekeeper
- origin
- harvestDate
- manufacturingDate
- packagingDate
- weight
- status
- traceabilitySteps
- verificationMessage

The QR lookup layer should be isolated from the UI so a future API can replace the local lookup without changing screens.

## 10. QR Behavior
Support two demo QR payload styles:
1. A plain batch ID such as HC1024
2. A verification URL ending in a batch ID, such as /verify/HC1024

After decoding, normalize the payload into a batch ID and query local mock data.

## 11. Persistence
Use localStorage for:
- demo login/session state
- scan history

History should store the minimum useful data needed to render a recent verification list.

## 12. Verification UX
The verification screen must answer the most important question immediately:

"Is this honey verified, and where did it come from?"

Top section:
- clear VERIFIED / REVIEW / NOT FOUND state
- honey name/type
- batch ID

Then:
- origin
- beekeeper/producer
- harvest date
- manufacturing date
- package size

Then a visual traceability timeline:
Farm -> Harvest -> Processing -> Packaging -> Verified

Then:
- Save to History
- Scan Another Batch

## 13. Product Tone
The product should feel:
- trustworthy
- calm
- natural
- modern
- useful
- transparent

It should NOT feel:
- AI-generated
- crypto-heavy
- futuristic
- enterprise-heavy
- gamified
- flashy

## 14. Non-Goals
Do not add features simply because the problem statement mentions them. AI, IoT, and blockchain are future modules. The first build is the consumer verification MVP.

## 15. Definition of Done
A judge can:
1. open the deployed app
2. log in with demo credentials
3. reach the dashboard
4. open the QR scanner
5. scan a prepared QR code
6. see the matching honey record
7. understand the origin and traceability
8. save the record
9. open history and see the saved scan

The app must work cleanly on a phone and remain usable as a normal responsive website.
