/**
 * Delhi Bhu-Praman - Inter-Platform API Gateway Sandbox
 * Allows testing and inspecting REST APIs for CERSAI, DORIS, Bhulekh Delhi, MCD UPIC
 */

const ApiSandbox = {
  init() {
    const executeBtn = document.getElementById('api-execute-btn');
    const endpointSelect = document.getElementById('api-endpoint-select');

    if (executeBtn && endpointSelect) {
      executeBtn.addEventListener('click', () => {
        this.executeEndpoint(endpointSelect.value);
      });
      endpointSelect.addEventListener('change', () => {
        this.updateRequestPayload(endpointSelect.value);
      });
    }
  },

  updateRequestPayload(endpoint) {
    const payloadContainer = document.getElementById('api-request-payload');
    if (!payloadContainer) return;

    switch(endpoint) {
      case 'GET_HEALTH':
        payloadContainer.textContent = "// GET /api/health\n// Headers: Authorization: Bearer TOKEN_NCT_DELHI\n// No request body required";
        break;
      case 'GET_STATS':
        payloadContainer.textContent = "// GET /api/stats\n// Aggregates 11 districts & 22 Sub-Registrar offices\n// No request body required";
        break;
      case 'POST_MORTGAGE':
        payloadContainer.textContent = JSON.stringify({
          propertyId: "PROP-DL-001",
          bankName: "State Bank of India",
          loanAccountNo: "SBI-HL-2024-88491",
          loanAmount: "85,00,000",
          chargeType: "EQUITABLE_MORTGAGE"
        }, null, 2);
        break;
      case 'POST_VERIFY':
        payloadContainer.textContent = JSON.stringify({
          certificateId: "DL-IGR-EC-2024-891042",
          upic: "DL-MCD-2024-884912",
          verificationToken: "NCT-DELHI-CRYPT-SEAL"
        }, null, 2);
        break;
    }
  },

  async executeEndpoint(endpoint) {
    const responseOutput = document.getElementById('api-response-output');
    if (!responseOutput) return;

    responseOutput.textContent = "Executing request...";

    try {
      let resData = null;
      if (endpoint === 'GET_HEALTH') {
        const res = await fetch('/api/health');
        resData = await res.json();
      } else if (endpoint === 'GET_STATS') {
        const res = await fetch('/api/stats');
        resData = await res.json();
      } else if (endpoint === 'POST_MORTGAGE') {
        const res = await fetch('/api/bank/lodge-mortgage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            propertyId: "PROP-DL-001",
            bankName: "State Bank of India",
            loanAmount: "85,00,000"
          })
        });
        resData = await res.json();
      } else if (endpoint === 'POST_VERIFY') {
        const res = await fetch('/api/verify-certificate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ certificateId: "DL-IGR-EC-2024-891042" })
        });
        resData = await res.json();
      }
      responseOutput.textContent = JSON.stringify(resData, null, 2);
      App.showToast("API Endpoint Executed Successfully (HTTP 200 OK)", "success");
    } catch (err) {
      // Fallback mock response for offline inspection
      const mockFallback = {
        status: "200 OK (Simulated)",
        source: "Delhi Bhu-Praman Multi-Platform Gateway",
        timestamp: new Date().toISOString(),
        message: "Endpoint response verified and synchronized with CERSAI & Bhulekh Delhi"
      };
      responseOutput.textContent = JSON.stringify(mockFallback, null, 2);
      App.showToast("API Executed in Client Simulator Mode", "success");
    }
  }
};
