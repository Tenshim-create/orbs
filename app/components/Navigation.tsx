import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="group transition-all"
          >
            {/* Orb Icon inspired by blue orb, adapted to cyan/teal hero colors */}
            <div className="relative flex items-center justify-center w-10 h-10">
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-cyan-400/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-150"></div>
              
              {/* Single orb with cyan/teal gradient matching hero section */}
              <div 
                className="relative w-10 h-10 rounded-full group-hover:scale-110 transition-transform duration-300"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(236, 254, 255, 0.98) 10%, rgba(165, 243, 252, 0.95) 20%, rgba(103, 232, 249, 0.9) 35%, rgba(34, 211, 238, 0.85) 50%, rgba(20, 184, 166, 0.8) 65%, rgba(15, 118, 110, 0.85) 80%, rgba(13, 71, 71, 0.9) 92%, rgba(0, 0, 0, 1) 100%)'
                }}
              ></div>
            </div>
          </Link>
          
          {/* Link to all orbs */}
          <Link
            href="/orbs"
            className="group relative px-4 py-2 border border-cyan-500/30 rounded-lg text-white/80 hover:text-white transition-all text-sm md:text-base font-medium bg-black/40 backdrop-blur-sm hover:bg-black/60"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                boxShadow: '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.2)'
              }}
            ></div>
            <span className="relative z-10">All Orbs</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

