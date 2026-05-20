import { Hero } from "@/components/site/hero";
import { BestSellers } from "@/components/site/best-sellers";
import { Story } from "@/components/site/story";
import { Values } from "@/components/site/values";
import { Reviews } from "@/components/site/reviews";
import { Location } from "@/components/site/location";
import { FinalCTA } from "@/components/site/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Story />
      <Values />
      <Reviews />
      <Location />
      <FinalCTA />
    </>
  );
}
