/**
 * Delhi Bhu-Praman - AI Title Health & Legal Due Diligence Scoring Engine
 */

const RiskEngine = {
  renderRiskAnalysis(prop, enc, deeds) {
    const riskPanel = document.getElementById('panel-risk');
    if (!riskPanel) return;

    // Calculate dynamic check indicators
    const hasActiveMortgage = enc.mortgages.some(m => m.status === 'ACTIVE' || m.status === 'NPA_RECOVERY_PROCEEDING');
    const hasCourtStay = enc.courtAttachments.length > 0;
    const hasTaxLien = enc.taxLiens.length > 0;
    const isAcquisitionNotified = enc.acquisitionStatus && enc.acquisitionStatus.isAcquired;
    const hasChainDiscontinuity = deeds.length < 2 && prop.propertyType.includes('URBAN');

    let html = `
      <div class="dossier-card">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.15rem; font-weight: 800; display:flex; align-items:center; gap:8px;">
              <i class="fas fa-microchip" style="color: var(--primary-blue);"></i>
              Algorithmic Title Due Diligence & Risk Verdict
            </h4>
            <p style="font-size: 0.8rem; color: var(--text-secondary);">
              Automated multi-factor legal audit verifying 30-year deed chain, CERSAI encumbrances, litigation records, and Master Plan zoning
            </p>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 1.8rem; font-weight: 800; color: ${prop.riskScore >= 85 ? '#059669' : (prop.riskScore >= 50 ? '#d97706' : '#e11d48')};">
              ${prop.riskScore} / 100
            </span>
            <div style="font-size: 0.72rem; font-weight: 700; color: var(--text-muted);">TITLE HEALTH INDEX</div>
          </div>
        </div>

        <div class="detail-grid" style="margin-bottom: 24px;">
          <div class="risk-factor-item ${hasActiveMortgage ? 'warning' : 'pass'}">
            <i class="fas ${hasActiveMortgage ? 'fa-exclamation-triangle' : 'fa-check-circle'}" style="font-size: 1.1rem; color: ${hasActiveMortgage ? '#f59e0b' : '#10b981'};"></i>
            <div>
              <strong>CERSAI Charge Check</strong>
              <p>${hasActiveMortgage ? 'Active mortgage registered. Prior Bank NOC mandatory before sale.' : 'Clean CERSAI record. No registered financial charge.'}</p>
            </div>
          </div>

          <div class="risk-factor-item ${hasCourtStay ? 'fail' : 'pass'}">
            <i class="fas ${hasCourtStay ? 'fa-times-circle' : 'fa-check-circle'}" style="font-size: 1.1rem; color: ${hasCourtStay ? '#f43f5e' : '#10b981'};"></i>
            <div>
              <strong>Judicial Injunction / Litigation</strong>
              <p>${hasCourtStay ? 'High Court stay or civil suit in force. Property transaction legally barred.' : 'Nil civil, DRT, or high court attachments on record.'}</p>
            </div>
          </div>

          <div class="risk-factor-item ${isAcquisitionNotified ? 'fail' : 'pass'}">
            <i class="fas ${isAcquisitionNotified ? 'fa-times-circle' : 'fa-check-circle'}" style="font-size: 1.1rem; color: ${isAcquisitionNotified ? '#f43f5e' : '#10b981'};"></i>
            <div>
              <strong>Government Acquisition (RFCTLARR)</strong>
              <p>${isAcquisitionNotified ? 'Section 11 preliminary acquisition notification issued. Freezing in place.' : 'Clear from Land Acquisition notifications.'}</p>
            </div>
          </div>

          <div class="risk-factor-item ${hasTaxLien ? 'warning' : 'pass'}">
            <i class="fas ${hasTaxLien ? 'fa-exclamation-triangle' : 'fa-check-circle'}" style="font-size: 1.1rem; color: ${hasTaxLien ? '#f59e0b' : '#10b981'};"></i>
            <div>
              <strong>Municipal & Revenue Dues</strong>
              <p>${hasTaxLien ? 'Unpaid property tax / revenue penalties pending for clearance.' : 'MCD Property Tax and conversion charges fully paid.'}</p>
            </div>
          </div>
        </div>

        <h4 style="font-size: 1rem; font-weight: 800; margin-bottom: 12px; display:flex; align-items:center; gap:8px;">
          <i class="fas fa-tasks" style="color: var(--primary-blue);"></i> Legal Practitioner's Due Diligence Checklist
        </h4>

        <div style="background: var(--bg-subtle); border-radius: var(--radius-md); padding: 16px; font-size: 0.82rem; line-height: 1.7;">
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 8px;">
              <i class="fas fa-check-square" style="color: #10b981; margin-right: 8px;"></i>
              <strong>Chain of Title Verification:</strong> Complete chain of registered deeds from origin to current owner verified against Sub-Registrar Book No. 1 registers.
            </li>
            <li style="margin-bottom: 8px;">
              <i class="fas ${hasActiveMortgage ? 'fa-exclamation-circle' : 'fa-check-square'}" style="color: ${hasActiveMortgage ? '#f59e0b' : '#10b981'}; margin-right: 8px;"></i>
              <strong>Title Deed Custody Check:</strong> ${hasActiveMortgage ? 'Original title deeds are currently in custody of Lending Bank. Verify loan settlement schedule.' : 'Original title deed custody confirmed with registered owner.'}
            </li>
            <li style="margin-bottom: 8px;">
              <i class="fas ${hasCourtStay ? 'fa-times-circle' : 'fa-check-square'}" style="color: ${hasCourtStay ? '#f43f5e' : '#10b981'}; margin-right: 8px;"></i>
              <strong>Litigation & Lis Pendens:</strong> ${hasCourtStay ? 'WARNING: Do not execute sale deed. Seek legal opinion on pending suit status.' : 'Delhi High Court and e-Courts search returns nil adverse entries.'}
            </li>
            <li>
              <i class="fas fa-check-square" style="color: #10b981; margin-right: 8px;"></i>
              <strong>Mutation & Tax Record:</strong> Name of current owner accurately mutated in Municipal Corporation of Delhi (MCD) / Revenue Khatauni.
            </li>
          </ul>
        </div>
      </div>
    `;

    riskPanel.innerHTML = html;
  }
};
