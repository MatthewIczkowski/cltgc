// import Image from "next/image";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 items-center sm:items-start">
        <HeroSection />
      </main>
      <footer className="row-start-3 flex gap-[16px] flex-wrap items-center justify-center">
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© {new Date().getFullYear()} Charlotte Golf Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
