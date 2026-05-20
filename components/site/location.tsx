"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function Location() {
  return (
    <section className="py-24 md:py-32 bg-cream-soft/70">
      <div className="container-tight grid gap-10 md:grid-cols-5 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 flex flex-col justify-center"
        >
          <span className="eyebrow">Nous trouver</span>
          <h2 className="h-section mt-4 text-balance">
            À deux pas du métro Mairie d'Issy.
          </h2>
          <p className="body-lg mt-4">
            Ouvert du mardi au dimanche, midi et soir. Réservation conseillée le
            week-end.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-4 items-start">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato/10 text-tomato shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">
                  Adresse
                </div>
                <div className="text-charcoal">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato/10 text-tomato shrink-0">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">
                  Téléphone
                </div>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="text-charcoal hover:text-tomato transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato/10 text-tomato shrink-0">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-charcoal/50 mb-1">
                  Horaires
                </div>
                <ul className="space-y-1 text-sm">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex gap-3">
                      <span className="w-20 text-charcoal/60">{h.day}</span>
                      <span className="text-charcoal">{h.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 relative rounded-2xl overflow-hidden min-h-[400px] shadow-xl shadow-charcoal/10 border border-charcoal/5"
        >
          <iframe
            src={siteConfig.mapsEmbedSrc}
            className="absolute inset-0 h-full w-full grayscale-[40%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte — Pizza d'Issy"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-cream/95 backdrop-blur-md rounded-xl p-4 shadow-lg flex items-center justify-between gap-4">
            <div>
              <div className="font-serif text-lg">Pizza d'Issy</div>
              <div className="text-xs text-charcoal/60">
                {siteConfig.address.full}
              </div>
            </div>
            <Button asChild size="sm">
              <a
                href={siteConfig.socials.google}
                target="_blank"
                rel="noopener noreferrer"
              >
                Itinéraire
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
