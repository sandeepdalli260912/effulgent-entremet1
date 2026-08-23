/**
 * Delhi Bhu-Praman - Comprehensive Encumbrance & Mortgage Database
 * Integrates:
 * 1. CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India)
 * 2. DORIS Registered Mortgage Deeds (Sub-Registrar records)
 * 3. Delhi High Court / Civil Court / DRT Attachment Orders & Injunctions
 * 4. Municipal Corporation of Delhi (MCD) Property Tax Liens & Attachments
 * 5. Land Acquisition Collector (LAC / RFCTLARR Act 2013) Notifications
 */

const PROPERTY_ENCUMBRANCES = {
  "PROP-DL-001": {
    propertyId: "PROP-DL-001",
    upic: "DL-MCD-2024-884912",
    titleStatus: "NIL_ENCUMBRANCE",
    isEncumbered: false,
    activeEncumbranceCount: 0,
    historicalMortgageCount: 1,
    mortgages: [
      {
        id: "ENC-HIST-001",
        type: "EQUITABLE_MORTGAGE",
        institutionName: "HDFC Bank Ltd.",
        branch: "Vasant Vihar Branch, New Delhi",
        loanAccountNo: "HDFC-HL-2012-99881",
        cersaiSecurityInterestId: "CERSAI-DL-2012-441092",
        chargeType: "First Exclusive Charge",
        sanctionAmountINR: 4500000,
        sanctionAmountFormatted: "₹ 45,00,000",
        sanctionDate: "14-Aug-2012",
        status: "SATISFIED_DISCHARGED",
        satisfactionDate: "10-Sep-2018",
        nocDocumentNo: "HDFC/NOC/2018/7710",
        cersaiSatisfactionId: "CERSAI-SAT-2018-09124",
        remarks: "Loan fully repaid. Original Title Deeds released to borrower and CERSAI satisfaction filed."
      }
    ],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null,
      notifyingAuthority: null
    }
  },

  "PROP-DL-002": {
    propertyId: "PROP-DL-002",
    upic: "DL-MCD-2021-394810",
    titleStatus: "ACTIVE_ENCUMBRANCE",
    isEncumbered: true,
    activeEncumbranceCount: 1,
    historicalMortgageCount: 1,
    mortgages: [
      {
        id: "ENC-ACT-002",
        type: "REGISTERED_MORTGAGE",
        institutionName: "State Bank of India (SBI)",
        branch: "Retail Assets Central Processing Centre (RACPC), South Extension, New Delhi",
        loanAccountNo: "SBI-HL-3994810291",
        cersaiSecurityInterestId: "CERSAI-DL-2021-884102",
        chargeType: "First Pari-Passu Charge",
        sanctionAmountINR: 22500000,
        sanctionAmountFormatted: "₹ 2,25,00,000 (Two Crore Twenty-Five Lakhs)",
        sanctionDate: "20-May-2021",
        status: "ACTIVE",
        outstandingBalanceEstimatedINR: 18400000,
        outstandingBalanceFormatted: "₹ 1,84,00,000",
        originalDeedDeposited: true,
        modtdRegisteredAt: "Sub-Registrar V (Mehrauli/Hauz Khas)",
        modtdRegistrationNo: "Book No. 1, Vol 4120, Pages 80-92, Reg No. 3412/2021",
        remarks: "Active Home Loan facility. Transfer or alienation prohibited without prior written No Objection Certificate (NOC) from SBI."
      }
    ],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  },

  "PROP-DL-003": {
    propertyId: "PROP-DL-003",
    upic: "DL-REV-2023-BAP-4212",
    titleStatus: "HIGH_RISK_MULTI_ENCUMBERED",
    isEncumbered: true,
    activeEncumbranceCount: 4,
    historicalMortgageCount: 2,
    mortgages: [
      {
        id: "ENC-ACT-003A",
        type: "EQUITABLE_MORTGAGE",
        institutionName: "Punjab National Bank (PNB)",
        branch: "Najafgarh Branch, New Delhi",
        loanAccountNo: "PNB-AGRI-TERM-449102",
        cersaiSecurityInterestId: "CERSAI-DL-2021-399120",
        chargeType: "First Charge",
        sanctionAmountINR: 3500000,
        sanctionAmountFormatted: "₹ 35,00,000",
        sanctionDate: "11-Nov-2021",
        status: "NPA_RECOVERY_PROCEEDING",
        outstandingBalanceEstimatedINR: 4210000,
        outstandingBalanceFormatted: "₹ 42,10,000 (Includes Penal Interest)",
        remarks: "Account classified as Non-Performing Asset (NPA). SARFAESI Act Section 13(2) notice issued on 15-Jan-2024."
      },
      {
        id: "ENC-ACT-003B",
        type: "EQUITABLE_MORTGAGE_UNREGISTERED",
        institutionName: "Canara Bank",
        branch: "Dwarka Sector 6, New Delhi",
        loanAccountNo: "CAN-MSME-889104",
        cersaiSecurityInterestId: "CERSAI-DL-2022-771829",
        chargeType: "Second Charge / Dispute over Priority",
        sanctionAmountINR: 2000000,
        sanctionAmountFormatted: "₹ 20,00,000",
        sanctionDate: "05-Jun-2022",
        status: "ACTIVE_DUAL_FINANCE_ALERT",
        remarks: "CERSAI alert triggered: Secondary mortgage created on overlapping Khasra 42/12."
      }
    ],
    courtAttachments: [
      {
        id: "COURT-ATT-001",
        courtName: "Hon'ble High Court of Delhi at New Delhi",
        caseType: "Civil Suit (Original Side)",
        caseNumber: "CS(OS) No. 489 of 2023",
        petitioner: "Kishan Singh (Brother / Co-sharer)",
        respondent: "Chaudhary Harpal Singh & Ors.",
        injunctionDate: "18-Oct-2023",
        orderType: "AD-INTERIM INJUNCTION / STATUS QUO",
        orderSummary: "Defendants are restrained from creating any third-party interest, alienating, selling, or encumbering the suit land comprising Khasra 42/12 & 42/13 till final adjudication.",
        status: "ACTIVE_STAY_IN_FORCE"
      }
    ],
    taxLiens: [
      {
        id: "TAX-LIEN-001",
        authority: "Office of SDM / Tehsildar (Najafgarh)",
        noticeNo: "REV/NG/DLR-81/2023/1102",
        issuedDate: "14-Feb-2024",
        demandType: "Revenue Arrears & DLR Act 1954 Sec 81 Penalty (Non-agricultural use)",
        amountINR: 84000,
        amountFormatted: "₹ 84,000",
        status: "PENDING_ATTACHMENT"
      }
    ],
    statutoryRestrictions: [
      "Delhi Land Reforms Act, 1954: Section 81 Invalidation Proceedings pending before Revenue Assistant (Najafgarh)",
      "Section 33 DLR Act: Fragmentation restriction (Transfer of holding less than 8 standard acres prohibited without sanction)"
    ],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  },

  "PROP-DL-004": {
    propertyId: "PROP-DL-004",
    upic: "DL-MCD-2022-771923",
    titleStatus: "NIL_ENCUMBRANCE",
    isEncumbered: false,
    activeEncumbranceCount: 0,
    historicalMortgageCount: 1,
    mortgages: [
      {
        id: "ENC-HIST-004",
        type: "EQUITABLE_MORTGAGE",
        institutionName: "ICICI Bank Ltd.",
        branch: "Rohini Sector 9 Branch",
        loanAccountNo: "ICICI-HL-2016-55102",
        cersaiSecurityInterestId: "CERSAI-DL-2016-119284",
        chargeType: "First Charge",
        sanctionAmountINR: 3200000,
        sanctionAmountFormatted: "₹ 32,00,000",
        sanctionDate: "02-Apr-2016",
        status: "SATISFIED_DISCHARGED",
        satisfactionDate: "19-Jan-2022",
        nocDocumentNo: "ICICI/NOC/2022/1049",
        cersaiSatisfactionId: "CERSAI-SAT-2022-00412",
        remarks: "Loan closed and fully discharged. CERSAI satisfaction certificate validated."
      }
    ],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  },

  "PROP-DL-005": {
    propertyId: "PROP-DL-005",
    upic: "DL-DDA-2019-NP-COMM-09",
    titleStatus: "ACTIVE_ENCUMBRANCE",
    isEncumbered: true,
    activeEncumbranceCount: 2,
    historicalMortgageCount: 1,
    mortgages: [
      {
        id: "ENC-ACT-005A",
        type: "REGISTERED_COMMERCIAL_MORTGAGE",
        institutionName: "ICICI Bank Ltd. (Lead Consortium Bank)",
        branch: "Connaught Place Commercial Branch, New Delhi",
        loanAccountNo: "ICICI-CF-2020-00918",
        cersaiSecurityInterestId: "CERSAI-DL-2020-667120",
        chargeType: "First Pari-Passu Charge (60% Sharing)",
        sanctionAmountINR: 45000000,
        sanctionAmountFormatted: "₹ 4,50,00,000 (Four Crore Fifty Lakhs)",
        sanctionDate: "15-Jan-2020",
        status: "ACTIVE",
        outstandingBalanceEstimatedINR: 32000000,
        outstandingBalanceFormatted: "₹ 3,20,00,000",
        remarks: "Commercial Working Capital and Term Loan facility for Apex Infotech LLP. Regular standard asset."
      },
      {
        id: "ENC-ACT-005B",
        type: "REGISTERED_COMMERCIAL_MORTGAGE",
        institutionName: "Axis Bank Ltd.",
        branch: "Kalkaji Branch, New Delhi",
        loanAccountNo: "AXIS-CORP-2020-8812",
        cersaiSecurityInterestId: "CERSAI-DL-2020-667121",
        chargeType: "First Pari-Passu Charge (40% Sharing)",
        sanctionAmountINR: 30000000,
        sanctionAmountFormatted: "₹ 3,00,00,000 (Three Crores)",
        sanctionDate: "15-Jan-2020",
        status: "ACTIVE",
        outstandingBalanceEstimatedINR: 21000000,
        outstandingBalanceFormatted: "₹ 2,10,00,000",
        remarks: "Pari-passu consortium security created under Inter-Creditor Agreement."
      }
    ],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  },

  "PROP-DL-006": {
    propertyId: "PROP-DL-006",
    upic: "DL-REV-2020-MEH-CP-190",
    titleStatus: "NIL_ENCUMBRANCE",
    isEncumbered: false,
    activeEncumbranceCount: 0,
    historicalMortgageCount: 0,
    mortgages: [],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [
      "PM-UDAY Scheme Special Covenant: Lock-in period for transfer expired. Eligible for standard commercial transaction."
    ],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  },

  "PROP-DL-007": {
    propertyId: "PROP-DL-007",
    upic: "DL-MCD-2023-DWK-S10-15",
    titleStatus: "NIL_ENCUMBRANCE",
    isEncumbered: false,
    activeEncumbranceCount: 0,
    historicalMortgageCount: 0,
    mortgages: [],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  },

  "PROP-DL-008": {
    propertyId: "PROP-DL-008",
    upic: "DL-REV-2018-ALI-K91",
    titleStatus: "CRITICAL_GOVT_ACQUISITION",
    isEncumbered: true,
    activeEncumbranceCount: 2,
    historicalMortgageCount: 1,
    mortgages: [
      {
        id: "ENC-ACT-008",
        type: "KISAN_CREDIT_MORTGAGE",
        institutionName: "Union Bank of India",
        branch: "Alipur Branch, Delhi",
        loanAccountNo: "UBI-KCC-2019-7712",
        cersaiSecurityInterestId: "CERSAI-DL-2019-550192",
        chargeType: "Agricultural Crop & Land Charge",
        sanctionAmountINR: 800000,
        sanctionAmountFormatted: "₹ 8,00,000",
        sanctionDate: "20-Apr-2019",
        status: "ACTIVE",
        outstandingBalanceEstimatedINR: 650000,
        outstandingBalanceFormatted: "₹ 6,50,000",
        remarks: "KCC loan charge registered in Revenue RoR (Khatauni)."
      }
    ],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [
      "RFCTLARR Act 2013: Section 11 Notification gazetted on 12-Dec-2023. Compensation determination in progress.",
      "Sale, mortgage or encumbrance barred under Section 11(4) of Right to Fair Compensation and Transparency in Land Acquisition Act."
    ],
    acquisitionStatus: {
      isAcquired: true,
      sectionNotified: "Section 11 (Preliminary Notification)",
      notifyingAuthority: "Land Acquisition Collector (LAC North) / National Highways Authority of India (NHAI)",
      projectPurpose: "Urban Extension Road-II (UER-II) Expressway Interchange",
      gazetteNotificationNo: "F.1(32)/2023/LAC/North/9021",
      gazetteDate: "12-Dec-2023"
    }
  },

  "PROP-DL-009": {
    propertyId: "PROP-DL-009",
    upic: "DL-MCD-2023-DEF-COL-08",
    titleStatus: "NIL_ENCUMBRANCE",
    isEncumbered: false,
    activeEncumbranceCount: 0,
    historicalMortgageCount: 1,
    mortgages: [
      {
        id: "ENC-HIST-009",
        type: "EQUITABLE_MORTGAGE",
        institutionName: "Citibank India (now Axis Bank)",
        branch: "South Extension Branch",
        loanAccountNo: "CITI-MORT-2005-110",
        cersaiSecurityInterestId: "CERSAI-DL-2005-001928",
        chargeType: "First Charge",
        sanctionAmountINR: 15000000,
        sanctionAmountFormatted: "₹ 1,50,00,000",
        sanctionDate: "10-Nov-2005",
        status: "SATISFIED_DISCHARGED",
        satisfactionDate: "15-Aug-2015",
        nocDocumentNo: "CITI/NOC/2015/8892",
        cersaiSatisfactionId: "CERSAI-SAT-2015-44912",
        remarks: "Fully discharged. Original title deeds returned to owners."
      }
    ],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  },

  "PROP-DL-010": {
    propertyId: "PROP-DL-010",
    upic: "DL-MCD-2024-MAY-UR-101",
    titleStatus: "ACTIVE_ENCUMBRANCE",
    isEncumbered: true,
    activeEncumbranceCount: 1,
    historicalMortgageCount: 0,
    mortgages: [
      {
        id: "ENC-ACT-010",
        type: "EQUITABLE_MORTGAGE",
        institutionName: "Bank of Baroda",
        branch: "Mayur Vihar Phase-1 Branch, Delhi",
        loanAccountNo: "BOB-HL-2023-990142",
        cersaiSecurityInterestId: "CERSAI-DL-2023-9948201",
        chargeType: "First Exclusive Charge on First Floor",
        sanctionAmountINR: 7500000,
        sanctionAmountFormatted: "₹ 75,00,000",
        sanctionDate: "28-Nov-2023",
        status: "ACTIVE",
        outstandingBalanceEstimatedINR: 7280000,
        outstandingBalanceFormatted: "₹ 72,80,000",
        remarks: "Primary equitable mortgage created via deposit of Title Deed registered at SR-VIII Preet Vihar."
      }
    ],
    courtAttachments: [],
    taxLiens: [],
    statutoryRestrictions: [],
    acquisitionStatus: {
      isAcquired: false,
      sectionNotified: null
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROPERTY_ENCUMBRANCES };
}
