/**
 * Bhagwati Caterers - Site Content & Data Store
 * Easily editable by the owner or dynamically rendered.
 */
const SITE_DATA = {
  stats: [
    { number: "20+", label: "Years of Culinary Excellence", detail: "Serving royal Rajasthani & multi-cuisine banquets since 2000" },
    { number: "5,000+", label: "Grand Events Executed", detail: "Weddings, royal galas, corporate summits & private parties" },
    { number: "10,00,000+", label: "Delighted Guests Served", detail: "With genuine Marwari warmth, pristine hygiene & taste" },
    { number: "100+", label: "Master Chefs & Hospitable Staff", detail: "Specialized culinary artisans for every regional cuisine" }
  ],

  services: [
    {
      id: "wedding",
      title: "Royal Wedding Catering",
      subtitle: "The Crown Jewel of Grand Celebrations",
      icon: "wedding-icon.png",
      image: "bnr2b.jpg",
      description: "A wedding is the most auspicious milestone for the couple and their families. We craft magnificent royal feasts with customized multi-course menus, royal chafing setups, live artisanal counters, and impeccable white-glove Rajasthani hospitality.",
      features: ["Customized Multi-Cuisine Banquets", "Live Interactive Gourmet Stalls", "Traditional Rajasthani Thaal & Royal Buffets", "End-to-End Crockery, Cutlery & Staffing"],
      tag: "Signature Specialty"
    },
    {
      id: "destination-wedding",
      title: "Destination Weddings & Palace Galas",
      subtitle: "Luxury Banquets Across Rajasthan & India",
      icon: "Catering-services2.png",
      image: "home_weddingdresses_slider_pic2.png",
      description: "Specialized in large-scale destination catering across heritage palaces, luxury forts, and scenic resorts in Jodhpur, Udaipur, Jaipur, Jaisalmer, and beyond. Seamless multi-day kitchen logistics with zero compromises on taste.",
      features: ["Multi-Day Itinerary Menus (Mehendi, Sangeet, Pheras, Reception)", "Mobile High-Capacity Kitchen Infrastructure", "Regional & Global Fusion Stations", "VIP & Guest Concierge Dining"],
      tag: "Heritage Luxury"
    },
    {
      id: "engagement",
      title: "Engagement & Roka Ceremonies",
      subtitle: "Marking Beginnings with Exceptional Flavors",
      icon: "engagement-icon.png",
      image: "23-300x200.jpg",
      description: "An eagerly awaited milestone where two families unite. We create an intimate, sophisticated ambiance with artisanal appetizers, signature welcome drinks, and curated lunch or dinner buffets.",
      features: ["Sophisticated Mocktail Bars", "Bespoke Finger Foods & Canapés", "Seated or Buffet Fine Dining", "Custom Sweet & Dessert Displays"],
      tag: "Intimate Elegance"
    },
    {
      id: "reception",
      title: "Grand Reception Banquets",
      subtitle: "Opulent Hospitality for Your Guests",
      icon: "Catering-services2.png",
      image: "18-300x200.jpg",
      description: "Designed so the host family can give their undivided attention to guests while our seasoned banquet managers execute flawless service, lavish desserts, and continuous hot culinary stations.",
      features: ["Grand Multi-Tier Buffet Lines", "Signature Live Dessert Showcases", "Fast-Paced High-Capacity Serving", "Trained Uniformed Service Stewards"],
      tag: "Grand Scale"
    },
    {
      id: "corporate",
      title: "Corporate Events & Conferences",
      subtitle: "Punctual, Professional & Elegant Executive Catering",
      icon: "coporateparty-icon.png",
      image: "about.jpg",
      description: "From board meetings and annual corporate galas to multi-day conventions. We deliver hygienic, punctual, and nutritionally balanced breakfasts, executive lunch boxes, and high-tea spreads.",
      features: ["Executive High-Tea & Coffee Breaks", "Nutritious Hot Buffet Spreads", "Formal Plated Lunches", "Strict Timing & Corporate Hygiene"],
      tag: "Professional"
    },
    {
      id: "outdoor-party",
      title: "Outdoor Lawns & Garden Parties",
      subtitle: "Alfresco Dining Under the Open Sky",
      icon: "outdoor-party-icon.png",
      image: "7-300x200.jpg",
      description: "Outdoor celebrations connect guests to the natural charm of lush lawns and starlit nights. We provide weatherproof kitchen setups, live barbecue, tandoor stations, and ambient lighting food displays.",
      features: ["Live Charcoal Tandoor & Barbecue", "Weather-Resistant Food Counters", "Lawn Buffet Styling & Décor Harmony", "Fresh Sizzle-to-Plate Dining"],
      tag: "Alfresco"
    },
    {
      id: "birthdays-anniversaries",
      title: "Birthdays & Anniversaries",
      subtitle: "Rejoice, Celebrate & Savor Every Moment",
      icon: "birthday-icon.png",
      image: "24-300x200.jpg",
      description: "A day when family and friends gather to shower blessings and celebrate cherished memories. We tailor exciting kids-friendly fun stations, gourmet chaat streets, and custom dessert tables.",
      features: ["Live Chaat Galli & Street Counters", "Customized Cake & Dessert Tables", "Exciting Mocktails & Shakes", "Flexible Menu for All Age Groups"],
      tag: "Joyful Feasts"
    },
    {
      id: "housewarming",
      title: "House Warming (Griha Pravesh)",
      subtitle: "Auspicious Beginnings with Pure Traditional Taste",
      icon: "housewarming-icon.png",
      image: "10-300x225.jpg",
      description: "Welcoming loved ones into your new home calls for pure, soul-satisfying traditional dishes. We prepare 100% Satvik, Jain, and traditional Marwari delicacies with utmost sanctity and hygiene.",
      features: ["100% Pure Ghee & Satvik Options", "Authentic Marwari Traditional Menu", "Compact Space Kitchen Management", "Graceful Homely Hospitality"],
      tag: "Traditional & Pure"
    },
    {
      id: "social-gatherings",
      title: "Get-Togethers & Social Parties",
      subtitle: "Spending Gala Time with Close Loved Ones",
      icon: "get-togather-icon.png",
      image: "15-300x225.jpg",
      description: "Nothing compares to unwinding with friends over mouth-watering appetizers, steaming main courses, and refreshing beverages tailored to your exact group preference.",
      features: ["Casual Chic Finger Food Menus", "Interactive DIY Counters", "Refreshing Seasonal Beverages", "Seamless Cleanup & Service"],
      tag: "Social Connection"
    },
    {
      id: "theme-parties",
      title: "Theme & Festive Parties",
      subtitle: "Exciting Culinary Theatre & Visual Décor",
      icon: "party-icon.png",
      image: "14-300x225.jpg",
      description: "Infuse your party with excitement! From Rajasthani Village themes to Retro, Punjabi Dhaba, Pan-Asian Street, or Italian Piazza setups complete with thematic chef attire and matching culinary stalls.",
      features: ["Custom Thematic Stall Presentation", "Concept-Driven Food Styling", "Artisanal Carvings & Displays", "Chef-Led Live Interactive Cooking"],
      tag: "Thematic Magic"
    },
    {
      id: "dance-parties",
      title: "Sangeet & Dance Nights",
      subtitle: "High-Energy Late-Night Gourmet Treats",
      icon: "dance-party-icon.png",
      image: "16-300x225.jpg",
      description: "Keep the party energy soaring all night long with bite-sized, mess-free gourmet snacks, live midnight snack counters, artisanal dessert shooters, and energized beverage bars.",
      features: ["Handheld Easy-to-Eat Gourmet Starters", "Late Night Munchies & Maggi/Dosa Stalls", "Energizing Fresh Mocktail Shots", "Fast Continuous Floor Service"],
      tag: "High Energy"
    },
    {
      id: "holiday-retreats",
      title: "Holiday Retreats & Family Outings",
      subtitle: "Feast in Style Anywhere You Travel",
      icon: "coporateparty-icon.png",
      image: "19-300x200.jpg",
      description: "Taking your family or colleagues to a private farmhouse, resort, or desert camp? Our traveling culinary brigade manages all meals, from sunrise tea to bonfire barbecues.",
      features: ["All-Day Multi-Meal Management", "Campfire & Desert Barbecue Counters", "Fresh On-Site Farm Cooking", "Complete Logistics & Waste Discipline"],
      tag: "Traveling Brigade"
    }
  ],

  hygieneProtocols: [
    {
      title: "100% RO Mineral Water",
      desc: "All cooking, ice-making, washing, and dining beverages strictly utilize certified multi-stage RO purified water.",
      icon: "droplet"
    },
    {
      title: "Pristine Kitchen Sanitization",
      desc: "Daily pre-and-post event deep chemical sanitization of all cooking utensils, tandoors, brass chafers, and prep counters.",
      icon: "shield-check"
    },
    {
      title: "Pure Farm-Fresh Ingredients",
      desc: "Premium grade pulses, 100% pure desi ghee, cold-pressed oils, and farm-sourced organic vegetables inspected daily.",
      icon: "sparkles"
    },
    {
      title: "Chef Hygiene & Protective Gear",
      desc: "Mandatory chef coats, hairnets, sanitary gloves, and regular health checkups for every kitchen artisan and service steward.",
      icon: "user-check"
    },
    {
      title: "Temperature-Controlled Storage",
      desc: "Dedicated insulated hot-boxes and cold-chain mobile refrigeration to maintain optimal food safety and peak freshness.",
      icon: "thermometer"
    },
    {
      title: "Eco-Friendly Waste Management",
      desc: "Strict segregation of organic and recyclable waste with clean, prompt post-event site restoration.",
      icon: "leaf"
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "Share Your Vision",
      desc: "Tell us about your event date, venue, expected guest count, and your culinary aspirations via form, call, or WhatsApp."
    },
    {
      step: "02",
      title: "Curate Custom Menu",
      desc: "Our senior culinary consultants curate an exquisite customized tasting menu tailored to your family's preferences and dietary choices."
    },
    {
      step: "03",
      title: "Flawless Planning & Tasting",
      desc: "Experience our dishes first-hand with menu tasting, finalize presentation themes, live counter layouts, and staffing logistics."
    },
    {
      step: "04",
      title: "Royal Execution & Hospitality",
      desc: "On the big day, our master chefs and trained service brigade arrive hours ahead to set up sparkling live counters and royal buffets."
    },
    {
      step: "05",
      title: "Unforgettable Memories",
      desc: "Relax and cherish every celebration while your guests rave about the extraordinary taste, warmth, and hospitality."
    }
  ],

  testimonials: [
    {
      quote: "Shree Bhagwati Caterers catered our daughter's 3-day wedding in Jodhpur. The Dal Baati Churma, live pasta counter, and royal Rajasthani desserts were the talk of the entire wedding! The hospitality of their team was genuinely palace-grade.",
      author: "Mr. Rajendra Singhal & Family",
      event: "Grand Wedding at Jodhpur Lawn",
      rating: 5,
      location: "Jodhpur, Rajasthan"
    },
    {
      quote: "Exceptional quality, strict hygiene, and prompt service! We hired them for our corporate annual banquet of 800+ attendees. Every dish was piping hot, beautifully presented, and delivered right on schedule.",
      author: "Virendra Chouhan",
      event: "Annual Corporate Gala",
      rating: 5,
      location: "Jodhpur Industrial Area"
    },
    {
      quote: "We were very particular about 100% pure Jain catering for our Griha Pravesh and Roka ceremony. Bhagwati Caterers went above and beyond with separate Jain preparation and phenomenal taste. Truly trustworthy!",
      author: "Sanjay & Meena Bhandari",
      event: "Roka & Griha Pravesh Ceremony",
      rating: 5,
      location: "Shastri Nagar, Jodhpur"
    },
    {
      quote: "Their live chaat counter, Rajasthani Ker Sangri, and hot Jalebi with Rabdi were unforgettable! 20 years of experience truly shows in their management and attention to every guest.",
      author: "Harish Sharma",
      event: "25th Anniversary Celebration",
      rating: 5,
      location: "Air Force Area, Jodhpur"
    }
  ],

  faqs: [
    {
      q: "How many guests can Shree Bhagwati Caterers cater for?",
      a: "We cater for intimate gatherings of 50 guests up to grand royal weddings and corporate banquets of 5,000+ guests with equal precision and elegance."
    },
    {
      q: "Do you offer pure vegetarian and Jain menu options?",
      a: "Yes! We specialize in 100% Pure Vegetarian catering and have dedicated preparation teams for strict Jain (no onion, no garlic, root-vegetable free) requirements."
    },
    {
      q: "Do you cater destination weddings outside Jodhpur?",
      a: "Absolutely. We regularly manage high-end destination wedding catering across Jaipur, Udaipur, Jaisalmer, Kumbhalgarh, Pushkar, and throughout India."
    },
    {
      q: "How far in advance should we book Bhagwati Caterers for our event?",
      a: "For weddings and peak auspicious dates, we recommend booking 2 to 6 months in advance. For corporate events and private parties, 1 to 3 weeks notice is appreciated."
    },
    {
      q: "Can we request a custom menu or schedule a food tasting?",
      a: "Yes, every menu is completely customizable. We provide personalized menu consultations and food tastings once initial event details are discussed."
    }
  ]
};

if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_DATA;
}
