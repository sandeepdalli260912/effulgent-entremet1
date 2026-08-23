# Delhi Bhu-Praman • Backend Services & API Gateway

This directory contains the Python-based REST API gateway and HTTP server powering the **Delhi Bhu-Praman** unified land records and encumbrance platform.

---

## 📁 Backend Directory Structure

```
backend/
├── server.py             # Main HTTP server & simulated multi-platform API gateway
├── test_portal.py        # Automated test suite for endpoints & frontend asset delivery
├── requirements.txt      # Dependency specification (Zero-dependency Python 3)
└── README.md             # Backend architecture & API specifications
```

---

## ⚡ Running the Backend Server

To start the backend server directly from the `backend/` directory:

```bash
python server.py
```

Or specify a custom port:
```bash
python server.py 8085
```

The server automatically maps to `../frontend` and delivers static assets while handling REST API routes.

---

## 📡 REST API Specifications

### 1. System Health & Connected Data Sources
- **Route**: `GET /api/health`
- **Description**: Returns live sync status and latency for all 6 connected government registries (DORIS, Bhulekh, CERSAI, MCD UPIC, DDA, Delhi High Court).
- **Response**:
  ```json
  {
    "status": "online",
    "system": "Delhi Bhu-Praman API Gateway",
    "version": "2.4.0-NCT-DELHI",
    "timestamp": "2026-08-23T14:10:00",
    "connected_sources": [
      { "name": "DORIS", "status": "SYNCED", "latency": "28ms" },
      { "name": "Bhulekh Delhi", "status": "SYNCED", "latency": "34ms" },
      { "name": "CERSAI", "status": "SYNCED", "latency": "42ms" },
      { "name": "MCD UPIC Registry", "status": "SYNCED", "latency": "21ms" },
      { "name": "DDA Master Plan", "status": "SYNCED", "latency": "30ms" },
      { "name": "Delhi High Court Injunction Registry", "status": "SYNCED", "latency": "55ms" }
    ]
  }
  ```

### 2. Registry Aggregation Statistics
- **Route**: `GET /api/stats`
- **Description**: Returns total digitized deed counts, active mortgages, urban UPIC numbers, and rural Khasras across all 11 Delhi Revenue Districts.

### 3. Lodge Bank Mortgage & CERSAI Lien
- **Route**: `POST /api/bank/lodge-mortgage`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "propertyId": "PROP-DL-001",
    "bankName": "State Bank of India",
    "loanAmount": "50,00,000",
    "loanAccountNo": "SBI-HL-2024-88491"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Mortgage successfully lodged and broadcasted across CERSAI & Delhi Land Registry",
    "cersaiReference": "CERSAI-DL-2026-489102",
    "propertyId": "PROP-DL-001",
    "bankName": "State Bank of India",
    "registeredAt": "23-Aug-2026 14:15:00 IST",
    "status": "ACTIVE_LIEN_CREATED",
    "digitalSealHash": "E3B0C44298FC1C149AFBF4C8"
  }
  ```

### 4. Cryptographic Certificate Verification
- **Route**: `POST /api/verify-certificate`
- **Content-Type**: `application/json`
- **Request Body**:
  ```json
  {
    "certificateId": "DL-IGR-EC-2024-891042"
  }
  ```
- **Response**:
  ```json
  {
    "valid": true,
    "certificateId": "DL-IGR-EC-2024-891042",
    "verifiedAt": "2026-08-23T14:15:00",
    "issuingAuthority": "Inspector General of Registration, Govt of NCT of Delhi",
    "signatureStatus": "CRYPTOGRAPHICALLY_VALID",
    "integrityCheck": "PASSED",
    "securityAlgorithm": "SHA-256 with RSA-2048 Digital Seal"
  }
  ```

---

## 🧪 Running Integration Tests

Run the test suite while the server is active:
```bash
python test_portal.py
```
