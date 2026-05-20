"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/interieur.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/85 to-charcoal/70" />
      </div>
      <div className="container-tight text-cream-soft">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <span className="eyebrow text-gold before:bg-gold/60">
            Réservation
          </span>
          <h2 className="h-section mt-4 text-balance">
            Une table vous attend.
            <br />
            <em className="italic text-gold-soft">Buon appetito.</em>
          </h2>
          <p className="body-lg mt-5 text-cream-soft/75">
            Réservez en ligne en moins de 30 secondes, ou appelez-nous directement.
            On vous gardera la meilleure place près du four.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="/reservation">Réserver maintenant</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream-soft/30 text-cream-soft hover:bg-cream-soft hover:text-charcoal"
            >
              <Link href="/menu">Voir le menu</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
