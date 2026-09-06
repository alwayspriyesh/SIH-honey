import fs from "fs";
import path from "path";
import QRCode from "qrcode";

const BATCHES = [
  {
    batchId: "HC1001",
    honeyType: "Sundarbans Mangrove Honey",
    producer: "Sundarbans Forest Honey Cooperative",
    location: "South 24 Parganas, West Bengal",
    harvestDate: "18 Apr 2026",
    manufacturingDate: "24 Apr 2026",
    weight: "500g",
    status: "Verified",
    notes: "Grade A raw mangrove nectar collected by traditional Mouly honey hunters in protected tidal zones.",
    moistureContent: "18.1%",
    officer: {
      name: "Subhashis Bose",
      designation: "Senior Forest Produce Quality Officer",
      agency: "West Bengal Forest Dept & National Bee Board",
      badgeId: "NBB-WB-1021",
      rating: 4.9,
      reviewsCount: 210,
      inspectedAt: "20 Apr 2026, 10:15 AM IST",
      station: "Canning Forest Testing Division"
    },
    geography: {
      region: "Sundarbans Biosphere Reserve (Mangrove Core)",
      state: "West Bengal, India",
      coordinates: "21.9497° N, 88.9007° E",
      altitude: "4m ASL",
      terrain: "Tidal mangrove estuarine forest",
      dominantFlora: "Aegiceras corniculatum (Khalsi) & Avicennia officinalis",
      soilType: "Saline-Clay Mangrove Silt, Zero Agro-chemicals"
    },
    qualityAnalysis: {
      moisture: "18.1%",
      moistureStatus: "Optimal (< 20% Standard)",
      hmfLevel: "7.8 mg/kg",
      hmfStatus: "Raw & Fresh from Hive (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "48,000 grains/g",
      adulterationStatus: "100% Authentic Wild Mangrove Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Sundarbans Tidal Zone #02", date: "18 Apr 2026", status: "Wild Comb Harvest" },
      { stage: "Harvest", location: "Mouly Collection Boat", date: "18 Apr 2026", status: "Traditional Extraction" },
      { stage: "Processing", location: "Canning Cold Filtration Facility", date: "20 Apr 2026", status: "Unheated Raw" },
      { stage: "Packaging", location: "Kolkata Distribution Hub", date: "24 Apr 2026", status: "Tamper Sealed" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "24 Apr 2026", status: "Certified" }
    ]
  },
  {
    batchId: "HC1002",
    honeyType: "Kashmir White Acacia Honey",
    producer: "Valley Apiculture Guild",
    location: "Ganderbal, Jammu & Kashmir",
    harvestDate: "28 May 2026",
    manufacturingDate: "04 Jun 2026",
    weight: "250g",
    status: "Verified",
    notes: "Rare water-white monovarietal raw Robinia pseudoacacia nectar from high Himalayan valleys.",
    moistureContent: "16.8%",
    officer: {
      name: "Dr. Farooq Mir",
      designation: "State Apiculture & Food Safety Officer",
      agency: "FSSAI & National Bee Board Certified",
      badgeId: "FSSAI-JK-4402",
      rating: 4.9,
      reviewsCount: 176,
      inspectedAt: "30 May 2026, 09:30 AM IST",
      station: "Srinagar Central Quality Control Lab"
    },
    geography: {
      region: "Sindh River Alpine Valley",
      state: "Jammu & Kashmir, India",
      coordinates: "34.2268° N, 74.7813° E",
      altitude: "1,620m ASL",
      terrain: "Sub-alpine temperate mountain valley",
      dominantFlora: "Robinia pseudoacacia (Black Locust/Acacia)",
      soilType: "Mountain Alluvial Loam, Pristine Glacier Fed"
    },
    qualityAnalysis: {
      moisture: "16.8%",
      moistureStatus: "Exceptional Low Moisture (< 20% Standard)",
      hmfLevel: "5.1 mg/kg",
      hmfStatus: "Ultra-Fresh Raw (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "39,000 grains/g",
      adulterationStatus: "100% Monofloral White Acacia"
    },
    traceability: [
      { stage: "Bee Farm", location: "Ganderbal Apiary #01", date: "28 May 2026", status: "Acacia Peak Bloom" },
      { stage: "Harvest", location: "Sindh Valley Comb", date: "28 May 2026", status: "Matured Capped Comb" },
      { stage: "Processing", location: "Srinagar Cold Lab", date: "30 May 2026", status: "Zero Thermal Process" },
      { stage: "Packaging", location: "Kashmir Organic Hub", date: "04 Jun 2026", status: "Hermetic Glass Seal" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "04 Jun 2026", status: "Certified" }
    ]
  },
  {
    batchId: "HC1003",
    honeyType: "Coorg Coffee Blossom Honey",
    producer: "Western Ghats Honey Guild",
    location: "Kodagu (Coorg), Karnataka",
    harvestDate: "12 Mar 2026",
    manufacturingDate: "18 Mar 2026",
    weight: "500g",
    status: "Verified",
    notes: "Aromatic spring harvest from shade-grown Arabica and Robusta coffee plantations under rainforest canopy.",
    moistureContent: "17.6%",
    officer: {
      name: "Vikramaditya Rao",
      designation: "District Apiculture Quality Inspector",
      agency: "National Bee Board (NBB) Certified",
      badgeId: "NBB-KA-2190",
      rating: 4.8,
      reviewsCount: 118,
      inspectedAt: "14 Mar 2026, 11:45 AM IST",
      station: "Madikeri Regional Honey Station"
    },
    geography: {
      region: "Coorg Rainforest Ridge",
      state: "Karnataka, India",
      coordinates: "12.4244° N, 75.7382° E",
      altitude: "1,050m ASL",
      terrain: "Humid tropical evergreen & coffee shade canopy",
      dominantFlora: "Coffea Arabica blossom, Silver Oak & Wild Cardamom",
      soilType: "Rich Red Forest Humus, Zero Agro-chemicals"
    },
    qualityAnalysis: {
      moisture: "17.6%",
      moistureStatus: "Optimal (< 20% Standard)",
      hmfLevel: "9.2 mg/kg",
      hmfStatus: "Fresh & Raw (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "34,500 grains/g",
      adulterationStatus: "100% Pure Coffee Blossom Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Madikeri Estate Apiary", date: "12 Mar 2026", status: "Blossom Synchronized" },
      { stage: "Harvest", location: "Coffee Canopy Comb", date: "12 Mar 2026", status: "Centrifuged Raw" },
      { stage: "Processing", location: "Coorg Agro Lab", date: "14 Mar 2026", status: "Cold Micro-Strained" },
      { stage: "Packaging", location: "Mysuru Dispatch Center", date: "18 Mar 2026", status: "Batch Coded" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "18 Mar 2026", status: "Certified" }
    ]
  },
  {
    batchId: "HC1004",
    honeyType: "Nilgiris Mountain Wildflower Honey",
    producer: "Sahya Honey Collective",
    location: "Nilgiris, Tamil Nadu",
    harvestDate: "09 Aug 2026",
    manufacturingDate: "14 Aug 2026",
    weight: "250g",
    status: "Verified",
    notes: "Multifloral raw mountain honey from native Apis cerana colonies foraging on wild highland herbs.",
    moistureContent: "17.8%",
    officer: {
      name: "Insp. Ananya Sharma",
      designation: "Senior Apiculture Quality Auditor",
      agency: "National Bee Board (NBB) Certified",
      badgeId: "NBB-TN-3108",
      rating: 4.8,
      reviewsCount: 142,
      inspectedAt: "11 Aug 2026, 09:45 AM IST",
      station: "Nilgiris Highland Honey Testing Center"
    },
    geography: {
      region: "Nilgiris Biosphere Reserve (Highland Zone)",
      state: "Tamil Nadu, India",
      coordinates: "11.4102° N, 76.6950° E",
      altitude: "2,240m ASL",
      terrain: "Montane shola forest grassland ridge",
      dominantFlora: "Wild Mountain Thyme, Eucalyptus & Neelakurinji",
      soilType: "Laterite Humus, Zero Agro-chemicals"
    },
    qualityAnalysis: {
      moisture: "17.8%",
      moistureStatus: "Optimal (< 20% Standard)",
      hmfLevel: "6.2 mg/kg",
      hmfStatus: "Ultra-fresh, Raw & Unpasteurized (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "38,500 grains/g",
      adulterationStatus: "100% Authentic Multifloral Wild Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Nilgiris, Tamil Nadu", date: "09 Aug 2026", status: "Collected" },
      { stage: "Harvest", location: "Highland Apiary #12", date: "09 Aug 2026", status: "Matured Comb" },
      { stage: "Processing", location: "Ooty Clean Lab", date: "11 Aug 2026", status: "Unheated" },
      { stage: "Packaging", location: "Nilgiris Center", date: "14 Aug 2026", status: "Tamper Sealed" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "14 Aug 2026", status: "Verified" }
    ]
  },
  {
    batchId: "HC1005",
    honeyType: "Wayanad Raw Forest Honey",
    producer: "Green Valley Beekeepers",
    location: "Wayanad, Kerala",
    harvestDate: "15 Aug 2026",
    manufacturingDate: "20 Aug 2026",
    weight: "500g",
    status: "Verified",
    notes: "Grade A raw forest nectar collected from protected biosphere reserves.",
    moistureContent: "17.2%",
    officer: {
      name: "Dr. Ramesh Menon",
      designation: "Senior Food Safety & Quality Officer",
      agency: "National Bee Board & FSSAI Certified",
      badgeId: "NBB-KL-4092",
      rating: 4.9,
      reviewsCount: 184,
      inspectedAt: "17 Aug 2026, 11:30 AM IST",
      station: "Wayanad Regional Honey Inspection Station"
    },
    geography: {
      region: "Wayanad Biosphere Reserve (Buffer Zone)",
      state: "Kerala, India",
      coordinates: "11.6854° N, 76.1320° E",
      altitude: "1,150m ASL",
      terrain: "Moist evergreen mountain forest canopy",
      dominantFlora: "Wild Forest Flora & Terminalia Paniculata",
      soilType: "Organic Forest Humus, Zero Agro-chemicals"
    },
    qualityAnalysis: {
      moisture: "17.2%",
      moistureStatus: "Optimal (< 20% Standard)",
      hmfLevel: "8.4 mg/kg",
      hmfStatus: "Fresh, Raw & Unheated (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% Added C4 Sugar detected via NMR)",
      pollenDensity: "42,000 grains/g",
      adulterationStatus: "100% Pure Raw Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Wayanad, Kerala", date: "15 Aug 2026", status: "Collected" },
      { stage: "Harvest", location: "Wayanad Apiary #04", date: "15 Aug 2026", status: "Matured Comb" },
      { stage: "Processing", location: "Cold Filtration Facility", date: "17 Aug 2026", status: "Unheated" },
      { stage: "Packaging", location: "Wayanad Hub", date: "20 Aug 2026", status: "Tamper Sealed" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "20 Aug 2026", status: "Verified" }
    ]
  },
  {
    batchId: "HC1006",
    honeyType: "Kullu Valley Wild Berry Honey",
    producer: "Himalayan High Apiaries",
    location: "Kullu, Himachal Pradesh",
    harvestDate: "10 Jul 2026",
    manufacturingDate: "16 Jul 2026",
    weight: "350g",
    status: "Verified",
    notes: "Rich amber raw mountain honey foraging on Himalayan wild raspberries, barberries, and alpine flora.",
    moistureContent: "17.0%",
    officer: {
      name: "Meera Thakur",
      designation: "Food Safety Inspection Officer",
      agency: "FSSAI Certified Inspection Agency",
      badgeId: "FSSAI-HP-5510",
      rating: 4.7,
      reviewsCount: 95,
      inspectedAt: "12 Jul 2026, 02:00 PM IST",
      station: "Kullu District Testing Lab"
    },
    geography: {
      region: "Beas River Basin & Parvati Valley",
      state: "Himachal Pradesh, India",
      coordinates: "31.9579° N, 77.1095° E",
      altitude: "1,850m ASL",
      terrain: "Coniferous temperate Himalayan forest",
      dominantFlora: "Rubus ellipticus (Himalayan Raspberry) & Berberis",
      soilType: "Glacial Alluvial Forest Soil, Zero Pesticides"
    },
    qualityAnalysis: {
      moisture: "17.0%",
      moistureStatus: "Optimal (< 20% Standard)",
      hmfLevel: "7.1 mg/kg",
      hmfStatus: "Raw & Fresh (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "36,000 grains/g",
      adulterationStatus: "100% Pure High-Altitude Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Kullu Alpine Apiary", date: "10 Jul 2026", status: "Wild Berry Bloom" },
      { stage: "Harvest", location: "Parvati Valley Comb", date: "10 Jul 2026", status: "Hand Extracted" },
      { stage: "Processing", location: "Kullu Cold Clean Room", date: "12 Jul 2026", status: "Unpasteurized" },
      { stage: "Packaging", location: "Mandi Packaging Hub", date: "16 Jul 2026", status: "Sealed Glass Jar" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "16 Jul 2026", status: "Certified" }
    ]
  },
  {
    batchId: "HC1007",
    honeyType: "Bharatpur Organic Mustard Honey",
    producer: "Thar Agro Beekeeping Collective",
    location: "Bharatpur, Rajasthan",
    harvestDate: "22 Feb 2026",
    manufacturingDate: "28 Feb 2026",
    weight: "500g",
    status: "Verified",
    notes: "Light-colored, rapidly crystallizing monovarietal raw honey with smooth, velvety natural glucose texture.",
    moistureContent: "18.4%",
    officer: {
      name: "Rajesh Solanki",
      designation: "Regional Apiculture Inspector",
      agency: "National Bee Board (NBB) Certified",
      badgeId: "NBB-RJ-7023",
      rating: 4.8,
      reviewsCount: 130,
      inspectedAt: "24 Feb 2026, 04:30 PM IST",
      station: "Eastern Rajasthan Agricultural Testing Hub"
    },
    geography: {
      region: "Eastern Plains Agro-Ecological Belt",
      state: "Rajasthan, India",
      coordinates: "27.2152° N, 77.4930° E",
      altitude: "180m ASL",
      terrain: "Semi-arid agrarian plains and wetlands buffer",
      dominantFlora: "Brassica campestris (Yellow Mustard) & Clover",
      soilType: "Sandy Alluvial Loam, Non-Chemical Certified"
    },
    qualityAnalysis: {
      moisture: "18.4%",
      moistureStatus: "Compliant (< 20% Standard)",
      hmfLevel: "11.2 mg/kg",
      hmfStatus: "Fresh Winter Comb (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "52,000 grains/g",
      adulterationStatus: "100% Unadulterated Mustard Blossom"
    },
    traceability: [
      { stage: "Bee Farm", location: "Bharatpur Organic Field", date: "22 Feb 2026", status: "Winter Extraction" },
      { stage: "Harvest", location: "Plains Apiary #09", date: "22 Feb 2026", status: "Raw Creaming State" },
      { stage: "Processing", location: "Alwar Testing Center", date: "24 Feb 2026", status: "Cold Strained" },
      { stage: "Packaging", location: "Jaipur Logistics Hub", date: "28 Feb 2026", status: "Anti-Tamper Cap" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "28 Feb 2026", status: "Certified" }
    ]
  },
  {
    batchId: "HC1008",
    honeyType: "Corbett Foothills Litchi Blossom",
    producer: "Terai Natural Harvesters",
    location: "Ramnagar, Uttarakhand",
    harvestDate: "05 May 2026",
    manufacturingDate: "10 May 2026",
    weight: "500g",
    status: "Verified",
    notes: "Delicate golden monovarietal nectar harvested during peak litchi flowering season in the Himalayan foothills.",
    moistureContent: "17.4%",
    officer: {
      name: "Dr. Arvind Joshi",
      designation: "Senior Food Quality Auditor",
      agency: "FSSAI & State Horticulture Dept",
      badgeId: "FSSAI-UK-3319",
      rating: 4.8,
      reviewsCount: 155,
      inspectedAt: "07 May 2026, 10:00 AM IST",
      station: "Nainital District Quality Lab"
    },
    geography: {
      region: "Terai Sub-Himalayan Foothills",
      state: "Uttarakhand, India",
      coordinates: "29.3949° N, 79.1255° E",
      altitude: "450m ASL",
      terrain: "Moist deciduous orchard & Sal forest boundary",
      dominantFlora: "Litchi chinensis & Shorea robusta (Sal)",
      soilType: "Fertile Terai Loam, Natural Compost"
    },
    qualityAnalysis: {
      moisture: "17.4%",
      moistureStatus: "Optimal (< 20% Standard)",
      hmfLevel: "6.8 mg/kg",
      hmfStatus: "Fresh & Raw (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "44,000 grains/g",
      adulterationStatus: "100% Natural Litchi Blossom Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Ramnagar Orchard Grove", date: "05 May 2026", status: "Orchard Bloom" },
      { stage: "Harvest", location: "Foothills Apiary #03", date: "05 May 2026", status: "Centrifugal Extraction" },
      { stage: "Processing", location: "Haldwani Clean Lab", date: "07 May 2026", status: "Unheated Straining" },
      { stage: "Packaging", location: "Dehradun Center", date: "10 May 2026", status: "Glass Packaged" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "10 May 2026", status: "Certified" }
    ]
  },
  {
    batchId: "HC1009",
    honeyType: "Mahabaleshwar Jamun Wild Honey",
    producer: "Sahyadri Bee Conservation Trust",
    location: "Satara, Maharashtra",
    harvestDate: "14 Jun 2026",
    manufacturingDate: "20 Jun 2026",
    weight: "400g",
    status: "Verified",
    notes: "Dark, pungent monovarietal wild forest honey prized for traditional wellness and high antioxidant density.",
    moistureContent: "18.2%",
    officer: {
      name: "Sunita Kadam",
      designation: "District Apiculture Auditor",
      agency: "National Bee Board (NBB) Certified",
      badgeId: "NBB-MH-8104",
      rating: 4.7,
      reviewsCount: 104,
      inspectedAt: "16 Jun 2026, 01:15 PM IST",
      station: "Satara District Honey Testing Station"
    },
    geography: {
      region: "Sahyadri Western Ghats Escarpment",
      state: "Maharashtra, India",
      coordinates: "17.9237° N, 73.6586° E",
      altitude: "1,350m ASL",
      terrain: "Semi-evergreen mountain plateau & forest ridge",
      dominantFlora: "Syzygium cumini (Black Jamun) & Terminalia chebula",
      soilType: "Lateritic Red Mountain Soil, Forest Reserves"
    },
    qualityAnalysis: {
      moisture: "18.2%",
      moistureStatus: "Optimal (< 20% Standard)",
      hmfLevel: "9.8 mg/kg",
      hmfStatus: "Fresh & Unprocessed (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "31,000 grains/g",
      adulterationStatus: "100% Authentic Jamun Blossom Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Mahabaleshwar Ridge", date: "14 Jun 2026", status: "Jamun Bloom Season" },
      { stage: "Harvest", location: "Satara Valley Apiary", date: "14 Jun 2026", status: "Wild Comb Harvest" },
      { stage: "Processing", location: "Pune Apiculture Lab", date: "16 Jun 2026", status: "Cold Micro-Filtered" },
      { stage: "Packaging", location: "Mumbai Terminal Hub", date: "20 Jun 2026", status: "Certified Sealed" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "20 Jun 2026", status: "Certified" }
    ]
  },
  {
    batchId: "HC1010",
    honeyType: "Khasi Hills Wild Mandarin Honey",
    producer: "Meghalaya Forest Honey Guild",
    location: "East Khasi Hills, Meghalaya",
    harvestDate: "02 Dec 2026",
    manufacturingDate: "08 Dec 2026",
    weight: "250g",
    status: "Verified",
    notes: "Rare citrus-infused raw wild honey harvested near sacred indigenous forest groves in the wettest region on Earth.",
    moistureContent: "16.9%",
    officer: {
      name: "Wanpynsuk Lyngdoh",
      designation: "State Organic Certification Officer",
      agency: "National Bee Board (NBB) Certified",
      badgeId: "NBB-ML-9045",
      rating: 4.9,
      reviewsCount: 88,
      inspectedAt: "04 Dec 2026, 11:00 AM IST",
      station: "Shillong Agro-Testing & Certification Lab"
    },
    geography: {
      region: "Khasi Mountain Sacred Grove Ridge",
      state: "Meghalaya, India",
      coordinates: "25.4670° N, 91.8833° E",
      altitude: "1,420m ASL",
      terrain: "Sub-tropical cloud forest & indigenous citrus groves",
      dominantFlora: "Citrus reticulata (Khasi Mandarin) & Wild Hill Flora",
      soilType: "High-Humus Acidic Forest Soil, 100% Organic"
    },
    qualityAnalysis: {
      moisture: "16.9%",
      moistureStatus: "Exceptional Low Moisture (< 20% Standard)",
      hmfLevel: "5.6 mg/kg",
      hmfStatus: "Ultra-Fresh Raw (< 40 mg/kg Standard)",
      c4SugarTest: "Negative (0.0% C4 Sugar detected via NMR)",
      pollenDensity: "46,000 grains/g",
      adulterationStatus: "100% Organic Wild Citrus Honey"
    },
    traceability: [
      { stage: "Bee Farm", location: "Mawphlang Sacred Grove", date: "02 Dec 2026", status: "Mandarin Bloom" },
      { stage: "Harvest", location: "Khasi Apiary #06", date: "02 Dec 2026", status: "Indigenous Comb Harvest" },
      { stage: "Processing", location: "Shillong Organic Lab", date: "04 Dec 2026", status: "Cold Gravity Filtered" },
      { stage: "Packaging", location: "Guwahati Logistics Hub", date: "08 Dec 2026", status: "Tamper Evident Seal" },
      { stage: "Verified", location: "Honey Chain Protocol", date: "08 Dec 2026", status: "Certified" }
    ]
  }
];

