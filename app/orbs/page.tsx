import Link from "next/link";
import { angelNumbers } from "@/data/angel-numbers";
import VibeOrb from "@/app/components/VibeOrb";

export default function OrbsPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
              All Orbs
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
              Explore the spiritual meaning behind every angel number
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* First half of orbs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {angelNumbers.slice(0, Math.ceil(angelNumbers.length / 2)).map((num) => (
            <Link
              key={num.slug}
              href={`/number/${num.slug}`}
              className="group relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 hover:bg-black/80 transition-all overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Vibe Orb */}
                <div className="mb-4 flex justify-center">
                  <VibeOrb number={num.number} />
                </div>
                
                {/* Number */}
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl font-bold text-white/90 group-hover:text-white transition-colors drop-shadow-lg">
                    {num.number}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {num.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section - Create Your Soul Orb */}
        <div className="my-16 flex justify-center">
          <div className="bg-black/60 border border-white/20 rounded-xl p-12 text-center backdrop-blur-sm max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Create Your Soul Orb
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover your personal angel number and unlock your unique soul orb
            </p>
            <Link
              href="/calculator"
              className="inline-block px-10 py-5 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30 text-lg"
            >
              Calculate Your Angel Number
            </Link>
          </div>
        </div>

        {/* Second half of orbs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {angelNumbers.slice(Math.ceil(angelNumbers.length / 2)).map((num) => (
            <Link
              key={num.slug}
              href={`/number/${num.slug}`}
              className="group relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 hover:bg-black/80 transition-all overflow-hidden"
            >
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Vibe Orb */}
                <div className="mb-4 flex justify-center">
                  <VibeOrb number={num.number} />
                </div>
                
                {/* Number */}
                <div className="flex items-center justify-center mb-3">
                  <span className="text-3xl font-bold text-white/90 group-hover:text-white transition-colors drop-shadow-lg">
                    {num.number}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed text-center">
                  {num.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

