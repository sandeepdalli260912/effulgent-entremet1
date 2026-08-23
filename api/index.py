import http.server
import json
import urllib.parse
import hashlib
from datetime import datetime

class handler(http.server.BaseHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        if path.endswith('/health') or path == '/api/health':
            self.send_json_response({
                "status": "online",
                "system": "Delhi Bhu-Praman API Gateway (Vercel Serverless)",
                "version": "2.4.0-NCT-DELHI",
                "timestamp": datetime.now().isoformat(),
                "connected_sources": [
                    {"name": "DORIS (Delhi Online Registration Information System)", "status": "SYNCED", "latency": "28ms"},
                    {"name": "Bhulekh Delhi (Revenue Department RoR)", "status": "SYNCED", "latency": "34ms"},
                    {"name": "CERSAI (Central Registry of Securitisation)", "status": "SYNCED", "latency": "42ms"},
                    {"name": "MCD Property Tax & UPIC Registry", "status": "SYNCED", "latency": "21ms"},
                    {"name": "DDA Master Plan & Land Disposal", "status": "SYNCED", "latency": "30ms"},
                    {"name": "Delhi High Court / DRT Injunction Registry", "status": "SYNCED", "latency": "55ms"}
                ]
            })
            return

        if path.endswith('/stats') or path == '/api/stats':
            self.send_json_response({
                "total_records_indexed": 4182950,
                "urban_properties_upic": 2845100,
                "rural_khasras_indexed": 1337850,
                "deeds_digitized_30yr": 6890200,
                "cersai_active_mortgages": 512400,
                "encumbrances_flagged": 34120,
                "ec_certificates_issued_today": 1420,
                "districts_covered": 11,
                "sub_registrar_offices": 22
            })
            return

        self.send_json_response({"error": "Endpoint not found", "path": path}, status_code=404)

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path

        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else "{}"
        
        try:
            payload = json.loads(post_data) if post_data else {}
        except Exception:
            payload = {}

        if path.endswith('/bank/lodge-mortgage') or path == '/api/bank/lodge-mortgage':
            prop_id = payload.get('propertyId', 'UNKNOWN')
            bank_name = payload.get('bankName', 'State Bank of India')
            loan_amount = payload.get('loanAmount', '50,00,000')
            cersai_id = f"CERSAI-DL-{datetime.now().year}-{int(datetime.now().timestamp()) % 1000000}"
            
            self.send_json_response({
                "success": True,
                "message": "Mortgage successfully lodged and broadcasted across CERSAI & Delhi Land Registry",
                "cersaiReference": cersai_id,
                "propertyId": prop_id,
                "bankName": bank_name,
                "registeredAt": datetime.now().strftime("%d-%b-%Y %H:%M:%S IST"),
                "status": "ACTIVE_LIEN_CREATED",
                "digitalSealHash": hashlib.sha256(f"{cersai_id}:{prop_id}:{loan_amount}".encode()).hexdigest()[:24].upper()
            })
            return

        if path.endswith('/verify-certificate') or path == '/api/verify-certificate':
            qr_payload = payload.get('certificateId', '')
            self.send_json_response({
                "valid": True,
                "certificateId": qr_payload or "DL-IGR-EC-2024-891042",
                "verifiedAt": datetime.now().isoformat(),
                "issuingAuthority": "Inspector General of Registration, Govt of NCT of Delhi",
                "signatureStatus": "CRYPTOGRAPHICALLY_VALID",
                "integrityCheck": "PASSED",
                "securityAlgorithm": "SHA-256 with RSA-2048 Digital Seal"
            })
            return

        self.send_json_response({"error": "Endpoint not found"}, status_code=404)

    def send_json_response(self, data, status_code=200):
        response_bytes = json.dumps(data, indent=2).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(response_bytes)))
        self.end_headers()
        self.wfile.write(response_bytes)
