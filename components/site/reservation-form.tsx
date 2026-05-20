"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "loading" | "success";

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

export function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "20:00",
    guests: "2",
    note: "",
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    // Replace with real endpoint or webhook
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-cream-soft border border-charcoal/5 p-10 text-center shadow-[0_20px_60px_-20px_rgba(28,28,28,0.2)]"
      >
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-basil/15 text-basil mb-5">
          <Check className="h-7 w-7" />
        </div>
        <h2 className="font-serif text-3xl text-charcoal">
          Votre table est demandée.
        </h2>
        <p className="mt-3 text-charcoal/65 max-w-md mx-auto">
          Nous vous confirmerons par téléphone dans les prochaines minutes au{" "}
          <strong className="text-charcoal">{data.phone || "numéro fourni"}</strong>.
          À très vite, {data.name || "à très vite"} !
        </p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="outline" onClick={() => setStatus("idle")}>
            Nouvelle réservation
          </Button>
          <Button variant="whatsapp" asChild>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Confirmer sur WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-cream-soft border border-charcoal/5 p-7 md:p-10 shadow-[0_20px_60px_-20px_rgba(28,28,28,0.18)]"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-tomato/10 text-tomato">
          <CalendarCheck className="h-5 w-5" />
        </span>
        <div>
          <div className="font-serif text-xl text-charcoal">
            Réservation en ligne
          </div>
          <div className="text-xs text-charcoal/55">Confirmation sous 15 min</div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet</Label>
          <Input
            id="name"
            required
            placeholder="Marco Rossi"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="06 12 34 56 78"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            required
            min={todayISO()}
            value={data.date}
            onChange={(e) => setData({ ...data, date: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Heure</Label>
          <Input
            id="time"
            type="time"
            required
            value={data.time}
            onChange={(e) => setData({ ...data, time: e.target.value })}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label>Nombre de personnes</Label>
          <div className="flex flex-wrap gap-2">
            {["1", "2", "3", "4", "5", "6", "7+"].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setData({ ...data, guests: g })}
                className={
                  "h-11 min-w-11 rounded-full border px-4 text-sm font-medium transition-colors cursor-pointer " +
                  (data.guests === g
                    ? "border-tomato bg-tomato text-cream-soft"
                    : "border-charcoal/15 bg-cream/40 text-charcoal hover:border-tomato/50")
                }
              >
                {g}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="note">Demande particulière (facultatif)</Label>
          <Textarea
            id="note"
            placeholder="Allergies, occasion spéciale, table près de la fenêtre…"
            value={data.note}
            onChange={(e) => setData({ ...data, note: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row gap-3">
        <Button type="submit" size="lg" className="flex-1" disabled={status === "loading"}>
          <AnimatePresence mode="wait">
            {status === "loading" ? (
              <motion.span
                key="l"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Loader2 className="h-4 w-4 animate-spin" /> Envoi…
              </motion.span>
            ) : (
              <motion.span key="i" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                Confirmer ma réservation
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
        <Button variant="whatsapp" size="lg" asChild>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Bonjour, je souhaite réserver une table chez Pizza d'Issy.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </Button>
      </div>

      <p className="mt-4 text-xs text-charcoal/50 text-center">
        En envoyant ce formulaire, vous acceptez d'être contacté par téléphone
        pour confirmer votre réservation.
      </p>
    </form>
  );
}
