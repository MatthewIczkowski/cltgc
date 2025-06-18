// import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import { HowItWorksSection } from "./components/how-it-works-section";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen pt-8 pb-8 sm:pt-20 sm:pb-20">
      <HeroSection />
      <HowItWorksSection />
      <footer className="row-start-3 flex gap-[16px] flex-wrap items-center justify-center">
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Charlotte Golf Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
