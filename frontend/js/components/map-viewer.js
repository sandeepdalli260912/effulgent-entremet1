/**
 * Delhi Bhu-Praman - GIS Cadastral Map & Spatial Parcel Visualizer
 * Uses Leaflet with custom styled vector pins and Delhi administrative layers
 */

const MapViewer = {
  mapInstance: null,
  markersLayerGroup: null,
  districtLayerGroup: null,
  isMapInitialized: false,

  init() {
    if (this.isMapInitialized) return;

    const mapElement = document.getElementById('gis-map-canvas');
    if (!mapElement) return;

    // Check if Leaflet L is loaded
    if (typeof L === 'undefined') {
      console.warn("Leaflet library not loaded yet.");
      return;
    }

    // Default center on Delhi
    this.mapInstance = L.map('gis-map-canvas', {
      center: [28.6139, 77.2090],
      zoom: 11,
      zoomControl: true
    });

    // Add CartoDB Positron modern base tile layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO | Delhi GIS Land Registry',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.mapInstance);

    this.markersLayerGroup = L.layerGroup().addTo(this.mapInstance);
    this.districtLayerGroup = L.layerGroup().addTo(this.mapInstance);

    // Render Delhi District Boundaries & Pins
    this.renderDistrictPolygons();
    this.renderPropertyMarkers();
    this.setupMapControls();

    this.isMapInitialized = true;
  },

  renderDistrictPolygons() {
    if (!this.mapInstance || !DELHI_DISTRICTS_GEO) return;

    DELHI_DISTRICTS_GEO.forEach(dist => {
      // Circular district boundary representation
      const circle = L.circle(dist.center, {
        color: dist.color,
        fillColor: dist.color,
        fillOpacity: 0.08,
        weight: 1.5,
        radius: 4500
      }).bindTooltip(`<b>${dist.name} District</b><br>Sub-Divisions: ${dist.subDivisions.join(', ')}`, {
        direction: 'center',
        className: 'custom-district-tooltip'
      });

      this.districtLayerGroup.addLayer(circle);
    });
  },

  renderPropertyMarkers(filterType = 'ALL') {
    if (!this.mapInstance || !this.markersLayerGroup) return;

    this.markersLayerGroup.clearLayers();

    DELHI_PROPERTIES.forEach(prop => {
      if (filterType !== 'ALL') {
        if (filterType === 'RURAL' && !prop.propertyType.includes('RURAL')) return;
        if (filterType === 'URBAN' && !prop.propertyType.includes('URBAN') && !prop.propertyType.includes('COMMERCIAL')) return;
        if (filterType === 'MORTGAGED' && prop.status !== 'MORTGAGED') return;
        if (filterType === 'CLEAR' && prop.status !== 'CLEAR_TITLE') return;
      }

      let markerColor = '#10b981'; // green for clear
      if (prop.status === 'MORTGAGED') markerColor = '#f59e0b';
      if (prop.status === 'DISPUTED_COURT_STAY' || prop.status === 'GOVT_ACQUISITION_NOTIFIED') markerColor = '#f43f5e';

      // Create Custom SVG Icon Pin
      const customIcon = L.divIcon({
        className: 'custom-map-pin',
        html: `
          <div style="
            background: ${markerColor};
            width: 28px;
            height: 28px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
            border: 2px solid #ffffff;
            cursor: pointer;
          ">
            <div style="transform: rotate(45deg); color: #ffffff; font-size: 11px; font-weight: bold;">
              ${prop.status === 'CLEAR_TITLE' ? '✓' : (prop.status === 'MORTGAGED' ? '₹' : '!')}
            </div>
          </div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28]
      });

      const marker = L.marker([prop.geo.lat, prop.geo.lng], { icon: customIcon });

      const popupContent = `
        <div class="popup-content-card">
          <div class="popup-title">${prop.title}</div>
          <div class="popup-sub"><i class="fas fa-map-marker-alt"></i> ${prop.address.district} | UPIC: ${prop.upic}</div>
          <div style="margin: 6px 0; font-size: 0.75rem;">
            <strong>Status:</strong> <span style="color: ${markerColor}; font-weight: bold;">${prop.statusBadge}</span>
          </div>
          <div style="margin-bottom: 8px; font-size: 0.75rem;">
            <strong>Area:</strong> ${prop.geo.landAreaSqM} m² (${prop.geo.landAreaSqYd} sq.yds)
          </div>
          <button class="popup-inspect-btn" onclick="DossierViewer.renderPropertyDossier('${prop.id}'); App.switchMainTab('dossier-view');">
            Inspect Full 360° Dossier
          </button>
        </div>
      `;

      marker.bindPopup(popupContent, { className: 'custom-delhi-popup' });
      this.markersLayerGroup.addLayer(marker);
    });
  },

  setupMapControls() {
    const districtSelect = document.getElementById('map-district-select');
    if (districtSelect) {
      districtSelect.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'ALL') {
          this.mapInstance.setView([28.6139, 77.2090], 11);
        } else {
          const dist = DELHI_DISTRICTS_GEO.find(d => d.name === val);
          if (dist) {
            this.mapInstance.setView(dist.center, 13);
          }
        }
      });
    }

    const layerCheckboxes = document.querySelectorAll('.map-layer-filter');
    layerCheckboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const activeFilter = document.querySelector('.map-layer-filter:checked')?.value || 'ALL';
        this.renderPropertyMarkers(activeFilter);
      });
    });
  },

  focusOnProperty(propId) {
    const prop = DELHI_PROPERTIES.find(p => p.id === propId);
    if (!prop) return;

    setTimeout(() => {
      if (this.mapInstance) {
        this.mapInstance.invalidateSize();
        this.mapInstance.setView([prop.geo.lat, prop.geo.lng], 15);
      }
    }, 200);
  }
};
