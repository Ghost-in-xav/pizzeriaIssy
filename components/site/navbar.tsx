"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Notre histoire" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-cream/85 backdrop-blur-md border-b border-charcoal/10"
          : "bg-transparent",
      )}
    >
      <nav className="container-tight flex h-16 md:h-20 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-tomato text-cream-soft font-serif text-lg leading-none shadow-md">
            P
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-gold ring-2 ring-cream" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg text-charcoal">Pizza d'Issy</span>
            <span className="text-[0.6rem] uppercase tracking-[0.25em] text-charcoal/55">
              Trattoria · 2024
            </span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-charcoal/75 hover:text-tomato transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-charcoal/75 hover:text-tomato transition-colors"
            aria-label="Appeler le restaurant"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <Link href="/reservation">Réserver</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center h-10 w-10 rounded-full hover:bg-charcoal/5 transition-colors cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-charcoal/10 bg-cream animate-fade-up">
          <ul className="container-tight py-6 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-2xl text-charcoal hover:text-tomato transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4 flex flex-col gap-3">
              <Button asChild size="lg">
                <Link href="/reservation" onClick={() => setOpen(false)}>
                  Réserver une table
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
