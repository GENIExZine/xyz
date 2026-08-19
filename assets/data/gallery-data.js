/**
 * Bhagwati Caterers - Verified Event Gallery Database
 * Preserves all original high-resolution photos with context-rich descriptive ALT text.
 */
const GALLERY_DATA = {
  categories: [
    { id: "all", name: "All Showcase" },
    { id: "weddings", name: "Grand Weddings" },
    { id: "buffets", name: "Royal Buffets & Lawns" },
    { id: "live-stalls", name: "Live Food Counters" },
    { id: "carvings", name: "Artisanal Fruit & Décor" },
    { id: "hospitality", name: "Banquets & Hospitality" }
  ],

  items: [
    {
      id: "gal-1",
      src: "assets/images/2.jpg",
      thumb: "assets/images/2-300x200.jpg",
      category: "buffets",
      title: "Royal Golden Chafing Buffet Setup",
      caption: "Ornate gold and brass chafing dishes arranged for an evening wedding banquet in Jodhpur.",
      alt: "Royal Rajasthani wedding buffet line with ornate brass and gold chafing dishes by Bhagwati Caterers"
    },
    {
      id: "gal-2",
      src: "assets/images/3.jpg",
      thumb: "assets/images/3-300x200.jpg",
      category: "weddings",
      title: "Palace Wedding Dining Lawn",
      caption: "Grand outdoor dining arrangement under decorative canopy lighting for wedding guests.",
      alt: "Luxury outdoor wedding dinner setup with elegant tables and gold chairs in Rajasthan"
    },
    {
      id: "gal-3",
      src: "assets/images/4.jpg",
      thumb: "assets/images/4-300x200.jpg",
      category: "carvings",
      title: "Artisanal Watermelon & Fruit Carving Display",
      caption: "Handcrafted intricate fruit carving centerpiece welcoming guests at the entrance counter.",
      alt: "Intricate handcrafted watermelon and tropical fruit sculpture centerpiece by Bhagwati culinary artists"
    },
    {
      id: "gal-4",
      src: "assets/images/6.jpg",
      thumb: "assets/images/6-300x200.jpg",
      category: "live-stalls",
      title: "Interactive Live Cooking Counter",
      caption: "Chefs preparing sizzling gourmet snacks and tandoori delicacies live for guests.",
      alt: "Live chef cooking station preparing fresh hot appetizers at a wedding reception by Bhagwati Caterers"
    },
    {
      id: "gal-5",
      src: "assets/images/7.jpg",
      thumb: "assets/images/7-300x200.jpg",
      category: "buffets",
      title: "Lawn Buffet Canopy Arrangement",
      caption: "Spacious dual-sided buffet aisles ensuring seamless guest movement and rapid service.",
      alt: "Spacious illuminated wedding buffet counter in a green lawn venue in Jodhpur"
    },
    {
      id: "gal-6",
      src: "assets/images/8.jpg",
      thumb: "assets/images/8-300x200.jpg",
      category: "live-stalls",
      title: "Gourmet Street Food & Chaat Galli",
      caption: "Vibrant live street food station with 6 mineral water pani puri dispensers and fresh chaat.",
      alt: "Hygienic live chaat and street food counter with pure mineral RO water dispensers"
    },
    {
      id: "gal-7",
      src: "assets/images/9.jpg",
      thumb: "assets/images/9-300x225.jpg",
      category: "hospitality",
      title: "Royal Dessert & Sweet Showcase",
      caption: "Array of traditional Rajasthani sweets including Ghevar, Mawa Kachori, and Rabdi Jalebi.",
      alt: "Opulent dessert counter presenting traditional Rajasthani sweets and hot jalebis"
    },
    {
      id: "gal-8",
      src: "assets/images/10.jpg",
      thumb: "assets/images/10-300x225.jpg",
      category: "weddings",
      title: "Grand Stage & Banquet Dining",
      caption: "Decorated banquet hall dining setup coordinated with floral centerpieces.",
      alt: "Magnificent indoor banquet dining setup for royal engagement and wedding ceremonies"
    },
    {
      id: "gal-9",
      src: "assets/images/11.jpg",
      thumb: "assets/images/11-300x225.jpg",
      category: "buffets",
      title: "Multi-Cuisine Hot Food Station",
      caption: "Heavy brass chafers with temperature-controlled heating for steaming curries.",
      alt: "Polished brass chafing counter keeping Mughlai and Rajasthani curries piping hot"
    },
    {
      id: "gal-10",
      src: "assets/images/12.jpg",
      thumb: "assets/images/12-300x225.jpg",
      category: "carvings",
      title: "Fresh Salad & Cold Cut Presentation",
      caption: "Tiered glass stands presenting crisp farm-fresh salads, dressings, and dips.",
      alt: "Tiered glass presentation of gourmet salads and artisanal dips for banquet guests"
    },
    {
      id: "gal-11",
      src: "assets/images/14.jpg",
      thumb: "assets/images/14-300x225.jpg",
      category: "live-stalls",
      title: "Live Mocktail & Beverage Bar",
      caption: "Exotic welcome coolers, fresh fruit blends, and royal thandai served in elegant glassware.",
      alt: "Illuminated live mocktail and beverage bar counter for evening celebrations"
    },
    {
      id: "gal-12",
      src: "assets/images/15.jpg",
      thumb: "assets/images/15-300x225.jpg",
      category: "hospitality",
      title: "VIP Seated Table Service",
      caption: "Personalized seated royal Marwari thaal service with dedicated uniformed stewards.",
      alt: "Traditional silver and brass Marwari thaal dining setup for VIP wedding guests"
    },
    {
      id: "gal-13",
      src: "assets/images/16.jpg",
      thumb: "assets/images/16-300x225.jpg",
      category: "live-stalls",
      title: "Live Tandoor & Barbecue Station",
      caption: "Charcoal tandoor churning out fresh garlic naan, missi roti, and paneer tikkas.",
      alt: "Live clay tandoor counter serving fresh hot Indian breads and kebabs"
    },
    {
      id: "gal-14",
      src: "assets/images/17.jpg",
      thumb: "assets/images/17-300x200.jpg",
      category: "weddings",
      title: "Night Lawn Banquet Lighting",
      caption: "Ambient warm fairy lights and lantern decor framing the royal buffet line.",
      alt: "Enchanting night lawn banquet with warm fairy lights and lavish buffet counters"
    },
    {
      id: "gal-15",
      src: "assets/images/18.jpg",
      thumb: "assets/images/18-300x200.jpg",
      category: "buffets",
      title: "Grand Royal Reception Buffet",
      caption: "High-capacity multi-station banquet catering effortlessly for over 1,500 guests.",
      alt: "Panoramic view of grand wedding reception buffet setup by Bhagwati Caterers"
    },
    {
      id: "gal-16",
      src: "assets/images/19.jpg",
      thumb: "assets/images/19-300x200.jpg",
      category: "hospitality",
      title: "Family Celebration & Festive Hall",
      caption: "Intimate and warm setup for anniversary and birthday celebrations.",
      alt: "Warm family banquet hall catering for milestone anniversary and birthday parties"
    },
    {
      id: "gal-17",
      src: "assets/images/20.jpg",
      thumb: "assets/images/20-300x200.jpg",
      category: "carvings",
      title: "Artistic Fruit Pyramid Display",
      caption: "Carved melons, pineapples, and seasonal exotic fruits crafted by master culinary decorators.",
      alt: "Extravagant carved fruit pyramid welcoming guests at high-profile Rajasthani reception"
    },
    {
      id: "gal-18",
      src: "assets/images/23.jpg",
      thumb: "assets/images/23-300x200.jpg",
      category: "weddings",
      title: "Heritage Royal Mandap Dining",
      caption: "Scenic mandap side dinner setup blending traditional Rajasthani royalty with modern comfort.",
      alt: "Heritage Rajasthan mandap side royal catering setup with traditional aesthetic decor"
    },
    {
      id: "gal-19",
      src: "assets/images/24.jpg",
      thumb: "assets/images/24-300x200.jpg",
      category: "live-stalls",
      title: "Live Sizzle Dosa & Tawa Station",
      caption: "Continuous fresh live dosas and tawa rolls prepared on broad cast-iron griddles.",
      alt: "Live south Indian dosa and tawa sizzler counter with chef preparation"
    },
    {
      id: "gal-20",
      src: "assets/images/26.jpg",
      thumb: "assets/images/26-300x200.jpg",
      category: "buffets",
      title: "Full Banquet Line Execution",
      caption: "Impeccably aligned hot food, rice, dal, and bread stations for smooth guest flow.",
      alt: "Flawless catering buffet line execution by Bhagwati Caterers team in Jodhpur"
    },
    {
      id: "gal-21",
      src: "assets/images/13.jpg",
      thumb: "assets/images/13-300x169.jpg",
      category: "hospitality",
      title: "Hospitality & Service Crew in Action",
      caption: "Uniformed, courteous service brigade ensuring every guest feels welcomed like royalty.",
      alt: "Trained uniformed catering stewards and banquet managers serving guests"
    }
  ]
};

if (typeof window !== "undefined") {
  window.GALLERY_DATA = GALLERY_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = GALLERY_DATA;
}
