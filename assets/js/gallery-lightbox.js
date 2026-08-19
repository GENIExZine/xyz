/**
 * Bhagwati Caterers - Accessible Filterable Gallery & Fullscreen Lightbox
 * Features: Touch gestures, keyboard nav, category filtering, and WCAG focus management.
 */
(function() {
  'use strict';

  let currentIndex = 0;
  let filteredItems = [];
  let previousFocusedElement = null;

  const GalleryManager = {
    init: function() {
      const container = document.getElementById('galleryGrid');
      if (!container || !window.GALLERY_DATA) return;

      filteredItems = [...window.GALLERY_DATA.items];
      this.renderFilterTabs();
      this.renderGalleryGrid(filteredItems);
      this.bindLightboxEvents();
    },

    renderFilterTabs: function() {
      const tabsContainer = document.getElementById('galleryFilterTabs');
      if (!tabsContainer || !window.GALLERY_DATA.categories) return;

      tabsContainer.innerHTML = window.GALLERY_DATA.categories.map((cat, i) => `
        <button type="button" class="tab-btn ${i === 0 ? 'active' : ''}" data-category="${cat.id}" role="tab" aria-selected="${i === 0}">
          ${cat.name}
        </button>
      `).join('');

      tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          tabsContainer.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');

          const category = btn.getAttribute('data-category');
          this.filterGallery(category);
        });
      });
    },

    filterGallery: function(category) {
      if (category === 'all') {
        filteredItems = [...window.GALLERY_DATA.items];
      } else {
        filteredItems = window.GALLERY_DATA.items.filter(item => item.category === category);
      }
      this.renderGalleryGrid(filteredItems);
    },

    renderGalleryGrid: function(items) {
      const container = document.getElementById('galleryGrid');
      if (!container) return;

      if (items.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
            <p style="font-size: 1.1rem; color: var(--royal-maroon);">No showcase photos found in this category.</p>
          </div>
        `;
        return;
      }

      container.innerHTML = items.map((item, idx) => `
        <div class="gallery-card fade-in-up visible" data-index="${idx}" tabindex="0" role="button" aria-label="View photo: ${item.title}">
          <img src="${item.thumb || item.src}" alt="${item.alt}" loading="lazy" width="400" height="280" />
          <div class="gallery-card-overlay">
            <div class="gallery-zoom-icon" aria-hidden="true">
              <svg class="icon-inline" viewBox="0 0 24 24"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            </div>
            <h4 class="gallery-card-title">${item.title}</h4>
            <p class="gallery-card-caption">${item.caption}</p>
          </div>
        </div>
      `).join('');

      // Bind click on cards
      container.querySelectorAll('.gallery-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-index'), 10);
          this.openLightbox(idx, card);
        });

        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const idx = parseInt(card.getAttribute('data-index'), 10);
            this.openLightbox(idx, card);
          }
        });
      });
    },

    openLightbox: function(index, triggerElement) {
      previousFocusedElement = triggerElement || document.activeElement;
      currentIndex = index;
      const modal = document.getElementById('galleryLightbox');
      if (!modal) return;

      this.updateLightboxContent();
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      const closeBtn = document.getElementById('lightboxCloseBtn');
      if (closeBtn) closeBtn.focus();

      if (window.AnalyticsTracker) {
        window.AnalyticsTracker.trackEvent('view_gallery_item', { title: filteredItems[currentIndex].title });
      }
    },

    closeLightbox: function() {
      const modal = document.getElementById('galleryLightbox');
      if (!modal) return;

      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      if (previousFocusedElement && typeof previousFocusedElement.focus === 'function') {
        previousFocusedElement.focus();
      }
    },

    navigate: function(direction) {
      if (filteredItems.length === 0) return;
      currentIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
      this.updateLightboxContent();
    },

    updateLightboxContent: function() {
      const item = filteredItems[currentIndex];
      if (!item) return;

      const img = document.getElementById('lightboxImage');
      const title = document.getElementById('lightboxTitle');
      const caption = document.getElementById('lightboxCaption');
      const counter = document.getElementById('lightboxCounter');

      if (img) {
        img.src = item.src;
        img.alt = item.alt;
      }
      if (title) title.textContent = item.title;
      if (caption) caption.textContent = item.caption;
      if (counter) counter.textContent = `${currentIndex + 1} / ${filteredItems.length}`;
    },

    bindLightboxEvents: function() {
      const modal = document.getElementById('galleryLightbox');
      if (!modal) return;

      const closeBtn = document.getElementById('lightboxCloseBtn');
      const prevBtn = document.getElementById('lightboxPrevBtn');
      const nextBtn = document.getElementById('lightboxNextBtn');

      if (closeBtn) closeBtn.addEventListener('click', () => this.closeLightbox());
      if (prevBtn) prevBtn.addEventListener('click', () => this.navigate(-1));
      if (nextBtn) nextBtn.addEventListener('click', () => this.navigate(1));

      // Close on backdrop click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeLightbox();
      });

      // Keyboard Controls
      document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') this.closeLightbox();
        if (e.key === 'ArrowLeft') this.navigate(-1);
        if (e.key === 'ArrowRight') this.navigate(1);
      });

      // Touch Swipe Support for Mobile
      let touchStartX = 0;
      modal.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      modal.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diffX = touchStartX - touchEndX;
        if (Math.abs(diffX) > 50) {
          if (diffX > 0) {
            this.navigate(1); // swipe left -> next
          } else {
            this.navigate(-1); // swipe right -> prev
          }
        }
      }, { passive: true });
    }
  };

  window.GalleryManager = GalleryManager;
  document.addEventListener('DOMContentLoaded', () => GalleryManager.init());
})();
