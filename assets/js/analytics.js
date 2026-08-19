/**
 * Bhagwati Caterers - Marketing Analytics & Event Dispatcher
 * Dispatches conversion events to Google Analytics 4 & Meta Pixel when IDs are configured in config.js
 */
(function() {
  'use strict';

  const Analytics = {
    init: function() {
      const cfg = window.SITE_CONFIG && window.SITE_CONFIG.analytics;
      if (!cfg || !cfg.enabled) return;

      // Google Analytics 4 Injection
      if (cfg.googleAnalyticsId && cfg.googleAnalyticsId.startsWith('G-')) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${cfg.googleAnalyticsId}`;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', cfg.googleAnalyticsId, { send_page_view: true });
        console.log('[Analytics] GA4 Initialized:', cfg.googleAnalyticsId);
      }

      // Meta Pixel Injection
      if (cfg.metaPixelId && cfg.metaPixelId.length > 5) {
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', cfg.metaPixelId);
        fbq('track', 'PageView');
        console.log('[Analytics] Meta Pixel Initialized:', cfg.metaPixelId);
      }

      this.bindTrackingEvents();
    },

    trackEvent: function(eventName, params) {
      console.log(`[Event Tracked] ${eventName}:`, params || {});

      // GA4 Dispatch
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params || {});
      }

      // Meta Pixel Dispatch
      if (typeof window.fbq === 'function') {
        if (eventName === 'generate_lead') {
          window.fbq('track', 'Lead', params || {});
        } else if (eventName === 'contact_whatsapp_clicked') {
          window.fbq('trackCustom', 'WhatsAppClick', params || {});
        } else {
          window.fbq('trackCustom', eventName, params || {});
        }
      }
    },

    bindTrackingEvents: function() {
      // WhatsApp Clicks
      document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
        el.addEventListener('click', () => {
          this.trackEvent('contact_whatsapp_clicked', { source: el.getAttribute('data-source') || 'link' });
        });
      });

      // Phone Call Clicks
      document.querySelectorAll('a[href^="tel:"]').forEach(el => {
        el.addEventListener('click', () => {
          this.trackEvent('contact_phone_clicked', { phone: el.getAttribute('href') });
        });
      });

      // Menu interactions
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.trackEvent('view_menu_category', { category: btn.getAttribute('data-cat') });
        });
      });
    }
  };

  window.AnalyticsTracker = Analytics;
  document.addEventListener('DOMContentLoaded', () => Analytics.init());
})();
