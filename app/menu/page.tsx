import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Flame, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { menu, type MenuTag } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Menu · Pizzas, Salades & Pasta",
  description:
    "Découvrez notre carte : pizzas maison au four, salades fraîches avec burrata, pâtes artisanales. Vraie cuisine italienne à Issy-les-Moulineaux.",
};

const tagMeta: Record<MenuTag, { label: string; icon?: React.ReactNode; cls: string }> = {
  signature: { label: "Signature", cls: "bg-gold/15 text-gold border-gold/30" },
  spicy: {
    label: "Épicée",
    icon: <Flame className="h-3 w-3" />,
    cls: "bg-tomato/15 text-tomato border-tomato/30",
  },
  vegetarian: {
    label: "Végé",
    icon: <Leaf className="h-3 w-3" />,
    cls: "bg-basil/15 text-basil border-basil/30",
  },
  vegan: {
    label: "Vegan",
    icon: <Leaf className="h-3 w-3" />,
    cls: "bg-basil/15 text-basil border-basil/30",
  },
};

export default function MenuPage() {
  return (
    <>
      <header className="relative pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream" />
        </div>
        <div className="container-tight text-center">
          <span className="eyebrow before:hidden mx-auto">La carte</span>
          <h1 className="h-display mt-4 text-balance">
            Notre carte, <em className="italic text-tomato">faite maison</em>.
          </h1>
          <p className="body-lg mt-5 max-w-2xl mx-auto">
            Recettes traditionnelles italiennes, produits sélectionnés chaque
            semaine. La carte évolue au rythme des saisons.
          </p>

          <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Catégories">
            {menu.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-charcoal/15 bg-cream-soft/60 backdrop-blur px-4 py-2 text-sm font-medium text-charcoal/70 hover:border-tomato hover:text-tomato transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="container-tight pb-32 space-y-24">
        {menu.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            className="scroll-mt-28"
            aria-labelledby={`${cat.id}-title`}
          >
            <div className="max-w-2xl mb-10">
              <span className="eyebrow">Catégorie</span>
              <h2 id={`${cat.id}-title`} className="h-section mt-3">
                {cat.label}
              </h2>
              <p className="mt-3 text-charcoal/65">{cat.intro}</p>
            </div>

            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {cat.items.map((item) => (
                <article
                  key={item.name}
                  className="group flex gap-5 items-start"
                >
                  {item.image ? (
                    <div className="relative h-20 w-20 md:h-24 md:w-24 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="96px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ) : (
                    <div className="grid h-20 w-20 md:h-24 md:w-24 shrink-0 place-items-center rounded-xl bg-tomato/10 text-tomato font-serif text-2xl">
                      {item.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3 className="font-serif text-xl text-charcoal flex items-center gap-2">
                        {item.name}
                        {item.name === "Baby Pizza" && (
                          <span className="text-[0.6rem] font-sans font-semibold uppercase tracking-wider rounded-full bg-charcoal/8 text-charcoal/50 border border-charcoal/10 px-2 py-0.5">
                            ≤ 12 ans
                          </span>
                        )}
                      </h3>
                      <span
                        aria-hidden
                        className="flex-1 mx-2 border-b border-dashed border-charcoal/20 translate-y-[-4px]"
                      />
                      <span className="font-serif text-lg text-tomato whitespace-nowrap">
                        {item.price.toFixed(item.price % 1 === 0 ? 0 : 2)}€
                      </span>
                    </div>
                    <p className="text-sm text-charcoal/65 leading-relaxed">
                      {item.description}
                    </p>
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {item.tags.map((t) => {
                          const meta = tagMeta[t];
                          return (
                            <span
                              key={t}
                              className={cn(
                                "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider",
                                meta.cls,
                              )}
                            >
                              {meta.icon}
                              {meta.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="rounded-3xl bg-charcoal text-cream-soft p-10 md:p-16 text-center">
          <h2 className="h-section text-balance">
            Une envie d'<em className="italic text-gold-soft">authentique</em> ?
          </h2>
          <p className="mt-4 text-cream-soft/75 max-w-xl mx-auto">
            Réservez votre table dès maintenant et venez goûter Naples à Issy.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/reservation">Réserver une table</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-cream-soft/30 text-cream-soft hover:bg-cream-soft hover:text-charcoal"
            >
              <Link href="/contact">Nous appeler</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
