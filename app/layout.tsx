import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { StickyMobileCTA } from "@/components/site/sticky-mobile-cta";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pizza Issy-les-Moulineaux",
    "restaurant italien Issy",
    "meilleure pizza proche Paris 15",
    "pizzeria napolitaine Issy",
    "trattoria Issy",
    "pâte 48h",
    "four à bois",
  ],
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F1E3",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  priceRange: siteConfig.priceRange,
  servesCuisine: ["Italian", "Pizza", "Napolitaine"],
  acceptsReservations: "True",
  image: [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    postalCode: siteConfig.address.postalCode,
    addressLocality: siteConfig.address.city,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "12:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "12:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "19:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "18:00",
      closes: "23:00",
    },
  ],
  sameAs: [siteConfig.socials.instagram, siteConfig.socials.google],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
