import Link from "next/link";
import { angelNumbers } from "@/data/angel-numbers";
import VibeOrb from "./components/VibeOrb";
import RotatingOrb from "./components/RotatingOrb";

export default function Home() {
  const popularNumbers = angelNumbers.slice(0, 12);

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            {/* 3D Rotating Red Orb */}
            <div className="mb-12">
              <RotatingOrb />
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              ORBS
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
              Your Guide to Angel Numbers
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover the spiritual meaning behind the angel numbers you keep seeing. Your angels are trying to communicate with you through repeating number sequences.
            </p>
            
            {/* Calculator CTA */}
            <div className="mb-8">
              <Link
                href="/calculator"
                className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30 text-lg relative group overflow-visible"
                style={{
                  transition: 'all 0.3s ease'
                }}
              >
                <span className="relative z-10">Unlock Your Soul Orb</span>
                {/* Red glow effect on hover - only around the edges */}
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'transparent',
                    boxShadow: '0 0 20px rgba(255, 0, 0, 0.4), 0 0 40px rgba(255, 0, 0, 0.3), 0 0 60px rgba(255, 0, 0, 0.2)',
                    zIndex: -1,
                    margin: '-2px'
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'transparent',
                    boxShadow: 'inset 0 0 15px rgba(255, 0, 0, 0.15)',
                    zIndex: 1,
                    pointerEvents: 'none'
                  }}
                ></div>
              </Link>
            </div>

            {/* Search/Quick Access */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["111", "222", "333", "444", "555", "777", "888", "1111"].map((num) => (
                <Link
                  key={num}
                  href={`/number/${num}`}
                  className="px-6 py-3 bg-black/40 border border-white/20 rounded-lg text-white/80 hover:bg-white/10 hover:border-white/40 transition-all font-medium backdrop-blur-sm"
                >
                  {num}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* What are Angel Numbers */}
        <section className="mb-20">
          <div className="bg-black/60 border border-white/10 rounded-xl p-8 sm:p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 text-white">What Are Angel Numbers?</h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Angel numbers are repeating number sequences that carry spiritual significance and messages from your guardian angels, ascended masters, or the universe itself.
              </p>
              <p>
                When you repeatedly see numbers like 111, 222, 444, or 777, it's not a coincidence—it's a sign. These numbers appear in clocks, license plates, receipts, or anywhere numbers are displayed.
              </p>
              <p>
                Each number sequence has its own unique meaning and guidance. By understanding what these numbers mean, you can align with your highest path and receive divine guidance for your life.
              </p>
              <div className="pt-4">
                <Link
                  href="/calculator"
                  className="inline-block px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors border border-white/30"
                >
                  Calculate Your Personal Angel Number →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Angel Numbers Grid */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Popular Angel Numbers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularNumbers.map((num) => (
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
        </section>

        {/* CTA Section - Get Personal Reading */}
        <section className="mb-20">
          <div className="bg-black/60 border border-white/20 rounded-xl p-12 text-center backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Connect with a professional spiritual advisor for a personalized reading tailored to your unique situation.
            </p>
            <a
              href="#"
              className="inline-block px-10 py-5 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30 text-lg"
            >
              Get Your Personal Reading Now
            </a>
            <p className="text-sm text-gray-400 mt-6">
              Starting from $0.99/min | Trusted by 50,000+ spiritual seekers worldwide
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            How to Use This Guide
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-xl font-bold mb-3 text-white">Notice the Numbers</h3>
              <p className="text-gray-400">
                Pay attention when you see repeating numbers throughout your day—on clocks, receipts, addresses, or anywhere numbers appear.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-white">Look Up the Meaning</h3>
              <p className="text-gray-400">
                Search for the number you keep seeing to discover its spiritual significance and the message your angels are sending.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold mb-3 text-white">Apply the Guidance</h3>
              <p className="text-gray-400">
                Reflect on how the message relates to your current life situation and take inspired action based on the guidance.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-4">
              © {new Date().getFullYear()} ORBS. All rights reserved.
            </p>
            <p className="text-sm">
              For entertainment purposes only. Trust your intuition and seek professional guidance when needed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
