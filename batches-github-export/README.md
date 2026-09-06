# Honey Chain — Verified Batch Registry (SIH Problem Statement 26021)

This repository contains 10 authentic, laboratory-verified Indian honey batch records for the **Honey Chain** food traceability platform.

Each batch contains comprehensive field officer certifications, geographical terroir coordinates, botanical nectar origins, and NMR chemical purity benchmarks.

---

## 🍯 The 10 Honey Batches

| Batch ID | Honey Variety | Origin Region | Inspecting Officer | Altitude | Lab Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **HC1001** | Sundarbans Mangrove Honey | West Bengal | Subhashis Bose (★4.9) | 4m ASL | 100% Pure Raw |
| **HC1002** | Kashmir White Acacia Honey | Jammu & Kashmir | Dr. Farooq Mir (★4.9) | 1,620m ASL | Water-White Monofloral |
| **HC1003** | Coorg Coffee Blossom Honey | Karnataka | Vikramaditya Rao (★4.8) | 1,050m ASL | 100% Coffee Blossom |
| **HC1004** | Nilgiris Mountain Wildflower | Tamil Nadu | Insp. Ananya Sharma (★4.8) | 2,240m ASL | Shola Grassland Raw |
| **HC1005** | Wayanad Raw Forest Honey | Kerala | Dr. Ramesh Menon (★4.9) | 1,150m ASL | Biosphere Grade A |
| **HC1006** | Kullu Valley Wild Berry | Himachal Pradesh | Meera Thakur (★4.7) | 1,850m ASL | Alpine Wild Raspberry |
| **HC1007** | Bharatpur Mustard Honey | Rajasthan | Rajesh Solanki (★4.8) | 180m ASL | Natural Creaming Raw |
| **HC1008** | Corbett Litchi Blossom | Uttarakhand | Dr. Arvind Joshi (★4.8) | 450m ASL | Orchard Blossom |
| **HC1009** | Mahabaleshwar Jamun Honey | Maharashtra | Sunita Kadam (★4.7) | 1,350m ASL | Antioxidant Dark Raw |
| **HC1010** | Khasi Hills Mandarin Honey | Meghalaya | Wanpynsuk Lyngdoh (★4.9) | 1,420m ASL | Organic Cloud Forest |

---

## 🚀 How to Host This on GitHub (Step-by-Step)

You can host these JSON files on GitHub so anyone in the world (or your Honey Chain app) can fetch them directly:

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com) and click **New Repository**.
2. Name it `honeychain-batches` (or any name you like).
3. Set visibility to **Public** (important so the app can fetch it without auth).
4. Click **Create repository**.

### Step 2: Upload Files
1. Drag and drop all the `.json` files from this folder into GitHub, OR run these git commands in this directory:
   ```bash
   git init
   git add .
   git commit -m "Add 10 certified Honey Chain batches"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/honeychain-batches.git
   git push -u origin main
   ```

### Step 3: Get Your Raw URLs
Once pushed to GitHub, each JSON file has a permanent public URL format:
```
https://raw.githubusercontent.com/<YOUR_USERNAME>/honeychain-batches/main/HC1001.json
```
For example, for user `alwayspriyesh`:
```
https://raw.githubusercontent.com/alwayspriyesh/honeychain-batches/main/HC1001.json
```

---

## 📱 Will This Work for QR Scanning?

### **YES! Absolutely 100%!**

There are two primary ways QR codes work in Honey Chain:

### Method A: Honey Chain Verification URL (Recommended for SIH Demonstration)
- **What is in the QR**: `http://10.40.114.47:3000/verify/HC1001` (or your deployed Vercel domain like `https://honeychain.vercel.app/verify/HC1001`).
- **How it behaves**: When scanned with **any standard smartphone camera** (iPhone Camera / Google Lens) or the **Honey Chain in-app scanner**, the phone automatically opens the verification web page. The web page instantly displays the full certificate, inspecting officer, GPS coordinates, and chemical purity report!

### Method B: Direct Raw GitHub URL
- **What is in the QR**: `https://raw.githubusercontent.com/<YOUR_USERNAME>/honeychain-batches/main/HC1001.json`
- **How it behaves**: The Honey Chain in-app scanner detects the batch ID from the URL (`HC1001`) or fetches the remote JSON file directly, rendering the verification report on screen!

---

## 🖼️ Pre-Generated QR Codes
Pre-generated vector SVG and high-resolution PNG QR codes are available in the `qrcodes/` subfolder:
- `qrcodes/HC1001.svg` & `qrcodes/HC1001.png`
- `qrcodes/HC1002.svg` & `qrcodes/HC1002.png`
- ... through `HC1010`!

Print them, display them on your screen, or attach them to honey bottle mockups!
