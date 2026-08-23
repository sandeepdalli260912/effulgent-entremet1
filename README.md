# दिल्ली भू-प्रमाण • Delhi Bhu-Praman
### Unified Single Window Portal for Land Ownership, Deeds Executed & Encumbrance Verification (NCT of Delhi)

![Delhi Bhu-Praman Portal](https://img.shields.io/badge/Govt_of_NCT_Delhi-Revenue_%26_Registration-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active_Online-brightgreen?style=for-the-badge)
![Coverage](https://img.shields.io/badge/Coverage-All_11_Districts_Delhi-orange?style=for-the-badge)
![Integration](https://img.shields.io/badge/Integrated-CERSAI_%7C_DORIS_%7C_Bhulekh_%7C_MCD_%7C_DDA-purple?style=for-the-badge)
![Architecture](https://img.shields.io/badge/Architecture-Decoupled_Frontend_%26_Backend-teal?style=for-the-badge)

---

## 🎯 Executive Synopsis & Problem Context

In the National Capital Territory of Delhi, property records and encumbrance information have historically been segregated across disparate databases:
1. **Urban Plotted & Flatted Land Records**: Managed by the Municipal Corporation of Delhi (MCD), Delhi Development Authority (DDA), and Land & Development Office (L&DO).
2. **Rural Agricultural & Lal Dora Land Records**: Managed by the Delhi Revenue Department (Bhulekh Delhi) in Bigha-Biswa measurements and Khasra/Khatauni registers under the Delhi Land Reforms Act, 1954.
3. **Executed Deeds & Conveyances**: Maintained in Book No. 1 registers by 22 Sub-Registrar offices under the Inspector General of Registration (DORIS / IGR Delhi).
4. **Encumbrances, Bank Mortgages & Liens**: Recorded by commercial banks and NBFCs on the **CERSAI** (Central Registry of Securitisation Asset Reconstruction and Security Interest of India) database, as well as court stay orders from the Hon'ble High Court of Delhi and statutory acquisition notices.

**Delhi Bhu-Praman** provides a **Single Unified Window** that integrates all these data streams, offering complete title due diligence and instant Encumbrance Certificate (EC Form 15 & Form 16) generation via any standard input.

---

## 📁 Clean Frontend & Backend Architecture

The codebase is organized into separated client-side and server-side components:

```
Aishu project/
├── frontend/                     # Client-side Presentation & Interactive UI
│   ├── index.html                # Single-page application entry point
│   ├── css/                      # Stylesheets & Visual Design System
│   │   ├── main.css              # Typography, layout, navigation & base styles
│   │   ├── dashboard.css         # 360° Dossier, Timeline, CERSAI & Risk cards
│   │   └── map.css               # Leaflet GIS Cadastral styling & popups
│   └── js/                       # Client Scripts & Data Stores
│       ├── app.js                # Core App orchestrator & navigation state
│       ├── components/           # Modular UI Components
│       │   ├── search.js         # Multi-identifier search & autosuggest
│       │   ├── dossier.js        # 360° property dossier & title chain
│       │   ├── encumbrance-matrix.js # CERSAI mortgage & lien matrix
│       │   ├── risk-engine.js    # AI Title Health & risk calculator
│       │   ├── ec-generator.js   # Form 15/16 Encumbrance Certificate builder
│       │   ├── map-viewer.js     # Leaflet Cadastral GIS map explorer
│       │   ├── bank-portal.js    # Financial institution mortgage gateway
│       │   └── api-sandbox.js    # Live inter-platform API tester
│       └── data/                 # Delhi Registry Mock Data Stores
│           ├── delhi-properties.js # Plotted & flatted property records
│           ├── encumbrances.js   # CERSAI mortgages, court stays & tax dues
│           ├── deeds.js          # 30-year DORIS registered deed history
│           └── delhi-geo.js      # Cadastral GIS coordinates & district bounds
│
├── backend/                      # Python Server & REST API Gateway
│   ├── server.py                 # HTTP Server & Multi-Platform API Gateway
│   ├── test_portal.py            # Integration test suite for APIs & static assets
│   ├── requirements.txt          # Python dependencies (Standard library zero-dep)
│   └── README.md                 # Backend API documentation & specifications
│
├── run.py                        # Root convenience launcher to start backend & frontend
└── README.md                     # Main Project Overview & Architecture Guide
```

---

## 🚀 Key Features

### 1. Unified Multi-Identifier Search Engine
Accepts standard inputs and auto-resolves to the exact property:
- **UPIC (Unique Property Identification Code)**: e.g., `DL-MCD-2024-884912`
- **Khasra / Khatauni & Village**: e.g., `Khasra 42/12, Village Baprola`
- **Registered Deed / Document Number**: e.g., `4521/2018, SR-V Mehrauli`
- **CERSAI Security Interest ID**: e.g., `CERSAI-DL-2021-884102`
- **Property Address / Locality**: e.g., `Vasant Kunj`, `Greater Kailash`, `Rohini`, `Dwarka`
- **Recorded Owner Name**: e.g., `Ramesh Kumar Sharma`

### 2. 360° Comprehensive Property Dossier
- **Property At-A-Glance**: Plotted/Rural area (sq. meters, sq. yards, bigha-biswa), D-PIN, Master Plan Delhi 2041 zoning conformance, current owner mutation status.
- **30-Year Chronological Title Chain**: Interactive visual genealogy showing each registered deed from origin to the current owner with consideration values, stamp duty receipts, and sub-registrar biometric validation.
- **DORIS Scanned Deed & e-Stamp Viewer**: High-fidelity simulation of Stock Holding Corporation of India (SHCIL) e-stamping certificates with registration endorsements.

### 3. Integrated Encumbrance & Mortgage Registry (CERSAI Hub)
- Consolidates active and historical equitable mortgages across State Bank of India, HDFC Bank, ICICI Bank, Punjab National Bank, Axis Bank, Bank of Baroda, etc.
- Flags **Non-Performing Assets (NPA)**, SARFAESI Section 13(2) recovery notices, and secondary dual-finance conflicts.
- High Court of Delhi civil suit attachments and status quo injunctions.
- Land Acquisition notifications under Section 4 / Section 11 of RFCTLARR Act 2013 (e.g. UER-II Expressway).
- MCD Property Tax dues and Delhi Land Reforms Act Section 81 notices.

### 4. AI Title Health & Due Diligence Risk Engine
- Calculates an automated **Title Health Score (0-100)** based on chain continuity, active encumbrance status, litigation flags, and zoning risks.
- Provides a comprehensive legal action checklist for property buyers and advocates.

### 5. Instant Encumbrance Certificate (EC) Generator
- Produces official **Form 15** (Statement of Encumbrances) or **Form 16** (Nil Encumbrance Certificate).
- Includes dynamic scannable QR verification code, SHA-256 digital signature seal, and one-click PDF print formatting.

### 6. Interactive Cadastral GIS Map
- Leaflet-based map explorer spanning all 11 Delhi Revenue Districts (New Delhi, South, South-West, North-West, East, Shahdara, etc.).
- Color-coded status pins:
  - 🟢 **Green**: Clear Title (Nil Encumbrance)
  - 🟡 **Yellow**: Active Bank Mortgage (CERSAI)
  - 🔴 **Red**: Judicial Stay / Land Acquisition Warning

### 7. Bank & Financial Institution Mortgage Gateway
- Allows bank loan officers to search property collateral, lodge fresh equitable mortgages, generate CERSAI IDs, and automatically lock the property in Sub-Registrar records to prevent double financing scams.

### 8. Inter-Platform API Sandbox
- Live interactive REST API testing console simulating `/api/health`, `/api/stats`, `/api/bank/lodge-mortgage`, and `/api/verify-certificate`.

---

## 💻 How to Run the Project

### Option A: Using the Root Launcher (Recommended)
Open PowerShell / Terminal in the project root and run:
```powershell
python run.py
```
Then navigate to: **`http://127.0.0.1:8085`** in your browser.

### Option B: Running the Backend Server Directly
Navigate into `backend/` and run:
```powershell
python backend/server.py
```

### Option C: Opening Frontend Directly
You can also open `frontend/index.html` directly in any modern browser (Chrome, Edge, Firefox).

---

## 🧪 Running Automated Integration Tests

To run the automated test suite across all 5 verification suites (APIs + static frontend assets):
```powershell
python backend/test_portal.py
```

---

## 🏛️ Statutory Compliance & Acts

The portal adheres to the following legal and administrative frameworks:
- **The Registration Act, 1908** (Section 17, 28 & Book No. 1 Inspection Rules)
- **The Delhi Land Reforms Act, 1954** (Section 33, 81 & Revenue Record Rules)
- **The SARFAESI Act, 2002 & CERSAI Regulations** (Central Registry of Securitisation)
- **Master Plan for Delhi (MPD 2041)** (Zoning and Development Controls)
- **Information Technology Act, 2000** (Cryptographic Signatures & Section 65B Certificate)

---

## 👥 Stakeholder Impact Matrix

| Stakeholder | Benefit / Use Case |
| :--- | :--- |
| **Property Buyer / Citizen** | Instant title due diligence, verification of 30-year deed chain, and fraud prevention before paying token money. |
| **Lending Banks & NBFCs** | Real-time CERSAI charge creation, verification of original title deeds, and automated interception of double-mortgage attempts. |
| **Sub-Registrar Officers** | Pre-registration automated clearance check preventing illegal sale deeds on mortgaged or court-stayed properties. |
| **Legal Advocates** | Rapid generation of 30-year search reports with authentic book/volume/page references and stamp duty breakdowns. |
