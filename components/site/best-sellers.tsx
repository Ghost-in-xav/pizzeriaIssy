"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Flame, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bestSellers } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

const fallbackImages = [
  "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80",
];

const tagMeta: Record<string, { label: string; icon?: React.ReactNode; cls: string }> = {
  signature: {
    label: "Signature",
    cls: "bg-gold/15 text-gold-soft border-gold/30",
  },
  spicy: {
    label: "Épicée",
    icon: <Flame className="h-3 w-3" />,
    cls: "bg-tomato/15 text-tomato border-tomato/30",
  },
  vegetarian: {
    label: "Végétarienne",
    icon: <Leaf className="h-3 w-3" />,
    cls: "bg-basil/15 text-basil border-basil/30",
  },
};

export function BestSellers() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="eyebrow">Le meilleur de la carte</span>
            <h2 className="h-section mt-4 text-balance">
              Nos pizzas <em className="italic font-normal text-tomato">signatures</em>
            </h2>
            <p className="body-lg mt-4">
              Trois recettes qui font l'âme de la maison — choisies par nos clients,
              servies tous les soirs.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/menu">
              Voir toute la carte <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-cream-soft border border-charcoal/5 shadow-[0_8px_30px_-15px_rgba(28,28,28,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(28,28,28,0.25)] transition-shadow duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image ?? fallbackImages[i]}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.tags?.map((t) => {
                    const meta = tagMeta[t];
                    if (!meta) return null;
                    return (
                      <span
                        key={t}
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full border backdrop-blur-md px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider",
                          meta.cls,
                        )}
                      >
                        {meta.icon}
                        {meta.label}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="font-serif text-2xl text-charcoal">{item.name}</h3>
                  <span className="font-serif text-xl text-tomato whitespace-nowrap">
                    {item.price.toFixed(0)}€
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-charcoal/65">
                  {item.description}
                </p>
              </div>
              <span
                aria-hidden
                className="absolute -bottom-px left-1/2 h-[3px] w-0 -translate-x-1/2 bg-tomato transition-all duration-500 group-hover:w-2/3"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
