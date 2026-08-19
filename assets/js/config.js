/**
 * Bhagwati Caterers - Central Website Configuration
 * All business contacts, marketing endpoints, and tracking settings are managed here.
 */
const SITE_CONFIG = {
  brandName: "Shree Bhagwati Caterers",
  shortName: "Bhagwati Caterers",
  tagline: "Where Royal Hospitality Meets Exceptional Cuisine",
  heritageYears: "20+",
  establishedYear: "2000",
  
  contacts: {
    phonePrimary: "+91 98293 51074",
    phonePrimaryClean: "919829351074",
    phoneSecondary: "+91 98294 04199",
    phoneSecondaryClean: "919829404199",
    whatsappClean: "919829351074",
    emailPrimary: "sales@bhagwaticaterers.com",
    emailSecondary: "shreebhagawati@gmail.com",
    addressLine1: "Air Force Tempo Stand, Nr. V.V. John Memorial School",
    addressLine2: "Jodhpur - 342001, Rajasthan, India",
    city: "Jodhpur",
    state: "Rajasthan",
    postalCode: "342001",
    country: "India",
    googleMapsQuery: "Air+Force+Tempo+Stand+Nr+VV+John+Memorial+School+Jodhpur+Rajasthan+342001",
    hours: "Open Everyday: 09:00 AM – 10:00 PM IST",
    availabilityText: "Quick Response on WhatsApp (9 AM – 10 PM IST)"
  },

  social: {
    facebook: "https://facebook.com/bhagwaticaterers",
    instagram: "https://instagram.com/bhagwaticaterers",
    pinterest: "https://pinterest.com/bhagwaticaterers",
    youtube: "https://youtube.com/@bhagwaticaterers"
  },

  // Form Backend Endpoints (Choose Web3Forms, Formspree, or Netlify)
  // Default is Web3Forms / Direct structured WhatsApp submission
  formSettings: {
    // If you have a Web3Forms Access Key or Formspree URL, paste it here:
    web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY", // e.g. "a1b2c3d4-xxxx-xxxx"
    formspreeEndpoint: "", // e.g. "https://formspree.io/f/xyz"
    enableDirectWhatsApp: true,
    enableLocalBackup: true
  },

  // Marketing Analytics & Pixels (Optional - paste IDs when ready)
  analytics: {
    googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
    metaPixelId: "",       // e.g. "123456789012345"
    enabled: true
  }
};

// Export for module systems or attach to window
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
