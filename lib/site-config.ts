export const siteConfig = {
  name: "Pizza d'Issy",
  tagline: "Pizzeria napolitaine artisanale",
  description:
    "Pizzeria italienne authentique à Issy-les-Moulineaux. Pâte maturée 48h, ingrédients importés d'Italie, four traditionnel. Réservez votre table.",
  url: "https://pizzadissy.fr",
  address: {
    street: "12 rue de l'Égalité",
    postalCode: "92130",
    city: "Issy-les-Moulineaux",
    country: "France",
    full: "12 rue de l'Égalité, 92130 Issy-les-Moulineaux",
  },
  phone: "+33 1 46 42 00 00",
  phoneDisplay: "01 46 42 00 00",
  whatsapp: "+33612345678",
  email: "bonjour@pizzadissy.fr",
  geo: { latitude: 48.8246, longitude: 2.2691 },
  priceRange: "€€",
  hours: [
    { day: "Lundi", value: "Fermé" },
    { day: "Mardi", value: "12:00 – 14:30 · 19:00 – 22:30" },
    { day: "Mercredi", value: "12:00 – 14:30 · 19:00 – 22:30" },
    { day: "Jeudi", value: "12:00 – 14:30 · 19:00 – 22:30" },
    { day: "Vendredi", value: "12:00 – 14:30 · 19:00 – 23:00" },
    { day: "Samedi", value: "12:00 – 23:00" },
    { day: "Dimanche", value: "12:00 – 22:00" },
  ],
  socials: {
    instagram: "https://instagram.com/pizzadissy",
    google: "https://maps.google.com/?q=Pizza+d'Issy+Issy-les-Moulineaux",
  },
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Issy-les-Moulineaux,France&output=embed",
};

export type SiteConfig = typeof siteConfig;
