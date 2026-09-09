// ============================================================================
// destinations.ts — Single source of truth for all 12 destinations.
// Each destination carries: tagline / metaDescription / rating / physical /
// culture / whenToGo (4 seasons) / cost (3 tiers) / proTips.
// First 5 (highest search) also have full intro/highlights/transport/
// best-time/itineraries/faqs/images.
// ============================================================================

export interface DestinationGuide {
  location: string;
  ticket: string;
  transport: string;
  tips: string;
}

export interface DestinationFaq {
  q: string;
  a: string;
}

export interface DestinationItinerary {
  days: string;
  title: string;
  detail: string;
}

export interface DestinationPhysical {
  type: string;
  elevation: string;
  area: string;
  climate: string;
  unesco: string;
}

export interface DestinationSeason {
  label: string;
  text: string;
  score: number; // 0–10
}

export interface DestinationImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Destination {
  slug: string;
  name: string;
  landscape: string;
  landscapeLabel: string;
  seasons: string[];
  difficulty: string;
  altitude: string;
  days: string;
  reason: string;
  guide: DestinationGuide;
  url?: string;
  heroImg?: string;
  heroImgAlt?: string;
  // Universal deep content
  tagline?: string;
  metaDescription?: string;
  rating?: number;
  physical?: DestinationPhysical;
  culture?: string;
  whenToGo?: DestinationSeason[];
  cost?: { budget: string; mid: string; splurge: string };
  proTips?: string[];
  images?: DestinationImage[];
  // First-5 deep content
  intro?: string;
  highlights?: string[];
  howToGetThere?: string;
  bestTime?: string;
  itineraries?: DestinationItinerary[];
  faqs?: DestinationFaq[];
}

const seasonLabelMap: Record<string, string> = {
  spring: "Spring",
  summer: "Summer",
  autumn: "Autumn",
  winter: "Winter",
  "year-round": "Year-round",
};

const difficultyLabelMap: Record<string, string> = {
  easy: "Easy",
  moderate: "Moderate",
  challenging: "Challenging",
};

const altitudeLabelMap: Record<string, string> = {
  low: "Low",
  moderate: "1,500–3,000m",
  high: "3,000–4,500m",
  "very-high": "4,500m+",
};

