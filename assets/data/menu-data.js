/**
 * Bhagwati Caterers - Authentic Royal Culinary Menu Database
 * Fully categorized with dietary markers, descriptions, and tags.
 */
const MENU_DATA = {
  categories: [
    { id: "all", name: "All Specialties", icon: "utensils" },
    { id: "rajasthani", name: "Royal Rajasthani Heritage", icon: "crown" },
    { id: "starters", name: "Artisanal Starters & Snacks", icon: "flame" },
    { id: "main-course", name: "North Indian & Mughlai Mains", icon: "pot" },
    { id: "live-counters", name: "Live Stalls & Interactive Counters", icon: "chef-hat" },
    { id: "welcome-drinks", name: "Welcome Drinks & Mocktails", icon: "glass-water" },
    { id: "rice-breads", name: "Dum Rice, Dal & Breads", icon: "wheat" },
    { id: "desserts", name: "Royal Mithai & Desserts", icon: "sparkles" },
    { id: "breakfast", name: "Royal Breakfast & High Tea", icon: "coffee" }
  ],

  items: [
    // Royal Rajasthani Heritage
    {
      id: "raj-1",
      name: "Traditional Dal Baati Churma (5 Types Churma)",
      category: "rajasthani",
      image: "Welcome-Menu.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Crispy ghee-baked baatis served with panchmel dal, accompanied by Gulab, Besan, Mawa, Wheat, and Dry Fruit churma dripping in pure Desi Ghee.",
      tags: ["Signature Royal", "Pure Desi Ghee", "Marwari Heritage"]
    },
    {
      id: "raj-2",
      name: "Jodhpuri Gatte ki Sabzi & Govind Gatta",
      category: "rajasthani",
      image: "Main-Course.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Tender spiced gram-flour dumplings stuffed with mawa and dry fruits, simmered in a velvety spiced yogurt gravy.",
      tags: ["Authentic Jodhpur", "Chef Specialty"]
    },
    {
      id: "raj-3",
      name: "Royal Ker Sangri Dak",
      category: "rajasthani",
      image: "Salad.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Authentic Thar desert wild berries and beans tempered with whole red chillies, amchur, raisins, and aromatic spices in mustard oil and ghee.",
      tags: ["Heritage Luxury", "Desert Specialty"]
    },
    {
      id: "raj-4",
      name: "Pitor ki Sabzi & Papad Mangodi Curry",
      category: "rajasthani",
      image: "Main-Course.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Traditional besan diamond cakes lightly pan-seared and bathed in a tempered buttermilk curry.",
      tags: ["Pure Veg", "Homestyle Royal"]
    },

    // Artisanal Starters & Snacks
    {
      id: "str-1",
      name: "Paneer Tikka Angara & Malai Chaap",
      category: "starters",
      image: "Snack.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Fresh cottage cheese cubes marinated in tandoori spices and charred to smoky perfection over live charcoal tandoor.",
      tags: ["Live Tandoor", "Smoky Charcoal"]
    },
    {
      id: "str-2",
      name: "Crispy Corn & Water Chestnut Salt & Pepper",
      category: "starters",
      image: "Snack.jpg",
      isJainAvailable: false,
      isSignature: false,
      description: "Golden fried sweet corn kernels tossed with crunchy water chestnuts, scallions, and crushed pepper.",
      tags: ["Oriental Crunch", "Finger Food"]
    },
    {
      id: "str-3",
      name: "Hara Bhara Kebab with Mint Dip",
      category: "starters",
      image: "24-300x200.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Delicate spinach, green peas, and cashew patties shallow-fried with subtle spices.",
      tags: ["Healthy & Fresh", "Jain Friendly"]
    },
    {
      id: "str-4",
      name: "Kurkuri Dahi ke Sholay & Cheese Balls",
      category: "starters",
      image: "Snack.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Hung curd infused with bell peppers, green chilies, and herbs wrapped in crisp golden crusts.",
      tags: ["Guest Favorite", "Crispy Melt"]
    },

    // North Indian & Mughlai Mains
    {
      id: "main-1",
      name: "Shahi Paneer Lababdar & Paneer Butter Masala",
      category: "main-course",
      image: "Main-Course.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Creamy tomato and cashew-nut gravy loaded with tender malai paneer cubes, finished with fresh kasuri methi and butter.",
      tags: ["All-Time Favorite", "Rich Gravy"]
    },
    {
      id: "main-2",
      name: "Subz Handi Dum Lazeez",
      category: "main-course",
      image: "Main-Course.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Seasonal garden-fresh vegetables slow-cooked in a sealed clay handi with saffron and whole garam masala.",
      tags: ["Dum Cooked", "Clay Pot Special"]
    },
    {
      id: "main-3",
      name: "Malai Kofta in Silk Velvet Gravy",
      category: "main-course",
      image: "Main-Course.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Cottage cheese and khoya dumplings stuffed with pistachios and raisins in a royal white cashew cream gravy.",
      tags: ["Royal Feast", "Mild & Rich"]
    },
    {
      id: "main-4",
      name: "Kaju Curry & Methi Malai Matar",
      category: "main-course",
      image: "Main-Course.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Whole roasted Goan cashews bathed in rich aromatic curry, paired with tender green peas in fresh cream and fenugreek.",
      tags: ["Grand Banquet", "Chef Special"]
    },

    // Live Stalls & Interactive Counters
    {
      id: "live-1",
      name: "Royal Chaat Galli (Pani Puri, Dahi Bhalla, Raj Kachori)",
      category: "live-counters",
      image: "Stalls.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Live interactive chaat counter with 6 flavors of mineral RO water pani puri, crisp Raj Kachori, Papdi Chaat, and Agra Bhalla.",
      tags: ["Live Theatre", "Mineral Water Only"]
    },
    {
      id: "live-2",
      name: "Live Italian Wood-Fired Pizza & Pasta Station",
      category: "live-counters",
      image: "Stalls.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Custom-made Penne, Fusilli, and Farfalle in Arrabiata, Alfredo, and Basil Pesto with assorted exotic vegetables and parmesan.",
      tags: ["Custom Made", "Global Cuisine"]
    },
    {
      id: "live-3",
      name: "Live South Indian Crispy Dosa & Appam Station",
      category: "live-counters",
      image: "Stalls.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Paper-thin Ghee Roast Dosa, Cheese Burst Dosa, and soft Appam served with 4 fresh artisanal chutneys and piping hot sambar.",
      tags: ["Live Tawa", "Piping Hot"]
    },
    {
      id: "live-4",
      name: "Mongolian Wok & Dim Sum Bar",
      category: "live-counters",
      image: "Stalls.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Interactive wok tossing custom noodles, exotic greens, and steamed vegetable crystal dim sums with fiery dips.",
      tags: ["Modern Interactive", "Healthy Steam"]
    },

    // Welcome Drinks & Mocktails
    {
      id: "drk-1",
      name: "Royal Kesar Pista Badam Thandai & Gulab Sharbat",
      category: "welcome-drinks",
      image: "Welcome-Menu.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Hand-pounded dry fruits, aromatic saffron, rose petals, and whole spices infused into chilled whole milk.",
      tags: ["Royal Welcome", "Pure Saffron"]
    },
    {
      id: "drk-2",
      name: "Fresh Blue Curacao Mojito & Kiwi Punch",
      category: "welcome-drinks",
      image: "Welcome-Menu.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Zesty crushed mint, lime wedges, and sparkling soda in exotic fruit concoctions.",
      tags: ["Refreshing", "Live Mocktail Bar"]
    },
    {
      id: "drk-3",
      name: "Aam Panna & Kokum Jeera Cooler",
      category: "welcome-drinks",
      image: "Welcome-Menu.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Traditional roasted raw mango cooler spiced with black salt, cumin, and mint for festive refreshment.",
      tags: ["Digestive & Pure", "Traditional"]
    },

    // Dum Rice, Dal & Breads
    {
      id: "rice-1",
      name: "Hyderabadi Subz Dum Biryani with Burani Raita",
      category: "rice-breads",
      image: "Rice-cured.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Aged long-grain Basmati rice layered with spiced vegetables, saffron, and mint, cooked in sealed handi.",
      tags: ["Basmati Gold", "Sealed Dum"]
    },
    {
      id: "rice-2",
      name: "Dal Makhani 24-Hour Slow Simmered",
      category: "rice-breads",
      image: "Rice-cured.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Whole black lentils and kidney beans slow-simmered overnight on tandoor embers with churned white butter.",
      tags: ["24-Hr Simmer", "Velvety Rich"]
    },
    {
      id: "rice-3",
      name: "Assorted Tandoori Breads & Missi Roti Basket",
      category: "rice-breads",
      image: "Main-Course.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Garlic Butter Naan, Laccha Paratha, Rajasthani Missi Roti, Khoba Roti, and Pudina Paratha served piping hot from tandoor.",
      tags: ["Hot From Tandoor", "Variety Basket"]
    },

    // Royal Desserts & Mithai
    {
      id: "des-1",
      name: "Jodhpuri Mawa Ghevar with Rabdi",
      category: "desserts",
      image: "Dessert.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Iconic honeycomb sweet disc topped with saffron-infused reduced milk rabdi, silver leaf, and sliced pistachios.",
      tags: ["Jodhpur Crown", "Pure Desi Ghee"]
    },
    {
      id: "des-2",
      name: "Hot Moong Dal Halwa in Pure Desi Ghee",
      category: "desserts",
      image: "Dessert.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Slowly roasted yellow lentils in pure ghee, enriched with cardamom, saffron, almonds, and cashews.",
      tags: ["Wedding Essential", "Warm & Rich"]
    },
    {
      id: "des-3",
      name: "Live Jalebi Counter with Laccha Rabdi",
      category: "desserts",
      image: "Dessert.jpg",
      isJainAvailable: true,
      isSignature: true,
      description: "Golden crisp jalebis fried live in pure desi ghee and immersed in saffron sugar syrup, served with creamy thick rabdi.",
      tags: ["Live Sizzle", "Crowd Magnet"]
    },
    {
      id: "des-4",
      name: "Artisanal Royal Kulfi & Matka Ice Cream",
      category: "desserts",
      image: "Dessert.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Traditional Malai, Paan, Rose, and Mango kulfi served in chilled earthen pots with falooda.",
      tags: ["Matka Special", "Chilled Delight"]
    },

    // Royal Breakfast & High Tea
    {
      id: "brk-1",
      name: "Jodhpuri Pyaaz Kachori & Mirchi Vada",
      category: "breakfast",
      image: "Breakfast.jpg",
      isJainAvailable: false,
      isSignature: true,
      description: "World-famous flaky kachoris stuffed with spiced onion mix, and fiery large green chilies stuffed with spiced potato mash and fried crisp.",
      tags: ["Jodhpur Pride", "Crisp Heritage"]
    },
    {
      id: "brk-2",
      name: "Steaming Masala Chai & Filter Coffee Bar",
      category: "breakfast",
      image: "Breakfast.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Kulhad ginger cardamom tea brewed live alongside authentic South Indian filter coffee.",
      tags: ["Live Kulhad Bar", "Morning Energy"]
    },
    {
      id: "brk-3",
      name: "Indori Poha & Steaming Dhokla with Sev",
      category: "breakfast",
      image: "Breakfast.jpg",
      isJainAvailable: true,
      isSignature: false,
      description: "Fluffy flattened rice tempered with mustard, peanuts, and pomegranate, paired with spongy nylon dhokla.",
      tags: ["Light & Fresh", "Breakfast Staple"]
    }
  ]
};

if (typeof window !== "undefined") {
  window.MENU_DATA = MENU_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MENU_DATA;
}
