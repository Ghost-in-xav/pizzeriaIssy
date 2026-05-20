"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Camille R.",
    when: "Il y a 2 semaines",
    rating: 5,
    text: "La meilleure pizza que j'ai mangée depuis Naples. La pâte est aérienne, le four à bois fait toute la différence. Service au top.",
  },
  {
    name: "Antoine M.",
    when: "Il y a 1 mois",
    rating: 5,
    text: "Cadre chaleureux, accueil sincère. La Tartufina est une tuerie. Mon nouveau spot italien à Issy, sans hésiter.",
  },
  {
    name: "Léa D.",
    when: "Il y a 3 semaines",
    rating: 5,
    text: "Burrata fondante, jambon d'exception, pâte parfaite. On se croirait vraiment en Italie. À refaire absolument.",
  },
];

export function Reviews() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="eyebrow">Ce qu'ils en disent</span>
            <h2 className="h-section mt-4 text-balance">
              4,9 / 5 sur Google.
              <br />
              Mais on aime mieux les <em className="italic text-tomato">mots</em>.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-charcoal/60">600+ avis vérifiés</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl bg-cream-soft border border-charcoal/5 p-7 shadow-[0_8px_30px_-18px_rgba(28,28,28,0.2)]"
            >
              <Quote
                className="absolute top-6 right-6 h-8 w-8 text-tomato/15"
                aria-hidden
              />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-charcoal/80 leading-relaxed text-pretty">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-charcoal/10">
                <div className="font-serif text-lg text-charcoal">{r.name}</div>
                <div className="text-xs text-charcoal/50 mt-0.5">{r.when}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
