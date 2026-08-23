/**
 * Delhi Bhu-Praman - Comprehensive Delhi Properties Database
 * Covers Urban (UPIC/DDA/MCD) and Rural (Bhulekh/Khasra/Khatauni) properties across all 11 Delhi Districts
 */

const DELHI_PROPERTIES = [
  {
    id: "PROP-DL-001",
    upic: "DL-MCD-2024-884912",
    dpin: "11-002-VK-B-042",
    propertyType: "URBAN_FREEHOLD",
    category: "Residential (Plotted)",
    title: "Pocket B, Sector A, Vasant Kunj",
    address: {
      plotNo: "B-42",
      pocket: "Pocket B",
      sector: "Sector A",
      locality: "Vasant Kunj",
      subDivision: "Vasant Vihar",
      district: "New Delhi",
      zone: "South Zone (MCD)",
      pincode: "110070"
    },
    geo: {
      lat: 28.5244,
      lng: 77.1558,
      landAreaSqM: 250.84,
      landAreaSqYd: 300,
      builtUpAreaSqFt: 3200,
      floors: "G+2 with Stilt",
      khasraEquivalent: "N/A (Urbanized / DDA Plotted Scheme)"
    },
    masterPlan2041: {
      landUse: "Residential Plotted",
      zoningStatus: "CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 350
    },
    ownership: {
      currentOwner: "Ramesh Kumar Sharma & Sunita Sharma",
      fatherHusbandName: "Late Shri Om Prakash Sharma",
      ownershipType: "Joint Ownership (50:50)",
      ownershipMode: "Freehold Conveyance",
      holdingSince: "18-Oct-2018",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "MUTATED_IN_MCD",
      mutationDocNo: "MCD/SZ/MUT/2018/99214"
    },
    status: "CLEAR_TITLE",
    statusBadge: "Verified Clear Title (Nil Encumbrance)",
    riskScore: 98,
    riskLevel: "LOW_RISK",
    summary: "Complete 30-year unencumbered chain of registered deeds. Freehold status granted by DDA in 2012. Nil CERSAI charge, property tax fully paid up to FY 2024-25.",
    stats: {
      deedsCount: 4,
      encumbrancesCount: 0,
      activeLoans: 0,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-002",
    upic: "DL-MCD-2021-394810",
    dpin: "11-008-GK2-M-119",
    propertyType: "URBAN_FREEHOLD",
    category: "Residential (Bungalow)",
    title: "M-Block, Greater Kailash Part-II",
    address: {
      plotNo: "M-119",
      pocket: "M Block Main",
      sector: "N/A",
      locality: "Greater Kailash II",
      subDivision: "Hauz Khas",
      district: "South Delhi",
      zone: "Central/South (MCD)",
      pincode: "110048"
    },
    geo: {
      lat: 28.5355,
      lng: 77.2410,
      landAreaSqM: 418.06,
      landAreaSqYd: 500,
      builtUpAreaSqFt: 5800,
      floors: "Basement + G+3",
      khasraEquivalent: "N/A (Urbanized Plotted)"
    },
    masterPlan2041: {
      landUse: "Residential Plotted (A-Category Colony)",
      zoningStatus: "CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 300
    },
    ownership: {
      currentOwner: "Vikramaditya Singhania",
      fatherHusbandName: "Shri Devendra Singhania",
      ownershipType: "Sole Proprietorship",
      ownershipMode: "Registered Sale Deed",
      holdingSince: "12-May-2021",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "MUTATED_IN_MCD",
      mutationDocNo: "MCD/SZ/MUT/2021/44910"
    },
    status: "MORTGAGED",
    statusBadge: "Active Bank Mortgage (CERSAI Registered)",
    riskScore: 72,
    riskLevel: "MODERATE_RISK",
    summary: "Single active primary mortgage with State Bank of India (SBI) for Home Loan (CERSAI ID registered). Clean chain of registered deeds. Requires Bank NOC / Loan Clearance prior to sale.",
    stats: {
      deedsCount: 3,
      encumbrancesCount: 1,
      activeLoans: 1,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-003",
    upic: "DL-REV-2023-BAP-4212",
    dpin: "11-009-NG-BAP-042",
    propertyType: "RURAL_AGRICULTURAL",
    category: "Agricultural / Revenue Land (Khasra)",
    title: "Khasra No. 42/12 & 42/13, Village Baprola",
    address: {
      plotNo: "Khasra 42/12 & 42/13",
      pocket: "Patti Mansa",
      sector: "Mustatil No. 42",
      locality: "Village Baprola",
      subDivision: "Najafgarh",
      district: "South West Delhi",
      zone: "Revenue Division South-West",
      pincode: "110043"
    },
    geo: {
      lat: 28.6385,
      lng: 76.9942,
      landAreaSqM: 4046.86,
      landAreaSqYd: 4840,
      landAreaBighaBiswa: "4 Bigha 16 Biswa",
      builtUpAreaSqFt: 0,
      floors: "Unbuilt Agricultural Parcel",
      khasraEquivalent: "Khatauni No. 118/84, Khasra 42/12 (2-8), 42/13 (2-8)"
    },
    masterPlan2041: {
      landUse: "Green Belt / Low Density Residential Area (LDRA)",
      zoningStatus: "AGRICULTURAL_RESTRICTED",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      dlrActApplicability: "Subject to Section 81 & 33 of Delhi Land Reforms Act, 1954"
    },
    ownership: {
      currentOwner: "Chaudhary Harpal Singh & Surender Singh",
      fatherHusbandName: "Late Sh. Ram Chander",
      ownershipType: "Coparcenary Bhumidhari Rights",
      ownershipMode: "Inheritance / Fard Jamabandi 2019",
      holdingSince: "04-Jul-2005",
      aadhaarLinked: true,
      panLinked: false,
      mutationStatus: "SANCTIONED_BY_TEHSILDAR",
      mutationDocNo: "REV/NG/MUT/2005/778"
    },
    status: "DISPUTED_COURT_STAY",
    statusBadge: "Litigation Alert: High Court Stay & Bank Lien",
    riskScore: 28,
    riskLevel: "CRITICAL_RISK",
    summary: "CRITICAL RED FLAG: Stay order issued by Hon'ble High Court of Delhi in CS(OS) 489/2023 (Partition Suit). Multiple secondary equitable mortgages reported on Punjab National Bank and Canara Bank. DLR Sec 81 notice issued for unauthorized non-agricultural use.",
    stats: {
      deedsCount: 5,
      encumbrancesCount: 3,
      activeLoans: 2,
      taxDues: 84000
    }
  },
  {
    id: "PROP-DL-004",
    upic: "DL-MCD-2022-771923",
    dpin: "11-005-ROH-S13-088",
    propertyType: "URBAN_FREEHOLD",
    category: "Residential (DDA SFS Flat)",
    title: "Flat 204, Pocket 2, Sector 13, Rohini",
    address: {
      plotNo: "Flat 204",
      pocket: "Pocket 2",
      sector: "Sector 13",
      locality: "Rohini Sub-City",
      subDivision: "Alipur / Rohini",
      district: "North West Delhi",
      zone: "Rohini Zone (MCD)",
      pincode: "110085"
    },
    geo: {
      lat: 28.7180,
      lng: 77.1322,
      landAreaSqM: 110.5,
      landAreaSqYd: 132.1,
      builtUpAreaSqFt: 1450,
      floors: "2nd Floor (Multi-storey)",
      khasraEquivalent: "DDA Scheme Allotment SFS Phase-IV"
    },
    masterPlan2041: {
      landUse: "Group Housing / Residential Flatted",
      zoningStatus: "CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 200
    },
    ownership: {
      currentOwner: "Ananya Mukherjee & Priyanshu Mukherjee",
      fatherHusbandName: "Sh. Subhash Chandra Mukherjee",
      ownershipType: "Joint Spousal Ownership",
      ownershipMode: "Registered Conveyance Deed",
      holdingSince: "14-Feb-2022",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "MUTATED_IN_MCD",
      mutationDocNo: "MCD/RZ/MUT/2022/19082"
    },
    status: "CLEAR_TITLE",
    statusBadge: "Verified Clear Title (Nil Encumbrance)",
    riskScore: 96,
    riskLevel: "LOW_RISK",
    summary: "DDA original allotment converted to Freehold in 2016. Clean conveyance deed executed at Sub-Registrar VI-D Rohini. HDFC home loan was fully satisfied and CERSAI charge satisfied with NOC on record.",
    stats: {
      deedsCount: 3,
      encumbrancesCount: 0,
      activeLoans: 0,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-005",
    upic: "DL-DDA-2019-NP-COMM-09",
    dpin: "11-007-NP-COMM-502",
    propertyType: "COMMERCIAL_DDA",
    category: "Commercial Office Complex",
    title: "Unit 502, Tower B, Nehru Place District Centre",
    address: {
      plotNo: "Unit 502",
      pocket: "Tower B, Chiranjiv Tower",
      sector: "District Centre",
      locality: "Nehru Place",
      subDivision: "Kalkaji",
      district: "South East Delhi",
      zone: "Central Zone (MCD)",
      pincode: "110019"
    },
    geo: {
      lat: 28.5492,
      lng: 77.2530,
      landAreaSqM: 185.8,
      landAreaSqYd: 222.2,
      builtUpAreaSqFt: 2000,
      floors: "5th Floor Commercial",
      khasraEquivalent: "DDA Commercial Auction Plot"
    },
    masterPlan2041: {
      landUse: "Commercial District Centre",
      zoningStatus: "CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 400
    },
    ownership: {
      currentOwner: "Apex Infotech Real Estate Holdings LLP",
      fatherHusbandName: "Designated Partner: Rajesh Bansal",
      ownershipType: "Corporate Entity (LLP)",
      ownershipMode: "Commercial Lease Deed (99 Years)",
      holdingSince: "29-Nov-2019",
      aadhaarLinked: false,
      panLinked: true,
      mutationStatus: "MUTATED_IN_DDA_COMMERCIAL",
      mutationDocNo: "DDA/COMM/NP/2019/3321"
    },
    status: "MORTGAGED",
    statusBadge: "Commercial Consortium Mortgage (ICICI + Axis)",
    riskScore: 78,
    riskLevel: "MODERATE_RISK",
    summary: "Property under registered commercial mortgage for business credit facility with ICICI Bank and Axis Bank (Consortium). CERSAI charge is up-to-date and compliant.",
    stats: {
      deedsCount: 4,
      encumbrancesCount: 2,
      activeLoans: 2,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-006",
    upic: "DL-REV-2020-MEH-CP-190",
    dpin: "11-003-MEH-CHT-190",
    propertyType: "RURAL_LAL_DORA",
    category: "Extended Lal Dora / Abadi Deh",
    title: "Khasra 190/2, Village Chhatarpur Enclave",
    address: {
      plotNo: "House No. 190/2",
      pocket: "Phase 2, 60 Feet Road",
      sector: "Abadi Deh",
      locality: "Chhatarpur Enclave",
      subDivision: "Mehrauli",
      district: "South Delhi",
      zone: "South Zone (MCD)",
      pincode: "110074"
    },
    geo: {
      lat: 28.5020,
      lng: 77.1780,
      landAreaSqM: 334.45,
      landAreaSqYd: 400,
      builtUpAreaSqFt: 4200,
      floors: "G+3 Floors",
      khasraEquivalent: "Khasra No. 190/2 (Lal Dora 1908 Sanad / SVAMITVA Survey)"
    },
    masterPlan2041: {
      landUse: "Urban Village / Special Area",
      zoningStatus: "VILLAGE_ABADI",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 200
    },
    ownership: {
      currentOwner: "Manjeet Singh Tanwar",
      fatherHusbandName: "Late Sh. Kartar Singh Tanwar",
      ownershipType: "Ancestral Lal Dora Possession / Registered GPA-Agreement Chain",
      ownershipMode: "Registered Sale Deed (Post 2019 Notification)",
      holdingSince: "19-Aug-2020",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "PROVISIONAL_PM_UDAY_ID",
      mutationDocNo: "DDA/PM-UDAY/2020/66521"
    },
    status: "CLEAR_TITLE",
    statusBadge: "PM-UDAY Validated & Conveyance Deed Registered",
    riskScore: 89,
    riskLevel: "LOW_RISK",
    summary: "PM-UDAY (Unauthorized Colonies in Delhi Regularization) conveyance deed executed by DDA in 2020. Validated cadastral boundaries and clear ownership title.",
    stats: {
      deedsCount: 4,
      encumbrancesCount: 0,
      activeLoans: 0,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-007",
    upic: "DL-MCD-2023-DWK-S10-15",
    dpin: "11-009-DWK-S10-B15",
    propertyType: "URBAN_FREEHOLD",
    category: "Residential (Cooperative Group Housing)",
    title: "Apt 501, Shanti CGHS, Sector 10, Dwarka",
    address: {
      plotNo: "Flat 501, Shanti CGHS, Plot 15",
      pocket: "Sector 10 Main",
      sector: "Sector 10",
      locality: "Dwarka Sub-City",
      subDivision: "Dwarka / Najafgarh",
      district: "South West Delhi",
      zone: "Najafgarh Zone (MCD)",
      pincode: "110075"
    },
    geo: {
      lat: 28.5815,
      lng: 77.0580,
      landAreaSqM: 145.0,
      landAreaSqYd: 173.4,
      builtUpAreaSqFt: 1850,
      floors: "5th Floor of 8 Floors",
      khasraEquivalent: "CGHS Society Plot No. 15 (DDA Scheme)"
    },
    masterPlan2041: {
      landUse: "Group Housing (CGHS)",
      zoningStatus: "CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 200
    },
    ownership: {
      currentOwner: "Deepak Kaushik & Neha Kaushik",
      fatherHusbandName: "Sh. Brajesh Kaushik",
      ownershipType: "Joint Ownership",
      ownershipMode: "Sub-Registrar IX Kapashera Sale Deed",
      holdingSince: "10-Jan-2023",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "MUTATED_IN_MCD",
      mutationDocNo: "MCD/NGZ/MUT/2023/12093"
    },
    status: "CLEAR_TITLE",
    statusBadge: "Verified Clear Title (Nil Encumbrance)",
    riskScore: 99,
    riskLevel: "LOW_RISK",
    summary: "100% clean title record. No past encumbrances, registered at Sub-Registrar IX Kapashera. Full MCD property tax compliance with unique UPIC barcode.",
    stats: {
      deedsCount: 2,
      encumbrancesCount: 0,
      activeLoans: 0,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-008",
    upic: "DL-REV-2018-ALI-K91",
    dpin: "11-004-NAR-ALI-091",
    propertyType: "RURAL_AGRICULTURAL",
    category: "Agricultural / Revenue Land (Khasra)",
    title: "Khasra No. 91/4 & 91/5, Village Alipur",
    address: {
      plotNo: "Khasra 91/4 & 91/5",
      pocket: "Thok Gujran",
      sector: "Mustatil No. 91",
      locality: "Village Alipur",
      subDivision: "Narela / Alipur",
      district: "North Delhi",
      zone: "Revenue Division North",
      pincode: "110036"
    },
    geo: {
      lat: 28.7980,
      lng: 77.1350,
      landAreaSqM: 6689.0,
      landAreaSqYd: 8000,
      landAreaBighaBiswa: "8 Bigha 0 Biswa",
      builtUpAreaSqFt: 0,
      floors: "Farmland Parcel",
      khasraEquivalent: "Khatauni No. 44/22, Khasra 91/4 (4-00), 91/5 (4-00)"
    },
    masterPlan2041: {
      landUse: "Agricultural / Green Buffer Zone",
      zoningStatus: "AGRICULTURAL_CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      dlrActApplicability: "Covered by DLR Act 1954; Sec 33 restrictions apply"
    },
    ownership: {
      currentOwner: "Baldev Raj Yadav & Sons",
      fatherHusbandName: "Late Sh. Moolchand Yadav",
      ownershipType: "Joint Ancestral Bhumidhari",
      ownershipMode: "Revenue Record of Rights (Jamabandi)",
      holdingSince: "15-May-1996",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "SANCTIONED_BY_TEHSILDAR",
      mutationDocNo: "REV/NAR/MUT/1996/412"
    },
    status: "GOVT_ACQUISITION_NOTIFIED",
    statusBadge: "Land Acquisition Section 4 Notification Issued",
    riskScore: 35,
    riskLevel: "CRITICAL_RISK",
    summary: "URGENT WARNING: Preliminary notification under Section 4 of RFCTLARR Act 2013 issued by Land Acquisition Collector (LAC North) for Urban Extension Road-II (UER-II) Expressway development. Property transaction prohibited without prior NOC from LAC.",
    stats: {
      deedsCount: 2,
      encumbrancesCount: 2,
      activeLoans: 1,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-009",
    upic: "DL-MCD-2023-DEF-COL-08",
    dpin: "11-006-DEF-C-088",
    propertyType: "URBAN_FREEHOLD",
    category: "Residential (Luxury Villa)",
    title: "C-Block, Defence Colony",
    address: {
      plotNo: "C-88",
      pocket: "C Block Park Facing",
      sector: "Main Colony",
      locality: "Defence Colony",
      subDivision: "Defence Colony",
      district: "South East Delhi",
      zone: "Central Zone (MCD)",
      pincode: "110024"
    },
    geo: {
      lat: 28.5728,
      lng: 77.2312,
      landAreaSqM: 271.74,
      landAreaSqYd: 325,
      builtUpAreaSqFt: 4500,
      floors: "Stilt + 3 Floors",
      khasraEquivalent: "L&DO Rehabilitation Scheme 1956"
    },
    masterPlan2041: {
      landUse: "Residential Plotted (A-Grade)",
      zoningStatus: "CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 350
    },
    ownership: {
      currentOwner: "Dr. Arvind Malhotra & Smt. Rekha Malhotra",
      fatherHusbandName: "Late Col. K. N. Malhotra",
      ownershipType: "Joint Survivorship",
      ownershipMode: "Freehold Conveyance Deed (L&DO to Freehold)",
      holdingSince: "05-Sep-2015",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "MUTATED_IN_MCD",
      mutationDocNo: "MCD/CZ/MUT/2015/0984"
    },
    status: "CLEAR_TITLE",
    statusBadge: "Verified Clear Title (Nil Encumbrance)",
    riskScore: 97,
    riskLevel: "LOW_RISK",
    summary: "L&DO leasehold to freehold regularized in 2002. Chain of deeds fully verified through DORIS archives Sub-Registrar V (Mehrauli/INAS). Nil encumbrances, pristine ownership history.",
    stats: {
      deedsCount: 5,
      encumbrancesCount: 0,
      activeLoans: 0,
      taxDues: 0
    }
  },
  {
    id: "PROP-DL-010",
    upic: "DL-MCD-2024-MAY-UR-101",
    dpin: "11-001-MV-PH1-101",
    propertyType: "URBAN_FREEHOLD",
    category: "Residential (Plotted/Floor)",
    title: "Pocket 1, Mayur Vihar Phase-I",
    address: {
      plotNo: "101-A",
      pocket: "Pocket 1",
      sector: "Phase 1",
      locality: "Mayur Vihar",
      subDivision: "Mayur Vihar",
      district: "East Delhi",
      zone: "Shahdara South (MCD)",
      pincode: "110091"
    },
    geo: {
      lat: 28.6080,
      lng: 77.2950,
      landAreaSqM: 167.22,
      landAreaSqYd: 200,
      builtUpAreaSqFt: 2200,
      floors: "1st Floor Floor-wise Title",
      khasraEquivalent: "DDA Plotted Scheme 1984"
    },
    masterPlan2041: {
      landUse: "Residential Plotted",
      zoningStatus: "CONFORMING",
      ridgeBufferViolation: false,
      heritageBufferViolation: false,
      floorAreaRatioMax: 300
    },
    ownership: {
      currentOwner: "Siddharth Verma",
      fatherHusbandName: "Sh. R. K. Verma",
      ownershipType: "Floor-wise Title (First Floor with Roof Rights)",
      ownershipMode: "Registered Sale Deed SR-VIII Preet Vihar",
      holdingSince: "11-Nov-2023",
      aadhaarLinked: true,
      panLinked: true,
      mutationStatus: "MUTATED_IN_MCD",
      mutationDocNo: "MCD/EZ/MUT/2023/8812"
    },
    status: "MORTGAGED",
    statusBadge: "Active Bank Mortgage (Bank of Baroda)",
    riskScore: 84,
    riskLevel: "MODERATE_RISK",
    summary: "Floor-wise title recognized by Delhi Master Plan. Primary equitable mortgage registered with Bank of Baroda for Rs. 75 Lakhs. CERSAI reference active and compliant.",
    stats: {
      deedsCount: 3,
      encumbrancesCount: 1,
      activeLoans: 1,
      taxDues: 0
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DELHI_PROPERTIES };
}
