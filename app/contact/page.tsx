import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Accès",
  description:
    "Adresse, téléphone, horaires d'ouverture et plan d'accès du restaurant Pizza d'Issy à Issy-les-Moulineaux.",
};

export default function ContactPage() {
  return (
    <>
      <header className="pt-32 md:pt-40 pb-12">
        <div className="container-tight max-w-3xl">
          <span className="eyebrow">Nous écrire, nous trouver</span>
          <h1 className="h-display mt-4 text-balance">
            Bienvenue chez <em className="italic text-tomato">Pizza d'Issy</em>.
          </h1>
          <p className="body-lg mt-5">
            On vous accueille du mardi au dimanche, midi et soir. À deux pas du métro
            Mairie d'Issy.
          </p>
        </div>
      </header>

      <section className="container-tight pb-16">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="group flex items-start gap-5 rounded-2xl border border-charcoal/10 bg-cream-soft/60 p-6 hover:border-tomato/40 hover:bg-cream-soft transition-colors"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-tomato text-cream-soft">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/50">
                  Téléphone
                </div>
                <div className="font-serif text-2xl text-charcoal mt-0.5">
                  {siteConfig.phoneDisplay}
                </div>
                <div className="text-xs text-charcoal/55 mt-1">
                  Cliquez pour appeler
                </div>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-start gap-5 rounded-2xl border border-charcoal/10 bg-cream-soft/60 p-6 hover:border-tomato/40 hover:bg-cream-soft transition-colors"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-tomato/10 text-tomato">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/50">
                  Email
                </div>
                <div className="font-serif text-xl text-charcoal mt-0.5 break-all">
                  {siteConfig.email}
                </div>
              </div>
            </a>

            <div className="flex items-start gap-5 rounded-2xl border border-charcoal/10 bg-cream-soft/60 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-tomato/10 text-tomato">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/50">
                  Adresse
                </div>
                <div className="font-serif text-xl text-charcoal mt-0.5">
                  {siteConfig.address.street}
                </div>
                <div className="text-sm text-charcoal/65">
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </div>
                <Button variant="ghost" size="sm" className="mt-3 -ml-3" asChild>
                  <a
                    href={siteConfig.socials.google}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur Google Maps →
                  </a>
                </Button>
              </div>
            </div>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-charcoal/10 bg-cream-soft/60 p-6 hover:border-tomato/40 hover:bg-cream-soft transition-colors"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-tomato/10 text-tomato">
                <Instagram className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/50">
                  Instagram
                </div>
                <div className="font-serif text-xl text-charcoal mt-0.5">
                  @pizzadissy
                </div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-charcoal/5 shadow-xl shadow-charcoal/10 h-[420px]">
              <iframe
                src={siteConfig.mapsEmbedSrc}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte — Pizza d'Issy"
              />
            </div>

            <div className="rounded-2xl border border-charcoal/10 bg-cream-soft/60 p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato/10 text-tomato">
                  <Clock className="h-4 w-4" />
                </span>
                <h2 className="font-serif text-xl">Horaires d'ouverture</h2>
              </div>
              <ul className="divide-y divide-charcoal/8">
                {siteConfig.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-charcoal/70">{h.day}</span>
                    <span
                      className={
                        h.value === "Fermé"
                          ? "text-tomato/80 font-medium"
                          : "text-charcoal font-medium"
                      }
                    >
                      {h.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-tight pb-32 text-center">
        <h2 className="h-section text-balance">Prêt à venir ?</h2>
        <p className="body-lg mt-3 max-w-xl mx-auto">
          Réservez votre table en ligne, ou appelez-nous directement.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/reservation">Réserver une table</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
