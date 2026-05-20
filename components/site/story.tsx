"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Story() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="paper-texture absolute inset-0 -z-10 opacity-50" aria-hidden />
      <div className="container-tight grid gap-12 md:gap-16 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-charcoal/20">
            <Image
              src="/interieur.png"
              alt="La salle du restaurant Pizza d'Issy — ambiance chaleureuse et dorée"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 hidden sm:flex flex-col items-center justify-center h-32 w-32 rounded-full bg-tomato text-cream-soft shadow-xl shadow-tomato/30 rotate-[-8deg]">
            <span className="font-serif text-4xl leading-none">48h</span>
            <span className="text-[0.6rem] uppercase tracking-[0.2em] mt-1">
              Maturation
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow">Notre histoire</span>
          <h2 className="h-section mt-4 text-balance">
            De Naples à Issy, une histoire de famille.
          </h2>
          <div className="mt-6 space-y-5 text-charcoal/75 leading-relaxed text-lg text-pretty">
            <p>
              Tout commence en 2018, dans une petite cuisine de Mergellina à Naples.
              Notre chef <em className="font-serif">Giulio</em> y apprend les gestes
              transmis par son grand-père : pétrir à la main, respecter la pâte,
              écouter le four.
            </p>
            <p>
              Six ans plus tard, ces gestes prennent racine à Issy-les-Moulineaux.
              Le four arrive de Sorrente. La farine, de la coopérative <em>
                Caputo
              </em>
              . La mozzarella, des bufflonnes de Campanie. Rien n'est laissé au
              hasard.
            </p>
            <p className="font-serif italic text-charcoal text-xl">
              "Une vraie pizza, c'est trois ingrédients et beaucoup de patience."
            </p>
          </div>
          <div className="mt-9">
            <Button asChild>
              <Link href="/about">Lire notre histoire</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