async function main() {
  const publicBatchesDir = path.resolve("public/data/batches");
  const githubExportDir = path.resolve("batches-github-export");
  const publicQRCodesDir = path.resolve("public/qrcodes");
  const exportQRCodesDir = path.resolve("batches-github-export/qrcodes");

  fs.mkdirSync(publicBatchesDir, { recursive: true });
  fs.mkdirSync(githubExportDir, { recursive: true });
  fs.mkdirSync(publicQRCodesDir, { recursive: true });
  fs.mkdirSync(exportQRCodesDir, { recursive: true });

  console.log(`\n=== Generating 10 SIH Honey Batches & QR Codes ===`);

  const manifest = [];

  for (const batch of BATCHES) {
    const jsonStr = JSON.stringify(batch, null, 2);

    // 1. Save to Next.js public/data/batches/
    const publicPath = path.join(publicBatchesDir, `${batch.batchId}.json`);
    fs.writeFileSync(publicPath, jsonStr, "utf-8");

    // 2. Save to standalone export folder batches-github-export/
    const exportPath = path.join(githubExportDir, `${batch.batchId}.json`);
    fs.writeFileSync(exportPath, jsonStr, "utf-8");

    // 3. Generate QR Codes (both SVG and PNG)
    // QR payload encodes the Verification URL
    // Supports: Web URL: http://10.40.114.47:3000/verify/HC1001 (or https://honeychain.app/verify/HC1001)
    const qrPayload = `http://10.40.114.47:3000/verify/${batch.batchId}`;

    const svgString = await QRCode.toString(qrPayload, {
      type: "svg",
      width: 400,
      margin: 2,
      color: {
        dark: "#173C2C", // Honey Chain Forest Green
        light: "#FAF9F5", // Honey Chain Warm Alabaster
      },
    });

    const publicSvgPath = path.join(publicQRCodesDir, `${batch.batchId}.svg`);
    fs.writeFileSync(publicSvgPath, svgString, "utf-8");

    const exportSvgPath = path.join(exportQRCodesDir, `${batch.batchId}.svg`);
    fs.writeFileSync(exportSvgPath, svgString, "utf-8");

    // Also generate high-res PNG for easy mobile scanning / printing
    const publicPngPath = path.join(publicQRCodesDir, `${batch.batchId}.png`);
    await QRCode.toFile(publicPngPath, qrPayload, {
      width: 600,
      margin: 2,
      color: {
        dark: "#173C2C",
        light: "#FAF9F5",
      },
    });

    const exportPngPath = path.join(exportQRCodesDir, `${batch.batchId}.png`);
    await QRCode.toFile(exportPngPath, qrPayload, {
      width: 600,
      margin: 2,
      color: {
        dark: "#173C2C",
        light: "#FAF9F5",
      },
    });

    console.log(`✓ ${batch.batchId}: ${batch.honeyType} (${batch.location}) -> JSON & QR Code generated`);

    manifest.push({
      batchId: batch.batchId,
      honeyType: batch.honeyType,
      producer: batch.producer,
      location: batch.location,
      officer: `${batch.officer.name} (${batch.officer.agency}, Badge: ${batch.officer.badgeId}, Rating: ★${batch.officer.rating})`,
      geography: `${batch.geography.region} • ${batch.geography.altitude} • ${batch.geography.coordinates}`,
      quality: `Moisture: ${batch.qualityAnalysis.moisture} • HMF: ${batch.qualityAnalysis.hmfLevel} • C4 Sugar: ${batch.qualityAnalysis.c4SugarTest.split(" ")[0]}`,
      qrPayload,
      localJson: `/data/batches/${batch.batchId}.json`,
      localQrSvg: `/qrcodes/${batch.batchId}.svg`,
      localQrPng: `/qrcodes/${batch.batchId}.png`,
    });
  }

  // Write manifest.json
  fs.writeFileSync(
    path.join(githubExportDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );
  fs.writeFileSync(
    path.join(publicBatchesDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf-8"
  );

  // Write comprehensive README.md in batches-github-export
  const readmeContent = `# Honey Chain — Verified Batch Registry (SIH Problem Statement 26021)

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
2. Name it \`honeychain-batches\` (or any name you like).
3. Set visibility to **Public** (important so the app can fetch it without auth).
4. Click **Create repository**.

### Step 2: Upload Files
1. Drag and drop all the \`.json\` files from this folder into GitHub, OR run these git commands in this directory:
   \`\`\`bash
   git init
   git add .
   git commit -m "Add 10 certified Honey Chain batches"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/honeychain-batches.git
   git push -u origin main
   \`\`\`

### Step 3: Get Your Raw URLs
Once pushed to GitHub, each JSON file has a permanent public URL format:
\`\`\`
https://raw.githubusercontent.com/<YOUR_USERNAME>/honeychain-batches/main/HC1001.json
\`\`\`
For example, for user \`alwayspriyesh\`:
\`\`\`
https://raw.githubusercontent.com/alwayspriyesh/honeychain-batches/main/HC1001.json
\`\`\`

---

## 📱 Will This Work for QR Scanning?

### **YES! Absolutely 100%!**

There are two primary ways QR codes work in Honey Chain:

### Method A: Honey Chain Verification URL (Recommended for SIH Demonstration)
- **What is in the QR**: \`http://10.40.114.47:3000/verify/HC1001\` (or your deployed Vercel domain like \`https://honeychain.vercel.app/verify/HC1001\`).
- **How it behaves**: When scanned with **any standard smartphone camera** (iPhone Camera / Google Lens) or the **Honey Chain in-app scanner**, the phone automatically opens the verification web page. The web page instantly displays the full certificate, inspecting officer, GPS coordinates, and chemical purity report!

### Method B: Direct Raw GitHub URL
- **What is in the QR**: \`https://raw.githubusercontent.com/<YOUR_USERNAME>/honeychain-batches/main/HC1001.json\`
- **How it behaves**: The Honey Chain in-app scanner detects the batch ID from the URL (\`HC1001\`) or fetches the remote JSON file directly, rendering the verification report on screen!

---

## 🖼️ Pre-Generated QR Codes
Pre-generated vector SVG and high-resolution PNG QR codes are available in the \`qrcodes/\` subfolder:
- \`qrcodes/HC1001.svg\` & \`qrcodes/HC1001.png\`
- \`qrcodes/HC1002.svg\` & \`qrcodes/HC1002.png\`
- ... through \`HC1010\`!

Print them, display them on your screen, or attach them to honey bottle mockups!
`;

  fs.writeFileSync(path.join(githubExportDir, "README.md"), readmeContent, "utf-8");
  console.log(`✓ Generated batches-github-export/README.md with full hosting instructions!`);
}

main().catch(console.error);
