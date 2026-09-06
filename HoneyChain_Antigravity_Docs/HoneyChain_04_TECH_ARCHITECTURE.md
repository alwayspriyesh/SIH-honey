# Honey Chain - Frontend Technical Architecture

## 1. Goal
Create a small Next.js frontend that can later be deployed to Vercel and wrapped for Android.

## 2. Suggested Structure

app/
  page.tsx                       # landing
  login/page.tsx
  dashboard/page.tsx
  scan/page.tsx
  verify/[batchId]/page.tsx
  history/page.tsx

components/
  app-shell/
  navigation/
  ui/
  scanner/
  honey/
  history/

lib/
  auth.ts
  honey-data.ts
  qr.ts
  history.ts
  storage.ts

public/
  images/
  icons/

data/
  honey-batches.json

## 3. Architecture Rules
Keep business logic out of visual components where practical.

UI components should consume typed data.

QR parsing should be isolated in lib/qr.ts.

Mock batch lookup should be isolated in lib/honey-data.ts.

localStorage access should be isolated in lib/storage.ts or lib/history.ts.

This creates clean replacement points for a future API.

## 4. Data Flow

QR camera
  -> raw QR string
  -> normalizeBatchId()
  -> getHoneyBatch(batchId)
  -> verification UI
  -> saveScan()
  -> history UI

## 5. API Replacement Boundary
The UI should call an abstraction such as:

getHoneyBatch(batchId)

For the MVP, this reads local JSON.

Later, the same function can call:
GET /api/batches/:batchId

The pages should not care where the data comes from.

## 6. Mock Authentication
Provide:

loginDemo(id, password)
getSession()
logout()

Session can use localStorage for the prototype.

No real security claims.

## 7. Mock Batch Data
Use a typed interface:

interface HoneyBatch {
  batchId: string;
  honeyType: string;
  producer: string;
  beekeeper?: string;
  origin: string;
  harvestDate: string;
  manufacturingDate: string;
  packagingDate?: string;
  weight: string;
  status: 'verified' | 'review' | 'not_found';
  traceabilitySteps: Array<{
    label: string;
    date?: string;
    location?: string;
    completed: boolean;
  }>;
  note?: string;
}

## 8. Local Storage Keys
Use namespaced keys such as:
- honeychain_session
- honeychain_scan_history

Keep storage writes centralized.

## 9. Error Handling
Handle:
- invalid credentials
- camera permission denied
- scanner failure
- malformed QR
- unknown batch ID
- localStorage unavailable

Errors should be human-readable.

## 10. Performance
- keep dependencies small
- do not load unnecessary large image libraries
- lazy-load scanner-specific code if practical
- optimize images
- avoid heavy animation libraries

## 11. Vercel
The application should run with standard Next.js deployment on Vercel.

Avoid server-only assumptions if the feature does not require a server.

## 12. Android Packaging Later
The app should remain web-compatible and touch-friendly so it can later be packaged with Capacitor.

Do not write platform-specific UI that would make mobile-web and Android behavior diverge.

## 13. Demo Assets
Prepare at least three QR codes:
- HC1024 -> verified
- HC1018 -> verified
- HC1011 -> review

Keep their associated records deterministic so the judge demo is repeatable.
