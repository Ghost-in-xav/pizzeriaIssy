"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function StickyMobileCTA() {
  const pathname = usePathname();
  if (pathname?.startsWith("/reservation")) return null;

  return (
    <div className="md:hidden fixed inset-x-0 bottom-0 z-40 pointer-events-none">
      <div className="pointer-events-auto mx-3 mb-3 grid grid-cols-2 gap-2 rounded-full bg-charcoal/95 backdrop-blur-md p-1.5 shadow-2xl shadow-charcoal/30 border border-charcoal/40">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-cream-soft hover:bg-cream-soft/5 transition-colors"
          aria-label="Appeler le restaurant"
        >
          <Phone className="h-4 w-4" />
          Appeler
        </a>
        <Link
          href="/reservation"
          className="flex items-center justify-center gap-2 rounded-full bg-tomato px-4 py-3 text-sm font-medium text-cream-soft hover:bg-tomato-deep transition-colors"
        >
          <CalendarCheck className="h-4 w-4" />
          Réserver
        </Link>
      </div>
    </div>
  );
}
