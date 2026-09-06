import { ScanHistoryItem } from "./types";

export const HISTORY_KEY = "honeychain_scan_history";

export const DEFAULT_RECENT_SCANS: ScanHistoryItem[] = [
  {
    batchId: "HC1024",
    honeyType: "Forest Honey",
    location: "Wayanad, Kerala",
    status: "Verified",
    scannedAt: "Today, 14:32",
    officerName: "Dr. Ramesh Menon",
    officerRating: 4.9,
  },
  {
    batchId: "HC1018",
    honeyType: "Wildflower Honey",
    location: "Nilgiris, Tamil Nadu",
    status: "Verified",
    scannedAt: "Yesterday",
    officerName: "Insp. Ananya Sharma",
    officerRating: 4.8,
  },
  {
    batchId: "HC1011",
    honeyType: "Organic Honey",
    location: "Kodagu, Karnataka",
    status: "Review",
    scannedAt: "02 Sep 2026",
    officerName: "Off. Vikramaditya Rao",
    officerRating: 4.7,
  },
];

export function getScanHistory(): ScanHistoryItem[] {
  if (typeof window === "undefined") return DEFAULT_RECENT_SCANS;
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return DEFAULT_RECENT_SCANS;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_RECENT_SCANS;
  } catch {
    return DEFAULT_RECENT_SCANS;
  }
}

export function saveScanToHistory(item: {
  batchId: string;
  honeyType: string;
  location: string;
  status: ScanHistoryItem["status"];
  officerName?: string;
  officerRating?: number;
}): ScanHistoryItem[] {
  if (typeof window === "undefined") return [];
  try {
    const current = getScanHistory();
    // Filter out previous entry with same batchId to prevent duplicate rows
    const filtered = current.filter((h) => h.batchId.toUpperCase() !== item.batchId.toUpperCase());
    
    const now = new Date();
    const timeString = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const newItem: ScanHistoryItem = {
      ...item,
      batchId: item.batchId.toUpperCase(),
      scannedAt: `${timeString}`,
    };

    const updated = [newItem, ...filtered];
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}
