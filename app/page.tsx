import Link from "next/link";

// Eine kleine Auswahl der wichtigsten Zahlen für den Start
const heroNumbers = ["111", "222", "333", "444", "555", "777", "888", "1111"];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* 1. ATMOSPHÄRISCHER HINTERGRUND (Deep Space) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Ein ganz subtiler blauer Schein von oben */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] opacity-40" />
        {/* Ein dunkler Schein von unten für Tiefe */}
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[100px] opacity-30" />
      </div>

      {/* 2. DER MYSTISCHE ORB (CSS Only - lädt sofort) */}
      <div className="relative z-10 mb-12 group cursor-pointer">
        {/* Der äußere Glow (Atmosphäre) - subtiler beim Hover, weniger Streuung */}
        <div className="absolute inset-0 bg-cyan-500 blur-[40px] opacity-20 group-hover:opacity-35 transition-opacity duration-1000 ease-in-out rounded-full scale-120" />
        {/* Zusätzlicher subtiler Glow Layer beim Hover */}
        <div className="absolute inset-0 bg-cyan-400 blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000 ease-in-out rounded-full scale-125" />
        {/* Dritter Glow Layer - minimal */}
        <div className="absolute inset-0 bg-cyan-300 blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 ease-in-out rounded-full scale-130" />
        
        {/* Der Orb selbst */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-black shadow-[inset_-20px_-20px_50px_rgba(255,255,255,0.1),_inset_20px_20px_50px_rgba(6,182,212,0.5)] group-hover:shadow-[inset_-20px_-20px_50px_rgba(255,255,255,0.12),_inset_20px_20px_50px_rgba(6,182,212,0.7),_0_0_40px_rgba(6,182,212,0.3),_0_0_60px_rgba(6,182,212,0.2)] border border-white/5 group-hover:border-cyan-500/20 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-105">
           
           {/* Inneres Licht / Nebel */}
           <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1),_transparent_70%)] animate-spin-slow opacity-50" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.8),_transparent_20%)] blur-md" /> {/* Highlight */}
           
        </div>
      </div>

      {/* 3. LUXUS TYPOGRAFIE */}
      <div className="z-10 text-center space-y-6 max-w-2xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          ORBS
        </h1>
        <p className="text-cyan-200/60 text-xs md:text-sm tracking-[0.4em] uppercase font-light">
          Decode the Universe
        </p>
      </div>

      {/* 4. GLASSMORPHISM BUTTONS */}
      <div className="mt-16 z-10 grid grid-cols-3 md:grid-cols-4 gap-4 px-4 w-full max-w-3xl">
        {heroNumbers.map((num) => (
          <Link 
            href={`/number/${num}`} 
            key={num}
            className="group relative"
          >
            {/* Der Glass-Button Container */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-4 text-center transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              
              {/* Leichter Schimmer Effekt beim Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <span className="relative z-10 text-lg md:text-xl font-light tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                {num}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Navigation (Dezent) */}
      <div className="absolute bottom-8 text-zinc-600 text-[10px] tracking-[0.2em] uppercase z-10">
        The Architecture of Meaning
      </div>

    </main>
  );
}