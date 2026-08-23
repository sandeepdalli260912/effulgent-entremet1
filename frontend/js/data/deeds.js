/**
 * Delhi Bhu-Praman - 30-Year Chronological Deed History Database (DORIS)
 * Contains registered deeds from Sub-Registrar offices across Delhi (SR-I to SR-IX)
 * Including:
 * - Document / Registration Number
 * - Book, Volume, Page numbers
 * - e-Stamping Certificate Number (SHCIL)
 * - Registration Date
 * - Deed Type (Sale Deed, Conveyance Deed, Gift Deed, Relinquishment Deed, Mortgage, GPA)
 * - Transferor (Seller/Executant) and Transferee (Buyer/Claimant)
 * - Stamp Duty Paid & Registration Fee
 * - Sub-Registrar Office Details
 * - Scanned Deed Summary & Visual Preview Metadata
 */

const PROPERTY_DEEDS = {
  "PROP-DL-001": [
    {
      deedId: "DEED-DL-2018-001",
      registrationNo: "4521/2018",
      bookNo: "1",
      volumeNo: "8910",
      pageFrom: 112,
      pageTo: 128,
      eStampCertNo: "IN-DL88910245672102Q",
      eStampDate: "15-Oct-2018",
      registrationDate: "18-Oct-2018",
      deedType: "SALE_DEED",
      deedTypeName: "Sale Deed (Registered Absolute Sale)",
      subRegistrarOffice: "Sub-Registrar V (Mehrauli / Hauz Khas)",
      transferor: {
        name: "Shri Anand Swaroop Aggarwal",
        fatherName: "Late Sh. Jai Gopal Aggarwal",
        address: "E-14, Saket, New Delhi 110017",
        pan: "AAIPA4491K",
        biometricVerified: true
      },
      transferee: {
        name: "Ramesh Kumar Sharma & Sunita Sharma",
        fatherName: "Late Sh. Om Prakash Sharma",
        address: "B-42, Sector A, Pocket B, Vasant Kunj, New Delhi",
        pan: "AALPS8812M",
        biometricVerified: true
      },
      considerationAmountINR: 28500000,
      considerationFormatted: "₹ 2,85,00,000 (Two Crore Eighty-Five Lakhs)",
      circleRateValuationINR: 24500000,
      stampDutyPaidINR: 1710000,
      stampDutyFormatted: "₹ 17,10,000 (6% - Joint Male/Female Concession)",
      registrationFeeINR: 285000,
      witnesses: [
        "Mohit Narang, Advocate (Enrol No. D/1420/2004)",
        "Rajesh Goel, R/o Vasant Kunj"
      ],
      remarks: "Absolute clear sale with vacant physical possession. All original title documents handed over."
    },
    {
      deedId: "DEED-DL-2012-002",
      registrationNo: "1894/2012",
      bookNo: "1",
      volumeNo: "6102",
      pageFrom: 45,
      pageTo: 60,
      eStampCertNo: "IN-DL44091283719201L",
      eStampDate: "08-Aug-2012",
      registrationDate: "12-Aug-2012",
      deedType: "CONVEYANCE_DEED",
      deedTypeName: "Conveyance Deed (DDA Leasehold to Freehold Conversion)",
      subRegistrarOffice: "Sub-Registrar V (Mehrauli / Vikas Sadan Branch)",
      transferor: {
        name: "Delhi Development Authority (DDA)",
        representedBy: "Director (Lease Administration), DDA Vikas Sadan",
        address: "Vikas Sadan, INA Colony, New Delhi",
        pan: "N/A (Statutory Authority)",
        biometricVerified: true
      },
      transferee: {
        name: "Shri Anand Swaroop Aggarwal",
        fatherName: "Late Sh. Jai Gopal Aggarwal",
        address: "E-14, Saket, New Delhi",
        pan: "AAIPA4491K",
        biometricVerified: true
      },
      considerationAmountINR: 0,
      considerationFormatted: "Freehold Conversion Charge Paid: ₹ 3,45,000",
      circleRateValuationINR: 18000000,
      stampDutyPaidINR: 1080000,
      stampDutyFormatted: "₹ 10,80,000",
      registrationFeeINR: 180000,
      witnesses: ["Assistant Director (DDA)", "Superintendent (DDA)"],
      remarks: "Conversion from 99-year perpetual leasehold to absolute freehold in favor of original perpetual lessee."
    },
    {
      deedId: "DEED-DL-1998-003",
      registrationNo: "9021/1998",
      bookNo: "1",
      volumeNo: "3890",
      pageFrom: 201,
      pageTo: 215,
      eStampCertNo: "PHYSICAL-STAMP-DEL-1998-8812",
      eStampDate: "12-Sep-1998",
      registrationDate: "18-Sep-1998",
      deedType: "PERPETUAL_LEASE_DEED",
      deedTypeName: "Perpetual Sub-Lease Deed",
      subRegistrarOffice: "Sub-Registrar III (Asaf Ali Road / Mehrauli)",
      transferor: {
        name: "Delhi Development Authority / President of India",
        representedBy: "Dy. Director (Housing), DDA",
        address: "Vikas Sadan, New Delhi",
        pan: "N/A",
        biometricVerified: false
      },
      transferee: {
        name: "Shri Anand Swaroop Aggarwal",
        fatherName: "Late Sh. Jai Gopal Aggarwal",
        address: "D-29, Connaught Place, New Delhi",
        pan: "AAIPA4491K",
        biometricVerified: false
      },
      considerationAmountINR: 425000,
      considerationFormatted: "₹ 4,25,000 (DDA Allotment Price)",
      circleRateValuationINR: 425000,
      stampDutyPaidINR: 34000,
      stampDutyFormatted: "₹ 34,000",
      registrationFeeINR: 4250,
      witnesses: ["U. C. Jain, UDC DDA", "K. L. Sharma, DDA"],
      remarks: "Original plot allotment under Vasant Kunj Plotted Housing Scheme 1989."
    }
  ],

  "PROP-DL-002": [
    {
      deedId: "DEED-DL-2021-002A",
      registrationNo: "3410/2021",
      bookNo: "1",
      volumeNo: "9401",
      pageFrom: 14,
      pageTo: 38,
      eStampCertNo: "IN-DL19028472910482P",
      eStampDate: "05-May-2021",
      registrationDate: "12-May-2021",
      deedType: "SALE_DEED",
      deedTypeName: "Sale Deed (Registered Absolute Sale)",
      subRegistrarOffice: "Sub-Registrar V (Mehrauli / Hauz Khas)",
      transferor: {
        name: "Mrs. Promila Chopra & Mr. Rajiv Chopra",
        fatherName: "Late Sh. Jagdish Raj Chopra",
        address: "M-119, Greater Kailash-II, New Delhi",
        pan: "AACPC9910D",
        biometricVerified: true
      },
      transferee: {
        name: "Vikramaditya Singhania",
        fatherName: "Shri Devendra Singhania",
        address: "14, Barakhamba Road, New Delhi",
        pan: "AAFPS1190K",
        biometricVerified: true
      },
      considerationAmountINR: 145000000,
      considerationFormatted: "₹ 14,50,00,000 (Fourteen Crore Fifty Lakhs)",
      circleRateValuationINR: 138000000,
      stampDutyPaidINR: 8700000,
      stampDutyFormatted: "₹ 87,00,000 (6% Male Buyer)",
      registrationFeeINR: 1450000,
      witnesses: ["Sunil Tandon, CA", "Vivek Batra, Builder"],
      remarks: "Sale of plotted bungalow with full structural and land rights. Original title deed deposited with SBI for Mortgage."
    },
    {
      deedId: "DEED-DL-2021-002B",
      registrationNo: "3412/2021",
      bookNo: "1",
      volumeNo: "9401",
      pageFrom: 80,
      pageTo: 92,
      eStampCertNo: "IN-DL19028472910483P",
      eStampDate: "18-May-2021",
      registrationDate: "20-May-2021",
      deedType: "REGISTERED_MORTGAGE_DEED",
      deedTypeName: "Memorandum of Deposit of Title Deeds (MODTD)",
      subRegistrarOffice: "Sub-Registrar V (Mehrauli / Hauz Khas)",
      transferor: {
        name: "Vikramaditya Singhania (Mortgagor)",
        fatherName: "Shri Devendra Singhania",
        address: "M-119, Greater Kailash-II, New Delhi",
        pan: "AAFPS1190K",
        biometricVerified: true
      },
      transferee: {
        name: "State Bank of India (Mortgagee / Lender)",
        representedBy: "Chief Manager, RACPC South Ext.",
        address: "South Extension Part-1, New Delhi",
        pan: "AAACS0536K",
        biometricVerified: true
      },
      considerationAmountINR: 22500000,
      considerationFormatted: "Loan Facility Amount: ₹ 2,25,00,000",
      circleRateValuationINR: 22500000,
      stampDutyPaidINR: 112500,
      stampDutyFormatted: "₹ 1,12,500 (0.5% Mortgage Stamp)",
      registrationFeeINR: 22500,
      witnesses: ["Loan Officer SBI", "Panel Advocate SBI"],
      remarks: "Registered MODTD creating primary mortgage in favor of State Bank of India."
    }
  ],

  "PROP-DL-003": [
    {
      deedId: "DEED-DL-2005-003A",
      registrationNo: "778/2005",
      bookNo: "1",
      volumeNo: "2104",
      pageFrom: 18,
      pageTo: 24,
      eStampCertNo: "PHYSICAL-STAMP-DEL-2005-4491",
      eStampDate: "01-Jul-2005",
      registrationDate: "04-Jul-2005",
      deedType: "MUTATION_ORDER",
      deedTypeName: "Revenue Mutation & Sanad (Warisat / Inheritance)",
      subRegistrarOffice: "Office of Tehsildar (Najafgarh Sub-Division)",
      transferor: {
        name: "Late Sh. Ram Chander (Deceased Khatedar)",
        fatherName: "Late Sh. Mukhram",
        address: "Village Baprola, Delhi",
        pan: "N/A",
        biometricVerified: false
      },
      transferee: {
        name: "Chaudhary Harpal Singh, Surender Singh & Kishan Singh",
        fatherName: "Late Sh. Ram Chander",
        address: "Village Baprola, Najafgarh, Delhi",
        pan: "N/A",
        biometricVerified: true
      },
      considerationAmountINR: 0,
      considerationFormatted: "Ancestral Devolution",
      circleRateValuationINR: 2800000,
      stampDutyPaidINR: 0,
      stampDutyFormatted: "Exempt (Succession)",
      registrationFeeINR: 500,
      witnesses: ["Patwari Halka Baprola", "Kanoongo Najafgarh"],
      remarks: "Mutation sanctioned in revenue record. (Subsequent partition dispute resulted in High Court stay CS(OS) 489/2023)."
    }
  ],

  "PROP-DL-004": [
    {
      deedId: "DEED-DL-2022-004",
      registrationNo: "1104/2022",
      bookNo: "1",
      volumeNo: "7720",
      pageFrom: 110,
      pageTo: 125,
      eStampCertNo: "IN-DL77192840192834K",
      eStampDate: "10-Feb-2022",
      registrationDate: "14-Feb-2022",
      deedType: "SALE_DEED",
      deedTypeName: "Sale Deed (Registered Residential Flat)",
      subRegistrarOffice: "Sub-Registrar VI-D (Rohini)",
      transferor: {
        name: "Naveen Gupta",
        fatherName: "Sh. R. P. Gupta",
        address: "Flat 204, Pocket 2, Sector 13, Rohini, Delhi",
        pan: "ABCPG1120L",
        biometricVerified: true
      },
      transferee: {
        name: "Ananya Mukherjee & Priyanshu Mukherjee",
        fatherName: "Sh. Subhash Chandra Mukherjee",
        address: "D-11, Pitampura, Delhi",
        pan: "AAAPM7710J",
        biometricVerified: true
      },
      considerationAmountINR: 8800000,
      considerationFormatted: "₹ 88,00,000 (Eighty-Eight Lakhs)",
      circleRateValuationINR: 7600000,
      stampDutyPaidINR: 528000,
      stampDutyFormatted: "₹ 5,28,000 (6%)",
      registrationFeeINR: 88000,
      witnesses: ["Advocate Saurabh Jain", "Deepak Saxena"],
      remarks: "Full and final sale. Previous ICICI mortgage satisfaction certificate verified prior to registration."
    }
  ],

  "PROP-DL-005": [
    {
      deedId: "DEED-DL-2019-005",
      registrationNo: "8820/2019",
      bookNo: "1",
      volumeNo: "8914",
      pageFrom: 200,
      pageTo: 232,
      eStampCertNo: "IN-DL99182736451290M",
      eStampDate: "22-Nov-2019",
      registrationDate: "29-Nov-2019",
      deedType: "COMMERCIAL_CONVEYANCE",
      deedTypeName: "Commercial Sub-Lease Deed (DDA District Centre)",
      subRegistrarOffice: "Sub-Registrar V (Mehrauli / Vikas Sadan)",
      transferor: {
        name: "Chiranjiv Builders & Real Estate Pvt Ltd",
        representedBy: "Managing Director: Ajay Chopra",
        address: "Chiranjiv Tower, Nehru Place, New Delhi",
        pan: "AABCC1928N",
        biometricVerified: true
      },
      transferee: {
        name: "Apex Infotech Real Estate Holdings LLP",
        representedBy: "Designated Partner: Rajesh Bansal",
        address: "B-18, Okhla Phase-II, New Delhi",
        pan: "AAAFA9910E",
        biometricVerified: true
      },
      considerationAmountINR: 65000000,
      considerationFormatted: "₹ 6,50,00,000 (Six Crore Fifty Lakhs)",
      circleRateValuationINR: 58000000,
      stampDutyPaidINR: 3900000,
      stampDutyFormatted: "₹ 39,00,000 (6%)",
      registrationFeeINR: 650000,
      witnesses: ["Vikas Aggarwal, Advocate", "Manoj Kumar, Notary Public"],
      remarks: "Commercial unit sale with undivided proportionate share in common areas and basement parking."
    }
  ],

  "PROP-DL-006": [
    {
      deedId: "DEED-DL-2020-006",
      registrationNo: "4190/2020",
      bookNo: "1",
      volumeNo: "8820",
      pageFrom: 65,
      pageTo: 80,
      eStampCertNo: "IN-DL44192837461920N",
      eStampDate: "14-Aug-2020",
      registrationDate: "19-Aug-2020",
      deedType: "SPECIAL_CONVEYANCE_PM_UDAY",
      deedTypeName: "Special Conveyance Deed (PM-UDAY Unauthorized Colony Regularization)",
      subRegistrarOffice: "Sub-Registrar V (Mehrauli)",
      transferor: {
        name: "Delhi Development Authority (DDA - PM-UDAY Cell)",
        representedBy: "Authorized Officer (PM-UDAY)",
        address: "DDA PM-UDAY Office, Hauz Khas, New Delhi",
        pan: "N/A",
        biometricVerified: true
      },
      transferee: {
        name: "Manjeet Singh Tanwar",
        fatherName: "Late Sh. Kartar Singh Tanwar",
        address: "House 190/2, Chhatarpur Enclave, New Delhi",
        pan: "ABTPT4410K",
        biometricVerified: true
      },
      considerationAmountINR: 185000,
      considerationFormatted: "Special Regularization Fee: ₹ 1,85,000",
      circleRateValuationINR: 12000000,
      stampDutyPaidINR: 120000,
      stampDutyFormatted: "₹ 1,20,000 (Special 1% Concession under PM-UDAY)",
      registrationFeeINR: 12000,
      witnesses: ["DDA Nodal Officer", "Surjit Singh Tanwar"],
      remarks: "Conferment of absolute ownership and transfer rights under National Capital Territory of Delhi (Recognition of Property Rights of Residents in Unauthorized Colonies) Act, 2019."
    }
  ],

  "PROP-DL-007": [
    {
      deedId: "DEED-DL-2023-007",
      registrationNo: "331/2023",
      bookNo: "1",
      volumeNo: "9812",
      pageFrom: 190,
      pageTo: 206,
      eStampCertNo: "IN-DL88102938475619A",
      eStampDate: "05-Jan-2023",
      registrationDate: "10-Jan-2023",
      deedType: "SALE_DEED",
      deedTypeName: "Sale Deed (Registered CGHS Flat)",
      subRegistrarOffice: "Sub-Registrar IX (Kapashera)",
      transferor: {
        name: "Harish Chander Mathur",
        fatherName: "Late Sh. S. P. Mathur",
        address: "Flat 501, Shanti CGHS, Sector 10, Dwarka, New Delhi",
        pan: "ABRPM1928K",
        biometricVerified: true
      },
      transferee: {
        name: "Deepak Kaushik & Neha Kaushik",
        fatherName: "Sh. Brajesh Kaushik",
        address: "B-22, Janakpuri, New Delhi",
        pan: "AALPK9912L",
        biometricVerified: true
      },
      considerationAmountINR: 13500000,
      considerationFormatted: "₹ 1,35,00,000 (One Crore Thirty-Five Lakhs)",
      circleRateValuationINR: 12200000,
      stampDutyPaidINR: 810000,
      stampDutyFormatted: "₹ 8,10,000 (6%)",
      registrationFeeINR: 135000,
      witnesses: ["Secretary Shanti CGHS Society", "Rajesh Malik, Advocate"],
      remarks: "Society NOC verified, complete membership share certificate transferred. Registered at SR-IX Kapashera."
    }
  ],

  "PROP-DL-008": [
    {
      deedId: "DEED-DL-1996-008",
      registrationNo: "412/1996",
      bookNo: "1",
      volumeNo: "1190",
      pageFrom: 34,
      pageTo: 40,
      eStampCertNo: "PHYSICAL-STAMP-DEL-1996-1029",
      eStampDate: "10-May-1996",
      registrationDate: "15-May-1996",
      deedType: "REVENUE_ROR_ENTRY",
      deedTypeName: "Record of Rights (Jamabandi Intiqal)",
      subRegistrarOffice: "Office of Tehsildar (Alipur / Narela)",
      transferor: {
        name: "Late Sh. Moolchand Yadav",
        fatherName: "Late Sh. Jage Ram",
        address: "Village Alipur, Delhi",
        pan: "N/A",
        biometricVerified: false
      },
      transferee: {
        name: "Baldev Raj Yadav & Sons",
        fatherName: "Late Sh. Moolchand Yadav",
        address: "Village Alipur, Delhi",
        pan: "AAEPY1029M",
        biometricVerified: false
      },
      considerationAmountINR: 0,
      considerationFormatted: "Ancestral Devolution",
      circleRateValuationINR: 1500000,
      stampDutyPaidINR: 0,
      stampDutyFormatted: "Exempt",
      registrationFeeINR: 200,
      witnesses: ["Patwari Halka Alipur", "Kanungo Narela"],
      remarks: "Ancestral Bhumidhari rights recorded in Delhi Revenue Record (Khatauni 44/22)."
    }
  ],

  "PROP-DL-009": [
    {
      deedId: "DEED-DL-2015-009",
      registrationNo: "984/2015",
      bookNo: "1",
      volumeNo: "8120",
      pageFrom: 45,
      pageTo: 64,
      eStampCertNo: "IN-DL10293847561928M",
      eStampDate: "28-Aug-2015",
      registrationDate: "05-Sep-2015",
      deedType: "CONVEYANCE_DEED",
      deedTypeName: "Conveyance Deed (L&DO Leasehold to Freehold)",
      subRegistrarOffice: "Sub-Registrar V (Mehrauli / INA)",
      transferor: {
        name: "Land and Development Office (L&DO), Ministry of Housing and Urban Affairs",
        representedBy: "Land Officer, L&DO Nirman Bhawan",
        address: "Nirman Bhawan, New Delhi",
        pan: "N/A",
        biometricVerified: true
      },
      transferee: {
        name: "Dr. Arvind Malhotra & Smt. Rekha Malhotra",
        fatherName: "Late Col. K. N. Malhotra",
        address: "C-88, Defence Colony, New Delhi",
        pan: "AALPM8820F",
        biometricVerified: true
      },
      considerationAmountINR: 1250000,
      considerationFormatted: "Freehold Conversion Charges: ₹ 12,50,000",
      circleRateValuationINR: 35000000,
      stampDutyPaidINR: 2100000,
      stampDutyFormatted: "₹ 21,00,000",
      registrationFeeINR: 350000,
      witnesses: ["Section Officer L&DO", "Col. V. S. Chauhan (Retd)"],
      remarks: "Unconditional freehold conveyance executed by L&DO."
    }
  ],

  "PROP-DL-010": [
    {
      deedId: "DEED-DL-2023-010",
      registrationNo: "8812/2023",
      bookNo: "1",
      volumeNo: "9910",
      pageFrom: 77,
      pageTo: 96,
      eStampCertNo: "IN-DL44019283746190P",
      eStampDate: "02-Nov-2023",
      registrationDate: "11-Nov-2023",
      deedType: "SALE_DEED",
      deedTypeName: "Floor-Wise Sale Deed (First Floor with Roof Rights)",
      subRegistrarOffice: "Sub-Registrar VIII (Preet Vihar / Mayur Vihar)",
      transferor: {
        name: "Satish Chand Rastogi",
        fatherName: "Late Sh. B. L. Rastogi",
        address: "101-A, Pocket 1, Mayur Vihar Phase-1, Delhi",
        pan: "AAKPR1902K",
        biometricVerified: true
      },
      transferee: {
        name: "Siddharth Verma",
        fatherName: "Sh. R. K. Verma",
        address: "C-12, Laxmi Nagar, Delhi",
        pan: "ABNPV4412B",
        biometricVerified: true
      },
      considerationAmountINR: 11000000,
      considerationFormatted: "₹ 1,10,00,000 (One Crore Ten Lakhs)",
      circleRateValuationINR: 9800000,
      stampDutyPaidINR: 660000,
      stampDutyFormatted: "₹ 6,60,000 (6%)",
      registrationFeeINR: 110000,
      witnesses: ["Advocate Pankaj Gupta", "Mukesh Sharma"],
      remarks: "Registered floor-wise conveyance. Title deed subsequently mortgaged with Bank of Baroda."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PROPERTY_DEEDS };
}
