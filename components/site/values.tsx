"use client";

import { motion } from "framer-motion";
import { Wheat, Flame, Leaf, Award } from "lucide-react";

const values = [
  {
    icon: Wheat,
    title: "Pâte maturée 48 heures",
    text: "Farine italienne Caputo type 00. Pétrissage manuel, repos lent en cave à 4°C pour une digestibilité parfaite.",
  },
  {
    icon: Flame,
    title: "Four traditionnel à 450°C",
    text: "Cuisson en 90 secondes. La croûte gonfle, se cloque, se parfume. C'est la signature napolitaine.",
  },
  {
    icon: Leaf,
    title: "Produits frais & importés",
    text: "Tomate San Marzano D.O.P., mozzarella di bufala, basilic frais. Sélectionnés chaque semaine.",
  },
  {
    icon: Award,
    title: "Tradition napolitaine",
    text: "Recettes héritées de Naples, gestes transmis de génération en génération. Sans raccourcis.",
  },
];

export function Values() {
  return (
    <section className="py-24 md:py-32 bg-charcoal text-cream-soft relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F7F1E3 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-tight relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="eyebrow text-gold before:bg-gold/60">Nos valeurs</span>
          <h2 className="h-section mt-4 text-balance">
            L'<em className="italic text-gold-soft">authenticité</em>, ingrédient
            principal.
          </h2>
          <p className="body-lg mt-4 text-cream-soft/70">
            Pas de compromis, pas de raccourcis. Juste le respect du produit, du
            geste et du temps.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-cream-soft/10 bg-cream-soft/[0.03] p-7 hover:border-gold/40 hover:bg-cream-soft/[0.05] transition-all duration-300"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-tomato/20 text-gold border border-gold/30 group-hover:bg-tomato group-hover:text-cream-soft transition-colors">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl mb-2">{v.title}</h3>
              <p className="text-sm leading-relaxed text-cream-soft/65">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
