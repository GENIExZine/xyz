/**
 * Bhagwati Caterers - Interactive Royal Menu Explorer
 * Real-time search, category filtering, Jain/Pure-Veg toggles, and custom menu builder.
 */
(function() {
  'use strict';

  let currentCategory = 'all';
  let isJainOnly = false;
  let isSignatureOnly = false;
  let searchQuery = '';

  const MenuExplorer = {
    init: function() {
      const container = document.getElementById('menuItemsGrid');
      if (!container || !window.MENU_DATA) return;

      this.renderCategoryTabs();
      this.bindFilterControls();
      this.renderMenu();
    },

    renderCategoryTabs: function() {
      const tabsContainer = document.getElementById('menuCategoryTabs');
      if (!tabsContainer || !window.MENU_DATA.categories) return;

      tabsContainer.innerHTML = window.MENU_DATA.categories.map((cat, i) => `
        <button type="button" class="tab-btn ${i === 0 ? 'active' : ''}" data-cat="${cat.id}" role="tab" aria-selected="${i === 0}">
          ${cat.name}
        </button>
      `).join('');

      tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          tabsContainer.querySelectorAll('.tab-btn').forEach(b => {
            b.classList.remove('active');
            b.setAttribute('aria-selected', 'false');
          });
          btn.classList.add('active');
          btn.setAttribute('aria-selected', 'true');
          currentCategory = btn.getAttribute('data-cat');
          this.renderMenu();
        });
      });
    },

    bindFilterControls: function() {
      const searchInput = document.getElementById('menuSearchInput');
      const jainToggle = document.getElementById('jainFilterToggle');
      const signatureToggle = document.getElementById('signatureFilterToggle');

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          searchQuery = e.target.value.toLowerCase().trim();
          this.renderMenu();
        });
      }

      if (jainToggle) {
        jainToggle.addEventListener('click', () => {
          isJainOnly = !isJainOnly;
          jainToggle.classList.toggle('active', isJainOnly);
          jainToggle.setAttribute('aria-pressed', isJainOnly.toString());
          this.renderMenu();
        });
      }

      if (signatureToggle) {
        signatureToggle.addEventListener('click', () => {
          isSignatureOnly = !isSignatureOnly;
          signatureToggle.classList.toggle('active', isSignatureOnly);
          signatureToggle.setAttribute('aria-pressed', isSignatureOnly.toString());
          this.renderMenu();
        });
      }
    },

    getFilteredItems: function() {
      return window.MENU_DATA.items.filter(item => {
        // Category check
        if (currentCategory !== 'all' && item.category !== currentCategory) {
          return false;
        }
        // Jain filter check
        if (isJainOnly && !item.isJainAvailable) {
          return false;
        }
        // Signature filter check
        if (isSignatureOnly && !item.isSignature) {
          return false;
        }
        // Search query check
        if (searchQuery) {
          const matchName = item.name.toLowerCase().includes(searchQuery);
          const matchDesc = item.description.toLowerCase().includes(searchQuery);
          const matchTags = item.tags.some(t => t.toLowerCase().includes(searchQuery));
          if (!matchName && !matchDesc && !matchTags) {
            return false;
          }
        }
        return true;
      });
    },

    renderMenu: function() {
      const container = document.getElementById('menuItemsGrid');
      const countLabel = document.getElementById('menuResultsCount');
      if (!container) return;

      const items = this.getFilteredItems();

      if (countLabel) {
        countLabel.textContent = `Showing ${items.length} delicacy${items.length === 1 ? '' : 's'}`;
      }

      if (items.length === 0) {
        container.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px; background: var(--ivory-surface); border-radius: var(--radius-md); border: 1px dashed var(--gold-border);">
            <h4 style="color: var(--royal-maroon); margin-bottom: 8px;">No matching culinary items found</h4>
            <p style="font-size: 0.95rem; margin-bottom: 20px;">Try adjusting your search or clearing the active filters.</p>
            <button type="button" class="btn btn-gold btn-sm" id="resetMenuFiltersBtn">Reset All Filters</button>
          </div>
        `;
        const resetBtn = document.getElementById('resetMenuFiltersBtn');
        if (resetBtn) {
          resetBtn.addEventListener('click', () => {
            currentCategory = 'all';
            isJainOnly = false;
            isSignatureOnly = false;
            searchQuery = '';
            const searchInput = document.getElementById('menuSearchInput');
            if (searchInput) searchInput.value = '';
            const jainToggle = document.getElementById('jainFilterToggle');
            if (jainToggle) jainToggle.classList.remove('active');
            const signatureToggle = document.getElementById('signatureFilterToggle');
            if (signatureToggle) signatureToggle.classList.remove('active');
            const tabs = document.querySelectorAll('#menuCategoryTabs .tab-btn');
            if (tabs.length > 0) {
              tabs.forEach(t => t.classList.remove('active'));
              tabs[0].classList.add('active');
            }
            this.renderMenu();
          });
        }
        return;
      }

      container.innerHTML = items.map(item => `
        <article class="menu-dish-card fade-in-up visible" id="dish-${item.id}">
          <div class="menu-dish-img">
            <img src="assets/images/${item.image}" alt="${item.name}" loading="lazy" width="380" height="200" />
          </div>
          <div class="menu-dish-body">
            <div class="menu-dish-header">
              <h3 class="menu-dish-title">${item.name}</h3>
              <span class="veg-symbol" title="100% Pure Vegetarian" aria-label="Pure Vegetarian"></span>
            </div>
            <p class="menu-dish-desc">${item.description}</p>
            <div class="menu-dish-tags">
              ${item.isSignature ? '<span class="dish-tag signature">Royal Signature</span>' : ''}
              ${item.isJainAvailable ? '<span class="dish-tag jain">Jain Option Available</span>' : ''}
              ${item.tags.map(t => `<span class="dish-tag">${t}</span>`).join('')}
            </div>
          </div>
        </article>
      `).join('');
    }
  };

  window.MenuExplorer = MenuExplorer;
  document.addEventListener('DOMContentLoaded', () => MenuExplorer.init());
})();
