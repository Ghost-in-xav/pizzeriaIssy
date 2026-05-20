import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Clock, MapPin } from "lucide-react";
import { ReservationForm } from "@/components/site/reservation-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Réserver une table",
  description:
    "Réservez votre table chez Pizza d'Issy en quelques secondes. Confirmation rapide par téléphone ou WhatsApp.",
};

export default function ReservationPage() {
  return (
    <section className="relative pt-32 md:pt-40 pb-32 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=2000&q=85"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/80 to-cream" />
      </div>

      <div className="container-tight">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Réservation</span>
          <h1 className="h-display mt-4 text-balance">
            Réservez votre table en <em className="italic text-tomato">30 secondes</em>.
          </h1>
          <p className="body-lg mt-5">
            Renseignez vos informations, nous vous confirmons par téléphone dans les
            minutes qui suivent.
          </p>
        </div>

        <div className="grid gap-10 md:gap-12 lg:grid-cols-5 items-start">
          <div className="lg:col-span-3">
            <ReservationForm />
          </div>

          <aside className="lg:col-span-2 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-charcoal/10 bg-cream-soft/60 p-7">
              <h3 className="font-serif text-xl mb-5">Préférez-vous appeler ?</h3>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 rounded-xl bg-tomato p-5 text-cream-soft hover:bg-tomato-deep transition-colors"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-cream-soft/15">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-[0.65rem] uppercase tracking-[0.2em] text-cream-soft/70">
                    Appeler le restaurant
                  </span>
                  <span className="block font-serif text-xl mt-0.5">
                    {siteConfig.phoneDisplay}
                  </span>
                </span>
              </a>
            </div>

            <div className="rounded-2xl border border-charcoal/10 bg-cream-soft/60 p-7">
              <h3 className="font-serif text-xl mb-5">Infos pratiques</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Clock className="h-4 w-4 mt-1 shrink-0 text-tomato" />
                  <div>
                    <div className="font-medium text-charcoal">Horaires</div>
                    <div className="text-charcoal/65">
                      Lun – Ven · midi · Mar – Sam · soir
                    </div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="h-4 w-4 mt-1 shrink-0 text-tomato" />
                  <div>
                    <div className="font-medium text-charcoal">Adresse</div>
                    <div className="text-charcoal/65">{siteConfig.address.full}</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-charcoal text-cream-soft/85 p-7">
              <div className="font-serif text-lg text-cream-soft mb-2">
                Groupes & privatisations
              </div>
              <p className="text-sm text-cream-soft/70 leading-relaxed">
                Pour les tablées de 8 personnes et plus, merci de nous appeler
                directement — nous vous proposerons un menu sur mesure.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
