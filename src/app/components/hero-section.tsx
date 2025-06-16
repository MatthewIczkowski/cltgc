import React from 'react'
import Image from 'next/image'
import heroImage from '../../../public/hero-section.png'

export function HeroSection() {
  return ( 
    <div className="relative min-h-screen overflow-hidden">
        <Image src={heroImage} alt="Charlotte Golf Club" className="mx-auto block"/>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Charlotte Golf Club</h1>
        <p className="text-xl md:text-2xl mb-4 font-medium">
            TrackMan Golf Simulator Membership
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience professional-grade golf simulators year-round. Perfect your swing with TrackMan technology in an
            exclusive, private setting.
        </p>
        <p className="text-center text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">Waitlist coming soon...</p>
    </div>
    

  );
}
