// import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { SimulatorTechSection } from "./components/simulator-tech-section";
import { WaitlistForm } from "./components/waitlist-form";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen pt-8 sm:pt-20">
      <HeroSection />
      <HowItWorksSection />
      <SimulatorTechSection />
      <WaitlistForm />
      <Footer />
    </div>
  );
}
