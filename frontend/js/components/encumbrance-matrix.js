/**
 * Delhi Bhu-Praman - Encumbrance Matrix & CERSAI Multi-Platform Hub
 */

const EncumbranceMatrix = {
  renderMatrix(prop, enc) {
    const matrixPanel = document.getElementById('panel-encumbrance');
    if (!matrixPanel) return;

    let html = `
      <div class="dossier-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 8px;">
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 800;">Integrated Encumbrance & Mortgage Registry</h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary);">Real-time cross-platform aggregation: CERSAI, Commercial Banks, Sub-Registrar & High Court</p>
          </div>
          <button class="btn-primary" onclick="App.openBankLienModal('${prop.id}')" style="font-size: 0.78rem; padding: 8px 14px;">
            <i class="fas fa-university"></i> Bank Portal: Lodge Mortgage
          </button>
        </div>
    `;

    // 1. Bank Mortgages & CERSAI Registry
    if (enc.mortgages.length === 0) {
      html += `
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px; display: flex; align-items: center; gap: 14px;">
          <i class="fas fa-check-circle" style="font-size: 1.8rem; color: #10b981;"></i>
          <div>
            <h5 style="color: #059669; font-size: 0.95rem;">Nil Encumbrances / No Active Mortgages Found</h5>
            <p style="font-size: 0.8rem; color: var(--text-secondary);">No active security interests or equitable mortgages registered across CERSAI database or Delhi Sub-Registrars.</p>
          </div>
        </div>
      `;
    } else {
      enc.mortgages.forEach(mort => {
        const isActive = mort.status === 'ACTIVE' || mort.status === 'NPA_RECOVERY_PROCEEDING' || mort.status === 'ACTIVE_DUAL_FINANCE_ALERT';
        const isNPA = mort.status === 'NPA_RECOVERY_PROCEEDING' || mort.status === 'ACTIVE_DUAL_FINANCE_ALERT';
        
        let cardClass = isActive ? (isNPA ? 'danger-lien' : '') : 'resolved-lien';
        let statusBadge = '';

        if (mort.status === 'ACTIVE') {
          statusBadge = '<span class="status-pill mortgaged"><i class="fas fa-lock"></i> Active Bank Mortgage</span>';
        } else if (isNPA) {
          statusBadge = '<span class="status-pill disputed"><i class="fas fa-exclamation-triangle"></i> NPA / SARFAESI Action</span>';
        } else {
          statusBadge = '<span class="status-pill clear"><i class="fas fa-check-double"></i> Fully Discharged / Satisfied</span>';
        }

        html += `
          <div class="encumbrance-card-item ${cardClass}">
            <div class="encumbrance-header">
              <span class="bank-badge">
                <i class="fas fa-landmark" style="color: var(--primary-blue);"></i>
                ${mort.institutionName}
              </span>
              ${statusBadge}
            </div>

            <div class="detail-grid" style="margin: 12px 0;">
              <div class="detail-item">
                <span class="label">Branch & Centre</span>
                <span class="value">${mort.branch}</span>
              </div>
              <div class="detail-item">
                <span class="label">Loan Account Number</span>
                <span class="value mono">${mort.loanAccountNo}</span>
              </div>
              <div class="detail-item">
                <span class="label">CERSAI Security Interest ID</span>
                <span class="value mono" style="color: var(--primary-blue); font-weight:700;">${mort.cersaiSecurityInterestId}</span>
              </div>
              <div class="detail-item">
                <span class="label">Sanction Amount (INR)</span>
                <span class="value" style="font-size: 1rem; color: #1e3a8a;">${mort.sanctionAmountFormatted}</span>
              </div>
              <div class="detail-item">
                <span class="label">Sanction Date</span>
                <span class="value">${mort.sanctionDate}</span>
              </div>
              <div class="detail-item">
                <span class="label">Charge Priority</span>
                <span class="value">${mort.chargeType}</span>
              </div>
              ${mort.outstandingBalanceFormatted ? `
              <div class="detail-item">
                <span class="label">Est. Outstanding Balance</span>
                <span class="value" style="color: #e11d48; font-weight:700;">${mort.outstandingBalanceFormatted}</span>
              </div>` : ''}
              ${mort.satisfactionDate ? `
              <div class="detail-item">
                <span class="label">Satisfaction Date & NOC</span>
                <span class="value" style="color: #059669;"><i class="fas fa-stamp"></i> ${mort.satisfactionDate} (${mort.nocDocumentNo})</span>
              </div>` : ''}
            </div>

            <div style="font-size: 0.8rem; color: var(--text-secondary); background: var(--bg-subtle); padding: 10px; border-radius: var(--radius-sm);">
              <strong>Remarks:</strong> ${mort.remarks}
            </div>
          </div>
        `;
      });
    }

    // 2. High Court & DRT Judicial Attachments
    if (enc.courtAttachments.length > 0) {
      html += `
        <h4 style="font-size: 1rem; font-weight: 800; color: #e11d48; margin: 24px 0 12px 0; display:flex; align-items:center; gap:8px;">
          <i class="fas fa-gavel"></i> Active Judicial Orders & Injunctions
        </h4>
      `;

      enc.courtAttachments.forEach(court => {
        html += `
          <div class="encumbrance-card-item danger-lien">
            <div class="encumbrance-header">
              <span class="bank-badge" style="color: #e11d48;">
                <i class="fas fa-balance-scale"></i> ${court.courtName}
              </span>
              <span class="status-pill disputed"><i class="fas fa-ban"></i> ${court.orderType}</span>
            </div>

            <div class="detail-grid" style="margin: 12px 0;">
              <div class="detail-item">
                <span class="label">Case Number</span>
                <span class="value mono" style="font-weight: bold;">${court.caseNumber}</span>
              </div>
              <div class="detail-item">
                <span class="label">Petitioner vs Respondent</span>
                <span class="value">${court.petitioner} <em>vs</em> ${court.respondent}</span>
              </div>
              <div class="detail-item">
                <span class="label">Injunction Order Date</span>
                <span class="value">${court.injunctionDate}</span>
              </div>
              <div class="detail-item">
                <span class="label">Status</span>
                <span class="value" style="color: #e11d48; font-weight: bold;">${court.status}</span>
              </div>
            </div>

            <div style="font-size: 0.82rem; line-height: 1.5; color: #881337; background: rgba(244, 63, 94, 0.08); padding: 12px; border-radius: var(--radius-sm);">
              <strong>Court Directive:</strong> ${court.orderSummary}
            </div>
          </div>
        `;
      });
    }

    // 3. Tax Liens & Statutory Recovery
    if (enc.taxLiens.length > 0) {
      html += `
        <h4 style="font-size: 1rem; font-weight: 800; color: #d97706; margin: 24px 0 12px 0; display:flex; align-items:center; gap:8px;">
          <i class="fas fa-receipt"></i> Municipal & Revenue Tax Dues / Liens
        </h4>
      `;

      enc.taxLiens.forEach(tax => {
        html += `
          <div class="encumbrance-card-item" style="border-left-color: #f59e0b;">
            <div class="encumbrance-header">
              <span class="bank-badge">
                <i class="fas fa-building"></i> ${tax.authority}
              </span>
              <span class="status-pill mortgaged">${tax.status}</span>
            </div>
            <div class="detail-grid" style="margin: 10px 0;">
              <div class="detail-item">
                <span class="label">Demand Notice Ref</span>
                <span class="value mono">${tax.noticeNo}</span>
              </div>
              <div class="detail-item">
                <span class="label">Issued Date</span>
                <span class="value">${tax.issuedDate}</span>
              </div>
              <div class="detail-item">
                <span class="label">Arrears / Demand Amount</span>
                <span class="value" style="color: #e11d48; font-weight: 800;">${tax.amountFormatted}</span>
              </div>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">
              <strong>Demand Head:</strong> ${tax.demandType}
            </div>
          </div>
        `;
      });
    }

    // 4. Land Acquisition Status (RFCTLARR)
    if (enc.acquisitionStatus && enc.acquisitionStatus.isAcquired) {
      const acq = enc.acquisitionStatus;
      html += `
        <div style="background: rgba(225, 29, 72, 0.08); border: 2px solid #e11d48; border-radius: var(--radius-lg); padding: 20px; margin-top: 24px;">
          <div style="display: flex; align-items: center; gap: 10px; color: #be123c; font-size: 1.1rem; font-weight: 800; margin-bottom: 10px;">
            <i class="fas fa-bullhorn"></i> Land Acquisition Notification in Force
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">
            This land parcel is subject to preliminary acquisition proceedings under Section 11 of Right to Fair Compensation and Transparency in Land Acquisition Act, 2013.
          </p>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="label">Project / Purpose</span>
              <span class="value">${acq.projectPurpose}</span>
            </div>
            <div class="detail-item">
              <span class="label">Acquisition Authority</span>
              <span class="value">${acq.notifyingAuthority}</span>
            </div>
            <div class="detail-item">
              <span class="label">Gazette Notification</span>
              <span class="value mono">${acq.gazetteNotificationNo} (${acq.gazetteDate})</span>
            </div>
          </div>
        </div>
      `;
    }

    html += `</div>`;
    matrixPanel.innerHTML = html;
  }
};
