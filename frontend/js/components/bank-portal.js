/**
 * Delhi Bhu-Praman - Bank & Financial Institution Mortgage Management Portal
 * Allows Commercial Banks & NBFCs to lodge fresh CERSAI charges and issue loan satisfaction NOCs
 */

const BankPortal = {
  init() {
    const lodgeForm = document.getElementById('bank-lodge-mortgage-form');
    if (lodgeForm) {
      lodgeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.submitMortgageCharge();
      });
    }
  },

  populatePropertyOptions() {
    const select = document.getElementById('bank-property-select');
    if (!select) return;

    select.innerHTML = DELHI_PROPERTIES.map(p => `
      <option value="${p.id}">${p.title} (${p.upic}) - [${p.statusBadge}]</option>
    `).join('');
  },

  submitMortgageCharge() {
    const propId = document.getElementById('bank-property-select').value;
    const bankName = document.getElementById('bank-lender-name').value;
    const loanAmount = document.getElementById('bank-loan-amount').value;
    const loanAcc = document.getElementById('bank-loan-acc').value;
    const chargeType = document.getElementById('bank-charge-type').value;

    if (!propId || !loanAmount || !loanAcc) {
      App.showToast("Please fill in all mandatory loan details", "warning");
      return;
    }

    const prop = DELHI_PROPERTIES.find(p => p.id === propId);
    if (!prop) return;

    const cersaiRef = `CERSAI-DL-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;

    const newMortgage = {
      id: `ENC-NEW-${Date.now()}`,
      type: chargeType,
      institutionName: bankName,
      branch: "New Delhi Corporate / Retail Asset Branch",
      loanAccountNo: loanAcc,
      cersaiSecurityInterestId: cersaiRef,
      chargeType: "First Exclusive Charge",
      sanctionAmountINR: parseInt(loanAmount.replace(/[^0-9]/g, '')) || 5000000,
      sanctionAmountFormatted: `₹ ${loanAmount}`,
      sanctionDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: "ACTIVE",
      outstandingBalanceEstimatedINR: parseInt(loanAmount.replace(/[^0-9]/g, '')) || 5000000,
      outstandingBalanceFormatted: `₹ ${loanAmount}`,
      remarks: `Equitable Mortgage charge lodged by ${bankName} via Delhi Bhu-Praman Bank Gateway.`
    };

    if (!PROPERTY_ENCUMBRANCES[propId]) {
      PROPERTY_ENCUMBRANCES[propId] = {
        propertyId: propId,
        upic: prop.upic,
        titleStatus: "ACTIVE_ENCUMBRANCE",
        isEncumbered: true,
        activeEncumbranceCount: 1,
        historicalMortgageCount: 0,
        mortgages: [],
        courtAttachments: [],
        taxLiens: [],
        statutoryRestrictions: [],
        acquisitionStatus: { isAcquired: false, sectionNotified: null }
      };
    }

    // Add to mortgages
    PROPERTY_ENCUMBRANCES[propId].mortgages.unshift(newMortgage);
    PROPERTY_ENCUMBRANCES[propId].isEncumbered = true;
    PROPERTY_ENCUMBRANCES[propId].activeEncumbranceCount++;

    // Update Property Status
    prop.status = "MORTGAGED";
    prop.statusBadge = `Active Mortgage (${bankName})`;
    prop.riskScore = Math.min(prop.riskScore, 75);

    App.showToast(`Mortgage successfully lodged! CERSAI Ref: ${cersaiRef}`, "success");
    App.closeBankLienModal();

    // Re-render dossier if viewing this property
    if (DossierViewer.currentPropertyId === propId) {
      DossierViewer.renderPropertyDossier(propId);
    }
  }
};
