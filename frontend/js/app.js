/**
 * Delhi Bhu-Praman - Master Application Orchestrator & State Manager
 */

const App = {
  currentLanguage: 'EN',
  currentTheme: 'light',

  init() {
    console.log("Initializing Delhi Bhu-Praman Portal...");

    // Setup Theme Toggle
    this.setupThemeToggle();

    // Setup Navigation Tabs
    this.setupNavigation();

    // Initialize Subcomponents
    SearchEngine.init();
    DossierViewer.init();
    BankPortal.init();
    ApiSandbox.init();

    // Setup Modal Close Handlers
    this.setupModals();

    // Initialize Map on tab switch or idle
    setTimeout(() => {
      if (typeof MapViewer !== 'undefined') {
        MapViewer.init();
      }
    }, 500);

    this.showToast("Delhi Bhu-Praman Portal Online. All 11 Districts & CERSAI Synced.", "success");
  },

  setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-item-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.dataset.view;
        this.switchMainTab(targetView);
      });
    });
  },

  switchMainTab(viewId) {
    const navButtons = document.querySelectorAll('.nav-item-btn');
    navButtons.forEach(b => {
      if (b.dataset.view === viewId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    const views = document.querySelectorAll('.portal-tab-content');
    views.forEach(v => v.classList.remove('active'));

    const activeView = document.getElementById(viewId);
    if (activeView) {
      activeView.classList.add('active');
    }

    if (viewId === 'map-view') {
      setTimeout(() => {
        if (MapViewer && MapViewer.mapInstance) {
          MapViewer.mapInstance.invalidateSize();
        } else {
          MapViewer.init();
        }
      }, 150);
    }

    if (viewId === 'bank-view') {
      BankPortal.populatePropertyOptions();
    }
  },

  setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        toggleBtn.innerHTML = this.currentTheme === 'light' 
          ? '<i class="fas fa-moon"></i> Dark Mode' 
          : '<i class="fas fa-sun"></i> Light Mode';
      });
    }
  },

  setupModals() {
    const closeButtons = document.querySelectorAll('.modal-close-btn, .modal-cancel-btn');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(m => m.classList.remove('active'));
      });
    });

    // Close on clicking backdrop
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
        }
      });
    });
  },

  openCertificateModal() {
    const modal = document.getElementById('ec-certificate-modal');
    const modalBody = document.getElementById('ec-certificate-modal-body');
    if (modal && modalBody) {
      modalBody.innerHTML = ECGenerator.generateCertificateHTML(DossierViewer.currentPropertyId);
      modal.classList.add('active');
    }
  },

  closeCertificateModal() {
    const modal = document.getElementById('ec-certificate-modal');
    if (modal) {
      modal.classList.remove('active');
    }
  },

  openBankLienModal(propId) {
    this.switchMainTab('bank-view');
    const select = document.getElementById('bank-property-select');
    if (select && propId) {
      select.value = propId;
    }
  },

  closeBankLienModal() {
    // Navigate back to dossier
    this.switchMainTab('dossier-view');
  },

  toggleLanguage() {
    const langBtn = document.getElementById('lang-toggle-btn');
    this.currentLanguage = this.currentLanguage === 'EN' ? 'HI' : 'EN';
    
    if (langBtn) {
      langBtn.textContent = this.currentLanguage === 'EN' ? 'हिन्दी (HI)' : 'English (EN)';
    }

    this.showToast(this.currentLanguage === 'EN' ? 'Language switched to English' : 'भाषा हिन्दी में बदली गई', 'success');
  },

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = 'info-circle';
    if (type === 'success') icon = 'check-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    if (type === 'danger') icon = 'exclamation-circle';

    toast.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <div style="flex:1;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = '0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
