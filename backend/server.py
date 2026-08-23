#!/usr/bin/env python3
"""
Delhi Bhu-Praman - Unified Delhi Land Records & Encumbrance Portal
Backend HTTP Server & Simulated Multi-Platform API Gateway
"""

import http.server
import socketserver
import json
import urllib.parse
import os
import sys
import hashlib
from datetime import datetime

PORTS = [8085, 8000, 5000, 3000, 8888, 8090, 8080]

# Determine paths dynamically
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(BACKEND_DIR, ".."))
FRONTEND_DIR = os.path.join(PROJECT_ROOT, "frontend")

if not os.path.exists(FRONTEND_DIR):
    # Fallback to local directory if structure is flat
    FRONTEND_DIR = PROJECT_ROOT

class LandPortalHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=FRONTEND_DIR, **kwargs)

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
        query = urllib.parse.parse_qs(parsed.query)

        # ----------------------------------------------------
        # REST API Endpoints
        # ----------------------------------------------------
        if path == '/api/health':
            self.send_json_response({
                "status": "online",
                "system": "Delhi Bhu-Praman API Gateway",
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

        if path == '/api/stats':
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

        # Fallback to serving static files from frontend/
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else "{}"
        
        try:
            payload = json.loads(post_data) if post_data else {}
        except Exception:
            payload = {}

        if path == '/api/bank/lodge-mortgage':
            # Simulated CERSAI & Sub-Registrar mortgage filing
            prop_id = payload.get('propertyId', 'UNKNOWN')
            bank_name = payload.get('bankName', 'State Bank of India')
            loan_amount = payload.get('loanAmount', '50,00,000')
            loan_acc = payload.get('loanAccountNo', f"LON-{int(datetime.now().timestamp())}")
            
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

        if path == '/api/verify-certificate':
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

        self.send_response(404)
        self.end_headers()

    def send_json_response(self, data, status_code=200):
        response_bytes = json.dumps(data, indent=2).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(response_bytes)))
        self.end_headers()
        self.wfile.write(response_bytes)

def run_server(port=None, host=None):
    socketserver.TCPServer.allow_reuse_address = True
    httpd = None
    selected_port = None
    
    # Priority: passed port > PORT env var > default PORTS list
    env_port = os.environ.get("PORT")
    if env_port and env_port.isdigit():
        ports_to_try = [int(env_port)]
    elif port:
        ports_to_try = [port]
    else:
        ports_to_try = PORTS

    bind_host = host or os.environ.get("HOST", "0.0.0.0")
    
    for p in ports_to_try:
        try:
            httpd = socketserver.TCPServer((bind_host, p), LandPortalHandler)
            selected_port = p
            break
        except Exception:
            # Fallback to localhost if 0.0.0.0 binding is restricted
            try:
                httpd = socketserver.TCPServer(("127.0.0.1", p), LandPortalHandler)
                bind_host = "127.0.0.1"
                selected_port = p
                break
            except Exception:
                continue
            
    if not httpd:
        print("Error: Could not bind to any test port.")
        sys.exit(1)
        
    print(f"================================================================")
    print(f" Delhi Bhu-Praman Server Running at: http://{bind_host}:{selected_port}")
    print(f" Serving Frontend from: {FRONTEND_DIR}")
    print(f" Backend APIs Active: /api/health, /api/stats, /api/bank/lodge-mortgage, /api/verify-certificate")
    print(f" Integrated Services: CERSAI, DORIS, Bhulekh Delhi, MCD UPIC, DDA")
    print(f"================================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down server.")
        httpd.shutdown()

if __name__ == '__main__':
    custom_port = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else None
    run_server(custom_port)
