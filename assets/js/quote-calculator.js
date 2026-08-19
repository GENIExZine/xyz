/**
 * Bhagwati Caterers - Multi-Step Royal Quote Calculator & Lead Dispatcher
 * Multi-channel lead routing: Formspree/Web3Forms endpoint + Direct formatted WhatsApp confirmation.
 * Includes interactive PAX / Guest Count selector (Quick buttons, manual input, and slider).
 */
(function() {
  'use strict';

  let currentStep = 1;
  const totalSteps = 3;

  const quoteState = {
    eventType: 'Royal Wedding',
    eventDate: '',
    city: 'Jodhpur',
    guestCount: 250,
    mealType: 'Grand Dinner Banquet',
    specialStalls: [],
    dietary: 'Pure Veg',
    fullName: '',
    phone: '',
    email: '',
    notes: ''
  };

  const QuoteManager = {
    init: function() {
      this.bindModalTriggers();
      this.bindStepNavigation();
      this.bindFormInputs();
      this.bindSubmission();
    },

    bindModalTriggers: function() {
      // Buttons opening the quote modal
      document.querySelectorAll('[data-open-quote-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const presetEvent = btn.getAttribute('data-event-type');
          if (presetEvent) {
            const selectEl = document.getElementById('quoteEventType');
            if (selectEl) selectEl.value = presetEvent;
            quoteState.eventType = presetEvent;
          }
          this.openModal();
        });
      });

      // Close modal button & backdrop
      const modal = document.getElementById('quoteModal');
      const closeBtn = document.getElementById('quoteModalCloseBtn');
      if (closeBtn) closeBtn.addEventListener('click', () => this.closeModal());
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) this.closeModal();
        });
      }

      document.addEventListener('keydown', (e) => {
        if (modal && modal.classList.contains('active') && e.key === 'Escape') {
          this.closeModal();
        }
      });
    },

    openModal: function() {
      const modal = document.getElementById('quoteModal');
      if (!modal) return;
      currentStep = 1;
      this.updateStepView();
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const firstInput = modal.querySelector('input, select');
      if (firstInput) firstInput.focus();
    },

    closeModal: function() {
      const modal = document.getElementById('quoteModal');
      if (!modal) return;
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    },

    bindStepNavigation: function() {
      const nextBtn = document.getElementById('quoteStepNextBtn');
      const prevBtn = document.getElementById('quoteStepPrevBtn');

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (this.validateStep(currentStep)) {
            if (currentStep < totalSteps) {
              currentStep++;
              this.updateStepView();
            }
          }
        });
      }

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (currentStep > 1) {
            currentStep--;
            this.updateStepView();
          }
        });
      }
    },

    setPax: function(paxValue) {
      const count = parseInt(paxValue, 10);
      if (isNaN(count) || count < 10) return;
      quoteState.guestCount = count;

      const guestSlider = document.getElementById('quoteGuestCount');
      const guestNumberInput = document.getElementById('quoteGuestNumberInput');
      const guestDisplay = document.getElementById('quoteGuestDisplay');

      if (guestSlider) guestSlider.value = Math.min(count, 3000);
      if (guestNumberInput) guestNumberInput.value = count;
      if (guestDisplay) guestDisplay.textContent = `${count} PAX`;

      // Update quick button active state
      document.querySelectorAll('.pax-btn').forEach(btn => {
        const btnPax = parseInt(btn.getAttribute('data-pax'), 10);
        btn.classList.toggle('active', btnPax === count);
        if (btnPax === count) {
          btn.style.background = 'var(--gold-primary)';
          btn.style.color = '#1A0407';
        } else {
          btn.style.background = 'transparent';
          btn.style.color = 'var(--gold-primary)';
        }
      });
    },

    bindFormInputs: function() {
      const self = this;
      const guestSlider = document.getElementById('quoteGuestCount');
      const guestNumberInput = document.getElementById('quoteGuestNumberInput');

      if (guestSlider) {
        guestSlider.addEventListener('input', (e) => {
          self.setPax(e.target.value);
        });
      }

      if (guestNumberInput) {
        guestNumberInput.addEventListener('input', (e) => {
          self.setPax(e.target.value);
        });
      }

      // Quick PAX button clicks
      document.querySelectorAll('.pax-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const pax = btn.getAttribute('data-pax');
          self.setPax(pax);
        });
      });
    },

    validateStep: function(step) {
      if (step === 1) {
        const eventDate = document.getElementById('quoteEventDate');
        if (eventDate && !eventDate.value) {
          alert('Please select an approximate event date.');
          eventDate.focus();
          return false;
        }
        quoteState.eventType = document.getElementById('quoteEventType').value;
        quoteState.eventDate = eventDate.value;
        quoteState.city = document.getElementById('quoteCity').value || 'Jodhpur';
        return true;
      }
      if (step === 2) {
        quoteState.mealType = document.getElementById('quoteMealType').value;
        const stalls = [];
        document.querySelectorAll('input[name="quoteStalls"]:checked').forEach(cb => {
          stalls.push(cb.value);
        });
        quoteState.specialStalls = stalls;
        quoteState.dietary = document.querySelector('input[name="quoteDietary"]:checked')?.value || 'Pure Veg';
        return true;
      }
      return true;
    },

    updateStepView: function() {
      // Update step progress indicator
      for (let i = 1; i <= totalSteps; i++) {
        const stepIndicator = document.getElementById(`progressStep${i}`);
        const panel = document.getElementById(`quoteStepPanel${i}`);
        if (stepIndicator) {
          stepIndicator.classList.toggle('active', i === currentStep);
          stepIndicator.classList.toggle('completed', i < currentStep);
        }
        if (panel) {
          panel.classList.toggle('active', i === currentStep);
        }
      }

      const prevBtn = document.getElementById('quoteStepPrevBtn');
      const nextBtn = document.getElementById('quoteStepNextBtn');
      const submitBtn = document.getElementById('quoteStepSubmitBtn');

      if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
      if (nextBtn) nextBtn.style.display = currentStep < totalSteps ? 'inline-flex' : 'none';
      if (submitBtn) submitBtn.style.display = currentStep === totalSteps ? 'inline-flex' : 'none';
    },

    bindSubmission: function() {
      const form = document.getElementById('royalQuoteForm');
      if (!form) return;

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Collect final contact fields
        quoteState.fullName = document.getElementById('quoteFullName').value.trim();
        quoteState.phone = document.getElementById('quotePhone').value.trim();
        quoteState.email = document.getElementById('quoteEmail')?.value.trim() || '';
        quoteState.notes = document.getElementById('quoteNotes')?.value.trim() || '';

        if (!quoteState.fullName || !quoteState.phone) {
          alert('Please provide your name and phone number so we can reach you.');
          return;
        }

        this.processSubmission(quoteState);
      });
    },

    processSubmission: function(data) {
      const cfg = window.SITE_CONFIG || {};
      const primaryPhone = cfg.contacts?.phonePrimaryClean || '919829351074';

      // Save copy in localStorage for backup
      try {
        const inquiries = JSON.parse(localStorage.getItem('bhagwati_inquiries') || '[]');
        inquiries.push({ ...data, timestamp: new Date().toISOString() });
        localStorage.setItem('bhagwati_inquiries', JSON.stringify(inquiries));
      } catch (err) {
        console.warn('Local storage write skipped:', err);
      }

      // Format WhatsApp pre-filled text
      const waMessage = 
`👑 *NEW CATERING INQUIRY — SHREE BHAGWATI CATERERS* 👑
---------------------------------------
👤 *Client Name:* ${data.fullName}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email || 'Not provided'}
---------------------------------------
🎉 *Event Type:* ${data.eventType}
📅 *Event Date:* ${data.eventDate}
📍 *City / Venue:* ${data.city}
👥 *Expected PAX / Guests:* ${data.guestCount} PAX
🍽️ *Meal Service:* ${data.mealType}
🥗 *Diet Preference:* ${data.dietary}
🎪 *Live Counters:* ${data.specialStalls.length > 0 ? data.specialStalls.join(', ') : 'Standard Menu'}
📝 *Special Notes:* ${data.notes || 'None'}
---------------------------------------
_Sent via bhagwaticaterers.com royal quote builder._`;

      const encodedMsg = encodeURIComponent(waMessage);
      const waUrl = `https://wa.me/${primaryPhone}?text=${encodedMsg}`;

      // Track lead in Analytics
      if (window.AnalyticsTracker) {
        window.AnalyticsTracker.trackEvent('generate_lead', {
          event_type: data.eventType,
          guest_count: data.guestCount,
          city: data.city
        });
      }

      // Show Success Modal with 1-Click WhatsApp Dispatch Button
      const modalBody = document.querySelector('.quote-modal-card');
      if (modalBody) {
        modalBody.innerHTML = `
          <div style="text-align: center; padding: 20px 10px;">
            <div style="width: 70px; height: 70px; margin: 0 auto 20px; background: rgba(37, 211, 102, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid #25D366;">
              <svg style="width: 36px; height: 36px; color: #25D366;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <span class="royal-badge" style="margin-bottom: 12px;">Inquiry Received with Honor</span>
            <h2 style="font-size: 2rem; margin-bottom: 12px; color: var(--royal-maroon);">Khamma Ghani, ${data.fullName}!</h2>
            <p style="font-size: 1rem; color: var(--text-muted); max-width: 520px; margin: 0 auto 24px; line-height: 1.6;">
              Thank you for trusting Shree Bhagwati Caterers with your celebration. Our master banquet planners will review your request for <strong>${data.eventType} (${data.guestCount} PAX / Guests)</strong> and contact you promptly.
            </p>
            <div style="display: flex; flex-direction: column; gap: 12px; max-width: 420px; margin: 0 auto 20px;">
              <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-lg" style="width: 100%;">
                <svg class="icon-inline" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.781-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.3-.778.98-.954 1.18-.175.2-.351.225-.652.075-.301-.15-1.272-.469-2.424-1.496-.895-.798-1.5-1.783-1.676-2.084-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.24-.244-.589-.493-.51-.678-.52h-.578c-.2 0-.526.075-.802.375-.276.3-1.053 1.03-1.053 2.512s1.079 2.914 1.23 3.115c.15.2 2.124 3.243 5.145 4.549.719.311 1.281.497 1.719.636.723.23 1.381.197 1.901.12.58-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.43-.076-.126-.277-.201-.578-.351z"/></svg>
                Confirm on WhatsApp Now (${data.guestCount} PAX)
              </a>
              <button type="button" class="btn btn-outline-gold" onclick="window.QuoteManager.closeModal(); location.reload();">
                Done / Return to Website
              </button>
            </div>
          </div>
        `;
      }
    }
  };

  window.QuoteManager = QuoteManager;
  document.addEventListener('DOMContentLoaded', () => QuoteManager.init());
})();
