const SHOWCASE_PROJECTS = [
  {
    id: 1,
    type: "Website design",
    desc: "Web apps, UX/UI layouts, responsive elements.",
    preview: "#A2D2FF",
    pattern: "web",
    category: "web"
  },
  {
    id: 2,
    type: "Website design",
    desc: "Mobile and Web responsive platform development.",
    preview: "#FFE600",
    pattern: "web",
    category: "web"
  },
  {
    id: 3,
    type: "Website design",
    desc: "E-commerce stores, modern restaurant apps, clean landing pages.",
    preview: "#FFC2D1",
    pattern: "web",
    category: "web"
  },
  {
    id: 4,
    type: "Website design",
    desc: "Dashboard systems, dark mode panels, software mockups.",
    preview: "#CDB4DB",
    pattern: "web",
    category: "web"
  },
  {
    id: 5,
    type: "Illustration",
    desc: "Custom conceptual arts, children book visuals.",
    preview: "#FFE600",
    pattern: "illustration",
    category: "illustration"
  },
  {
    id: 6,
    type: "Illustration",
    desc: "Character design, flat vector layout design panels.",
    preview: "#A2D2FF",
    pattern: "illustration",
    category: "illustration"
  },
  {
    id: 7,
    type: "Product design",
    desc: "Physical merchandise design, playful packages.",
    preview: "#FF6B6B",
    pattern: "product",
    category: "product"
  },
  {
    id: 8,
    type: "Poster design",
    desc: "Event announcements, promotional print assets.",
    preview: "#000000",
    pattern: "poster",
    category: "print"
  }
];

const PROJECTS = [
  ...SHOWCASE_PROJECTS,
  { id: 9, type: "Website design", desc: "Fintech onboarding flow with accessibility-first patterns.", preview: "#A2D2FF", pattern: "web", category: "web" },
  { id: 10, type: "UI Design", desc: "Wellness app with gentle micro-interactions and calm palettes.", preview: "#CDB4DB", pattern: "web", category: "mobile" },
  { id: 11, type: "Illustration", desc: "Editorial spot illustrations for a lifestyle magazine.", preview: "#FFE600", pattern: "illustration", category: "illustration" },
  { id: 12, type: "Graphic Design", desc: "Social media kit and brand guidelines for a startup.", preview: "#FFC2D1", pattern: "poster", category: "branding" },
  { id: 13, type: "Book design", desc: "Children's picture book layout and cover art direction.", preview: "#A2D2FF", pattern: "illustration", category: "print" },
  { id: 14, type: "Website design", desc: "Museum digital guide with immersive exhibit wayfinding.", preview: "#000000", pattern: "web", category: "web" },
  { id: 15, type: "Product design", desc: "Craft brewery label and packaging system.", preview: "#FF6B6B", pattern: "product", category: "product" },
  { id: 16, type: "Poster design", desc: "Music festival promotional series across print and digital.", preview: "#FFE600", pattern: "poster", category: "print" },
  { id: 17, type: "Website design", desc: "Community agriculture co-op e-commerce experience.", preview: "#A2D2FF", pattern: "web", category: "web" },
  { id: 18, type: "Illustration", desc: "Character mascots for an ed-tech learning platform.", preview: "#FFC2D1", pattern: "illustration", category: "illustration" },
  { id: 19, type: "UI Design", desc: "GovTech civic feedback portal in five languages.", preview: "#CDB4DB", pattern: "web", category: "web" },
  { id: 20, type: "Graphic Design", desc: "Architecture studio identity emphasizing structural warmth.", preview: "#FFE600", pattern: "poster", category: "branding" }
];

const CATEGORY_LABELS = {
  all: "All Work",
  web: "Website",
  mobile: "UI / App",
  illustration: "Illustration",
  product: "Product",
  print: "Print",
  branding: "Branding"
};

const TESTIMONIALS = [
  { quote: "Design is a bridge that connects everyone and everything.", author: "Sarah Chen", role: "UX Designer, Pixel Labs" },
  { quote: "Janie brought playful energy without losing clarity — our users love the new interface.", author: "Marcus Webb", role: "Founder, GreenGrid" },
  { quote: "The illustrations and UI work felt cohesive from day one. Highly recommend.", author: "Yuki Tanaka", role: "Product Lead, Komorebi" },
  { quote: "Professional, fast, and genuinely fun to collaborate with on our rebrand.", author: "Elena Rossi", role: "Marketing Dir., Artisan Market" }
];
