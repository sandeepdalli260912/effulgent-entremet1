#!/usr/bin/env python3
"""
Test Deed Registration Search and Resolution
"""
import re
import sys

DEEDS_MAP = {
    'PROP-DL-001': [
        {'reg': '4521/2018', 'type': 'Sale Deed', 'office': 'Mehrauli SR-V'},
        {'reg': '1894/2012', 'type': 'Conveyance Deed', 'office': 'Mehrauli SR-V'},
        {'reg': '9021/1998', 'type': 'Perpetual Sub-Lease Deed', 'office': 'Asaf Ali Road SR-III'}
    ],
    'PROP-DL-002': [
        {'reg': '3410/2021', 'type': 'Sale Deed', 'office': 'Mehrauli SR-V'},
        {'reg': '3412/2021', 'type': 'MODTD Mortgage', 'office': 'Mehrauli SR-V'}
    ],
    'PROP-DL-004': [
        {'reg': '1104/2022', 'type': 'Sale Deed', 'office': 'Rohini SR-VI-D'}
    ],
    'PROP-DL-005': [
        {'reg': '8820/2019', 'type': 'Commercial Sub-Lease', 'office': 'Mehrauli SR-V'}
    ],
    'PROP-DL-006': [
        {'reg': '4190/2020', 'type': 'PM-UDAY Regularization', 'office': 'Mehrauli SR-V'}
    ],
    'PROP-DL-007': [
        {'reg': '331/2023', 'type': 'Sale Deed CGHS', 'office': 'Kapashera SR-IX'}
    ],
    'PROP-DL-009': [
        {'reg': '984/2015', 'type': 'Conveyance Deed Freehold', 'office': 'Mehrauli SR-V'}
    ],
    'PROP-DL-010': [
        {'reg': '8812/2023', 'type': 'Floor-Wise Sale Deed', 'office': 'Preet Vihar SR-VIII'}
    ]
}

def search_deeds(query_text):
    q = query_text.lower().strip()
    clean = re.sub(r'^(deed(\s*no\.?|\s*number)?|reg(\s*no\.?|\s*istration)?|doc(ument)?(\s*no\.?)?)\s*[:#-]?\s*', '', q, flags=re.I).strip()
    compact = re.sub(r'[\s\-_/]', '', clean)
    
    for pid, deeds in DEEDS_MAP.items():
        for d in deeds:
            reg = d['reg'].lower()
            reg_compact = re.sub(r'[\s\-_/]', '', reg)
            if (reg == q or 
                reg == clean or 
                clean in reg or 
                (len(clean) >= 3 and clean.split('/')[0] in reg) or 
                (len(compact) >= 3 and compact in reg_compact) or
                q in d['office'].lower() or
                q in d['type'].lower()):
                return pid, d
    return None, None

def run_tests():
    test_cases = [
        ("4521/2018", "PROP-DL-001"),
        ("4521 / 2018", "PROP-DL-001"),
        ("Deed No. 4521/2018", "PROP-DL-001"),
        ("Reg No 4521/2018", "PROP-DL-001"),
        ("3410/2021", "PROP-DL-002"),
        ("3412/2021", "PROP-DL-002"),
        ("1104/2022", "PROP-DL-004"),
        ("8820/2019", "PROP-DL-005"),
        ("4190/2020", "PROP-DL-006"),
        ("331/2023", "PROP-DL-007"),
        ("984/2015", "PROP-DL-009"),
        ("8812/2023", "PROP-DL-010"),
        ("Rohini SR-VI-D", "PROP-DL-004"),
        ("Kapashera SR-IX", "PROP-DL-007"),
        ("Preet Vihar", "PROP-DL-010")
    ]
    
    passed = 0
    for query, expected_pid in test_cases:
        pid, d = search_deeds(query)
        assert pid == expected_pid, f"Failed for '{query}': got {pid}, expected {expected_pid}"
        print(f"  [PASS] '{query}' -> {pid} (Reg: {d['reg']}, Type: {d['type']})")
        passed += 1
        
    print(f"\nALL {passed} REGISTERED DEED SEARCH TEST CASES PASSED SUCCESSFULLY!")

if __name__ == '__main__':
    run_tests()
