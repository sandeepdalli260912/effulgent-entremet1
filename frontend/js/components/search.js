/**
 * Delhi Bhu-Praman - Unified Multi-Identifier Search Component
 * Supports search by:
 * - Registered Deed Number (e.g. 4521/2018, 3410/2021, 1104/2022) & Sub-Registrar office
 * - e-Stamping Certificate Number (SHCIL) & Book/Volume/Page
 * - UPIC & D-PIN (Urban Plotted & Flatted)
 * - Khasra / Khatauni & Village (Rural Delhi Land Reforms)
 * - CERSAI Security Interest ID & Bank Loan Account
 * - Recorded Owner Name & Property Locality
 */

const SearchEngine = {
  currentFilterMode: 'ALL',

  // Preset Sample Chips per search mode
  SAMPLE_MODES: {
    ALL: [
      { query: "DL-MCD-2024-884912", label: "Vasant Kunj (Clear Title Plotted)", icon: "check-circle", color: "text-emerald-500" },
      { query: "4521/2018", label: "Reg Deed 4521/2018 (Mehrauli SR-V)", icon: "file-signature", color: "text-blue-500", highlight: true },
      { query: "DL-MCD-2021-394810", label: "GK-II (SBI Mortgaged)", icon: "lock", color: "text-amber-500", highlight: true },
      { query: "DL-REV-2023-BAP-4212", label: "Khasra 42/12 Najafgarh (High Court Stay)", icon: "gavel", color: "text-rose-500", danger: true },
      { query: "3410/2021", label: "Reg Deed 3410/2021 (GK-II Bungalow)", icon: "file-signature", color: "text-blue-500" },
      { query: "CERSAI-DL-2021-884102", label: "CERSAI Mortgage ID (SBI)", icon: "building-columns", color: "text-purple-500" },
      { query: "DL-MCD-2022-771923", label: "Sector 13 Rohini (DDA SFS Flat)", icon: "building", color: "text-blue-500" },
      { query: "DL-REV-2018-ALI-K91", label: "Village Alipur (UER-II Expressway)", icon: "road", color: "text-rose-500", danger: true }
    ],
    DEED: [
      { query: "4521/2018", label: "Reg Deed 4521/2018 (Sale Deed - Vasant Kunj)", icon: "file-signature", color: "text-emerald-500", highlight: true },
      { query: "3410/2021", label: "Reg Deed 3410/2021 (Sale Deed - GK-II)", icon: "file-signature", color: "text-blue-500", highlight: true },
      { query: "3412/2021", label: "Reg Deed 3412/2021 (MODTD Mortgage - SBI)", icon: "lock", color: "text-amber-500" },
      { query: "1104/2022", label: "Reg Deed 1104/2022 (Sale Deed - Rohini Flat)", icon: "file-signature", color: "text-blue-500" },
      { query: "8820/2019", label: "Reg Deed 8820/2019 (Commercial - Nehru Place)", icon: "briefcase", color: "text-purple-500" },
      { query: "4190/2020", label: "Reg Deed 4190/2020 (PM-UDAY Regularization - Chhatarpur)", icon: "home", color: "text-teal-500" },
      { query: "331/2023", label: "Reg Deed 331/2023 (CGHS Flat - Dwarka)", icon: "file-signature", color: "text-blue-500" },
      { query: "984/2015", label: "Reg Deed 984/2015 (L&DO Freehold - Defence Colony)", icon: "file-signature", color: "text-emerald-500" },
      { query: "8812/2023", label: "Reg Deed 8812/2023 (Floor-Wise Sale - Mayur Vihar)", icon: "file-signature", color: "text-blue-500" }
    ],
    UPIC: [
      { query: "DL-MCD-2024-884912", label: "UPIC: DL-MCD-2024-884912 (Vasant Kunj)", icon: "barcode", color: "text-emerald-500", highlight: true },
      { query: "DL-MCD-2021-394810", label: "UPIC: DL-MCD-2021-394810 (GK-II)", icon: "barcode", color: "text-amber-500" },
      { query: "DL-MCD-2022-771923", label: "UPIC: DL-MCD-2022-771923 (Rohini)", icon: "barcode", color: "text-blue-500" },
      { query: "DL-MCD-2015-882019", label: "UPIC: DL-MCD-2015-882019 (Defence Colony)", icon: "barcode", color: "text-emerald-500" },
      { query: "DL-MCD-2023-110294", label: "UPIC: DL-MCD-2023-110294 (Mayur Vihar)", icon: "barcode", color: "text-blue-500" }
    ],
    KHASRA: [
      { query: "DL-REV-2023-BAP-4212", label: "Khasra 42/12 Village Baprola (Najafgarh)", icon: "tractor", color: "text-rose-500", danger: true },
      { query: "DL-REV-2018-ALI-K91", label: "Khatauni 44/22 Village Alipur (Narela)", icon: "road", color: "text-rose-500", danger: true },
      { query: "Khasra 42/12", label: "Search by Khasra 42/12", icon: "tractor", color: "text-amber-500" },
      { query: "Village Baprola", label: "Search by Village Baprola", icon: "map-pin", color: "text-teal-500" }
    ],
    CERSAI: [
      { query: "CERSAI-DL-2021-884102", label: "CERSAI-DL-2021-884102 (SBI Home Loan)", icon: "lock", color: "text-amber-500", highlight: true },
      { query: "CERSAI-DL-2023-992140", label: "CERSAI-DL-2023-992140 (PNB SARFAESI Attachment)", icon: "gavel", color: "text-rose-500", danger: true },
      { query: "CERSAI-DL-2019-994102", label: "CERSAI-DL-2019-994102 (Axis & HDFC Consortium)", icon: "building-columns", color: "text-purple-500" },
      { query: "CERSAI-DL-2023-331049", label: "CERSAI-DL-2023-331049 (Bank of Baroda)", icon: "university", color: "text-blue-500" }
    ]
  },

  init() {
    const searchInput = document.getElementById('main-search-input');
    const searchForm = document.getElementById('unified-search-form');
    const searchTabBtns = document.querySelectorAll('.search-tab-btn');

    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.performSearch(searchInput.value.trim());
      });
    }

    if (searchTabBtns) {
      searchTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          searchTabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.setFilterMode(btn.dataset.mode);
        });
      });
    }

    // Attach initial sample chips
    this.renderSampleChips('ALL');
  },

  setFilterMode(mode) {
    this.currentFilterMode = mode || 'ALL';
    const searchInput = document.getElementById('main-search-input');

    if (searchInput) {
      switch(this.currentFilterMode) {
        case 'DEED':
          searchInput.placeholder = "Enter Registered Deed No. (e.g. 4521/2018, 3410/2021, 1104/2022, 984/2015)...";
          searchInput.value = "4521/2018";
          break;
        case 'UPIC':
          searchInput.placeholder = "Enter UPIC (e.g. DL-MCD-2024-884912 or D-PIN: 11-002-VK-B-042)...";
          searchInput.value = "DL-MCD-2024-884912";
          break;
        case 'KHASRA':
          searchInput.placeholder = "Enter Khasra / Khatauni & Village (e.g. Khasra 42/12 Village Baprola)...";
          searchInput.value = "DL-REV-2023-BAP-4212";
          break;
        case 'CERSAI':
          searchInput.placeholder = "Enter CERSAI Security ID or Bank Loan Acc (e.g. CERSAI-DL-2021-884102)...";
          searchInput.value = "CERSAI-DL-2021-884102";
          break;
        default:
          searchInput.placeholder = "Enter UPIC / Registered Deed No / Khasra No / CERSAI ID / Property Address / Owner Name...";
          searchInput.value = "DL-MCD-2024-884912";
      }
      searchInput.focus();
      searchInput.select();
    }

    this.renderSampleChips(this.currentFilterMode);
  },

  renderSampleChips(mode) {
    const chipsWrapper = document.querySelector('.quick-samples-wrapper');
    if (!chipsWrapper) return;

    const chips = this.SAMPLE_MODES[mode] || this.SAMPLE_MODES.ALL;
    
    let html = `<span class="quick-samples-label"><i class="fas fa-bolt"></i> Sample ${mode === 'DEED' ? 'Registered Deeds' : 'Records'}:</span>`;
    chips.forEach(chip => {
      let extraClass = '';
      if (chip.highlight) extraClass = 'highlight';
      if (chip.danger) extraClass = 'danger';

      html += `
        <span class="sample-chip ${extraClass}" data-query="${chip.query}">
          <i class="fas fa-${chip.icon} ${chip.color}"></i> ${chip.label}
        </span>
      `;
    });

    chipsWrapper.innerHTML = html;

    // Attach click listeners to new chips
    const newChips = chipsWrapper.querySelectorAll('.sample-chip');
    const searchInput = document.getElementById('main-search-input');
    newChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const query = chip.dataset.query;
        if (searchInput) {
          searchInput.value = query;
          this.performSearch(query);
        }
      });
    });
  },

  performSearch(rawQuery) {
    if (!rawQuery) {
      App.showToast("Please enter a registered deed number or property search parameter", "warning");
      return;
    }

    const query = rawQuery.toLowerCase().trim();
    // Normalize query by removing common prefixes like "deed no:", "reg no.", "doc:", etc.
    const cleanQuery = query
      .replace(/^(deed(\s*no\.?|\s*number)?|reg(\s*no\.?|\s*istration)?|doc(ument)?(\s*no\.?)?)\s*[:#-]?\s*/i, '')
      .trim();
    const compactQuery = cleanQuery.replace(/[\s\-_/]/g, '');

    let matchedProperty = null;
    let matchedDeed = null;
    let matchedMortgage = null;
    let isDeedMatch = false;

    // -------------------------------------------------------------
    // 1. Check Registered Deeds (DORIS Archive)
    // -------------------------------------------------------------
    for (const [propId, deeds] of Object.entries(PROPERTY_DEEDS)) {
      const deedFound = deeds.find(d => {
        const regNo = (d.registrationNo || '').toLowerCase();
        const regNoCompact = regNo.replace(/[\s\-_/]/g, '');
        const eStamp = (d.eStampCertNo || '').toLowerCase();
        const eStampCompact = eStamp.replace(/[\s\-_/]/g, '');
        const deedId = (d.deedId || '').toLowerCase();
        const subOffice = (d.subRegistrarOffice || '').toLowerCase();
        const deedType = (d.deedTypeName || '').toLowerCase();
        const transName = (d.transferor?.name || '').toLowerCase();
        const recName = (d.transferee?.name || '').toLowerCase();
        const bookVol = `book ${d.bookNo} vol ${d.volumeNo}`.toLowerCase();

        return (
          regNo === query ||
          regNo === cleanQuery ||
          regNo.includes(cleanQuery) ||
          (cleanQuery.length >= 3 && regNo.includes(cleanQuery.split('/')[0])) ||
          (compactQuery.length >= 3 && regNoCompact.includes(compactQuery)) ||
          eStamp.includes(cleanQuery) ||
          eStampCompact.includes(compactQuery) ||
          deedId === query ||
          deedId === cleanQuery ||
          subOffice.includes(query) ||
          deedType.includes(query) ||
          transName.includes(query) ||
          recName.includes(query) ||
          bookVol.includes(query)
        );
      });

      if (deedFound) {
        matchedProperty = DELHI_PROPERTIES.find(p => p.id === propId);
        matchedDeed = deedFound;
        isDeedMatch = true;
        break;
      }
    }

    // -------------------------------------------------------------
    // 2. Check Direct Property ID / UPIC / D-PIN
    // -------------------------------------------------------------
    if (!matchedProperty) {
      matchedProperty = DELHI_PROPERTIES.find(p => 
        p.id.toLowerCase() === query ||
        p.upic.toLowerCase() === query ||
        p.upic.toLowerCase().includes(query) ||
        p.dpin.toLowerCase().includes(query) ||
        p.dpin.toLowerCase().replace(/[\s\-_]/g, '').includes(compactQuery)
      );
    }

    // -------------------------------------------------------------
    // 3. Check Khasra / Village / Rural Records
    // -------------------------------------------------------------
    if (!matchedProperty) {
      matchedProperty = DELHI_PROPERTIES.find(p => 
        p.title.toLowerCase().includes(query) ||
        (p.geo.khasraEquivalent && p.geo.khasraEquivalent.toLowerCase().includes(query)) ||
        p.address.locality.toLowerCase().includes(query) ||
        p.address.subDivision.toLowerCase().includes(query)
      );
    }

    // -------------------------------------------------------------
    // 4. Check Current Owner Name & Mutation Doc No
    // -------------------------------------------------------------
    if (!matchedProperty) {
      matchedProperty = DELHI_PROPERTIES.find(p => 
        p.ownership.currentOwner.toLowerCase().includes(query) ||
        (p.ownership.mutationDocNo && p.ownership.mutationDocNo.toLowerCase().includes(query))
      );
    }

    // -------------------------------------------------------------
    // 5. Check CERSAI Security IDs & Bank Mortgages
    // -------------------------------------------------------------
    if (!matchedProperty) {
      for (const [propId, enc] of Object.entries(PROPERTY_ENCUMBRANCES)) {
        const cersaiMatch = enc.mortgages.find(m => 
          (m.cersaiSecurityInterestId && m.cersaiSecurityInterestId.toLowerCase().includes(query)) ||
          (m.loanAccountNo && m.loanAccountNo.toLowerCase().includes(query)) ||
          m.institutionName.toLowerCase().includes(query)
        );
        if (cersaiMatch) {
          matchedProperty = DELHI_PROPERTIES.find(p => p.id === propId);
          matchedMortgage = cersaiMatch;
          break;
        }
      }
    }

    // -------------------------------------------------------------
    // 6. General Keyword Search Fallback
    // -------------------------------------------------------------
    if (!matchedProperty) {
      matchedProperty = DELHI_PROPERTIES.find(p => 
        p.address.locality.toLowerCase().includes(query) ||
        p.address.district.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query)
      );
    }

    // -------------------------------------------------------------
    // Handle Match Execution & Navigation
    // -------------------------------------------------------------
    if (matchedProperty) {
      // 1. Ensure we are on the Dossier view tab
      App.switchMainTab('dossier-view');

      // 2. Render Property Dossier
      DossierViewer.renderPropertyDossier(matchedProperty.id);

      // 3. Smart Tab Routing based on what was matched
      if (isDeedMatch || this.currentFilterMode === 'DEED') {
        DossierViewer.switchSubTab('panel-deeds');
        if (matchedDeed) {
          DossierViewer.highlightDeed(matchedDeed.registrationNo || matchedDeed.deedId);
          App.showToast(`Registered Deed Located: Reg No. ${matchedDeed.registrationNo} (${matchedDeed.deedTypeName})`, "success");
        } else {
          App.showToast(`Property located: ${matchedProperty.title} (30-Year Deed Chain Active)`, "success");
        }
      } else if (matchedMortgage || this.currentFilterMode === 'CERSAI') {
        DossierViewer.switchSubTab('panel-encumbrance');
        App.showToast(`CERSAI Lien Located: ${matchedMortgage ? matchedMortgage.cersaiSecurityInterestId : 'Active Mortgage'} (${matchedProperty.title})`, "success");
      } else {
        DossierViewer.switchSubTab('panel-overview');
        App.showToast(`Property verified: ${matchedProperty.title} (${matchedProperty.upic})`, "success");
      }

      // 4. Scroll smoothly to dossier section
      const dossierElement = document.getElementById('property-dossier-section');
      if (dossierElement) {
        dossierElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      App.showToast(`No verified Delhi land record found matching "${rawQuery}". Try selecting one of the sample deed numbers below.`, "danger");
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SearchEngine };
}
