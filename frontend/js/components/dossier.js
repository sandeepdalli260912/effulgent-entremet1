/**
 * Delhi Bhu-Praman - 360° Property Dossier & 30-Year Title Chain Viewer
 */

const DossierViewer = {
  currentPropertyId: "PROP-DL-001",

  init() {
    // Initial render with default property
    this.renderPropertyDossier(this.currentPropertyId);

    // Setup dossier sub-tab switching
    const tabBtns = document.querySelectorAll('.dossier-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPanelId = btn.dataset.panel;
        this.switchSubTab(targetPanelId);
      });
    });
  },

  switchSubTab(panelId) {
    const tabBtns = document.querySelectorAll('.dossier-tab-btn');
    tabBtns.forEach(b => {
      if (b.dataset.panel === panelId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    const panels = document.querySelectorAll('.dossier-sub-panel');
    panels.forEach(p => p.classList.remove('active'));

    const activePanel = document.getElementById(panelId);
    if (activePanel) {
      activePanel.classList.add('active');
    }
  },

  highlightDeed(query) {
    setTimeout(() => {
      if (!query) return;
      const q = String(query).toLowerCase().replace(/[\s\-_/]/g, '');
      const cards = document.querySelectorAll('.timeline-node');
      let found = false;

      cards.forEach(c => {
        const regNo = (c.dataset.regNo || '').toLowerCase().replace(/[\s\-_/]/g, '');
        const deedId = (c.dataset.deedId || '').toLowerCase().replace(/[\s\-_/]/g, '');
        if (regNo.includes(q) || deedId.includes(q) || q.includes(regNo)) {
          c.classList.add('highlight-glow');
          if (!found) {
            c.scrollIntoView({ behavior: 'smooth', block: 'center' });
            found = true;
          }
          setTimeout(() => c.classList.remove('highlight-glow'), 4000);
        }
      });
    }, 200);
  },

  renderPropertyDossier(propertyId) {
    const prop = DELHI_PROPERTIES.find(p => p.id === propertyId);
    if (!prop) return;

    this.currentPropertyId = propertyId;
    const enc = PROPERTY_ENCUMBRANCES[propertyId] || { mortgages: [], courtAttachments: [], taxLiens: [] };
    const deeds = PROPERTY_DEEDS[propertyId] || [];

    // 1. Render Left Sidebar Summary & Risk Score
    this.renderSidebarSummary(prop, enc);

    // 2. Render Overview Tab
    this.renderOverviewTab(prop, enc, deeds);

    // 3. Render 30-Year Title Chain Timeline
    this.renderTitleChainTimeline(deeds, prop);

    // 4. Render Encumbrance Matrix Tab
    EncumbranceMatrix.renderMatrix(prop, enc);

    // 5. Render AI Title Health & Risk Engine Tab
    RiskEngine.renderRiskAnalysis(prop, enc, deeds);

    // 6. Update Encumbrance Certificate Generator context
    ECGenerator.setCurrentProperty(prop, enc, deeds);
  },

  renderSidebarSummary(prop, enc) {
    const sidebarContainer = document.getElementById('dossier-sidebar-container');
    if (!sidebarContainer) return;

    let statusPillClass = 'clear';
    let cardClass = 'success-badge-card';
    if (prop.status === 'MORTGAGED') {
      statusPillClass = 'mortgaged';
      cardClass = 'warning-badge-card';
    } else if (prop.status === 'DISPUTED_COURT_STAY' || prop.status === 'GOVT_ACQUISITION_NOTIFIED') {
      statusPillClass = 'disputed';
      cardClass = 'danger-badge-card';
    }

    const strokeDashoffset = 377 - (377 * (prop.riskScore / 100));
    let strokeColor = '#10b981';
    let riskVerdictClass = 'low';
    let riskVerdictText = 'CLEAR TITLE (LOW RISK)';

    if (prop.riskScore < 50) {
      strokeColor = '#f43f5e';
      riskVerdictClass = 'critical';
      riskVerdictText = 'CRITICAL LEGAL RISK';
    } else if (prop.riskScore < 85) {
      strokeColor = '#f59e0b';
      riskVerdictClass = 'moderate';
      riskVerdictText = 'MODERATE ENCUMBRANCE';
    }

    sidebarContainer.innerHTML = `
      <div class="dossier-card ${cardClass}">
        <div class="prop-badge-row">
          <span class="status-pill ${statusPillClass}">
            <i class="fas fa-shield-alt"></i> ${prop.statusBadge}
          </span>
          <span class="mono" style="font-size: 0.72rem; color: var(--text-muted);">${prop.id}</span>
        </div>

        <h3 style="font-size: 1.25rem; margin-bottom: 6px;">${prop.title}</h3>
        <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 14px;">
          <i class="fas fa-map-marker-alt" style="color: var(--primary-blue); margin-right: 4px;"></i>
          ${prop.address.locality}, ${prop.address.subDivision}, ${prop.address.district} - ${prop.address.pincode}
        </p>

        <!-- Dynamic Gauge Card -->
        <div class="risk-gauge-container">
          <svg class="gauge-svg" viewBox="0 0 140 140">
            <circle class="gauge-circle-bg" cx="70" cy="70" r="60"></circle>
            <circle 
              class="gauge-circle-bar" 
              cx="70" 
              cy="70" 
              r="60" 
              style="stroke-dashoffset: ${strokeDashoffset}; stroke: ${strokeColor};"
            ></circle>
          </svg>
          <div class="gauge-value-box">
            <span class="gauge-number" style="color: ${strokeColor};">${prop.riskScore}</span>
            <span class="gauge-label">Score / 100</span>
          </div>
        </div>

        <div class="risk-verdict ${riskVerdictClass}">
          <i class="fas fa-check-shield"></i> ${riskVerdictText}
        </div>

        <div style="margin-top: 18px; display: flex; flex-direction: column; gap: 8px;">
          <button class="btn-primary w-full" onclick="App.openCertificateModal()">
            <i class="fas fa-file-pdf"></i> Generate Official EC (Form 15/16)
          </button>
          <button class="btn-secondary w-full" onclick="App.openBankLienModal('${prop.id}')">
            <i class="fas fa-university"></i> Lodge Bank Mortgage (CERSAI)
          </button>
        </div>
      </div>

      <!-- Quick Property Identifiers Box -->
      <div class="dossier-card" style="margin-top: 16px;">
        <h4 style="font-size: 0.95rem; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
          <i class="fas fa-fingerprint" style="color: var(--primary-blue);"></i> Universal Digital Keys
        </h4>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.8rem;">
          <div>
            <span style="color: var(--text-muted); display: block;">MCD UPIC (Urban Property ID):</span>
            <span class="mono" style="font-weight: 600; color: var(--text-primary);">${prop.upic}</span>
          </div>
          <div>
            <span style="color: var(--text-muted); display: block;">D-PIN (Digital Parcel Identification):</span>
            <span class="mono" style="font-weight: 600; color: var(--primary-blue);">${prop.dpin}</span>
          </div>
          <div>
            <span style="color: var(--text-muted); display: block;">Sub-Registrar Jurisdiction:</span>
            <span style="font-weight: 500;">${prop.sroJurisdiction}</span>
          </div>
          <div>
            <span style="color: var(--text-muted); display: block;">Revenue Sub-Division:</span>
            <span style="font-weight: 500;">${prop.address.subDivision} (${prop.address.district})</span>
          </div>
        </div>
      </div>
    `;
  },

  renderOverviewTab(prop, enc, deeds) {
    const overviewContainer = document.getElementById('panel-overview');
    if (!overviewContainer) return;

    const latestDeed = deeds[0];

    overviewContainer.innerHTML = `
      <div class="dossier-card">
        <h4 style="font-size: 1.05rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <i class="fas fa-id-card" style="color: var(--primary-blue);"></i>
          Current Ownership & Record of Rights (RoR)
        </h4>

        <div class="detail-grid">
          <div class="detail-item">
            <span class="label">Current Recorded Owner(s)</span>
            <span class="value" style="color: var(--primary-blue); font-size: 1rem;">${prop.ownership.currentOwner}</span>
          </div>
          <div class="detail-item">
            <span class="label">Father / Husband Name</span>
            <span class="value">${prop.ownership.fatherHusbandName}</span>
          </div>
          <div class="detail-item">
            <span class="label">Ownership Type & Share</span>
            <span class="value">${prop.ownership.ownershipType}</span>
          </div>
          <div class="detail-item">
            <span class="label">Mode of Acquisition</span>
            <span class="value">${prop.ownership.ownershipMode}</span>
          </div>
          <div class="detail-item">
            <span class="label">Holding Since</span>
            <span class="value">${prop.ownership.holdingSince}</span>
          </div>
          <div class="detail-item">
            <span class="label">Municipal / Revenue Mutation</span>
            <span class="value" style="color: #059669;"><i class="fas fa-check-circle"></i> ${prop.ownership.mutationDocNo}</span>
          </div>
        </div>

        ${latestDeed ? `
        <div style="margin-top: 16px; padding: 12px; background: rgba(37, 99, 235, 0.05); border: 1px solid rgba(37, 99, 235, 0.2); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Latest Executed Deed:</span>
            <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary);">
              <i class="fas fa-file-signature" style="color: var(--primary-blue);"></i> Reg No: <span class="mono">${latestDeed.registrationNo}</span> (${latestDeed.deedTypeName})
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Registered on ${latestDeed.registrationDate} at ${latestDeed.subRegistrarOffice}</div>
          </div>
          <button class="btn-secondary" style="padding: 6px 14px; font-size: 0.8rem;" onclick="DossierViewer.switchSubTab('panel-deeds'); DossierViewer.highlightDeed('${latestDeed.registrationNo}');">
            <i class="fas fa-link"></i> View 30-Yr Deed Chain
          </button>
        </div>` : ''}
      </div>

      <div class="dossier-card">
        <h4 style="font-size: 1.05rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <i class="fas fa-vector-square" style="color: var(--primary-blue);"></i>
          Spatial Dimensions & Master Plan Delhi 2041 Zoning
        </h4>

        <div class="detail-grid">
          <div class="detail-item">
            <span class="label">Land Area (Sq. Meters / Sq. Yards)</span>
            <span class="value">${prop.geo.landAreaSqM} m² (${prop.geo.landAreaSqYd} sq.yds)</span>
          </div>
          ${prop.geo.landAreaBighaBiswa ? `
          <div class="detail-item">
            <span class="label">Rural Land Measure (Bigha-Biswa)</span>
            <span class="value" style="color: #d97706; font-weight:700;">${prop.geo.landAreaBighaBiswa}</span>
          </div>` : ''}
          <div class="detail-item">
            <span class="label">Built-Up Area / Configuration</span>
            <span class="value">${prop.geo.builtUpAreaSqFt > 0 ? prop.geo.builtUpAreaSqFt + ' sq.ft (' + prop.geo.floors + ')' : 'Open Land Parcel'}</span>
          </div>
          <div class="detail-item">
            <span class="label">Khasra / Scheme Equivalent</span>
            <span class="value">${prop.geo.khasraEquivalent}</span>
          </div>
          <div class="detail-item">
            <span class="label">MPD 2041 Permissible Land Use</span>
            <span class="value">${prop.masterPlan2041.landUse}</span>
          </div>
          <div class="detail-item">
            <span class="label">Zoning Conformance</span>
            <span class="value" style="color: #059669;"><i class="fas fa-check-circle"></i> ${prop.masterPlan2041.zoningStatus}</span>
          </div>
        </div>

        ${prop.masterPlan2041.dlrActApplicability ? `
        <div style="margin-top: 16px; padding: 12px; background: rgba(245, 158, 11, 0.08); border-left: 4px solid #f59e0b; border-radius: var(--radius-sm); font-size: 0.8rem;">
          <strong><i class="fas fa-info-circle"></i> Statutory Notice:</strong> ${prop.masterPlan2041.dlrActApplicability}
        </div>` : ''}
      </div>

      <div class="dossier-card">
        <h4 style="font-size: 1.05rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i class="fas fa-file-alt" style="color: var(--primary-blue);"></i>
          Property Summary & Legal Status
        </h4>
        <p style="font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
          ${prop.summary}
        </p>
      </div>
    `;
  },

  renderTitleChainTimeline(deeds, prop) {
    const timelinePanel = document.getElementById('panel-deeds');
    if (!timelinePanel) return;

    if (deeds.length === 0) {
      timelinePanel.innerHTML = `
        <div class="dossier-card" style="text-align: center; padding: 40px;">
          <i class="fas fa-folder-open" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 12px;"></i>
          <h4>No Digitized Deeds Found</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">Ancestral agricultural entry recorded directly in Delhi Revenue Jamabandi.</p>
        </div>
      `;
      return;
    }

    let timelineHtml = `
      <div class="dossier-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 800;">30-Year Chronological Title Chain (DORIS Archive)</h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary);">Verified registered deeds & conveyances from NCT Sub-Registrar Book No. 1 records</p>
          </div>
          <span class="status-pill clear">
            <i class="fas fa-link"></i> ${deeds.length} Verified Links in Chain
          </span>
        </div>

        <!-- In-Tab Search / Filter for Deeds -->
        <div style="margin-bottom: 20px; display: flex; gap: 10px; align-items: center;">
          <div style="position: relative; flex: 1;">
            <i class="fas fa-search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); color: var(--text-muted); font-size: 0.85rem;"></i>
            <input 
              type="text" 
              id="deed-timeline-filter" 
              placeholder="Filter deeds by Reg No (e.g. 4521/2018), Seller, Buyer, e-Stamp..." 
              style="width: 100%; padding: 8px 12px 8px 36px; border: 1px solid var(--border-color); border-radius: var(--radius-md); background: var(--bg-main); color: var(--text-primary); font-size: 0.82rem;"
              oninput="DossierViewer.filterTimelineDeeds(this.value)"
            />
          </div>
        </div>

        <div class="timeline-container" id="timeline-nodes-wrapper">
    `;

    deeds.forEach((deed, index) => {
      const isLatest = index === 0;
      timelineHtml += `
        <div 
          class="timeline-node ${isLatest ? 'current' : ''}" 
          id="deed-card-${deed.deedId}" 
          data-deed-id="${deed.deedId}" 
          data-reg-no="${deed.registrationNo}"
          data-search-text="${deed.registrationNo} ${deed.deedTypeName} ${deed.transferor?.name} ${deed.transferee?.name} ${deed.eStampCertNo} ${deed.subRegistrarOffice}".toLowerCase()
        >
          <div class="timeline-marker">
            <i class="fas ${isLatest ? 'fa-check' : 'fa-circle'}" style="font-size: 0.55rem; color: ${isLatest ? '#fff' : '#1d4ed8'};"></i>
          </div>
          <div class="timeline-card">
            <div class="timeline-header">
              <span class="deed-badge"><i class="fas fa-file-signature"></i> ${deed.deedTypeName}</span>
              <span class="timeline-date"><i class="far fa-calendar-alt"></i> Registered: ${deed.registrationDate}</span>
            </div>

            <div class="parties-exchange-box">
              <div class="party-box">
                <h5>Transferor / Seller</h5>
                <p>${deed.transferor.name}</p>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${deed.transferor.address}</span>
              </div>
              <div class="transfer-arrow">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div class="party-box">
                <h5>Transferee / Purchaser</h5>
                <p style="color: var(--primary-blue);">${deed.transferee.name}</p>
                <span style="font-size: 0.7rem; color: var(--text-muted);">${deed.transferee.address}</span>
              </div>
            </div>

            <div class="deed-specs-row">
              <span><strong>Doc / Reg No:</strong> <span class="mono" style="color: var(--primary-blue); font-weight: 700;">${deed.registrationNo}</span></span>
              <span><strong>Book / Vol / Page:</strong> Book ${deed.bookNo}, Vol ${deed.volumeNo}, Pgs ${deed.pageFrom}-${deed.pageTo}</span>
              <span><strong>e-Stamp Cert:</strong> <span class="mono">${deed.eStampCertNo}</span></span>
              <span><strong>Consideration:</strong> ${deed.considerationFormatted}</span>
              <span><strong>Stamp Duty Paid:</strong> ${deed.stampDutyFormatted}</span>
              <span><strong>Sub-Registrar Office:</strong> ${deed.subRegistrarOffice}</span>
            </div>

            <button class="deed-action-btn" onclick="DossierViewer.openDeedModal('${prop.id}', '${deed.deedId}')">
              <i class="fas fa-search-plus"></i> View e-Stamp & Deed Endorsement Certificate
            </button>
          </div>
        </div>
      `;
    });

    timelineHtml += `
        </div>
      </div>
    `;

    timelinePanel.innerHTML = timelineHtml;
  },

  filterTimelineDeeds(filterText) {
    const q = (filterText || '').toLowerCase().trim();
    const nodes = document.querySelectorAll('#timeline-nodes-wrapper .timeline-node');
    nodes.forEach(node => {
      const text = (node.dataset.searchText || '').toLowerCase();
      if (!q || text.includes(q)) {
        node.style.display = 'block';
      } else {
        node.style.display = 'none';
      }
    });
  },

  openDeedModal(propertyId, deedId) {
    const deeds = PROPERTY_DEEDS[propertyId] || [];
    const deed = deeds.find(d => d.deedId === deedId);
    if (!deed) return;

    const modalBody = document.getElementById('deed-modal-body');
    if (!modalBody) return;

    modalBody.innerHTML = `
      <div class="estamp-certificate-box">
        <div class="estamp-header">
          <div style="font-size: 1.2rem; font-weight: bold; text-transform: uppercase; color: #78350f;">
            INDIA NON JUDICIAL
          </div>
          <div style="font-size: 1rem; font-weight: bold; color: #1e3a8a;">
            Government of National Capital Territory of Delhi
          </div>
          <div style="font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em; color: #b45309; margin-top: 4px;">
            e-Stamp Certificate - Stock Holding Corporation of India Ltd.
          </div>
        </div>

        <table class="estamp-table">
          <tr>
            <td class="label-col">Certificate No.</td>
            <td class="mono" style="font-weight: bold; color: #1e3a8a;">${deed.eStampCertNo}</td>
          </tr>
          <tr>
            <td class="label-col">Certificate Issued Date</td>
            <td>${deed.eStampDate}</td>
          </tr>
          <tr>
            <td class="label-col">Account Reference</td>
            <td>SHCIL (NCT OF DELHI) e-STAMPING SYSTEM</td>
          </tr>
          <tr>
            <td class="label-col">Unique Doc Reference</td>
            <td class="mono">DELHI-IGR-BK${deed.bookNo}-VOL${deed.volumeNo}-REG${deed.registrationNo.replace('/', '-')}</td>
          </tr>
          <tr>
            <td class="label-col">Purchased by (First Party)</td>
            <td><strong>${deed.transferor.name}</strong></td>
          </tr>
          <tr>
            <td class="label-col">Description of Document</td>
            <td>Article 23: ${deed.deedTypeName}</td>
          </tr>
          <tr>
            <td class="label-col">Consideration Price (Rs.)</td>
            <td><strong>${deed.considerationFormatted}</strong></td>
          </tr>
          <tr>
            <td class="label-col">First Party (Executant / Seller)</td>
            <td>${deed.transferor.name} ${deed.transferor.pan ? `(PAN: ${deed.transferor.pan})` : ''}</td>
          </tr>
          <tr>
            <td class="label-col">Second Party (Claimant / Buyer)</td>
            <td>${deed.transferee.name} ${deed.transferee.pan ? `(PAN: ${deed.transferee.pan})` : ''}</td>
          </tr>
          <tr>
            <td class="label-col">Stamp Duty Paid By</td>
            <td>${deed.transferee.name}</td>
          </tr>
          <tr>
            <td class="label-col">Stamp Duty Amount (Rs.)</td>
            <td style="font-weight: bold; color: #059669; font-size: 1rem;">${deed.stampDutyFormatted}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 14px; background: rgba(30, 58, 138, 0.05); border: 1px solid #cbd5e1; border-radius: 4px; font-size: 0.8rem;">
          <div style="font-weight: bold; margin-bottom: 4px; color: #1e3a8a;">
            <i class="fas fa-stamp"></i> Sub-Registrar Biometric Endorsement
          </div>
          <div>Registered at: <strong>${deed.subRegistrarOffice}</strong> on <strong>${deed.registrationDate}</strong></div>
          <div>Book No: <strong>${deed.bookNo}</strong>, Volume No: <strong>${deed.volumeNo}</strong>, Page Nos: <strong>${deed.pageFrom} to ${deed.pageTo}</strong>, Reg No: <strong>${deed.registrationNo}</strong></div>
          <div style="margin-top: 6px; font-size: 0.75rem; color: #64748b;">
            Biometric Iris and Fingerprint verification captured and digitally signed by Sub-Registrar.
          </div>
        </div>
      </div>
    `;

    const modal = document.getElementById('deed-modal');
    if (modal) {
      modal.classList.add('active');
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { DossierViewer };
}
