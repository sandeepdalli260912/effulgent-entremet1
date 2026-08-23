#!/usr/bin/env python3
"""
Delhi Bhu-Praman - Master Project Runner
Launches the backend HTTP server and serves the unified frontend application.
"""

import os
import sys

# Ensure backend module can be imported
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.join(PROJECT_ROOT, "backend")
sys.path.insert(0, BACKEND_DIR)

try:
    from server import run_server
except ImportError:
    print("Error: Could not import server from backend directory.")
    sys.exit(1)

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else None
    print("=" * 66)
    print(" Starting Delhi Bhu-Praman Single Window Portal")
    print(" Frontend Directory : " + os.path.join(PROJECT_ROOT, "frontend"))
    print(" Backend Directory  : " + BACKEND_DIR)
    print("=" * 66)
    run_server(port)
