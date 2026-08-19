/**
 * Bhagwati Caterers - Lightweight Owner Admin CMS & Configurator
 * Enables the catering owner/manager to update menus, contacts, and gallery items without writing code.
 */
(function() {
  'use strict';

  const AdminCMS = {
    init: function() {
      const container = document.getElementById('adminApp');
      if (!container) return;

      this.renderTabs();
      this.populateContactsForm();
      this.renderMenuEditor();
      this.renderGalleryEditor();
      this.renderInquiriesLog();
    },

    renderTabs: function() {
      const tabBtns = document.querySelectorAll('.admin-nav-item');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const target = btn.getAttribute('data-target');
          document.querySelectorAll('.admin-section').forEach(sec => {
            sec.style.display = sec.id === target ? 'block' : 'none';
          });
        });
      });
    },

    populateContactsForm: function() {
      const cfg = window.SITE_CONFIG || {};
      const contacts = cfg.contacts || {};

      const phone1 = document.getElementById('adminPhone1');
      const phone2 = document.getElementById('adminPhone2');
      const email1 = document.getElementById('adminEmail1');
      const address = document.getElementById('adminAddress');

      if (phone1) phone1.value = contacts.phonePrimary || '';
      if (phone2) phone2.value = contacts.phoneSecondary || '';
      if (email1) email1.value = contacts.emailPrimary || '';
      if (address) address.value = `${contacts.addressLine1}, ${contacts.addressLine2}`;
    },

    renderMenuEditor: function() {
      const listContainer = document.getElementById('adminMenuList');
      if (!listContainer || !window.MENU_DATA) return;

      listContainer.innerHTML = window.MENU_DATA.items.map((item, idx) => `
        <div class="admin-item-row" style="background: #FFF; border: 1px solid #E2D9CE; padding: 14px 18px; border-radius: 6px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <strong>${item.name}</strong> 
            <span style="font-size: 0.8rem; color: #777; margin-left: 8px;">(${item.category})</span>
            <p style="font-size: 0.85rem; color: #555; margin: 4px 0 0;">${item.description}</p>
          </div>
          <div style="display: flex; gap: 8px;">
            <button type="button" class="btn btn-sm btn-outline-gold" onclick="window.AdminCMS.editMenuItem(${idx})">Edit</button>
            <button type="button" class="btn btn-sm btn-maroon" onclick="window.AdminCMS.deleteMenuItem(${idx})">Delete</button>
          </div>
        </div>
      `).join('');
    },

    renderGalleryEditor: function() {
      const container = document.getElementById('adminGalleryList');
      if (!container || !window.GALLERY_DATA) return;

      container.innerHTML = window.GALLERY_DATA.items.map((item, idx) => `
        <div class="admin-item-row" style="background: #FFF; border: 1px solid #E2D9CE; padding: 12px; border-radius: 6px; margin-bottom: 10px; display: flex; align-items: center; gap: 16px;">
          <img src="${item.thumb || item.src}" style="width: 60px; height: 50px; object-fit: cover; border-radius: 4px;" alt="${item.alt}" />
          <div style="flex-grow: 1;">
            <strong>${item.title}</strong>
            <p style="font-size: 0.8rem; color: #666; margin: 2px 0 0;">${item.caption}</p>
          </div>
          <button type="button" class="btn btn-sm btn-maroon" onclick="window.AdminCMS.deleteGalleryItem(${idx})">Remove</button>
        </div>
      `).join('');
    },

    renderInquiriesLog: function() {
      const logContainer = document.getElementById('adminInquiriesLog');
      if (!logContainer) return;

      try {
        const inquiries = JSON.parse(localStorage.getItem('bhagwati_inquiries') || '[]');
        if (inquiries.length === 0) {
          logContainer.innerHTML = '<p style="color: #777; padding: 20px 0;">No inquiries stored locally yet.</p>';
          return;
        }

        logContainer.innerHTML = inquiries.reverse().map(inq => `
          <div style="background: #FFF; border: 1px solid #E2D9CE; padding: 16px; border-radius: 6px; margin-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
              <strong style="color: var(--royal-maroon); font-size: 1.1rem;">${inq.fullName} (${inq.phone})</strong>
              <span style="font-size: 0.8rem; color: #888;">${new Date(inq.timestamp).toLocaleString()}</span>
            </div>
            <p style="font-size: 0.9rem; margin: 4px 0;">
              <strong>Event:</strong> ${inq.eventType} on ${inq.eventDate} in ${inq.city} (${inq.guestCount} guests)
            </p>
            <p style="font-size: 0.85rem; color: #555; margin: 4px 0;">
              <strong>Diet/Stalls:</strong> ${inq.dietary} | ${inq.specialStalls ? inq.specialStalls.join(', ') : 'Standard'}
            </p>
            ${inq.notes ? `<p style="font-size: 0.85rem; color: #444; background: #F9F7F4; padding: 8px; border-radius: 4px; margin-top: 6px;"><strong>Notes:</strong> ${inq.notes}</p>` : ''}
          </div>
        `).join('');
      } catch (e) {
        logContainer.innerHTML = '<p style="color: red;">Error reading local inquiries.</p>';
      }
    },

    deleteMenuItem: function(index) {
      if (confirm('Are you sure you want to delete this menu item?')) {
        window.MENU_DATA.items.splice(index, 1);
        this.renderMenuEditor();
      }
    },

    deleteGalleryItem: function(index) {
      if (confirm('Are you sure you want to delete this gallery item?')) {
        window.GALLERY_DATA.items.splice(index, 1);
        this.renderGalleryEditor();
      }
    },

    exportData: function() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.MENU_DATA, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "updated_menu_data.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      alert('Updated menu configuration exported successfully!');
    }
  };

  window.AdminCMS = AdminCMS;
  document.addEventListener('DOMContentLoaded', () => AdminCMS.init());
})();
