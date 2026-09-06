/**
 * Normalizes scanned QR string to a clean Batch ID.
 * Supports:
 * - Direct ID: "HC1024" -> "HC1024"
 * - Full URL: "https://any-domain.com/verify/HC1024" -> "HC1024"
 * - GitHub Raw URL: "https://raw.githubusercontent.com/user/repo/main/HC1001.json" -> "HC1001"
 * - Query string: "https://any-domain.com/scan?batch=HC1024" -> "HC1024"
 * - Filename: "HC1001.json" -> "HC1001"
 */
export function extractBatchId(scannedText: string): string | null {
  if (!scannedText) return null;
  const raw = scannedText.trim();

  // 1. If it looks like a URL
  try {
    if (raw.startsWith("http://") || raw.startsWith("https://")) {
      const url = new URL(raw);
      
      // Path format: /verify/HC1024 or /verify/HC1024/
      const segments = url.pathname.split("/").filter(Boolean);
      const verifyIdx = segments.indexOf("verify");
      if (verifyIdx !== -1 && segments[verifyIdx + 1]) {
        return sanitizeBatchId(segments[verifyIdx + 1]);
      }

      // Check query params: ?batch=HC1024 or ?id=HC1024
      const param = url.searchParams.get("batch") || url.searchParams.get("id");
      if (param) {
        return sanitizeBatchId(param);
      }

      // Raw GitHub or direct file URL (e.g. .../batches/HC1001.json or .../HC1001.json)
      if (segments.length > 0) {
        const last = segments[segments.length - 1];
        const stripped = last.replace(/\.json$/i, "");
        if (isValidBatchFormat(stripped)) {
          return sanitizeBatchId(stripped);
        }
      }
    }
  } catch {
    // If URL parsing throws, fall through to regex extraction
  }

  // 2. Check for regex pattern like /verify/([A-Za-z0-9-_]+)
  const urlMatch = raw.match(/verify\/([A-Za-z0-9-_]+)/i);
  if (urlMatch && urlMatch[1]) {
    return sanitizeBatchId(urlMatch[1]);
  }

  // 3. Raw file name format (e.g. "HC1001.json")
  const fileMatch = raw.match(/^([A-Za-z0-9-_]{3,20})\.json$/i);
  if (fileMatch && fileMatch[1]) {
    return sanitizeBatchId(fileMatch[1]);
  }

  // 4. Raw batch ID format check (e.g. "HC1024", "HC-1024", "HC_1024")
  if (isValidBatchFormat(raw)) {
    return sanitizeBatchId(raw);
  }

  return null;
}

function sanitizeBatchId(id: string): string {
  return id.trim().replace(/\.json$/i, "").toUpperCase();
}

function isValidBatchFormat(str: string): boolean {
  // Allow alphanumeric batch codes, 3 to 20 chars
  const clean = str.trim().replace(/\.json$/i, "");
  return /^[A-Za-z0-9-_]{3,20}$/.test(clean);
}
