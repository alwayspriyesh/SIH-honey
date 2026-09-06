export type VerificationStatus = "Verified" | "Review" | "Unverified";

export interface TraceabilityStep {
  stage: string;
  location: string;
  date: string;
  status: string;
}

export interface InspectionOfficer {
  name: string;
  designation: string;
  agency: string;
  badgeId: string;
  rating: number;
  reviewsCount: number;
  inspectedAt: string;
  station: string;
}

export interface GeographicalData {
  region: string;
  state: string;
  coordinates: string;
  altitude: string;
  terrain: string;
  dominantFlora: string;
  soilType?: string;
}

export interface QualityAnalysis {
  moisture: string;
  moistureStatus: string;
  hmfLevel: string;
  hmfStatus: string;
  c4SugarTest: string;
  pollenDensity: string;
  adulterationStatus: string;
}

export interface HoneyBatch {
  batchId: string;
  honeyType: string;
  producer: string;
  location: string;
  harvestDate: string;
  manufacturingDate: string;
  weight: string;
  status: VerificationStatus;
  notes?: string;
  moistureContent?: string;
  officer?: InspectionOfficer;
  geography?: GeographicalData;
  qualityAnalysis?: QualityAnalysis;
  traceability?: TraceabilityStep[];
}

export interface ScanHistoryItem {
  batchId: string;
  honeyType: string;
  location: string;
  status: VerificationStatus;
  scannedAt: string;
  officerName?: string;
  officerRating?: number;
}
