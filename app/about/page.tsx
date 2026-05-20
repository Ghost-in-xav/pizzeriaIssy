import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Notre histoire · De Naples à Issy",
  description:
    "L'histoire d'une famille napolitaine installée à Issy-les-Moulineaux. Pâte 48h, four à bois, tradition transmise de génération en génération.",
};

export default function AboutPage() {
  return (
    <>
      <header className="pt-32 md:pt-40 pb-12">
        <div className="container-tight max-w-3xl">
          <span className="eyebrow">Notre histoire</span>
          <h1 className="h-display mt-4 text-balance">
            De Mergellina à Issy,
            <br />
            <em className="italic text-tomato">une histoire de famille.</em>
          </h1>
          <p className="body-lg mt-6 text-pretty">
            Pizza d'Issy n'est pas né dans un bureau. Il est né dans une cuisine.
            Sur une farine renversée. Dans le souvenir d'un grand-père qui répétait :
            <em className="font-serif"> "la pasta è poesia, la pizza è preghiera."</em>
          </p>
        </div>
      </header>

      <section className="container-tight">
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl shadow-charcoal/20">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=85"
            alt="Vue du restaurant Pizza d'Issy"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="container-tight py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          <div className="md:col-span-1">
            <span className="eyebrow">Chapitre I</span>
            <h2 className="h-section mt-3">Naples, 2018.</h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-charcoal/75 text-lg leading-relaxed text-pretty">
            <p>
              Giulio a vingt-cinq ans. Il travaille dans la pizzeria familiale du
              quartier de Mergellina, à deux pas de la mer. C'est là qu'il apprend
              le geste. Pas un cours, pas un livre — une transmission. Son grand-père
              lui dit : <em>"écoute la pâte, elle te dira quand elle est prête."</em>
            </p>
            <p>
              Il apprend la patience du levain. Le secret d'une mozzarella encore
              tiède. La cuisson en 90 secondes. Le geste du <em>schiaffo</em> — la
              gifle qui étire la pâte sans la briser.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="paper-texture absolute inset-0 -z-10 opacity-60" />
        <div className="container-tight grid gap-12 md:grid-cols-2 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-xl shadow-charcoal/15 order-2 md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=1200&q=85"
              alt="Four à bois traditionnel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="eyebrow">Chapitre II</span>
            <h2 className="h-section mt-3">Issy, 2024.</h2>
            <div className="mt-6 space-y-5 text-charcoal/75 text-lg leading-relaxed text-pretty">
              <p>
                Six ans plus tard, Giulio pose ses valises à Issy-les-Moulineaux.
                Il veut transmettre, à son tour. Le four arrive de Sorrente — 1,8
                tonnes de brique réfractaire, monté pierre par pierre.
              </p>
              <p>
                La farine, c'est Caputo. La mozzarella, des Pouilles. La tomate San
                Marzano, du pied du Vésuve. Le basilic, frais, coupé chaque matin.
                Pas un raccourci, jamais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream-soft py-24 md:py-32">
        <div className="container-tight max-w-3xl text-center">
          <span className="eyebrow text-gold before:bg-gold/60 mx-auto">
            Notre promesse
          </span>
          <blockquote className="mt-6 font-serif text-3xl md:text-4xl leading-snug text-balance">
            "Quand vous mordez dans une de nos pizzas, on veut que vous entendiez
            les rires d'un déjeuner napolitain. C'est tout."
          </blockquote>
          <figcaption className="mt-8 text-sm uppercase tracking-[0.25em] text-gold/80">
            — Giulio, chef & fondateur
          </figcaption>
        </div>
      </section>

      <section className="container-tight py-24 md:py-32 text-center">
        <h2 className="h-section text-balance">
          Le mieux, c'est encore de goûter.
        </h2>
        <p className="body-lg mt-4 max-w-xl mx-auto">
          Une table vous attend. On vous gardera la meilleure place près du four.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg">
            <Link href="/reservation">Réserver une table</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/menu">Voir la carte</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
