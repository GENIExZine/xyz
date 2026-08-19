/**
 * Bhagwati Caterers - Main Application JavaScript
 * Orchestrates navigation, scroll interactions, mobile drawer, dynamic contacts, and PAX input handlers.
 */
(function() {
  'use strict';

  const App = {
    init: function() {
      this.bindNavbarScroll();
      this.bindMobileDrawer();
      this.bindScrollReveals();
      this.updateDynamicContacts();
      this.bindContactPageForm();
    },

    bindNavbarScroll: function() {
      const header = document.querySelector('.royal-header');
      if (!header) return;

      const handleScroll = () => {
        if (window.scrollY > 40) {
          header.classList.add('is-sticky');
        } else {
          header.classList.remove('is-sticky');
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    },

    bindMobileDrawer: function() {
      const toggleBtn = document.querySelector('.mobile-nav-toggle');
      const drawer = document.querySelector('.mobile-nav-drawer');
      const overlay = document.querySelector('.mobile-drawer-overlay');
      const closeBtn = document.querySelector('.drawer-close-btn');

      if (!drawer) return;

      const openDrawer = () => {
        drawer.classList.add('open');
        if (overlay) overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      };

      const closeDrawer = () => {
        drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
      };

      if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
      if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
      if (overlay) overlay.addEventListener('click', closeDrawer);

      drawer.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', closeDrawer);
      });
    },

    bindScrollReveals: function() {
      const elements = document.querySelectorAll('.fade-in-up');
      if (elements.length === 0) return;

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      });

      elements.forEach(el => observer.observe(el));
    },

    updateDynamicContacts: function() {
      const cfg = window.SITE_CONFIG;
      if (!cfg) return;

      // Update phone links
      document.querySelectorAll('[data-phone-primary]').forEach(el => {
        el.textContent = cfg.contacts.phonePrimary;
        if (el.tagName === 'A') el.href = `tel:${cfg.contacts.phonePrimaryClean}`;
      });

      document.querySelectorAll('[data-phone-secondary]').forEach(el => {
        el.textContent = cfg.contacts.phoneSecondary;
        if (el.tagName === 'A') el.href = `tel:${cfg.contacts.phoneSecondaryClean}`;
      });

      document.querySelectorAll('[data-email-primary]').forEach(el => {
        el.textContent = cfg.contacts.emailPrimary;
        if (el.tagName === 'A') el.href = `mailto:${cfg.contacts.emailPrimary}`;
      });

      document.querySelectorAll('[data-whatsapp-link]').forEach(el => {
        const text = encodeURIComponent("Hello Bhagwati Caterers, I would like to enquire about catering services for my upcoming celebration.");
        el.href = `https://wa.me/${cfg.contacts.whatsappClean}?text=${text}`;
      });

      // Update Year
      document.querySelectorAll('[data-current-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
      });
    },

    bindContactPageForm: function() {
      const contactForm = document.getElementById('contactPageForm');
      if (!contactForm) return;

      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const phone = document.getElementById('contactPhone').value.trim();
        const email = document.getElementById('contactEmail')?.value.trim() || '';
        const occasion = document.getElementById('contactOccasion').value;
        const eventDate = document.getElementById('contactDate').value;
        const pax = document.getElementById('contactPax')?.value.trim() || '250';
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !phone) {
          alert('Please enter your name and contact phone number.');
          return;
        }

        const primaryPhone = window.SITE_CONFIG?.contacts?.phonePrimaryClean || '919829351074';
        const waMsg = 
`👑 *INQUIRY VIA BHAGWATICATERERS.COM* 👑
---------------------------------------
👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email || 'Not provided'}
🎉 *Occasion:* ${occasion}
📅 *Date of Event:* ${eventDate || 'To be decided'}
👥 *Expected PAX / Guests:* ${pax} PAX
💬 *Message:* ${message || 'Looking for menu & pricing details'}
---------------------------------------`;

        const waUrl = `https://wa.me/${primaryPhone}?text=${encodeURIComponent(waMsg)}`;

        // Save local backup
        try {
          const inq = JSON.parse(localStorage.getItem('bhagwati_inquiries') || '[]');
          inq.push({
            fullName: name,
            phone: phone,
            email: email,
            eventType: occasion,
            eventDate: eventDate,
            city: 'Jodhpur / Rajasthan',
            guestCount: `${pax} PAX`,
            mealType: 'Full Catering',
            dietary: 'Pure Veg',
            notes: message,
            timestamp: new Date().toISOString()
          });
          localStorage.setItem('bhagwati_inquiries', JSON.stringify(inq));
        } catch (err) {
          console.warn(err);
        }

        // Track in Analytics
        if (window.AnalyticsTracker) {
          window.AnalyticsTracker.trackEvent('generate_lead', { occasion, phone, pax });
        }

        // Feedback UI
        const statusBox = document.getElementById('contactFormStatus');
        if (statusBox) {
          statusBox.innerHTML = `
            <div style="background: rgba(37, 211, 102, 0.15); border: 1px solid #25D366; padding: 18px; border-radius: 8px; margin-top: 20px; text-align: center;">
              <h4 style="color: #128C7E; margin-bottom: 6px;">Thank You, ${name}!</h4>
              <p style="font-size: 0.9rem; color: #333; margin-bottom: 14px;">Your inquiry for <strong>${pax} PAX (${occasion})</strong> has been received. For instant priority response, confirm via WhatsApp below:</p>
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm" style="display: inline-flex;">
                Chat on WhatsApp Now (${pax} PAX)
              </a>
            </div>
          `;
          contactForm.reset();
        } else {
          window.open(waUrl, '_blank');
          alert(`Thank you, ${name}! We will get in touch with you right away.`);
          contactForm.reset();
        }
      });
    }
  };

  window.App = App;
  document.addEventListener('DOMContentLoaded', () => App.init());
})();
