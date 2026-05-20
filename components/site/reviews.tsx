"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Arnauds29",
    initial: "A",
    color: "bg-blue-500",
    when: "Il y a 7 mois",
    rating: 5,
    localGuide: true,
    text: "Une excellente pizza \"Campione\" dégustée en terrasse accompagnée d'une IPA. La pâte à pizza est excellente et la garniture très bonne. Le personnel est serviable et accueillant. Je me suis régalé. Je recommande cette pizzeria sans hésitation !",
  },
  {
    name: "Benoit Trojet",
    initial: "B",
    color: "bg-emerald-600",
    when: "Il y a 8 mois",
    rating: 5,
    localGuide: true,
    text: "Une très belle découverte. Les pizzas sont tout simplement excellentes. Le service est impeccable avec un grand sourire. Le cadre est parfait pour partager un bon moment. Je recommande vivement cette adresse.",
  },
  {
    name: "Moucha Lou",
    initial: "M",
    color: "bg-purple-500",
    when: "Il y a 9 mois",
    rating: 5,
    localGuide: true,
    text: "De passage en famille, l'odeur des poivrons grillés nous a tout de suite ouvert l'appétit. La pâte est excellente, la cuisson des légumes parfaite. L'accueil du patron, très sociable et attentionné, nous a fait sentir comme chez nous. Je recommande vivement !",
  },
  {
    name: "Jean Jourdy",
    initial: "J",
    color: "bg-orange-500",
    when: "Il y a un an",
    rating: 5,
    localGuide: true,
    text: "J'me suis trouvé cette petite pizzeria et j'avoue avoir rarement mangé de si bonnes pizzas… produits frais, chaque ingrédient a du goût. Ça vaut le détour, vraiment.",
  },
  {
    name: "Pauline Gutierrez",
    initial: "P",
    color: "bg-rose-500",
    when: "Il y a 11 mois",
    rating: 5,
    localGuide: true,
    text: "Super expérience à Pizza d'Issy. Les pizzas sont excellentes avec une cuisson parfaitement maîtrisée. J'ai pris la pizza à la truffe avec une burrata, je me suis régalée. Le personnel est aux petits soins, terrasse très agréable, je recommande !",
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
              4,8 / 5 sur Google.
              <br />
              Mais on aime mieux les <em className="italic text-tomato">mots</em>.
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Pizza+d%27Issy+8+Rue+Jeanne-d%27Arc+92130+Issy-les-Moulineaux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm group shrink-0"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-charcoal/60 group-hover:text-tomato transition-colors">
              149 avis Google
            </span>
          </a>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid gap-5 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </div>
        <div className="hidden md:grid gap-5 md:grid-cols-2 mt-5 max-w-2xl">
          {reviews.slice(3).map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i + 3} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="md:hidden -mx-5 px-5">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
            {reviews.map((r, i) => (
              <div
                key={r.name}
                className="snap-start shrink-0 w-[85vw] max-w-sm"
              >
                <ReviewCard review={r} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
}: {
  review: (typeof reviews)[0];
  index: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative rounded-2xl bg-cream-soft border border-charcoal/5 p-6 shadow-[0_8px_30px_-18px_rgba(28,28,28,0.2)] h-full flex flex-col"
    >
      <Quote
        className="absolute top-5 right-5 h-7 w-7 text-tomato/12"
        aria-hidden
      />

      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: review.rating }).map((_, idx) => (
          <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      <blockquote className="text-charcoal/80 leading-relaxed text-pretty text-sm flex-1">
        "{review.text}"
      </blockquote>

      <figcaption className="mt-5 pt-4 border-t border-charcoal/8 flex items-center gap-3">
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white font-semibold text-sm ${review.color}`}
          aria-hidden
        >
          {review.initial}
        </span>
        <div className="min-w-0">
          <div className="font-medium text-charcoal truncate">{review.name}</div>
          <div className="flex items-center gap-1.5 mt-0.5">
            {review.localGuide && (
              <>
                <span className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#4285F4]">
                  Local Guide
                </span>
                <span className="text-charcoal/30 text-xs">·</span>
              </>
            )}
            <span className="text-[0.7rem] text-charcoal/50">{review.when}</span>
          </div>
        </div>
        <svg
          className="ml-auto shrink-0 h-5 w-5 opacity-60"
          viewBox="0 0 24 24"
          aria-label="Google"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
      </figcaption>
    </motion.figure>
  );
}
