// ============================================================================
// collections.ts — Curated theme collections that group destinations by
// search intent: UNESCO World Heritage, high-altitude, and first-timer
// classics. Each collection drives a page at /collections/[slug]/.
// ============================================================================

export interface CollectionFaq {
  q: string;
  a: string;
}

export interface CollectionRoute {
  title: string;
  intro: string;
  steps: { days: string; title: string; detail: string }[];
}

export interface CollectionChoose {
  title: string;
  intro: string;
  options: { label: string; text: string }[];
}

export interface Collection {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  emoji: string;
  gradient: string;
  shortDescription: string;
  heroIntro: string;
  destinationSlugs: string[];
  whyHeading: string;
  whyBody: string[];
  highlights: { label: string; text: string }[];
  faqs: CollectionFaq[];
  route?: CollectionRoute;
  choose?: CollectionChoose;
}

export const collections: Collection[] = [
  // ─────────────────────────────────────────────────────────────────
  // 1. UNESCO WORLD HERITAGE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "unesco-world-heritage",
    name: "UNESCO World Heritage Sites",
    title: "UNESCO World Heritage Sites in China: 7 Natural & Cultural Wonders (2026)",
    metaDescription:
      "Seven UNESCO World Heritage Sites in China worth the trip — Jiuzhaigou's lakes, Zhangjiajie's pillars, Huangshan's peaks and more — with tickets, best seasons and how to visit each.",
    emoji: "🏛️",
    gradient: "from-amber-500 to-orange-600",
    shortDescription:
      "Jiuzhaigou, Zhangjiajie, Huangshan, the South China Karst and more — seven inscribed wonders you can actually visit.",
    heroIntro:
      "China has 59 UNESCO World Heritage Sites, the second most of any country on Earth. This collection narrows them to the seven that combine world-class scenery with realistic travel logistics — places that are both genuinely spectacular and genuinely visitable on a normal trip.",
    destinationSlugs: [
      "jiuzhaigou",
      "zhangjiajie",
      "huangshan",
      "guilin-yangshuo",
      "dunhuang-gobi",
      "shangri-la",
      "tibet-lhasa",
    ],
    whyHeading: "Why these seven?",
    whyBody: [
      "UNESCO's list is long, but 'inscribed' doesn't always mean 'worth a long detour on your holiday'. We picked seven sites that pass a simple two-part test: they're among the most visually dramatic places in China, and they're reachable without a specialist expedition.",
      "Five of the seven are inscribed for their natural value — Jiuzhaigou's tiered turquoise lakes, Zhangjiajie's 3,000 sandstone pillars, Huangshan's granite spires, the South China Karst around Guilin, and the Three Parallel Rivers around Shangri-La. The other two are cultural: the Mogao Caves at Dunhuang (1,000 years of Buddhist art carved into desert cliffs) and the Potala Palace in Lhasa (the former winter seat of the Dalai Lama).",
      "The practical upshot: only Tibet requires a pre-arranged permit. The other six can be visited independently with a passport, a ticket and a train or flight.",
    ],
    highlights: [
      { label: "7 sites", text: "5 natural + 2 cultural, inscribed 1987–2007" },
      { label: "8 provinces", text: "From Gansu's desert to the Tibetan Plateau" },
      { label: "1 permit", text: "Only Tibet needs a pre-arranged permit" },
      { label: "All seasons", text: "Spring color to winter snow — see each guide" },
    ],
    faqs: [
      {
        q: "How many UNESCO World Heritage Sites are in China?",
        a: "China has 59 UNESCO World Heritage Sites, the second most in the world after Italy. This collection focuses on seven that are both visually outstanding and practical to reach on a normal trip.",
      },
      {
        q: "Which of these seven is the best one to visit first?",
        a: "For a first UNESCO trip in China, Jiuzhaigou or Zhangjiajie are the most reliable crowd-pleasers. Jiuzhaigou has the most photogenic lakes; Zhangjiajie has the most surreal rock pillars. Both have straightforward transport and no permit required.",
      },
      {
        q: "Do I need permits to visit China's UNESCO sites?",
        a: "Only Tibet requires a pre-arranged permit (via a registered travel agency, about 15 days ahead). Jiuzhaigou needs a timed-entry ticket tied to your passport. The other five sites are walk-up or advance-booking only.",
      },
      {
        q: "Are China's UNESCO sites crowded?",
        a: "Yes during Chinese public holidays — especially National Day (early October) and Labour Day (early May). Visit on ordinary weekdays, arrive at opening time, and book tickets online in advance to avoid the worst of the queues.",
      },
    ],
    route: {
      title: "A practical 8-day route: three sites on one train line",
      intro:
        "Seven sites across eight provinces is too much for a single trip. This route strings together the three that connect most easily by high-speed rail — the western sites (Jiuzhaigou, Dunhuang, Shangri-La, Lhasa) each need their own trip.",
      steps: [
        { days: "Days 1–3", title: "Zhangjiajie (Wulingyuan)", detail: "Fly or train in, then spend two full days in the forest park: Yuanjiajie's Avatar pillars and Tianzi Mountain's panoramas on day one, the Grand Canyon glass bridge and Tianmen Mountain on day two." },
        { days: "Days 4–6", title: "Guilin & Yangshuo (South China Karst)", detail: "Take the six-hour high-speed train south. Cruise the Li River, bike the Yangshuo countryside, and climb a karst peak for sunrise." },
        { days: "Days 7–8", title: "Huangshan (Mount Huangshan)", detail: "Fly or train east. Ride the cable car up, walk the summit loop, and stay one night on the mountain for the sunrise and sea of clouds." },
      ],
    },
    choose: {
      title: "Which UNESCO site should you visit first?",
      intro: "Pick by what you most want to see — each site has a very different signature.",
      options: [
        { label: "Turquoise lakes", text: "Jiuzhaigou — the most photogenic water in China, best in autumn color (Sep–Oct)." },
        { label: "Surreal rock pillars", text: "Zhangjiajie — the 'floating mountains' of Avatar, dramatic in any season." },
        { label: "Classical mountain scenery", text: "Huangshan — granite spires, pines and seas of cloud that inspired a millennium of ink painting." },
        { label: "River-and-karst postcard", text: "Guilin & Yangshuo — the landscape on every postcard of China, with the easiest logistics." },
        { label: "Desert + Buddhist art", text: "Dunhuang — the Mogao Caves' 1,000 years of frescoes, set in the Gobi." },
        { label: "High-altitude culture", text: "Lhasa or Shangri-La — plateau monasteries and Himalayan views (permit required for Tibet)." },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 2. HIGH-ALTITUDE
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "high-altitude",
    name: "High-Altitude Destinations",
    title: "High-Altitude Destinations in China: Tibet Plateau & Beyond (2026)",
    metaDescription:
      "Three of China's most dramatic high-altitude destinations — the Tibet Plateau, Shangri-La and the Hailuogou Glacier — with acclimatization tips, permit rules and the best months to go.",
    emoji: "🏔️",
    gradient: "from-sky-500 to-indigo-600",
    shortDescription:
      "The Tibetan Plateau, Shangri-La and the Hailuogou Glacier — China's most dramatic high-elevation landscapes, with acclimatization and permit guidance.",
    heroIntro:
      "China's highest landscapes sit on and around the Tibetan Plateau, the 'roof of the world'. These three destinations take you from about 3,000 m to over 4,500 m — spectacular, but only safe and enjoyable with proper acclimatization and planning.",
    destinationSlugs: ["tibet-lhasa", "shangri-la", "hailuogou-glacier"],
    whyHeading: "Why these three?",
    whyBody: [
      "High altitude in China is not a single place — it's a gradient. These three destinations let you experience the plateau at three very different intensities, so you can choose the level that suits your fitness and schedule.",
      "Hailuogou Glacier is the gentlest entry point: a 3,000 m valley where you can watch a glacier pour off a 7,556 m peak without a strenuous trek. Shangri-La (3,200 m) is the cultural heart of the eastern plateau, with grasslands, monasteries and the first taste of thin air. Lhasa (3,650 m) is the deep end — the plateau proper, with passes and viewpoints above 5,000 m.",
      "The one rule that applies to all three: ascend slowly, spend your first day doing as little as possible, drink more water than usual, and avoid alcohol. Most altitude problems come from climbing too fast, not from the height itself.",
    ],
    highlights: [
      { label: "3,000–4,500m", text: "Real altitude — plan at least one rest day" },
      { label: "1 permit", text: "Tibet needs a permit; the other two don't" },
      { label: "Best May–Oct", text: "Avoid winter road and pass closures" },
      { label: "Acclimatize", text: "Ascend slowly, hydrate, skip the alcohol" },
    ],
    faqs: [
      {
        q: "Which is the highest destination on this list?",
        a: "Lhasa and the surrounding Tibetan Plateau — the city sits at 3,650 m and the passes you'll cross on day trips reach 5,000 m and above. Shangri-La is 3,200 m and Hailuogou's main viewpoints are around 3,000 m.",
      },
      {
        q: "Do I need a permit for Tibet?",
        a: "Yes. Foreign travelers visiting the Tibet Autonomous Region need a Tibet Travel Permit arranged in advance through a registered travel agency (allow about 15 days). Shangri-La and Hailuogou, both outside the autonomous region, require no such permit.",
      },
      {
        q: "How do I avoid altitude sickness?",
        a: "Ascend gradually, spend your first 24 hours resting, drink plenty of water, avoid alcohol and strenuous exercise, and consider acetazolamide if you have a history of altitude problems. If symptoms worsen, descend — it's the only reliable cure.",
      },
      {
        q: "When is the best time to visit the Tibetan Plateau?",
        a: "May to October. July and August are the warmest and the only months when every high pass is reliably open, but they also bring monsoon cloud. Late September to early October offers the clearest skies for views of the peaks.",
      },
    ],
    route: {
      title: "The low-to-high acclimatization route",
      intro:
        "Ascend in this order and give your body a day to adjust at each step — every stop sits higher than the last, which is exactly how you avoid altitude sickness.",
      steps: [
        { days: "Days 1–2", title: "Hailuogou Glacier (3,000m)", detail: "Your warm-up. Take the cable car to the glacier viewing platform and watch ice pour off 7,556m Gongga Shan. Sleep low, in Moxi town." },
        { days: "Days 3–5", title: "Shangri-La (3,200m)", detail: "Fly to Diqing. Spend a rest day at the Songzanlin Monastery and Pudacuo National Park, then a day on the Napa Lake grassland." },
        { days: "Days 6–9", title: "Lhasa (3,650m + 5,000m passes)", detail: "Fly in and take a full rest day before doing anything. Then the Potala Palace, Jokhang Temple, and a day trip over the 5,000m passes." },
      ],
    },
    choose: {
      title: "How high do you want to go?",
      intro: "Choose by altitude tolerance and appetite for planning.",
      options: [
        { label: "Gentlest introduction", text: "Hailuogou — a 3,000m valley where you see a glacier without any strenuous trek, no permit needed." },
        { label: "Culture + grassland", text: "Shangri-La — monasteries, alpine lakes and the eastern edge of the plateau at 3,200m, no permit needed." },
        { label: "The full plateau", text: "Lhasa — the real 'roof of the world' at 3,650m with passes above 5,000m; requires a pre-arranged permit." },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // 3. FIRST-TIMER CLASSICS
  // ─────────────────────────────────────────────────────────────────
  {
    slug: "first-timers",
    name: "First-Timer Classics",
    title: "Best Places to Visit in China for First-Timers (2026)",
    metaDescription:
      "The three best places to visit in China on your first trip — Zhangjiajie's pillars, Guilin's karst and Huangshan's peaks — with easy logistics, no permits and day-by-day plans.",
    emoji: "🧭",
    gradient: "from-teal-500 to-emerald-600",
    shortDescription:
      "Zhangjiajie, Guilin and Huangshan — the three postcard landscapes that are easiest to reach and hardest to forget.",
    heroIntro:
      "If you've never been to China, start with these three. They are the country's most famous natural landscapes, connected by high-speed rail and major airports, require no special permits, and each can be done comfortably in two to three days.",
    destinationSlugs: ["zhangjiajie", "guilin-yangshuo", "huangshan"],
    whyHeading: "Why start with these three?",
    whyBody: [
      "A first trip to China is already a lot to handle — a new language, new apps, new logistics. These three destinations strip that friction away while still delivering the 'wow' that made you want to visit in the first place.",
      "Zhangjiajie gives you the floating sandstone pillars made famous by Avatar. Guilin and Yangshuo give you the classic karst peaks above the Li River — the landscape on every postcard of China. Huangshan gives you granite spires, seas of cloud and the sunrises that inspired a thousand years of Chinese ink painting.",
      "All three are reachable by high-speed rail from major cities, none requires a permit, and Zhangjiajie and Guilin can be paired into a single week (about six hours apart by train). If you only ever see one corner of China's nature, these are the three that justify the trip.",
    ],
    highlights: [
      { label: "0 permits", text: "All three are open to independent travelers" },
      { label: "HSR connected", text: "Zhangjiajie–Guilin is about 6h by train" },
      { label: "2–3 days each", text: "A comfortable pace with no rushing" },
      { label: "Year-round", text: "Each guide lists its best season" },
    ],
    faqs: [
      {
        q: "Which is the single best first destination in China?",
        a: "Zhangjiajie is the most reliable choice for a first-timer — it's visually unlike anywhere else, the logistics are simple (a bullet train to Zhangjiajie West then a short bus), and two full days are enough to see the main viewpoints.",
      },
      {
        q: "How long do I need for all three?",
        a: "About 8 to 10 days if you visit all three at a relaxed pace: three days each for Zhangjiajie and Guilin/Yangshuo, and two to three for Huangshan. If you're short on time, do Zhangjiajie and Guilin in a single week — they're six hours apart by train.",
      },
      {
        q: "Do I need to speak Chinese to visit these places?",
        a: "Not really. These three destinations are the most tourism-ready natural sights in China — signage is bilingual, the major train stations have English options, and hotels in the tourist zones are used to foreign guests. A translation app covers the gaps.",
      },
      {
        q: "Can I visit these three in one trip?",
        a: "Yes, and the routing is natural: fly into Zhangjiajie, take the high-speed rail south to Guilin, then fly or train east toward Huangshan. Each leg is a half-day or less, so you lose very little time to travel.",
      },
    ],
    route: {
      title: "The 7-day first-timer loop",
      intro:
        "Three landscapes, three different moods, and every leg is a half-day train or flight — ideal for a first China trip.",
      steps: [
        { days: "Days 1–2", title: "Zhangjiajie", detail: "Two full days in the forest park: the Avatar pillars, the glass bridge, and Tianmen Mountain's 999 steps." },
        { days: "Days 3–5", title: "Guilin & Yangshuo", detail: "Six hours south by high-speed rail. Cruise the Li River, cycle the karst countryside, and watch the cormorant fishermen at dusk." },
        { days: "Days 6–7", title: "Huangshan", detail: "Fly or train east. Cable car up, walk the summit loop, stay one night for sunrise, then descend and fly home." },
      ],
    },
    choose: {
      title: "Which classic should you start with?",
      intro: "All three are easy first destinations — the choice is really about the mood you want.",
      options: [
        { label: "Most surreal", text: "Zhangjiajie — unlike anywhere else on Earth; the most reliable 'wow' for a first-timer." },
        { label: "Most classic postcard", text: "Guilin & Yangshuo — the karst river scene everyone pictures when they think of China." },
        { label: "Most rewarding hike", text: "Huangshan — granite spires and seas of cloud, with cable cars that keep the climb manageable." },
      ],
    },
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
