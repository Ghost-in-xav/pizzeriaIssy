import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-24 bg-charcoal text-cream-soft pb-28 md:pb-12 pt-16">
      <div className="container-tight grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato text-cream-soft font-serif text-xl">
              P
            </span>
            <span className="font-serif text-2xl">Pizza d'Issy</span>
          </div>
          <p className="text-cream-soft/70 leading-relaxed text-sm">
            Pizzeria napolitaine artisanale au cœur d'Issy-les-Moulineaux. Pâte
            maturée 48h, ingrédients importés d'Italie, four traditionnel à 450°C.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-cream-soft/15 hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.25em] text-gold mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/menu" className="hover:text-gold transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold transition-colors">
                Notre histoire
              </Link>
            </li>
            <li>
              <Link href="/reservation" className="hover:text-gold transition-colors">
                Réserver
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.25em] text-gold mb-4">
            Nous trouver
          </h4>
          <ul className="space-y-3 text-sm text-cream-soft/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hover:text-gold transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-gold transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-tight mt-12 pt-6 border-t border-cream-soft/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-cream-soft/50">
        <p>© {new Date().getFullYear()} Pizza d'Issy. Tous droits réservés.</p>
        <p className="font-serif italic text-gold/80">
          “La vita è una combinazione di pasta e magia.”
        </p>
      </div>
    </footer>
  );
}
