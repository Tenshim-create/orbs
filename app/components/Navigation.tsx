import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-3 group hover:opacity-80 transition-opacity"
          >
            {/* Orb Icon - red elliptical orb matching favicon design */}
            <div className="relative flex items-center justify-center w-8 h-8">
              <svg
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="navOrbGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ff0000" stopOpacity="1"/>
                    <stop offset="30%" stopColor="#cc0000" stopOpacity="0.9"/>
                    <stop offset="50%" stopColor="#990000" stopOpacity="0.7"/>
                    <stop offset="70%" stopColor="#660000" stopOpacity="0.5"/>
                    <stop offset="85%" stopColor="#330000" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#000000" stopOpacity="1"/>
                  </radialGradient>
                </defs>
                <ellipse cx="32" cy="32" rx="28" ry="24" fill="url(#navOrbGradient)"/>
              </svg>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 scale-150"></div>
            </div>
            
            {/* Logo Text */}
            <span className="text-xl font-bold text-white">
              Orbs
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

