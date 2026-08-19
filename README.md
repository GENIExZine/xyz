# 👑 Shree Bhagwati Caterers — Royal & Luxury Catering Website

> **A 5-Star Royal Rajasthani Culinary & Luxury Hospitality Web Experience**  
> Preserving 20+ years of culinary heritage from [bhagwaticaterers.com](https://bhagwaticaterers.com/) while elevating it to a modern, high-conversion luxury brand.

---

## 🌟 Table of Contents
1. [Overview & Brand Identity](#-overview--brand-identity)
2. [Key Features & High-Conversion Strategy](#-key-features--high-conversion-strategy)
3. [Project Directory & File Structure](#-project-directory--file-structure)
4. [File-by-File Code Breakdown](#-file-by-file-code-breakdown)
5. [How to Run & Preview Locally](#-how-to-run--preview-locally)
6. [Configuration & Content Updates (CMS)](#-configuration--content-updates-cms)
7. [Deployment Guide (Vercel, Netlify, cPanel, Nginx)](#-deployment-guide)
8. [SEO & Marketing Analytics Integration](#-seo--marketing-analytics-integration)
9. [Rollback Safety & Live Site Snapshot](#-rollback-safety--live-site-snapshot)

---

## 🏛️ Overview & Brand Identity

**Shree Bhagwati Caterers** is a premier royal catering and hospitality brand established in Jodhpur, Rajasthan (20+ years of heritage). 

- **Primary Colors**: Deep Royal Maroon (`#4A0E17`, `#2D070E`), Antique & Champagne Gold (`#D4AF37`, `#F5E6B8`), Warm Ivory & Cream (`#FAF7F2`, `#FFFDF9`).
- **Typography**: Royal Serif (`Cormorant Garamond`, `Playfair Display`) + Modern Sans (`Plus Jakarta Sans`).
- **Aesthetic Elements**: *Jharokha* arch frames, fine gold filigree lines, pure desi ghee & satvik culinary markers.
- **Verified Contacts Preserved**:
  - **Phone 1**: `+91 98293 51074` (`098293-51074`)
  - **Phone 2**: `+91 98294 04199` (`098294-04199`)
  - **Emails**: `sales@bhagwaticaterers.com` & `shreebhagawati@gmail.com`
  - **Location**: Air Force Tempo Stand, Near V.V. John Memorial School, Jodhpur - 342001, Rajasthan, India

---

## 💎 Key Features & High-Conversion Strategy

1. **Interactive Multi-Step Royal Quote Calculator**:
   - **Interactive PAX / Guest Selector**: Quick preset chips (`50 PAX`, `100 PAX`, `250 PAX`, `500 PAX`, `1,000 PAX`, `2,000+ PAX`), direct numeric input box, and a synchronized slider.
   - **Multi-Channel Lead Dispatch**: Submits inquiry + generates an instant pre-formatted WhatsApp chat message directly to the owners with 1 tap + stores local backup.
2. **Interactive Royal Menu Explorer**:
   - Real-time instant search across delicacies and ingredients.
   - Dietary filter toggles: 100% Pure Veg, **Jain-Friendly**, and Chef Signatures.
   - Tabbed categories: Royal Rajasthani, North Indian & Mughlai, Live Counters & Stalls, Welcome Drinks, Rice & Dal, Royal Mithai, and High Tea.
3. **Filterable Event Gallery with Accessible Lightbox**:
   - 21+ original event photographs of real wedding buffets, fruit carvings, brass chafing lines, and live counters.
   - Lightbox with mobile touch swipe, keyboard arrows (`Left`/`Right`), zoom, and `Escape` key close.
4. **Owner Management Portal (`admin.html`)**:
   - Dedicated visual CMS dashboard where the owner can manage menu items, update phone numbers/emails, view submitted inquiries, and export updated configuration JSON.
5. **Purity & 6-Point Hygiene Assurance**:
   - Highlights 100% Mineral RO water preparation, certified pure desi ghee, daily utensil sterilization, temperature control, and dedicated Jain cooking teams.
6. **Built-in Analytics & Event Tracking (GA4 & Meta Pixel)**:
   - Dispatches conversion events (`generate_lead`, `contact_whatsapp_clicked`, `contact_phone_clicked`, `view_menu_category`, `view_gallery_item`).

---

## 📂 Project Directory & File Structure

```
c:\Users\Admin\Documents\SECY DAWI\
├── backup_original_live_site/     # Full HTML snapshots of original live pages (Rollback safety)
│   ├── index.html
│   ├── about-us.html
│   ├── services.html
│   ├── menu.html
│   ├── gallery.html
│   └── contact.html
├── index.html                     # Luxury Royal Homepage (Hero, Stats, Services, Testimonials, CTA)
├── about.html                     # 20-Year Legacy, Master Chefs, and Hygiene Standards
├── services.html                  # 12 Detailed Event Caterings (Weddings, Corporate, Palaces, etc.)
├── menu.html                      # Interactive Royal Menu Explorer with search & dietary filters
├── gallery.html                   # Filterable Masonry Gallery with Fullscreen Lightbox
├── contact.html                   # High-Conversion Contact Hub, Map, Direct WhatsApp & Phone
├── admin.html                     # Owner/Staff CMS Dashboard & Inquiries Log
├── sitemap.xml                    # Full search engine XML sitemap
├── robots.txt                     # SEO search crawler directives
├── server.py                      # Local lightweight Python preview server
├── README.md                      # Complete project documentation
└── assets/
    ├── css/
    │   ├── royal-theme.css        # Luxury Design System, Typography, Colors & Royal Motifs
    │   ├── components.css         # Nav, Hero, Cards, Menu Explorer, Lightbox, Modals, Forms
    │   └── responsive.css         # Pixel-perfect responsive rules (360px - 1920px+)
    ├── js/
    │   ├── config.js              # Central Configuration (Contacts, Form Endpoints, GA4/Pixel IDs)
    │   ├── app.js                 # Sticky nav, mobile drawer, scroll animations, WhatsApp widget
    │   ├── quote-calculator.js    # Multi-step Quote Calculator with interactive PAX controls
    │   ├── menu-explorer.js       # Real-time search, category filters & Jain toggles
    │   ├── gallery-lightbox.js    # Filterable masonry gallery, touch swipe & modal lightbox
    │   ├── analytics.js           # Google Analytics 4 & Meta Pixel conversion dispatcher
    │   └── admin.js               # Owner CMS editor, live inquiry viewer & JSON exporter
    ├── data/
    │   ├── site-content.js        # Structured service data, testimonials, trust stats, FAQs
    │   ├── menu-data.js           # Complete authentic culinary menu database with dietary tags
    │   └── gallery-data.js        # 21+ original photo metadata with context-rich ALT texts
    └── images/                    # 70 high-resolution verified event photographs & brand logos
```

---

## 📜 File-by-File Code Breakdown

### 1. HTML Pages
- **`index.html`**: The cinematic landing page containing the royal hero section, trust milestone counters (20+ years, 5,000+ events, 10,00,000+ guests), about heritage teaser, featured service cards, wedding experience showcase, menu highlight, gallery preview, hygiene pillars, process timeline, verified testimonials, and high-conversion final CTA.
- **`about.html`**: Tells the 20-year story of Shree Bhagwati Caterers in Jodhpur, master chef craftsmanship, traditional stone-ground spices, 100% pure desi ghee, and 6 trust pillars.
- **`services.html`**: Comprehensive cards for all 12 audited event categories (Royal Weddings, Destination Palaces, Engagements, Receptions, Corporate Banquets, Outdoor Lawns, Birthdays, Griha Pravesh, Socials, Theme Parties, Sangeet Nights, Holiday Retreats) with 1-click booking triggers.
- **`menu.html`**: Interactive culinary showcase with search bar, Jain toggle, Chef Signatures toggle, 9 category tabs, dish tags, and custom menu consultation request.
- **`gallery.html`**: Categorized showcase of real banquet setups, royal brass chafing lines, live counters, and fruit sculptures with a fullscreen touch-enabled lightbox.
- **`contact.html`**: Contact hub with direct phone lines, verified emails, exact Jodhpur physical address, inquiry form with PAX input, and FAQs.
- **`admin.html`**: Private owner portal for viewing client leads, editing contact info, managing menu items, and exporting data.

### 2. Stylesheets (`assets/css/`)
- **`royal-theme.css`**: Defines CSS root variables for the luxury palette (`--royal-maroon`, `--gold-primary`, `--ivory-base`), typography stacks (`Cormorant Garamond`, `Playfair Display`, `Plus Jakarta Sans`), *Jharokha* arch frames, royal dividers, and WCAG AA contrast rules.
- **`components.css`**: Styles for the sticky royal navigation bar, utility announcement bar, cinematic hero, trust stats grid, service cards, menu explorer controls, dish cards, modal quote calculator, lightbox viewer, and footer.
- **`responsive.css`**: Media queries ensuring flawless layout adaptation on Mobile (360px–430px), Tablets (768px–992px), Laptops (1200px), and Large Desktops (1440px+), including the sticky bottom mobile action bar (`Call`, `WhatsApp`, `Get Quote`).

### 3. JavaScript & Data Architecture (`assets/js/` & `assets/data/`)
- **`config.js`**: Single central configuration file for managing phone numbers, emails, addresses, form backend endpoints (Web3Forms/Formspree), and GA4/Meta Pixel IDs.
- **`site-content.js`**: Contains structured data for services, trust stats, hygiene promises, process steps, testimonials, and FAQs.
- **`menu-data.js`**: Contains categorized culinary items with dietary tags (`isJainAvailable`, `isSignature`, `tags`, `description`, `image`).
- **`gallery-data.js`**: Contains verified photo items with high-res source, thumbnail, category, title, caption, and descriptive ALT tags.
- **`quote-calculator.js`**: Powers the 3-step Quote modal, syncing the slider, numeric input, and quick PAX buttons (`50` to `2000+ PAX`), and compiling the WhatsApp message.
- **`menu-explorer.js`**: Powers real-time search, category filtering, and Jain/Pure-Veg toggles.
- **`gallery-lightbox.js`**: Manages category filtering, touch swipe on mobile, keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), and ARIA focus trapping.
- **`analytics.js`**: Dispatches custom conversion events to Google Analytics 4 and Meta Pixel.
- **`app.js`**: Handles header shrink on scroll, mobile slide-out drawer, scroll reveal animations, and contact form dispatch.
- **`admin.js`**: Handles the owner CMS interface, inquiry log viewer, and 1-click JSON export.

---

## 🚀 How to Run & Preview Locally

Run the included local Python server:

```powershell
python server.py
```

Then open your browser and navigate to:
```
http://localhost:8000
```

---

## ⚙️ Configuration & Content Updates (CMS)

### Changing Contact Numbers & Email
Open `assets/js/config.js` and update the values:
```javascript
contacts: {
  phonePrimary: "+91 98293 51074",
  phonePrimaryClean: "919829351074",
  phoneSecondary: "+91 98294 04199",
  emailPrimary: "sales@bhagwaticaterers.com",
  addressLine1: "Air Force Tempo Stand, Nr. V.V. John Memorial School",
  addressLine2: "Jodhpur - 342001, Rajasthan, India"
}
```
All phone links, WhatsApp buttons, footer info, and schema tags across all pages will automatically update.

### Managing Menu Items or Gallery Photos
1. Open `http://localhost:8000/admin.html` in your browser.
2. Edit menu items, add new delicacies, or delete items.
3. Click **"Export Updated Config"** to download the updated JSON file.
4. Or directly edit `assets/data/menu-data.js` and `assets/data/gallery-data.js`.

---

## 🌐 Deployment Guide

This is a high-performance, zero-dependency modern web application. It can be hosted on any static or cloud hosting platform:

### Option 1: Vercel / Netlify / Cloudflare Pages
1. Push this folder to a GitHub/GitLab repository.
2. Connect the repository to Vercel or Netlify.
3. Set Publish directory to `.` (Root) — No build command required.
4. Your luxury royal website is live with global CDN caching and SSL.

### Option 2: Apache / Nginx / cPanel (Traditional Web Hosting)
1. Upload all files and folders directly to `public_html/` via FTP or cPanel File Manager.
2. The site is immediately accessible with zero backend configuration needed.

---

## 📊 SEO & Marketing Analytics Integration

### Google Analytics 4 & Meta Pixel
In `assets/js/config.js`, paste your IDs:
```javascript
analytics: {
  googleAnalyticsId: "G-XXXXXXXXXX",  // Your GA4 Measurement ID
  metaPixelId: "123456789012345",      // Your Meta Pixel ID
  enabled: true
}
```
The site automatically tracks:
- `generate_lead` (When a client requests a quote or WhatsApp inquiry)
- `contact_whatsapp_clicked` (Floating button, header, and CTA clicks)
- `contact_phone_clicked` (Direct call clicks)
- `view_menu_category` & `view_gallery_item`

### Schema.org Structured Data
Every page contains valid JSON-LD structured data:
- `CateringService` on `index.html`
- `AboutPage` on `about.html`
- `Service` & `OfferCatalog` on `services.html`
- `Menu` & `MenuSection` on `menu.html`
- `ImageGallery` on `gallery.html`
- `ContactPage` on `contact.html`

---

## 🛡️ Rollback Safety & Live Site Snapshot

A complete raw snapshot of all 6 live pages of `https://bhagwaticaterers.com/` is permanently stored in:
```
backup_original_live_site/
├── index.html
├── about-us.html
├── services.html
├── menu.html
├── gallery.html
└── contact.html
```

---

*👑 Shree Bhagwati Caterers — Where Royal Hospitality Meets Exceptional Cuisine.*
