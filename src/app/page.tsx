import { CTA } from "@/components/Cta";
import { FAQ } from "@/components/Faq";
import { Features } from "@/components/Feature";
import { HeroSection } from "@/components/HeroSection";
import { HowItWork } from "@/components/HowItWorks";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="mx-auto">
        <HowItWork />
      </div>
      <Features />
      <CTA />
      <FAQ />
    </div>
  );
}
