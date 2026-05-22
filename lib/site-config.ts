export const siteConfig = {
  name: "ZElevents",
  tagline: "Créons vos plus beaux moments",
  description:
    "Agence événementielle sur mesure à Saint-Hyacinthe, desservant tout le Québec : décoration, traiteur et coordination complète pour mariages, événements corporatifs et célébrations privées.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zelevents.com",
  locale: "fr_CA",

  contact: {
    email: "info@zelevents.com",
    phone: "+1 (514) 591-0217 / +1 (418) 271-0361",
    phoneHref: "tel:+15145910217",
    serviceArea: "Québec, Canada",
    address: "Saint-Hyacinthe, Québec, Canada",
  },

  social: {
    instagram: "https://instagram.com/zelevents",
    facebook: "https://facebook.com/zelevents",
    tiktok: "https://tiktok.com/@zelevents",
    whatsapp: "https://wa.me/15145910217",
  },

  heroImage: "/gallery/01-reception.jpg",
  aboutImage: "/gallery/06-ambiance.jpg",
} as const;

export const aboutContent = {
  label: "À propos de ZElevents",
  title: "L'art de sublimer vos événements",
  paragraphs: [
    "Depuis nos débuts, nous transformons chaque occasion en une expérience mémorable. Notre équipe passionnée allie créativité, rigueur et sens du détail pour donner vie à vos rêves les plus ambitieux.",
    "De la décoration florale au service traiteur, en passant par l'animation musicale, nous coordonnons chaque aspect de votre événement avec excellence et élégance.",
  ],
} as const;

export const eventTypes = [
  "Mariage",
  "Anniversaire",
  "Corporate / Gala",
  "Baby Shower / Gender Reveal",
  "Événement privé",
  "Autre",
] as const;

export const services = [
  {
    icon: "wedding" as const,
    title: "Mariages",
    description:
      "Cérémonies et réceptions sur mesure. Arches florales, tables d'honneur et ambiance féerique pour votre jour J.",
  },
  {
    icon: "private" as const,
    title: "Événements privés",
    description:
      "Anniversaires, fiançailles, retrouvailles — chaque célébration mérite une touche d'exception et une décoration unique.",
  },
  {
    icon: "corporate" as const,
    title: "Événements corporatifs",
    description:
      "Galas, lancements de produits et soirées de fin d'année. Nous incarnons vos valeurs dans chaque détail.",
  },
  {
    icon: "decoration" as const,
    title: "Décoration",
    description:
      "Compositions florales, mise en scène d'espaces, éclairage d'ambiance et décors thématiques entièrement personnalisés.",
  },
  {
    icon: "catering" as const,
    title: "Traiteur",
    description:
      "Menus raffinés, service buffet ou assis, bar à cocktails et expérience gastronomique adaptée à votre événement.",
  },
] as const;

export const galleryPhotos = [
  { src: "/gallery/06-ambiance.jpg", label: "Ambiance lumineuse" },
  { src: "/decoration-hero.jpg", label: "Arche florale" },
  { src: "/gallery/01-reception.jpg", label: "Salle de réception" },
  { src: "/gallery/03-tables.jpg", label: "Tables d'honneur" },
  { src: "/gallery/05-gala.jpg", label: "Réception de gala" },
  { src: "/gallery/04-anniversaire.jpg", label: "Décoration anniversaire" },
  { src: "/gallery/07-baby-shower.jpg", label: "Baby shower" },
] as const;

export const testimonials = [
  {
    id: "marie-jean-philippe",
    quote:
      "ZElevents a transformé notre mariage en un véritable conte de fées. Chaque détail était parfait, bien au-delà de nos attentes.",
    name: "Marie & Jean-Philippe",
    event: "Mariage — Montréal",
    rating: 5,
  },
  {
    id: "sophia-tremblay",
    quote:
      "Notre gala d'entreprise était époustouflant. Le professionnalisme de l'équipe a laissé nos 300 invités sans voix.",
    name: "Sophia Tremblay",
    event: "Gala corporatif — Laval",
    rating: 5,
  },
  {
    id: "amandine-k",
    quote:
      "Baby shower magique ! Les couleurs, les fleurs, les détails — tout était parfait. Merci infiniment !",
    name: "Amandine K.",
    event: "Baby Shower — Longueuil",
    rating: 5,
  },
] as const;
