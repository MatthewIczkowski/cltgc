"use client"

import React from 'react'
import Image from 'next/image'
import heroImage from '../../../public/hero-section.png'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return ( 
    <div className="relative min-h-screen overflow-hidden pb-20">
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <Image src={heroImage} alt="Charlotte Golf Club" className="mx-auto block"/>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">Charlotte Golf Club</h1>
          <p className="text-lg md:text-2xl mb-4 font-medium">
              TrackMan Golf Simulator Membership
          </p>
          <p className="text-md md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience professional-grade golf simulators year-round. Perfect your swing with TrackMan technology in an
              exclusive, private setting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-emerald-900 border-emerald-800 border-2 font-semibold px-8 py-4 text-lg rounded-md flex items-center justify-center"
                onClick={scrollToWaitlist}
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5"/>
              </button>
              <button
                className="border-emerald-900 border-2 text-emerald-900 hover:bg-emerald-900 hover:text-white font-semibold px-8 py-4 text-lg rounded-md"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>  
      </div>
  );
}
