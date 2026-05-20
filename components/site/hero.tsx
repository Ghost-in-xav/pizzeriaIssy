"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end md:items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=85"
          alt="Pizza napolitaine artisanale sortant du four à bois"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-transparent" />
      </div>

      {/* Steam effect */}
      <div
        className="pointer-events-none absolute left-1/2 bottom-[30%] -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`absolute h-24 w-24 rounded-full bg-cream-soft/30 blur-2xl animate-steam-${
              i + 1
            }`}
            style={{ left: `${i * 28 - 30}px` }}
          />
        ))}
      </div>

      <div className="container-tight relative z-10 pb-20 md:pb-0 pt-32 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-cream-soft"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cream-soft/20 bg-cream-soft/5 backdrop-blur-md px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.25em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Trattoria napolitaine · Issy-les-Moulineaux
          </div>

          <h1 className="h-display mt-6 text-balance">
            Pizza artisanale{" "}
            <span className="italic text-gold-soft">italienne</span>
            <br />à Issy-les-Moulineaux.
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-cream-soft/85 leading-relaxed text-pretty">
            Pâte maturée 48 heures, ingrédients importés directement d'Italie,
            cuisson au four traditionnel. L'âme de Naples, à deux pas de Paris.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Button asChild size="lg">
              <Link href="/reservation">Réserver une table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream-soft/30 text-cream-soft hover:bg-cream-soft hover:text-charcoal"
            >
              <Link href="/menu">Voir le menu</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden
                  />
                ))}
              </div>
              <span className="text-cream-soft/80">
                <strong className="text-cream-soft">4,9 / 5</strong> · Google
              </span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-cream-soft/20" />
            <div className="text-cream-soft/70">
              Plus de <strong className="text-cream-soft">600 avis</strong>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-cream-soft/60 text-[0.65rem] uppercase tracking-[0.3em]"
        aria-hidden="true"
      >
        <span>Découvrir</span>
        <span className="h-12 w-px bg-gradient-to-b from-cream-soft/60 to-transparent" />
      </div>
    </section>
  );
}
