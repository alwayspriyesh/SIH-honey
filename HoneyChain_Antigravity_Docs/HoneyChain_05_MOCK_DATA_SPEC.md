# Honey Chain - Mock Data and Demo Specification

## Purpose
The data must make the prototype feel realistic while remaining simple and deterministic.

## Sample Batch 1
Batch ID: HC1024
Honey Type: Forest Honey
Producer: Green Valley Beekeepers
Origin: Wayanad, Kerala
Harvest Date: 15 Aug 2026
Manufacturing Date: 20 Aug 2026
Package: 500g
Status: verified

Traceability:
1. Bee Farm - Wayanad, Kerala
2. Harvest - 15 Aug 2026
3. Processing - 17 Aug 2026
4. Packaging - 20 Aug 2026
5. Verified - Honey Chain

## Sample Batch 2
Batch ID: HC1018
Honey Type: Wildflower Honey
Producer: Sahya Honey Collective
Origin: Nilgiris, Tamil Nadu
Harvest Date: 09 Aug 2026
Manufacturing Date: 14 Aug 2026
Package: 250g
Status: verified

Traceability:
1. Bee Farm - Nilgiris, Tamil Nadu
2. Harvest - 09 Aug 2026
3. Processing - 11 Aug 2026
4. Packaging - 14 Aug 2026
5. Verified - Honey Chain

## Sample Batch 3
Batch ID: HC1011
Honey Type: Organic Honey
Producer: Western Ghats Apiary
Origin: Kodagu, Karnataka
Harvest Date: 02 Aug 2026
Manufacturing Date: 08 Aug 2026
Package: 500g
Status: review
Note: Prototype review state for demonstration.

## Suggested History Seed
A new user should ideally start with a very small history or no history.

Better demo behavior:
- user logs in
- dashboard shows zero/low scans
- user performs the scan
- history updates visibly

This demonstrates the functionality instead of making the history appear pre-populated.

## QR Payloads
Preferred:
HC1024
HC1018
HC1011

Optional URL form:
https://example.com/verify/HC1024

The parser should support both.

## Demo Safety
These are fictional prototype records. Do not present them as real producers or real certification records.
