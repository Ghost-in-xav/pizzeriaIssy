export const siteConfig = {
  name: "Pizza d'Issy",
  tagline: "Pizzeria napolitaine artisanale",
  description:
    "Pizzeria italienne authentique à Issy-les-Moulineaux. Pâte maturée 48h, ingrédients importés d'Italie, four traditionnel. Réservez votre table.",
  url: "https://pizzadissy.fr",
  address: {
    street: "8 Rue Jeanne-d'Arc",
    postalCode: "92130",
    city: "Issy-les-Moulineaux",
    country: "France",
    full: "8 Rue Jeanne-d'Arc, 92130 Issy-les-Moulineaux",
  },
  phone: "+33 1 75 32 35 74",
  phoneDisplay: "01 75 32 35 74",
  whatsapp: "+33175323574",
  email: "bonjour@pizzadissy.fr",
  geo: { latitude: 48.8221, longitude: 2.2728 },
  priceRange: "€€",
  hours: [
    { day: "Lundi", value: "12:00 – 15:00" },
    { day: "Mardi", value: "12:00 – 15:00 · 19:00 – 23:00" },
    { day: "Mercredi", value: "12:00 – 15:00 · 19:00 – 23:00" },
    { day: "Jeudi", value: "12:00 – 15:00 · 19:00 – 23:00" },
    { day: "Vendredi", value: "12:00 – 15:00 · 19:00 – 23:00" },
    { day: "Samedi", value: "18:00 – 23:00" },
    { day: "Dimanche", value: "Fermé" },
  ],
  socials: {
    instagram: "https://instagram.com/pizzadissy",
    google:
      "https://www.google.com/maps/search/?api=1&query=Pizza+d%27Issy+8+Rue+Jeanne-d%27Arc+92130+Issy-les-Moulineaux",
  },
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Pizza+d%27Issy,+8+Rue+Jeanne-d%27Arc,+92130+Issy-les-Moulineaux&output=embed&hl=fr",
};

export type SiteConfig = typeof siteConfig;