export const destinations: Destination[] = [
  // ─────────────────────────────────────────────────────────────────
  // 1. ZHANGJIAJIE  — search ~50,000
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "zhangjiajie",
    name: "Zhangjiajie",
    landscape: "mountains",
    landscapeLabel: "Mountains",
    seasons: ["spring", "autumn"],
    difficulty: "moderate",
    altitude: "low",
    days: "3 days",
    reason: "3,000 sandstone pillars that inspired Avatar, plus the world's tallest outdoor elevator.",
    tagline: "China's Avatar Mountains — 3,000+ quartz-sandstone pillars rising from a misty subtropical forest, with the world's tallest outdoor elevator and the longest glass bridge.",
    metaDescription: "Zhangjiajie travel guide 2026: tickets, best time to visit, how to get there, where to stay, and the 3-day itinerary for the Avatar mountains in Hunan, China.",
    rating: 9.4,
    guide: {
      location: "Hunan, 32km from Zhangjiajie city",
      ticket: "Forest park ~CNY 225 (4-day); elevators extra",
      transport: "High-speed rail to Zhangjiajie West, then shuttle to Wulingyuan gate",
      tips: "Stay in Wulingyuan and enter at opening time to beat elevator queues",
    },
    url: "https://zhangjiajie-national-park.com",
    heroImg: "/images/mountains-zhangjiajie.webp",
    heroImgAlt: "Quartz-sandstone pillars of Zhangjiajie National Forest Park in Hunan, China",
    physical: {
      type: "Quartz-sandstone pillars (karst-like)",
      elevation: "1,580m at highest pillar, valleys near 500m",
      area: "397 km² (national park core), 2,640 km² total scenic zone",
      climate: "Subtropical monsoon, 1,400mm rainfall, frequent mist",
      unesco: "Wulingyuan Scenic Area — UNESCO 1992",
    },
    culture: "The pillars have inspired Chinese landscape painting for over a thousand years, and 'Hallelujah Mountain' in Yuanjiajie was officially renamed in 2010 to honor the role they played in James Cameron's Avatar. Local Tujia minority villages still live in the buffer zone, and traditional Tujia bamboo crafts and rice wine are sold at the south gate of the park.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Lush green, fresh after the rains, mist drifts between pillars — the most atmospheric season. Temperatures 15–25°C. Crowds build around Labour Day (May 1–3).", score: 9 },
      { label: "Summer (Jun–Aug)", text: "Hot (25–32°C) and humid, with sudden afternoon thunderstorms. Views are clear in the morning but haze builds by afternoon. School-holiday crowds are heavy.", score: 6 },
      { label: "Autumn (Sep–Nov)", text: "Clearest skies of the year, golden foliage at higher elevations, temperatures 12–22°C. Avoid Golden Week (Oct 1–7) — the busiest week in China.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Quiet, cold (0–8°C) and occasionally snowy — pillars dusted white are the most photogenic. Some cable cars close in heavy ice; pack layers.", score: 7 },
    ],
    cost: {
      budget: "CNY 350/day (hostel dorm, park bus, street food)",
      mid: "CNY 800/day (3-star hotel, all tickets, mid-range meals)",
      splurge: "CNY 1,800+/day (5-star Wulingyuan hotel, private car, all upgrades)",
    },
    proTips: [
      "Buy the 4-day park pass even for a 2-day visit — the extra day lets you wait out weather",
      "Take the Bailong Elevator up and walk down via the Golden Whip Stream trail — opposite of the cable car crowds",
      "Stay in Wulingyuan town, not in Zhangjiajie city — 30 minutes closer to the south gate",
      "Buy a paper map in town: phone signal drops in many of the deep canyons",
      "Photograph Avatar Hallelujah Mountain before 10am — east-facing pillars are flat-lit by lunchtime",
    ],
    images: [
      { src: "/images/mountains-zhangjiajie.webp", alt: "Sandstone pillars above mist in Zhangjiajie", caption: "Yuanjiajie's pillar forest at sunrise" },
      { src: "/images/wildlife-snub-nosed-monkey.webp", alt: "Golden snub-nosed monkey in a Hunan forest", caption: "Wildlife in the Wulingyuan buffer zone" },
    ],
    intro: "Zhangjiajie is China's most surreal landscape — more than 3,000 quartz-sandstone pillars rising out of a subtropical forest, the same scenery that inspired the floating mountains in Avatar. It is absolutely worth visiting, and it is one of the few places in China where the reality lives up to the postcard. Most travelers spend three days here: two in Zhangjiajie National Forest Park (the pillar forest) and one at Tianmen Mountain (the glass skywalk and 999-step staircase).",
    highlights: [
      "Walk the Avatar Hallelujah Mountain viewpoints in Yuanjiajie — the pillar forest that made the park famous",
      "Ride the Bailong Elevator, the world's tallest outdoor lift, up 326m of cliff face in 88 seconds",
      "Cross the Zhangjiajie Grand Canyon glass bridge, suspended 300m above the canyon floor",
      "Climb Tianmen Mountain's 999 steps and walk its vertigo-inducing glass skywalk",
    ],
    howToGetThere: "High-speed rail is the easiest route — Zhangjiajie West station is on the Changsha–Zhangjiajie line (about 3 hours from Changsha, under 6 from Guangzhou). From the station, shuttle buses and taxis run to the Wulingyuan gate, the main entrance to the forest park. If you fly, Zhangjiajie Hehua (DYG) airport is 40 minutes from the scenic area.",
    bestTime: "April to November. Spring (April–May) brings fresh green and misty pillar views; autumn (September–November) gives clear skies and golden color. Avoid Golden Week (early October) and July–August, when crowds and heat peak. Winter is quiet and occasionally snowy — beautiful but icy trails may close.",
    itineraries: [
      { days: "Day 1", title: "Yuanjiajie + Avatar pillars", detail: "Enter at Wulingyuan gate, ride the Bailong Elevator up, and walk the Yuanjiajie loop for the Avatar Hallelujah Mountain and First Bridge Under Heaven." },
      { days: "Day 2", title: "Tianzi Mountain + Grand Canyon", detail: "Take the shuttle to Tianzi Mountain for pillar-panorama viewpoints, then the glass bridge over Zhangjiajie Grand Canyon in the afternoon." },
      { days: "Day 3", title: "Tianmen Mountain", detail: "Ride the world's longest cable car to Tianmen Mountain, climb the 999 steps to Heaven's Gate, and walk the cliff-hugging glass skywalk." },
    ],
    faqs: [
      { q: "Is Zhangjiajie the Avatar mountains?", a: "Yes — the floating Hallelujah Mountains in James Cameron's Avatar were inspired by the sandstone pillars of Zhangjiajie, and a pillar in Yuanjiajie has been officially renamed 'Avatar Hallelujah Mountain'." },
      { q: "How many days do you need in Zhangjiajie?", a: "Three full days is the sweet spot: two for Zhangjiajie National Forest Park and one for Tianmen Mountain. You can compress it to two days if you skip the glass bridge." },
      { q: "How much is the Zhangjiajie ticket?", a: "The forest park pass is about CNY 225 and is valid for four days. Cable cars, the Bailong Elevator and the glass bridge cost extra — budget roughly CNY 500–700 total for transport inside the park." },
      { q: "Is Zhangjiajie worth visiting?", a: "Yes — it is one of China's most unique and dramatic natural sights, and worth a dedicated trip even if you have seen dozens of mountain photos. Just avoid peak-holiday crowds." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. HUANGSHAN  — search ~3,000
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "huangshan",
    name: "Huangshan",
    landscape: "mountains",
    landscapeLabel: "Mountains",
    seasons: ["year-round"],
    difficulty: "moderate",
    altitude: "moderate",
    days: "2–3 days",
    reason: "The 'loveliest mountain of China' — granite pines, cloud seas and sunrise above the mist.",
    tagline: "The 'loveliest mountain of China' — granite spires, 1,500-year-old pines and a sea of clouds that has inspired a thousand years of ink painting.",
    metaDescription: "Huangshan (Yellow Mountain) travel guide 2026: tickets, best time to visit, sunrise viewing spots, where to stay overnight on the summit, and the 2-day Anhui itinerary.",
    rating: 9.3,
    guide: {
      location: "Anhui, 1.5h from Huangshan city",
      ticket: "~CNY 190 + cable cars ~CNY 80–90",
      transport: "High-speed rail to Huangshan North, then bus to the scenic area",
      tips: "Stay one night on the summit to catch sunrise without the dawn climb",
    },
    heroImg: "/images/mountains-huangshan.webp",
    heroImgAlt: "Granite peaks of Huangshan in Anhui, China",
    physical: {
      type: "Granite peaks with U-shaped glacial valleys",
      elevation: "1,864m at Lotus Peak (highest); Bright Summit 1,860m",
      area: "1,200 km² scenic area, 154 km² core zone",
      climate: "Subtropical highland, cool summers, snowy winters, frequent sea-of-clouds in spring",
      unesco: "Mount Huangshan — UNESCO 1990 (mixed cultural + natural)",
    },
    culture: "Huangshan has been a touchstone of Chinese landscape art since the Song dynasty — the painter Mei Qing built a studio here, and the mountain features in the works of Shitao and Huang Binhong. Its iconic pines, including the 1,500-year-old Greeting Guest Pine, are cultural symbols featured on stamps, paintings and even the official logo of Anhui province.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Azalea bloom across the slopes, temperatures 8–18°C. Mist is more common than clear skies — a feature, not a bug, for classical Chinese landscape photography.", score: 8 },
      { label: "Summer (Jun–Aug)", text: "Cooler than the lowlands (15–25°C) and the greenest season. Afternoon thunderstorms, hotel rates at peak, and lots of Chinese domestic tourists.", score: 7 },
      { label: "Autumn (Sep–Nov)", text: "Clearest skies of the year, brilliant red maple leaves, temperatures 6–18°C. Best balance of views, weather and crowds.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Snow-covered pines and rime ice — Huangshan's most photogenic season, with far fewer crowds. Temperatures -5 to 5°C; some cable cars close in heavy snow.", score: 9 },
    ],
    cost: {
      budget: "CNY 400/day (dorm or summit hostel, basic meals, bus)",
      mid: "CNY 900/day (summit 3-star hotel, all tickets, decent meals)",
      splurge: "CNY 2,200+/day (5-star summit hotel like Xihai, private guide)",
    },
    proTips: [
      "Book summit hotels weeks ahead — even mid-range beds sell out on weekends and in October",
      "Take the Yungu cable car up and Yuping cable car down — different scenery, similar crowds, less walking",
      "Watch sunrise from Bright Summit, not the more famous Refreshing Terrace — fewer people, equal views",
      "Buy a stick of bamboo on the way up for CNY 5 — the stone steps are relentless without one",
      "Pack a headlamp; summit paths are unlit before dawn and the cable cars do not open until 6:30am",
    ],
    images: [
      { src: "/images/mountains-huangshan.webp", alt: "Granite peaks and twisted pines of Huangshan at sunrise", caption: "Sunrise from Bright Summit" },
    ],
    intro: "Huangshan (Yellow Mountain) is widely considered the most beautiful mountain in China — a granite range of spires, twisted pines and a legendary 'sea of clouds' that has inspired classical Chinese ink painting for a thousand years. It is worth visiting for the sunrise alone, and it is far more accessible than its altitude suggests thanks to modern cable cars. Most travelers spend two days: one day hiking up and exploring the summit, then a night on top to catch the dawn.",
    highlights: [
      "Watch the sunrise over the sea of clouds from Bright Summit or Refreshing Terrace",
      "See the Greeting Guest Pine, the 1,500-year-old tree that is China's most photographed pine",
      "Hike the West Sea Grand Canyon, the most dramatic and least crowded trail on the mountain",
      "Soak in the hot springs at the foot of the mountain after your descent",
    ],
    howToGetThere: "High-speed rail to Huangshan North station (about 2.5 hours from Shanghai, 5 from Beijing), then a shuttle bus or taxi to the Tangkou scenic-area base. From there, take the park bus to the cable-car stations — the Yungu cable car up the east side is the most popular route.",
    bestTime: "Year-round, but the character changes dramatically. Spring (April–May) brings azalea bloom; autumn (September–November) gives clear skies and crisp views; winter (December–February) offers snow-covered pines and fewer crowds — the most photogenic season if you can handle the cold. Avoid Golden Week and summer weekends.",
    itineraries: [
      { days: "Day 1", title: "Summit + West Sea Grand Canyon", detail: "Take the Yungu cable car up, drop your bag at the summit hotel, then hike the West Sea Grand Canyon loop and catch sunset from Bright Summit." },
      { days: "Day 2", title: "Sunrise + descent", detail: "Wake before dawn for sunrise, see the Greeting Guest Pine, then hike down (or ride the cable car) and head to the hot springs." },
    ],
    faqs: [
      { q: "How hard is the Huangshan hike?", a: "Moderate. With the cable cars you can skip the steepest ascent and still walk the summit trails, which involve thousands of stone steps. The West Sea Grand Canyon descent is strenuous — allow a full afternoon." },
      { q: "Do you need to stay overnight on Huangshan?", a: "You don't have to, but staying one night at a summit hotel is the only practical way to see the famous sunrise and sea of clouds. Book weeks ahead in peak season — summit beds sell out." },
      { q: "What is the best time to visit Huangshan?", a: "Autumn (September–November) for the clearest views, or winter (December–February) for snow scenes with far fewer crowds. Spring is lush but often foggy; summer is hot and busy." },
      { q: "Is Huangshan worth the climb?", a: "Yes — it is consistently ranked China's most beautiful mountain, and even with cable cars it delivers views that justify the trip for any first-time visitor to China's nature." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. JIUZHAIGOU  — search ~8,000
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "jiuzhaigou",
    name: "Jiuzhaigou Valley",
    landscape: "lakes",
    landscapeLabel: "Lakes",
    seasons: ["autumn"],
    difficulty: "easy",
    altitude: "moderate",
    days: "2–3 days",
    reason: "Unreal turquoise lakes, waterfalls and snow peaks in a Tibetan valley — best in autumn color.",
    tagline: "China's most photogenic water — over 100 tiered lakes in impossible shades of turquoise, linked by travertine waterfalls and framed by snow peaks on the edge of Tibet.",
    metaDescription: "Jiuzhaigou Valley travel guide 2026: tickets, autumn color dates, how to get there from Chengdu, the 2-day itinerary, and FAQs for the Sichuan UNESCO park.",
    rating: 9.5,
    guide: {
      location: "Sichuan, 400km north of Chengdu",
      ticket: "~CNY 169–280; advance reservation required",
      transport: "Fly from Chengdu (1h) or bus (8h); book tickets online first",
      tips: "Go in late October for peak color, enter at 7am, buy tickets days ahead",
    },
    heroImg: "/images/lakes-jiuzhaigou.webp",
    heroImgAlt: "Turquoise terraced lakes of Jiuzhaigou Valley in Sichuan, China",
    physical: {
      type: "Travertine (calcium-carbonate) lake terraces in glacial U-valley",
      elevation: "Valley floor 2,000m, peaks above 4,500m",
      area: "720 km² (core), buffer zone 600 km²",
      climate: "Plateau sub-arctic, cold winters, mild summers, autumn dry and stable",
      unesco: "Jiuzhaigou Valley — UNESCO 1992",
    },
    culture: "The valley is home to nine Tibetan villages, and around 10% of residents are ethnic Tibetan — you will see prayer flags, white chortens, and mani stone piles throughout the park. The name 'Jiuzhaigou' means 'Nine Village Valley' and refers to the original nine fortified Tibetan hamlets along the three branches of the valley.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Snowmelt swells the waterfalls, but the lakes are still settling after winter. Fewer visitors; bring layers — 5–18°C and rain is common.", score: 7 },
      { label: "Summer (Jun–Aug)", text: "Lush green forest, 18–25°C, busiest season. Water levels are high but the lakes lose their translucent turquoise for a deeper blue.", score: 6 },
      { label: "Autumn (Sep–Nov)", text: "The classic Jiuzhaigou — golden and red foliage against impossibly turquoise water, stable weather, 5–18°C. Book tickets and hotels 4+ weeks ahead.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Snowy and quiet, some high-elevation trails close. Partially frozen lakes with ice-blue water beneath. Temperatures -5 to 8°C.", score: 7 },
    ],
    cost: {
      budget: "CNY 500/day (basic hotel near park, park tickets, simple meals)",
      mid: "CNY 1,100/day (4-star hotel in Zhangzha town, all tickets)",
      splurge: "CNY 2,500+/day (Banyan Tree or similar luxury resort inside the park)",
    },
    proTips: [
      "Book tickets the day they release (usually 14 days ahead) — daily cap sells out by mid-October",
      "Take the park bus all the way to Long Lake first, then walk downhill — opposite of the morning crowd flow",
      "Spend two days if you can: the lower Shuzheng branch is far less crowded than the upper valleys",
      "Photograph Five Flower Lake between 10am and noon — that's when the sun is high enough to light the lake bed",
      "Stay in Zhangzha town, not Jiuzhaigou town: it's 5 minutes from the gate and full of mid-range hotels",
    ],
    images: [
      { src: "/images/lakes-jiuzhaigou.webp", alt: "Turquoise tiered lakes of Jiuzhaigou in autumn", caption: "Five Flower Lake at midday" },
      { src: "/images/wildlife-panda-forest.webp", alt: "Bamboo forest in Sichuan's highlands", caption: "Biodiversity of the buffer zone" },
    ],
    intro: "Jiuzhaigou Valley is the most photogenic water in China — over 100 tiered lakes in impossible shades of turquoise and blue, linked by waterfalls and framed by snow peaks. It is worth visiting as a standalone trip, and it is one of the easiest big sights in China to explore: a park bus shuttles you between boardwalk viewpoints, so you see everything without hard hiking. Most travelers spend one full day in the park, two if they want to linger.",
    highlights: [
      "See Five Flower Lake, the famous shallow lake whose turquoise and green colors look retouched but are completely real",
      "Walk the boardwalk beside Nuorilang Waterfall, the widest travertine waterfall in China",
      "Look for the mirror reflection on Long Lake, the park's highest and deepest lake",
      "Visit the Tibetan villages of Shuzheng and Heye for a cultural stop between viewpoints",
    ],
    howToGetThere: "Fly from Chengdu to Jiuzhai Huanglong Airport (about 1 hour), then take a shuttle or taxi the 90km to the park entrance. Alternatively, drive or bus from Chengdu — about 8 hours through the mountains. Book both park tickets and accommodation ahead: Jiuzhaigou has a strict daily visitor cap.",
    bestTime: "Autumn, specifically mid-September to late October, when the valley's foliage turns gold and red against the turquoise lakes. Spring (April–May) is lush but the water is lower; summer is green and busy; winter is a quiet snowscape with fewer open viewpoints. The park closes sections after heavy snow.",
    itineraries: [
      { days: "Day 1", title: "Upper valley (Zechawa + Rize)", detail: "Enter at opening time, ride the bus to Long Lake, then work down through Five Flower Lake, Pearl Shoal and Nuorilang Waterfall." },
      { days: "Day 2", title: "Shuzheng valley + exit", detail: "Walk the Shuzheng lakes and villages, revisit any viewpoint you missed, and leave via the main gate." },
    ],
    faqs: [
      { q: "When is the best time to visit Jiuzhaigou?", a: "Mid-September to late October for the famous autumn color — the lakes and fall foliage together are the classic Jiuzhaigou image. Book tickets and hotels weeks ahead for October." },
      { q: "Do you need to book Jiuzhaigou tickets in advance?", a: "Yes — Jiuzhaigou has a daily visitor cap and tickets are tied to your passport or ID, so you must reserve online before arriving. Same-day entry is usually not possible in peak season." },
      { q: "Is Jiuzhaigou open year-round?", a: "The park is open year-round, but some high-elevation viewpoints and trails close after heavy snow in winter. Check the official notice before booking a winter visit." },
      { q: "How much does Jiuzhaigou cost?", a: "Entry is roughly CNY 169 in the low season and up to CNY 280 in peak season, plus a mandatory park bus ticket. The on-site shuttle is the only way to move between viewpoints." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 4. GUILIN & YANGSHUO  — search ~15,000
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "guilin-yangshuo",
    name: "Guilin & Yangshuo",
    landscape: "karst",
    landscapeLabel: "Karst",
    seasons: ["spring", "summer", "autumn"],
    difficulty: "easy",
    altitude: "low",
    days: "3–4 days",
    reason: "Iconic karst peaks, bamboo rafts and bike rides through rice fields — the classic China postcard.",
    tagline: "The classic China postcard — tower karst peaks above the Li River, bamboo rafts, rice paddies and the easiest introduction to China's natural landscape.",
    metaDescription: "Guilin and Yangshuo travel guide 2026: Li River cruise vs Yulong bamboo rafts, best time to visit, 3-day itinerary, and FAQs for the Guangxi karst landscape.",
    rating: 9.0,
    guide: {
      location: "Guangxi, southern China",
      ticket: "Li River cruise ~CNY 360; parks from CNY 60",
      transport: "Fly to Guilin (KWL) or high-speed rail from Guangzhou (2.5h)",
      tips: "Skip the big boats — a Yulong River bamboo raft is quieter and prettier",
    },
    url: "https://guilin-yang-shuo.com",
    heroImg: "/images/karst-li-river.webp",
    heroImgAlt: "Karst peaks along the Li River in Guilin, China",
    physical: {
      type: "Tower karst (limestone peaks rising from flat alluvial plain)",
      elevation: "Peaks typically 100–400m, river at 150m",
      area: "Scenic area covers ~2,000 km², Li River 83km between Guilin and Yangshuo",
      climate: "Subtropical humid monsoon, mild winters (5–15°C), hot summers (25–32°C)",
      unesco: "South China Karst (Guilin phase) — UNESCO 2007, extended 2014",
    },
    culture: "The Li River has been painted by Chinese landscape artists for over a thousand years, and the scene of a cormorant fisherman with bamboo raft under karst peaks is iconic in ink painting. Guilin's water-and-peaks were the original inspiration for the phrase 'Guilin's scenery is the finest under heaven', coined in the Song dynasty.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Lush green, rice paddies filling, light rain and mist. 18–26°C. Photogenic but occasionally overcast — pack a light rain jacket.", score: 8 },
      { label: "Summer (Jun–Aug)", text: "Hot (28–33°C) and humid, with the heaviest rains in May–June. Rivers are full; karst peaks sometimes hidden in mist. School-holiday crowds.", score: 6 },
      { label: "Autumn (Sep–Nov)", text: "Clearest skies of the year, comfortable 18–26°C, rice harvest turns fields golden in late September. The recommended season for first-timers.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Mild (5–15°C), driest, least crowded. Karst is brown rather than green but visibility is excellent; bring layers for the boat.", score: 7 },
    ],
    cost: {
      budget: "CNY 350/day (Yangshuo hostel, bamboo raft, bicycle, street food)",
      mid: "CNY 700/day (Yangshuo boutique hotel, Li River cruise, mid-range meals)",
      splurge: "CNY 1,800+/day (Yangshuo 5-star like Banyan Tree, private boat, fine dining)",
    },
    proTips: [
      "Stay in Yangshuo, not Guilin — the karst is closer, the town is walkable, and the food scene is better",
      "Skip the four-hour big cruise boat — a 2-hour Yulong River bamboo raft with a 4-person crew is the same scenery for less money and crowds",
      "Bike the Yulong River loop, not the Li River road — quieter lanes through rice paddies and village houses",
      "Sunset from Xianggong Hill is iconic, but get there 30 minutes early to claim a spot on the small platform",
      "Add a half-day trip to Longji Rice Terraces (north of Guilin) — the most spectacular terraces are 90 minutes further than the closer viewpoints",
    ],
    images: [
      { src: "/images/karst-li-river.webp", alt: "Karst peaks along the Li River near Xingping", caption: "The classic 20-yuan banknote view" },
      { src: "/images/karst-yangshuo.webp", alt: "Limestone peaks above rice paddies in Yangshuo", caption: "Yulong River valley in autumn" },
      { src: "/images/terraces-yuanyang.webp", alt: "Longji rice terraces flooded in spring", caption: "Longji Rice Terraces, 90 minutes north" },
    ],
    intro: "Guilin and Yangshuo are the classic China postcard — tower karst peaks rising above a lazy river, with bamboo rafts, rice paddies and limestone caves. It is the easiest introduction to China's nature, with no altitude and mature tourist infrastructure, and it is genuinely worth visiting for first-timers and families. Most travelers spend three to four days: one on the Li River, one cycling around Yangshuo, and one exploring caves and hilltop viewpoints.",
    highlights: [
      "Cruise or raft the Li River, the 83km stretch of karst scenery printed on China's 20-yuan banknote",
      "Bike through the Yulong River valley past rice fields and under limestone towers",
      "Ride a bamboo raft down the Yulong River — quieter and prettier than the big cruise boats",
      "Watch the sunset from Xianggong Hill, the famous viewpoint over the Li River bend",
    ],
    howToGetThere: "Fly into Guilin Liangjiang (KWL) airport, or take a high-speed train — Guilin is about 2.5 hours from Guangzhou and 3 from Shenzhen. From Guilin, the Li River cruise or a 90-minute road transfer takes you down to Yangshuo, where most visitors base themselves.",
    bestTime: "April to November. Spring (April–May) is green with light rain and mist — atmospheric but sometimes overcast; summer (June–August) is hot and lush; autumn (September–November) gives the clearest skies and pleasant temperatures. Avoid the July–August heat and the rainy May–June stretch if you want guaranteed views.",
    itineraries: [
      { days: "Day 1", title: "Li River cruise to Yangshuo", detail: "Take the Li River cruise from Guilin down to Yangshuo, then wander West Street in the evening." },
      { days: "Day 2", title: "Yulong River + cycling", detail: "Cycle or scooter the Yulong River valley in the morning, ride a bamboo raft, and catch sunset from Xianggong Hill." },
      { days: "Day 3", title: "Caves + Rice Terraces day trip", detail: "Visit the Reed Flute Cave or a hilltop viewpoint, or take a day trip to the Longji Rice Terraces north of Guilin." },
    ],
    faqs: [
      { q: "How many days do you need in Guilin and Yangshuo?", a: "Three to four days is ideal: one for the Li River cruise, one for cycling and rafting around Yangshuo, and one for caves or a rice-terrace day trip. Two days is the minimum if you are short on time." },
      { q: "Is the Li River cruise worth it?", a: "Yes, but choose carefully — the big four-hour cruise boat is scenic but busy. Many travelers prefer the smaller bamboo rafts on the Yulong River, which are quieter and get you closer to the karst peaks." },
      { q: "What is the best time to visit Guilin?", a: "September to November for clear skies and pleasant weather, or April to May for lush green with occasional mist. Avoid the summer heat and the heaviest rains of May–June." },
      { q: "Is Guilin worth visiting?", a: "Yes — for a first trip to China's nature it is the easiest and most scenic entry point, with no altitude, good infrastructure and the exact karst landscape you have seen in photos." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 5. ZHANGYE DANXIA  — search ~1,500
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "zhangye-danxia",
    name: "Zhangye Danxia",
    landscape: "danxia",
    landscapeLabel: "Danxia",
    seasons: ["year-round"],
    difficulty: "easy",
    altitude: "low",
    days: "1–2 days",
    reason: "Rainbow-striped hills that look like a painting — most vivid at sunrise and sunset.",
    tagline: "The Rainbow Mountains — striped ridges of red, orange and cream sandstone that look airbrushed but are entirely natural, formed over 24 million years of mineral deposition.",
    metaDescription: "Zhangye Danxia travel guide 2026: how to visit the rainbow mountains from Zhangye or Jiayuguan, best time for color, ticket prices, and the Silk Road pair-up with Pingshan Lake Canyon.",
    rating: 8.6,
    guide: {
      location: "Gansu, 40km from Zhangye city",
      ticket: "~CNY 75 + shuttle bus",
      transport: "Fly or high-speed rail to Zhangye, then taxi to the park",
      tips: "Go at sunset; the west gate has shorter lines than the main entrance",
    },
    heroImg: "/images/danxia-zhangye.webp",
    heroImgAlt: "Rainbow-striped danxia cliffs of Zhangye in Gansu, China",
    physical: {
      type: "Danxia landform (red sandstone and mineralized conglomerate)",
      elevation: "1,500–2,500m, rolling ridges and cliff bands",
      area: "510 km² scenic area, four official viewing platforms",
      climate: "Continental semi-arid, cold winters (-15 to 5°C), warm summers (15–30°C)",
      unesco: "Not UNESCO (proposed 2010; remains a national geopark)",
    },
    culture: "The Silk Road passed within 30km of the park for over a thousand years, and caravans traveling between Chang'an (Xi'an) and Dunhuang would have used the ridges as a landmark. The area was first photographed for international audiences in 2005 by a Chinese photographer whose images went viral and triggered a tourism boom.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Mild (5–22°C), wildflowers along the access road, fewer crowds. Colors are clear but not yet at their most saturated.", score: 8 },
      { label: "Summer (Jun–Aug)", text: "Warm (15–30°C), sun is high and harshest at midday — colors look washed out. Avoid 11am–3pm; the morning and evening are still excellent.", score: 6 },
      { label: "Autumn (Sep–Nov)", text: "Clear air, cool (5–20°C), low sun angles. Best balance of color saturation, weather and crowd levels.", score: 9 },
      { label: "Winter (Dec–Feb)", text: "Cold (-15 to 5°C), occasional snow, almost no tourists. Striped hills dusted with snow are striking; some viewpoints may be slippery.", score: 8 },
    ],
    cost: {
      budget: "CNY 300/day (Zhangye hostel, taxi, park tickets, simple meals)",
      mid: "CNY 600/day (3-star hotel, all tickets and transfers)",
      splurge: "CNY 1,200+/day (4-star Danxia hotel, private driver, photographer guide)",
    },
    proTips: [
      "Enter via the west gate, not the main north gate — half the lines, same access to all four platforms",
      "Photograph Platform 2 at sunset, Platform 1 at sunrise — they have the most colorful exposures",
      "Pair with Pingshan Lake Grand Canyon (30 minutes away) the next morning — a quieter, more dramatic landscape",
      "Bring a polarizing filter — it cuts the haze and brings out the layer colors you cannot see with the naked eye",
      "Do not climb on the ridges — fines are steep and the soft sandstone erodes easily",
    ],
    images: [
      { src: "/images/danxia-zhangye.webp", alt: "Rainbow-striped danxia cliffs of Zhangye at sunset", caption: "Platform 2 at golden hour" },
    ],
    intro: "Zhangye Danxia is the 'rainbow mountains' of China — striped ridges of red, orange and cream sandstone that look airbrushed but are entirely natural, formed over 24 million years of mineral deposition. It is worth visiting as a one-day photography stop on a Silk Road route, and it is one of the easiest big sights in China to see: boardwalks and shuttle buses run between viewpoints, with no hiking required. Most travelers need just half a day, timed for sunset.",
    highlights: [
      "See the striped hills from the four main viewing platforms, each with a different angle on the colors",
      "Time your visit for late afternoon, when low sunlight saturates the reds and oranges",
      "Photograph the 'rainbow' layers at their most vivid just before sunset",
      "Pair it with the nearby Pingshan Lake Grand Canyon for a second, quieter desert landscape",
    ],
    howToGetThere: "Fly or take high-speed rail to Zhangye city (on the Lanzhou–Urumqi line), then a taxi or shuttle the 40km to the Danxia park. The main north gate and the quieter west gate both have shuttle buses that loop the viewing platforms.",
    bestTime: "Year-round, but the colors are strongest in clear weather — spring and autumn are ideal. Sunset and the hour after sunrise give the most saturated reds. Avoid midday in summer, when the light flattens the stripes and the heat is intense. Winter is cold but offers clear air and far fewer visitors.",
    itineraries: [
      { days: "Half-day", title: "Danxia at sunset", detail: "Arrive mid-afternoon, ride the shuttle through the four platforms, and stay for the golden hour when the striped hills glow." },
    ],
    faqs: [
      { q: "Are the Zhangye rainbow mountains real?", a: "Yes — the stripes are real layers of sandstone colored by iron and other minerals over 24 million years. The colors are naturally vivid, especially at sunset, though heavily edited photos exaggerate the saturation you will see with your own eyes." },
      { q: "When is the best time to see Zhangye Danxia?", a: "Late afternoon to sunset, when low light saturates the reds and oranges. Clear, dry weather gives the strongest color; avoid midday and overcast days." },
      { q: "How do you get to Zhangye Danxia?", a: "Take a taxi or shuttle from Zhangye city, about 40km away. The park has shuttle buses between four viewing platforms, so no hiking is required." },
      { q: "How much is the Zhangye Danxia ticket?", a: "Entry is about CNY 75 plus a shuttle bus, and the ticket covers all viewing platforms. It is one of the cheaper major sights in China." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 6. DUNHUANG & GOBI  — desert, Silk Road
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "dunhuang-gobi",
    name: "Dunhuang & Gobi",
    landscape: "deserts",
    landscapeLabel: "Deserts",
    seasons: ["spring", "autumn"],
    difficulty: "easy",
    altitude: "low",
    days: "3 days",
    reason: "Singing sand dunes, the Crescent Lake oasis and Mogao Caves on the Silk Road.",
    tagline: "End of the ancient Silk Road — singing sand dunes, the Crescent Lake oasis, and the 1,600-year-old Mogao Buddhist cave temples carved into the desert cliffs.",
    metaDescription: "Dunhuang travel guide 2026: how to visit Mogao Caves and Crescent Lake, Silk Road itinerary, when to go, and the 3-day plan for the Gobi desert edge.",
    rating: 8.7,
    guide: {
      location: "Gansu, far west on the Silk Road",
      ticket: "Mogao Caves from CNY 238 (book ahead); dunes ~CNY 110",
      transport: "Fly to Dunhuang from Lanzhou/Xi'an, or overnight train",
      tips: "Mogao Caves sells out — reserve a week ahead; hit the dunes at dusk",
    },
    url: "https://dunhuang-jiuquan.com",
    heroImg: "/images/deserts-crescent-lake.webp",
    heroImgAlt: "Crescent Lake oasis at the foot of the singing sand dunes in Dunhuang",
    physical: {
      type: "Gobi desert basin with crescent barchan dunes and oasis springs",
      elevation: "1,138m in town, dunes up to 250m high",
      area: "Mogao Caves 0.4 km² of carved cliff; Crescent Lake 1.4 hectares",
      climate: "Continental desert, very dry, hot summers (up to 40°C), cold winters (-15 to 5°C)",
      unesco: "Mogao Caves — UNESCO 1987",
    },
    culture: "Mogao was founded in 366 CE when a monk carved the first cave into the sandstone cliff. Over the next thousand years, monks, merchants and pilgrims added 735 caves containing 2,100 Buddhist statues and 45,000 m² of wall paintings — a unique record of Silk Road trade, religion and art. The library cave (Cave 17) revealed 50,000+ manuscripts when rediscovered in 1900.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Mild (10–25°C), wildflowers in the oasis, fewer crowds. Best overall season for combining Mogao with the dunes.", score: 9 },
      { label: "Summer (Jun–Aug)", text: "Hot (25–40°C) and dusty, with sandstorms possible in July. The dunes are at their warmest; visit at sunrise or sunset only.", score: 5 },
      { label: "Autumn (Sep–Nov)", text: "Cool (5–22°C), clear skies, low humidity. Melon harvest season — try the local Hami melons. Recommended season.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Cold (-15 to 5°C), quiet, occasional snow on the dunes. Mogao Caves open year-round; the dunes are visited by almost no one.", score: 7 },
    ],
    cost: {
      budget: "CNY 400/day (Dunhuang guesthouse, public bus, simple meals)",
      mid: "CNY 800/day (3-star hotel, all tickets, taxi for the dunes)",
      splurge: "CNY 2,000+/day (Dunhuang 4-star, private guide, camel ride at sunset)",
    },
    proTips: [
      "Book Mogao Caves tickets at least 7 days ahead — only 6,000 daily visitors, all timed-entry",
      "Buy the Class A ticket (CNY 238) for the full 8-cave guided tour; the cheaper B and C tickets are far less rewarding",
      "Visit the dunes at sunset, not midday — the sand is too hot, and the dunes are unphotogenic flat-lit",
      "Stay one night in a desert camp — the stars over the Gobi are exceptional and the silence is unforgettable",
      "Bring a scarf, sunglasses and a layer of clothes even in summer — the temperature drops 15°C after sunset",
    ],
    intro: "Dunhuang was the last stop on the ancient Silk Road before caravans crossed the Taklamakan — a thousand-year-old oasis town where Buddhist monks carved 735 caves into a sandstone cliff and merchants traded silk for gold. Today the highlights are the Mogao Caves (a UNESCO treasure) and the singing sand dunes of Mingsha Shan, which contain a tiny spring-fed lake that has not dried up in 2,000 years.",
    highlights: [
      "Tour the Mogao Caves, the 1,600-year-old Buddhist grottoes with 45,000 m² of wall paintings",
      "Camel-trek or sand-board down the Mingsha Shan dunes at sunset",
      "See Crescent Lake, the spring-fed oasis tucked between 250m dunes",
      "Drive to the Yumen Pass and Yangguan Pass, the two ancient Silk Road gateways",
    ],
    howToGetThere: "Fly direct to Dunhuang (DNH) from Lanzhou, Xi'an or Urumqi. The airport is 13km from town. Or take the high-speed rail to Dunhuang via Liuyuan (the nearest station, 2 hours by connecting bus). The overnight train from Xi'an or Lanzhou is a budget option.",
    bestTime: "May, September and October — warm enough for the dunes, cool enough to walk the caves comfortably, low wind. Avoid July and August for heat and crowds; avoid winter if you plan a desert camp stay.",
    itineraries: [
      { days: "Day 1", title: "Mogao Caves + Dunhuang Museum", detail: "Morning guided tour of Mogao (2 hours), then the Dunhuang Museum in the afternoon for context." },
      { days: "Day 2", title: "Mingsha Dunes + Crescent Lake at sunset", detail: "Visit Mingsha Shan and Crescent Lake in the late afternoon, stay for sunset, and walk back under the stars." },
      { days: "Day 3", title: "Yumen Pass or desert camp", detail: "Half-day trip to Yumen Pass, or stay overnight in a desert camp for the stars." },
    ],
    faqs: [
      { q: "How do I book Mogao Caves tickets?", a: "Online at the official Mogao Caves website, up to 7 days in advance. Tickets are tied to your passport or ID and timed to a 30-minute entry window. Same-day is rarely possible in May–October." },
      { q: "Is Dunhuang worth the trip to the Gobi?", a: "Yes — it is the most rewarding Silk Road stop in China, combining the UNESCO Mogao Caves with surreal desert landscapes, and a 3-day trip fits comfortably into a wider Gansu itinerary." },
      { q: "Can I visit the dunes year-round?", a: "Yes, but July and August sand can reach 70°C and the camel rides are uncomfortable. Spring and autumn are the right balance of warm sand and tolerable temperatures." },
      { q: "How much is a trip to Dunhuang?", a: "Allow about CNY 1,500–2,000 for a 3-day mid-range trip (hotel, all tickets, meals and a taxi for the dunes). A desert camp adds CNY 400–800 per night." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 7. HULUNBUIR GRASSLAND
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "hulunbuir-grassland",
    name: "Hulunbuir Grassland",
    landscape: "grasslands",
    landscapeLabel: "Grasslands",
    seasons: ["summer"],
    difficulty: "easy",
    altitude: "low",
    days: "3 days",
    reason: "China's largest prairie — endless green, horse riding and Mongolian yurt stays in summer.",
    tagline: "China's largest prairie — endless rolling green, horse riding across the steppe, and overnight stays in a Mongolian yurt on the Russian border.",
    metaDescription: "Hulunbuir Grassland travel guide 2026: when to visit (summer only), how to get there from Hailar, the 3-day yurt and horseback itinerary, and FAQs for Inner Mongolia.",
    rating: 8.4,
    guide: {
      location: "Inner Mongolia, on the Russian border",
      ticket: "Grassland access via tour/camp, ~CNY 100–300",
      transport: "Fly to Hailar (HLD) from Beijing, then rent a car or join a tour",
      tips: "Go June–August for green grass; book yurt stays ahead in July",
    },
    heroImg: "/images/grasslands-shangri-la.webp",
    heroImgAlt: "Rolling green grasslands of Inner Mongolia under a wide sky",
    physical: {
      type: "Temperate steppe grassland with riverine wetlands",
      elevation: "600–800m",
      area: "93,000 km² of grassland, the largest in China",
      climate: "Continental sub-arctic, -25°C winters, 18–22°C summers, low rainfall",
      unesco: "Not UNESCO (Hulun Lake is a national nature reserve)",
    },
    culture: "Home to the Evenki reindeer herders in the north and the Mongolian herdsmen in the south — the grassland is the cultural heartland of the Bargu Mongol people, with their Naadam festival in July featuring wrestling, archery and horse racing. Yurt (ger) stays, horse-riding and lamb hotpot are central to the experience.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Grass is just turning green, temperatures 5–18°C, very few visitors. Cold nights and possible dust storms.", score: 5 },
      { label: "Summer (Jun–Aug)", text: "Lush green, 18–25°C, Naadam festival in July. The only recommended season — the grassland is a desert the rest of the year.", score: 10 },
      { label: "Autumn (Sep)", text: "Golden grass in early September, cooler (10–18°C), fewer crowds. Late September is the end of the season.", score: 7 },
      { label: "Winter (Oct–Mar)", text: "Brown, frozen, -25°C. Skating on the Erguna river is possible but the grassland is closed to tourism.", score: 2 },
    ],
    cost: {
      budget: "CNY 400/day (basic yurt camp, public bus, simple meals)",
      mid: "CNY 800/day (mid-range yurt with private bath, horse ride, guide)",
      splurge: "CNY 1,800+/day (luxury grassland resort, private guide, eagle demo)",
    },
    proTips: [
      "Only visit in summer — the rest of the year the grassland is brown, frozen, or both",
      "Join a 3-day group tour rather than driving — the area is huge, distances deceptive, and English is limited",
      "Stay at least one night in a yurt (ger) — it's the entire point, and the night sky over the steppe is exceptional",
      "Bring layers even in summer — temperatures can drop from 25°C to 8°C overnight",
      "Try the local lamb hotpot and salty milk tea — they're the standard grassland meals and surprisingly good",
    ],
    intro: "Hulunbuir is China's largest prairie — 93,000 km² of rolling grass on the Russian border, with the Erguna River bending through it and the occasional nomadic camp. It is a different kind of China: flat, wide, sparsely populated and culturally Mongolian rather than Han. Most travelers spend three days — a day to drive the central steppe, a day at a yurt camp with horse riding, and a day along the Erguna River.",
    highlights: [
      "Stay overnight in a traditional Mongolian yurt under the open steppe sky",
      "Ride a horse across the prairie with a Mongolian guide",
      "Drive the scenic route from Hailar to the Erguna River wetlands",
      "Watch the sunset over the endless grass with no horizon in sight",
    ],
    howToGetThere: "Fly to Hailar (HLD) from Beijing, Hohhot or Shanghai. From Hailar, the best way to explore is by rented car with a local driver, or a 3-day group tour. Public transport is limited and slow on the grassland.",
    bestTime: "Late June to early September, with July being peak season for the Naadam festival. Early September brings golden grass and fewer crowds, but most yurt camps close after mid-September.",
    itineraries: [
      { days: "Day 1", title: "Hailar to the central steppe", detail: "Drive 2–3 hours from Hailar to a yurt camp, settle in, and ride horses in the late afternoon." },
      { days: "Day 2", title: "Erguna River + wetlands", detail: "Drive to the Erguna River bend, see the wetland birdlife, and visit an Evenki reindeer herder's camp." },
      { days: "Day 3", title: "Naadam festival (if July) or grassland return", detail: "If visiting in July, attend the Naadam wrestling and archery. Otherwise, return to Hailar via the scenic Shiwei route." },
    ],
    faqs: [
      { q: "When is the best time to visit Hulunbuir?", a: "Late June to early September, with July the peak season for green grass and the Naadam festival. Outside these months the grassland is brown, frozen and closed to most tourism." },
      { q: "Do I need a tour for Hulunbuir?", a: "Recommended. The area is huge, distances are deceptive, and English is very limited. A 3-day group tour from Hailar covers all the highlights for around CNY 1,500–2,500." },
      { q: "What is a yurt stay like?", a: "Modern yurt camps range from basic (shared bath, no AC) to luxury (private bath, king bed, Mongolian restaurant). Most include dinner, breakfast and a horse-riding session." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 8. HAILUOGOU GLACIER
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "hailuogou-glacier",
    name: "Hailuogou Glacier",
    landscape: "glaciers",
    landscapeLabel: "Glaciers",
    seasons: ["winter", "spring"],
    difficulty: "moderate",
    altitude: "high",
    days: "2–3 days",
    reason: "A rare low-altitude glacier with an ice fall, hot springs and views of Mount Gongga.",
    tagline: "A rare low-altitude glacier descending into subtropical forest — ice fall, hot springs and clear views of Mount Gongga (7,556m), China's easternmost 7,000er.",
    metaDescription: "Hailuogou Glacier travel guide 2026: how to visit from Chengdu, the best season for clear Gongga views, hot spring hotels inside the park, and FAQs for the Sichuan glacier park.",
    rating: 8.3,
    guide: {
      location: "Sichuan, 300km from Chengdu",
      ticket: "~CNY 90 + cable car CNY 150",
      transport: "Bus from Chengdu (6h) via Luding, or drive",
      tips: "Winter has the clearest views; book the hot-spring hotel inside the park",
    },
    heroImg: "/images/glaciers-hailuogou.webp",
    heroImgAlt: "Hailuogou glacier descending into forest in Sichuan",
    physical: {
      type: "Modern valley glacier descending into temperate forest",
      elevation: "1,200m at park entrance, glacier terminus ~2,850m, Mount Gongga 7,556m",
      area: "350 km² scenic area, 1,080 km² Gongga Mountain reserve",
      climate: "Subtropical at base, alpine at glacier, mild summers (10–22°C), cold winters (-5 to 8°C)",
      unesco: "Not UNESCO (Gongga Mountain is a national nature reserve)",
    },
    culture: "The Hailuogou area is the homeland of the Tibetan Jiarong people, and the Ganzi Tibetan Autonomous Prefecture begins a few hours west. Local villages practice a mix of Tibetan Buddhism and agriculture, and the region is known for its stone tower houses and Tibetan barley wine.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Mild (5–20°C), rhododendrons in bloom at mid-elevations, glacier clearly visible. Good shoulder-season balance.", score: 8 },
      { label: "Summer (Jun–Aug)", text: "Cool (12–22°C) and rainy — clouds often hide Mount Gongga. The glacier is visible but the views are unreliable.", score: 6 },
      { label: "Autumn (Sep–Nov)", text: "Clearest skies of the year, golden foliage, 5–18°C. Best season for Mount Gongga views and photography.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Cold (-5 to 8°C), very clear skies, snow on the glacier. Hot springs are at their best; book the hot-spring hotel in advance.", score: 9 },
    ],
    cost: {
      budget: "CNY 400/day (basic hotel in Moxi town, park tickets, public bus)",
      mid: "CNY 900/day (hot-spring hotel inside the park, all tickets)",
      splurge: "CNY 2,000+/day (luxury resort like Gongga Mingyue, private guide)",
    },
    proTips: [
      "Stay one night in a hot-spring hotel inside the park — the onsen after a glacier day is unforgettable",
      "Take the cable car up and the sightseeing bus to Glacier No. 1 viewing platform — no hiking required to see the ice fall",
      "Visit in winter (December–February) for the clearest Gongga views and the best hot-spring experience",
      "Pack altitude meds if you plan to go above Camp 3 (3,500m) — the standard park is at 2,500m and easier to acclimatize",
      "Bring swimwear even in winter — the hot springs stay at 40°C year-round and the contrast with the snowy peaks is the point",
    ],
    intro: "Hailuogou (Hailuo Valley) is one of the lowest-altitude modern glaciers in the world — a 14km ice tongue descending from Mount Gongga (7,556m) down to 2,850m, where it meets a temperate forest and a system of hot springs. It is the rare glacier that requires no special equipment, and the combination of ice, hot springs and bamboo forest is unique in China. Most travelers spend two to three days: a day on the glacier, a day at the hot springs, and a day driving in from Chengdu or Kangding.",
    highlights: [
      "See the 1,080m ice fall cascading from the Gongga massif into the forest",
      "Soak in an outdoor hot spring with Mount Gongga rising above the steam",
      "Walk through the bamboo and rhododendron forest at the glacier's edge",
      "Drive over the snow-capped Jiajin Mountain pass on the way in from Chengdu",
    ],
    howToGetThere: "Drive or take a bus from Chengdu via Ya'an and Luding (about 6 hours). The new high-speed rail to Kangding cuts the drive to about 4 hours. From Kangding, Hailuogou is another 2 hours by car or bus.",
    bestTime: "Late October to early December for autumn color and clear Gongga views, or January to February for the clearest skies and best hot-spring weather. Avoid July and August for clouds and rain.",
    itineraries: [
      { days: "Day 1", title: "Arrive from Chengdu, hot springs", detail: "Drive in from Chengdu (6h) or Kangding (2h), check into the hot-spring hotel, and soak in the evening." },
      { days: "Day 2", title: "Glacier cable car + ice fall", detail: "Ride the cable car up, walk the glacier viewing platform, then descend to the forest trails." },
      { days: "Day 3", title: "Moxi town + return", detail: "Visit the Tibetan village of Moxi in the morning, then drive back to Chengdu or continue west to Kangding." },
    ],
    faqs: [
      { q: "Do I need hiking experience for Hailuogou?", a: "No — the cable car and park bus take you to all the main viewpoints. Only the Camp 3 area (3,500m) requires light hiking. The standard 2-day visit is suitable for all fitness levels." },
      { q: "Can you see Mount Gongga from Hailuogou?", a: "Yes, on clear days, especially October to February. The 7,556m peak is one of the most dramatic in China, rising directly above the glacier." },
      { q: "How much is a trip to Hailuogou?", a: "Mid-range 3-day trip from Chengdu: around CNY 2,500 per person including hotel, all tickets, hot spring, and bus transfers. Self-driving cuts some costs." },
      { q: "Is Hailuogou worth the long drive?", a: "Yes, especially combined with the Kangding area — it is the most accessible glacier in China and the hot-springs-in-front-of-snow-peak combination is unique." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 9. XISHUANGBANNA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "xishuangbanna",
    name: "Xishuangbanna",
    landscape: "forests",
    landscapeLabel: "Forests",
    seasons: ["winter", "spring"],
    difficulty: "easy",
    altitude: "low",
    days: "3 days",
    reason: "China's only tropical rainforest — wild elephants, tea mountains and Dai culture.",
    tagline: "China's only tropical rainforest — wild Asian elephants, ancient tea mountains, and the golden-roofed temples of the Dai minority on the Laos border.",
    metaDescription: "Xishuangbanna travel guide 2026: when to visit (winter only), how to see wild elephants at Wild Elephant Valley, the 3-day Dai culture and tea mountain itinerary.",
    rating: 8.5,
    guide: {
      location: "Yunnan, on the Laos border",
      ticket: "Botanical Garden ~CNY 75; Elephant Valley ~CNY 80",
      transport: "Fly to Jinghong (JHG) from Kunming or Chongqing",
      tips: "Come in winter for dry, cool weather; see elephants at morning feeding",
    },
    url: "https://yunnan-province.com",
    heroImg: "/images/forests-xishuangbanna.webp",
    heroImgAlt: "Tropical rainforest of Xishuangbanna in southern Yunnan",
    physical: {
      type: "Tropical seasonal rainforest, the only one in China",
      elevation: "500–2,000m, mostly below 1,000m",
      area: "19,000 km² prefecture, 240 km² nature reserves",
      climate: "Tropical monsoon, dry cool winters (15–25°C), hot wet summers (25–35°C)",
      unesco: "Not UNESCO (a national nature reserve since 1958)",
    },
    culture: "Xishuangbanna is the heartland of the Dai people — a Tai-speaking ethnic group whose Theravada Buddhism, golden-roofed pagodas and water-splashing Songkran festival distinguish them from Han China. The region is also the original home of pu'er tea, and tea-horse-road trade with Tibet and Southeast Asia shaped local culture for centuries.",
    whenToGo: [
      { label: "Spring (Mar–May)", text: "Dry, warm (20–30°C), Water Splashing Festival in mid-April. Excellent time to combine nature and culture.", score: 9 },
      { label: "Summer (Jun–Aug)", text: "Hot (25–35°C) and very wet, with daily monsoon rain. Forest trails can be muddy; some leeches in the jungle.", score: 5 },
      { label: "Autumn (Sep–Nov)", text: "Wet tail-end of the monsoon, 22–30°C. The forests are lusher, but days are partly rainy.", score: 7 },
      { label: "Winter (Dec–Feb)", text: "Dry, mild (15–25°C), clear skies. The recommended season — most comfortable, driest, best for trekking.", score: 10 },
    ],
    cost: {
      budget: "CNY 350/day (Jinghong hostel, public bus, simple meals)",
      mid: "CNY 700/day (4-star hotel, all tickets, group tours)",
      splurge: "CNY 1,800+/day (Anantara or similar 5-star, private guide)",
    },
    proTips: [
      "Come in winter (December–February) — the rest of the year is hot, wet or both",
      "Arrive at Wild Elephant Valley at opening time (8am) — that's when the elephants are at the feeding station",
      "Stay in Jinghong city, not at the parks — the city has better hotels and food",
      "Visit a Dai village at sunset — the golden roofs in the low light are the classic Xishuangbanna image",
      "Try the Dai-style barbecue and fresh tropical fruit — the food scene is a highlight",
    ],
    intro: "Xishuangbanna is China's only tropical region — a 19,000 km² prefecture of rainforest, wild Asian elephants and Dai minority villages bordering Laos. The forests are home to over 5,000 plant species and the largest wild elephant population in China, and the culture is distinct from Han China: Theravada Buddhism, golden pagodas and the famous Water Splashing Festival. Most travelers spend three days: a day at Wild Elephant Valley, a day in the Botanical Garden, and a day exploring Dai villages and tea mountains.",
    highlights: [
      "See wild Asian elephants at the Wild Elephant Valley, the best place in China to spot them",
      "Walk the canopy walkways in the Tropical Botanical Garden, the largest in China",
      "Tour a Dai village and see the golden-roofed pagodas at sunset",
      "Visit a pu'er tea mountain and taste fresh tea from ancient trees",
    ],
    howToGetThere: "Fly into Jinghong (JHG) from Kunming (45min), Shanghai, Chengdu or Bangkok. The airport is 5km from the city center. From Jinghong, take local buses, taxis or guided tours to the parks — there is no convenient public transport between the reserves.",
    bestTime: "November to April, with the dry winter months (December–February) the most comfortable. The Water Splashing Festival in mid-April is a cultural highlight if you don't mind the heat. Avoid June–August for monsoon rains.",
    itineraries: [
      { days: "Day 1", title: "Wild Elephant Valley", detail: "Drive 1 hour from Jinghong to Wild Elephant Valley, arrive at opening for the elephant feeding, walk the canopy boardwalk." },
      { days: "Day 2", title: "Botanical Garden + Mengle Temple", detail: "Visit the 1,500-acre Tropical Botanical Garden, then the golden Mengle Buddhist pagoda." },
      { days: "Day 3", title: "Dai village + tea mountain", detail: "Drive to a Dai village, see traditional houses and temples, then visit a pu'er tea mountain and taste fresh tea." },
    ],
    faqs: [
      { q: "When is the best time to visit Xishuangbanna?", a: "November to April, with the dry winter (December–February) most comfortable. The Water Splashing Festival in mid-April is the cultural highlight. Avoid the June–August monsoon." },
      { q: "Can you see wild elephants at Wild Elephant Valley?", a: "Yes — the park has wild and rescued Asian elephants, and morning visits almost always include elephant sightings. The chances of seeing them in the deeper forest are lower." },
      { q: "Is Xishuangbanna safe for tourists?", a: "Yes — Jinghong is a comfortable small city, and the parks are well-managed. Take normal tropical precautions: mosquito repellent, sunscreen, and watch for leeches on jungle trails." },
      { q: "How many days do you need in Xishuangbanna?", a: "Three days covers the highlights. Add a fourth if you want to trek in the deeper forest reserves, or combine with a day trip to the China–Laos border at Mohan." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 10. YELLOW RIVER DELTA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "yellow-river-delta",
    name: "Yellow River Delta",
    landscape: "wetlands",
    landscapeLabel: "Wetlands",
    seasons: ["autumn", "winter"],
    difficulty: "easy",
    altitude: "low",
    days: "1–2 days",
    reason: "A migratory-bird sanctuary where the Yellow River meets the sea — a red suaeda 'carpet' in autumn.",
    tagline: "The Yellow River meets the Bohai Sea — a migratory-bird sanctuary of 3,730 km² where autumn brings a vast red suaeda carpet and 600+ bird species.",
    metaDescription: "Yellow River Delta travel guide 2026: when to see the red suaeda carpet, the bird migration calendar, how to get there from Dongying, and the 2-day itinerary.",
    rating: 8.0,
    guide: {
      location: "Shandong, at the Yellow River mouth",
      ticket: "~CNY 60–90",
      transport: "Drive or take a bus from Dongying city",
      tips: "Autumn (Sep–Nov) brings the red suaeda carpet and peak bird migration",
    },
    heroImg: "/images/lakes-napa.webp",
    heroImgAlt: "Wetland landscape at the Yellow River Delta nature reserve in Shandong",
    physical: {
      type: "Coastal wetland, tidal mudflats, freshwater marsh, salt meadow",
      elevation: "0–15m above sea level",
      area: "15,300 km², 3,730 km² national nature reserve (est. 1992)",
      climate: "Warm temperate monsoon, mild (5–15°C winters, 25–30°C summers)",
      unesco: "Not UNESCO (Ramsar wetland of international importance)",
    },
    culture: "The Yellow River has been called 'China's sorrow' for flooding its lower course every century. This delta — the youngest major landform in China, growing 1–2 km² per year — is where the river finally settles into the Bohai Sea. The wetland is a living restoration project: 600+ bird species, red-crowned cranes in winter, and the world's second-largest population of Oriental storks.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Migratory birds passing through, 15–25°C, lush green. Less photogenic than autumn but excellent for birders.", score: 8 },
      { label: "Summer (Jun–Aug)", text: "Hot (25–32°C) and humid, mosquitoes intense. Bird populations are lower; not recommended unless you are a serious birder.", score: 4 },
      { label: "Autumn (Sep–Nov)", text: "The famous red suaeda carpet peaks in mid-October, 8–22°C, golden light. Bird migration peaks; photographers' favorite season.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Red-crowned cranes and Oriental storks arrive from Siberia, 0–8°C, often snowy. Best for rare birds, worst for red suaeda.", score: 8 },
    ],
    cost: {
      budget: "CNY 300/day (Dongying hotel, taxi to the park, simple meals)",
      mid: "CNY 600/day (4-star hotel, guided bird-watching tour)",
      splurge: "CNY 1,200+/day (private birding guide, photographic hide, 4-star hotel)",
    },
    proTips: [
      "Visit in mid-October for the red suaeda carpet and peak autumn bird migration",
      "Hire a local guide — the wetland is huge, signage is limited, and a guide dramatically improves sightings",
      "Bring binoculars and a telephoto lens — 80% of the experience is birdwatching",
      "Avoid summer unless you are a serious birder — mosquitoes are intense and crowds are heavy",
      "Combine with a side trip to the Yellow River source (Qinghai) or the river's middle course (Sanmenxia) for a full-river experience",
    ],
    intro: "The Yellow River Delta is the youngest major landform in China — the river deposits 1.5 billion tons of silt per year here, growing the delta by 1–2 km² annually. It is also a Ramsar wetland of international importance and a migratory-bird sanctuary, with 600+ species passing through. The autumn highlight is the red suaeda carpet — a 3,730 km² marsh turning crimson in mid-October. Most travelers spend one or two days: a day in the wetland park, a day at the river mouth.",
    highlights: [
      "Photograph the red suaeda carpet — a 3,730 km² marsh turning crimson in mid-October",
      "Spot red-crowned cranes and Oriental storks at the winter feeding stations",
      "Stand at the Yellow River mouth where the river finally meets the Bohai Sea",
      "Take a small-boat tour of the tidal mudflats for close-up birdwatching",
    ],
    howToGetThere: "Fly to Dongying (DOY) from Beijing or Shanghai, or take a high-speed train to Dongying South station. From Dongying, drive or take a taxi 60km north to the wetland park entrance. Self-driving is most flexible.",
    bestTime: "Mid-October to early November for the red suaeda carpet, or December to February for the rare cranes. April to May is the secondary bird migration. Avoid June–August for mosquitoes and heat.",
    itineraries: [
      { days: "Day 1", title: "Wetland park + birdwatching", detail: "Drive to the wetland park, take the sightseeing bus to the main viewing platforms, and spend the day spotting birds." },
      { days: "Day 2", title: "Yellow River mouth + boat tour", detail: "Drive to the river mouth viewpoint, take a small-boat tour of the tidal flats, and photograph the river-meets-sea scene." },
    ],
    faqs: [
      { q: "When is the red suaeda carpet at its peak?", a: "Mid-October to early November, with the peak color usually in the last week of October. The carpet extends across most of the wetland reserve." },
      { q: "What birds can I see at the Yellow River Delta?", a: "Over 600 species have been recorded, including red-crowned cranes, Oriental storks, white-naped cranes, whooper swans and black-faced spoonbills. Autumn and winter are the best seasons." },
      { q: "Is the Yellow River Delta worth visiting?", a: "Yes, especially for birders and landscape photographers — it is one of the most pristine wetlands in eastern China and an under-visited alternative to the popular sites further south." },
      { q: "How much does a trip to the Yellow River Delta cost?", a: "Mid-range 2-day trip: around CNY 1,500 per person including hotel in Dongying, all tickets, and a local guide. Self-driving cuts costs." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 11. SHANGRI-LA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "shangri-la",
    name: "Shangri-La",
    landscape: "plateau",
    landscapeLabel: "Plateau",
    seasons: ["spring", "autumn"],
    difficulty: "moderate",
    altitude: "high",
    days: "3–4 days",
    reason: "Tibetan plateau at 3,200m — alpine lakes, monasteries and snow-capped gorges.",
    tagline: "The Tibetan plateau at 3,200m — alpine lakes, 300-year-old Tibetan monasteries, and the start of the Tiger Leaping Gorge trail with snow peaks in every direction.",
    metaDescription: "Shangri-La travel guide 2026: altitude acclimatization, when to visit (spring or autumn), the Songzanlin Monastery, Pudacuo National Park, and the 3-day plateau itinerary.",
    rating: 8.8,
    guide: {
      location: "Yunnan, at 3,200m altitude",
      ticket: "Songzanlin Monastery ~CNY 90; Pudacuo Park ~CNY 100",
      transport: "Fly to Diqing (DIG) from Kunming/Chengdu, or bus from Lijiang",
      tips: "Spend the first night acclimatizing; carry layers even in summer",
    },
    url: "https://shangri-la-yunnan.com",
    heroImg: "/images/plateau-pudacuo.webp",
    heroImgAlt: "Alpine lake and forest in Pudacuo National Park near Shangri-La",
    physical: {
      type: "Tibetan plateau, alpine meadows, coniferous forest, glacial lakes",
      elevation: "3,200m town, Pudacuo lakes 3,500–4,000m, peaks above 5,000m",
      area: "11,613 km² county, Pudacuo National Park 1,300 km²",
      climate: "Subarctic plateau, cold winters (-10 to 8°C), cool summers (10–20°C), strong UV",
      unesco: "Three Parallel Rivers — UNESCO 2003 (region)",
    },
    culture: "Shangri-La is the Chinese name for Zhongdian, renamed in 2001 to capitalize on James Hilton's fictional 'Shangri-La' from Lost Horizon (1933). The town is the cultural capital of Tibetan Yunnan — Songzanlin Monastery, founded in 1679, is the largest Tibetan Buddhist monastery in Yunnan and a major pilgrimage site. Tibetan, Naxi and Yi minorities all live in the surrounding valleys.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Mild (5–18°C), wildflowers, fewer crowds. The town and lakes are at their most photogenic; pack layers for cold nights.", score: 9 },
      { label: "Summer (Jun–Aug)", text: "Warmest (10–22°C), greenest, but rainy — afternoon storms common. Best time for the Tiger Leaping Gorge trail.", score: 7 },
      { label: "Autumn (Sep–Nov)", text: "Clearest skies of the year, golden foliage, 5–18°C. Best season for mountain views and photography.", score: 10 },
      { label: "Winter (Dec–Feb)", text: "Cold (-10 to 8°C), occasional snow, very few tourists. The monastery is dramatic under snow; some high trails close.", score: 6 },
    ],
    cost: {
      budget: "CNY 350/day (Shangri-La guesthouse, public bus, simple Tibetan meals)",
      mid: "CNY 700/day (3-star Tibetan-style hotel, all tickets, group tours)",
      splurge: "CNY 1,800+/day (Songtsam Lodge or similar luxury, private guide)",
    },
    proTips: [
      "Spend the first night at altitude (3,200m) before any hiking — altitude sickness is real and can ruin a trip",
      "Visit Songzanlin Monastery at sunrise — the morning chanting session and golden light on the roof are unforgettable",
      "Layer up — even in summer, temperatures drop 15°C from day to night",
      "Add Tiger Leaping Gorge (2h drive) if you have an extra day — one of the deepest gorges in the world",
      "Try the yak butter tea and tsampa — local Tibetan staples and surprisingly good once you adjust",
    ],
    intro: "Shangri-La is a 3,200m Tibetan town on the edge of the Tibetan plateau — renamed in 2001 to capitalize on the James Hilton novel that inspired the name. It is the cultural heartland of Tibetan Yunnan, with the largest Tibetan Buddhist monastery in the province and a starting point for high-altitude treks into the Three Parallel Rivers region. Most travelers spend three to four days: a day acclimatizing and visiting the monastery, a day at Pudacuo National Park, and a day on the Tiger Leaping Gorge trail or in a Tibetan village.",
    highlights: [
      "Tour Songzanlin Monastery, the largest Tibetan Buddhist monastery in Yunnan, founded 1679",
      "Hike around Shudu Lake and Bita Lake in Pudacuo National Park, the highest national park in China",
      "Drive to the Tiger Leaping Gorge, one of the deepest gorges in the world",
      "Visit a Tibetan village and try yak butter tea, tsampa and Tibetan hotpot",
    ],
    howToGetThere: "Fly to Diqing Shangri-La airport (DIG) from Kunming (1h) or Chengdu (1.5h). Or take a high-speed train to Lijiang (3h from Kunming) and then a 4-hour bus or 2-hour drive to Shangri-La. The bus route crosses scenic mountain passes.",
    bestTime: "Late September to early November for clear skies and golden foliage, or April to May for wildflowers and mild weather. Avoid June–August for rain, and December–February for cold unless you are prepared for snow.",
    itineraries: [
      { days: "Day 1", title: "Arrive + acclimatize + old town", detail: "Arrive in Shangri-La, take it easy, walk the old town, and try a Tibetan meal." },
      { days: "Day 2", title: "Songzanlin + Pudacuo National Park", detail: "Morning visit to Songzanlin Monastery, then drive to Pudacuo for the Shudu Lake hike." },
      { days: "Day 3", title: "Tiger Leaping Gorge", detail: "Drive 2h to the gorge, hike the upper trail for an hour, and return to Shangri-La or continue to Lijiang." },
      { days: "Day 4", title: "Tibetan village or departure", detail: "Visit a nearby Tibetan village or head back to Lijiang/the airport." },
    ],
    faqs: [
      { q: "Do you get altitude sickness in Shangri-La?", a: "Possibly — the town is at 3,200m, well above the 2,500m threshold. Spend the first 24 hours taking it easy, drink water, avoid alcohol, and consider altitude medication. Most healthy travelers adjust within a day." },
      { q: "Is Shangri-La worth visiting?", a: "Yes — it is the most accessible Tibetan culture in Yunnan, with a unique monastery, alpine national park and the Tiger Leaping Gorge nearby. Allow 3–4 days for the full experience." },
      { q: "What is the best time to visit Shangri-La?", a: "September to November for clear skies and autumn color, or April to May for mild weather and wildflowers. Avoid the rainy June–August and the cold December–February unless you are prepared." },
      { q: "How much does a trip to Shangri-La cost?", a: "Mid-range 3-day trip from Lijiang: around CNY 1,800–2,500 per person including hotel, all tickets, and a local guide. Add a luxury lodge and it goes to CNY 5,000+." },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // 12. TIBET & LHASA
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "tibet-lhasa",
    name: "Tibet & Lhasa",
    landscape: "plateau",
    landscapeLabel: "Plateau",
    seasons: ["summer", "autumn"],
    difficulty: "challenging",
    altitude: "very-high",
    days: "4–7 days",
    reason: "The Roof of the World — Potala Palace, turquoise lakes and Himalayan passes.",
    tagline: "The Roof of the World — Lhasa's Potala Palace, sacred turquoise lakes, Himalayan passes over 5,000m, and a Tibetan culture unchanged for centuries.",
    metaDescription: "Tibet travel guide 2026: Tibet permit for foreign travelers, when to visit (summer only), Lhasa's Potala Palace, the 5-day Lhasa to Everest itinerary, and altitude acclimatization.",
    rating: 9.6,
    guide: {
      location: "Tibet Autonomous Region, 3,650m altitude",
      ticket: "Potala Palace ~CNY 200 (book ahead)",
      transport: "Fly to Lhasa from Chengdu/Xi'an, or the Qinghai–Tibet railway",
      tips: "Foreign travelers need a Tibet permit via an agency; acclimatize 2 days in Lhasa",
    },
    url: "https://tibet-lhasa-potala.com",
    heroImg: "/images/plateau-tibet.webp",
    heroImgAlt: "Potala Palace in Lhasa with the Himalayan foothills behind",
    physical: {
      type: "Tibetan plateau, world's highest and largest",
      elevation: "Lhasa 3,650m, Everest base camp 5,200m, average plateau 4,500m",
      area: "1.2 million km², the second-largest administrative region in China",
      climate: "Alpine plateau, very dry, strong UV, 5–22°C in summer, -10 to 5°C in winter",
      unesco: "Potala Palace — UNESCO 1994 (extended 2000, 2001)",
    },
    culture: "Tibet has been Buddhist since the 7th century, and the region remains the heart of Vajrayana Buddhism — distinct from Han Chinese Mahayana. The Potala Palace has been the residence of the Dalai Lamas since 1645, and the Jokhang Temple in central Lhasa is the spiritual center of Tibetan Buddhism. Monasteries, prayer flags, kora walks and yak butter tea are central to the culture.",
    whenToGo: [
      { label: "Spring (Apr–May)", text: "Mild (5–18°C), wildflowers, fewer crowds. Best for trekking and culture; some high passes still closed until late May.", score: 8 },
      { label: "Summer (Jun–Aug)", text: "Warmest (10–22°C), 70% of annual rainfall, but the only season when high passes and Everest are open. Peak season; book far ahead.", score: 9 },
      { label: "Autumn (Sep–Oct)", text: "Clearest skies, stable weather, 5–18°C. The recommended season — clear Himalayan views, fewer rains, peak festivals.", score: 10 },
      { label: "Winter (Nov–Mar)", text: "Cold (-10 to 5°C), most passes closed, some monasteries limited. Inner Lhasa and the Potala remain open, with few tourists.", score: 5 },
    ],
    cost: {
      budget: "CNY 700/day (Lhasa hostel, public bus, simple Tibetan meals)",
      mid: "CNY 1,500/day (4-star Lhasa hotel, all tickets, group tours)",
      splurge: "CNY 4,000+/day (luxury Lhasa hotel, private 4WD with driver, guide)",
    },
    proTips: [
      "Foreign travelers need a Tibet Travel Permit — apply via a registered agency at least 15 days in advance, and book the trip as a package tour",
      "Spend 2 nights in Lhasa before any high-altitude travel — altitude sickness ruins more Tibet trips than anything else",
      "Visit the Potala Palace on a guided morning tour — afternoon slots are rushed and the entry is timed",
      "Add 2 days for Yamdrok Lake and Everest Base Camp if your permit allows — these are the highlights of any Tibet trip",
      "Pack for the altitude: sunscreen, sunglasses, lip balm, layers, and any altitude medication your doctor recommends",
    ],
    intro: "Tibet is the highest plateau on Earth — the 'Roof of the World' at an average 4,500m — and Lhasa, at 3,650m, is its cultural and political capital. The Potala Palace, the Jokhang Temple and the surrounding monasteries are the most intact Tibetan Buddhist sites in the world, and the surrounding region has turquoise lakes, Himalayan passes and the highest base camp in the world. Most travelers spend five to seven days: two acclimatizing in Lhasa, two on day trips to nearby lakes and monasteries, and one to three on the overland route to Everest or Mount Kailash.",
    highlights: [
      "Tour the Potala Palace, the 1,300-year-old winter residence of the Dalai Lamas and a UNESCO World Heritage site",
      "Walk the kora around the Jokhang Temple, the spiritual heart of Tibetan Buddhism",
      "Drive over the Khamba La pass to the impossibly turquoise Yamdrok Lake at 4,400m",
      "Visit the Tashilhunpo Monastery in Shigatse, the seat of the Panchen Lama",
    ],
    howToGetThere: "Fly to Lhasa (LXA) from Chengdu, Xi'an, Chongqing or Kunming (most flights are 2–3 hours). Or take the Qinghai–Tibet railway from Xining (22 hours, the highest railway in the world and a destination in its own right). Foreign travelers must enter Tibet as part of a registered tour group — independent travel is not permitted.",
    bestTime: "Late September to early October for the clearest skies and best Himalayan views, or July to August for the only season when all high passes and Everest Base Camp are accessible. April to May is a quieter shoulder season. Avoid November to March for cold and closed passes.",
    itineraries: [
      { days: "Day 1", title: "Arrive Lhasa + acclimatize", detail: "Fly or train in, rest, walk slowly, and have a light meal. Avoid alcohol and heavy exertion." },
      { days: "Day 2", title: "Lhasa acclimatization + Jokhang", detail: "Short walks in the old town, visit the Jokhang Temple, and have an early dinner." },
      { days: "Day 3", title: "Potala Palace + Sera Monastery", detail: "Morning guided tour of the Potala (3 hours), afternoon at Sera Monastery for the monk debates." },
      { days: "Day 4", title: "Yamdrok Lake day trip", detail: "Drive over Khamba La pass to Yamdrok Lake (4,400m) and return to Lhasa." },
      { days: "Day 5", title: "Shigatse or Gyantse", detail: "Drive to Shigatse (6h) or Gyantse (5h), visit Tashilhunpo or Pelkor Chode monasteries, and return." },
      { days: "Day 6–7", title: "Everest Base Camp (optional)", detail: "If permit allows, drive to Rongbuk Monastery and Everest Base Camp (5,200m) — 2-day round trip." },
    ],
    faqs: [
      { q: "Do I need a Tibet permit?", a: "Yes — foreign travelers (non-Chinese passport holders) need a Tibet Travel Permit, which is only issued as part of a registered tour package. Apply via a registered travel agency at least 15 days before your trip. The agency handles the permit and the mandatory licensed guide." },
      { q: "Can I visit Tibet independently?", a: "No — foreign travelers must enter Tibet with a registered group tour and a licensed Tibetan guide. Independent travel is not permitted." },
      { q: "Is Tibet worth visiting?", a: "Yes — for the unique Tibetan Buddhist culture, the dramatic Himalayan scenery, and the experience of being on the highest plateau on Earth. The Potala Palace and the Jokhang are unforgettable." },
      { q: "When is the best time to visit Tibet?", a: "Late September to early October for the clearest skies and best views, or July to August for the only season when all high passes and Everest are accessible. April to May is a quieter shoulder season." },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByLandscape(landscape: string): Destination[] {
  return destinations.filter((d) => d.landscape === landscape);
}

export function getSeasonLabel(season: string): string {
  return seasonLabelMap[season] ?? season;
}

export function getDifficultyLabel(difficulty: string): string {
  return difficultyLabelMap[difficulty] ?? difficulty;
}

export function getAltitudeLabel(altitude: string): string {
  return altitudeLabelMap[altitude] ?? altitude;
}
