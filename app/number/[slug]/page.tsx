import { getAngelNumberBySlug, getAllSlugs } from "@/data/angel-numbers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VibeOrb from "@/app/components/VibeOrb";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const number = getAngelNumberBySlug(slug);
  
  if (!number) {
    return {
      title: "Angel Number Not Found",
    };
  }

  return {
    title: `Angel Number ${number.number} Meaning - ${number.title.replace(/Angel Number \d+ /, '').replace(/Meaning - /, '')}`,
    description: `Discover the spiritual meaning of angel number ${number.number}. ${number.shortDescription}`,
    keywords: number.keywords.join(", "),
    openGraph: {
      title: `Angel Number ${number.number} Meaning`,
      description: number.shortDescription,
      type: "article",
    },
  };
}

// Datenbank für die Standard-Frequenzen
const frequencyData: Record<string, { hz: string; type: string; description: string }> = {
  "111": { hz: "111Hz", type: "Manifestation Bridge", description: "Opens the gateway between thought and reality." },
  "222": { hz: "222Hz", type: "Harmonic Balance", description: "Aligns internal contradictions into a unified state." },
  "333": { hz: "396Hz", type: "Liberation", description: "Removes fear and guilt blocks." },
  "444": { hz: "417Hz", type: "Change Facilitator", description: "Undoes situations and facilitates conscious change." },
  "555": { hz: "528Hz", type: "Transformation", description: "Repairs DNA and invites miracles." },
  "666": { hz: "639Hz", type: "Connection", description: "Enhances communication and relationships." },
  "777": { hz: "741Hz", type: "Intuition Awakening", description: "Solves problems and awakens intuition." },
  "888": { hz: "852Hz", type: "Spiritual Order", description: "Returns to spiritual order and balance." },
  "1111": { hz: "963Hz", type: "Divine Connection", description: "Connects with the light and spirit." },
};

// Frequency Display Component
const FrequencyDisplay = ({ number }: { number: string }) => {
  const data = frequencyData[number];
  
  // Wenn wir keine Daten haben, zeige nichts an
  if (!data) return null;

  return (
    <div className="my-8 p-6 bg-zinc-900/50 border border-cyan-500/30 rounded-xl backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 px-3 py-1 bg-cyan-900/30 text-[10px] text-cyan-400 uppercase tracking-widest border-l border-b border-cyan-500/30 rounded-bl-xl">
        Standard Protocol
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
          {/* Blitz Icon */}
          <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div className="text-left">
          <h3 className="text-lg font-bold text-white tracking-widest uppercase">{data.hz} • {data.type}</h3>
          <p className="text-xs text-zinc-400 mt-1">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default async function AngelNumberPage({ params }: PageProps) {
  const { slug } = await params;
  const number = getAngelNumberBySlug(slug);

  if (!number) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            {/* Large Number Display */}
            <div className="inline-block mb-8">
              <span className="text-8xl sm:text-9xl font-bold text-white">
                {number.number}
              </span>
            </div>
            
            {/* Floating Orb - Larger on detail page */}
            <div className="mb-8 flex justify-center">
              <div className="transform hover:scale-105 transition-transform duration-500" style={{ width: '10rem', height: '10rem' }}>
                <div style={{ width: '100%', height: '100%' }}>
                  <VibeOrb number={number.number} className="w-full h-full" />
                </div>
              </div>
            </div>
            
            {/* Meaning */}
            <div className="max-w-2xl mx-auto">
              <p className="text-xl sm:text-2xl text-white/80 mb-2">
                Meaning:
              </p>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
                {number.meanings.general}
              </p>
              
              {/* Frequency Info for Standard Orb */}
              <FrequencyDisplay number={number.number} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Frequency Applications Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {number.meanings.love && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide uppercase">
                Connection & Harmony
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                This frequency enhances emotional resonance and interpersonal synchronization. Scientifically engineered to facilitate deeper connection, improve communication patterns, and promote relational harmony through neural entrainment.
              </p>
              <p className="text-gray-400 text-sm italic">
                Experience enhanced emotional intelligence, improved empathy, and strengthened bonds in personal and professional relationships.
              </p>
            </div>
          )}

          {number.meanings.career && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide uppercase">
                Focus & Performance
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Boost your productivity right from your workspace. This neural frequency is designed to enhance concentration, eliminate distractions, and optimize cognitive performance through scientifically-backed audio engineering.
              </p>
              <p className="text-gray-400 text-sm italic">
                Achieve peak performance, maintain uninterrupted focus, and experience seamless control over your workflow without juggling browser tabs.
              </p>
            </div>
          )}

          {number.meanings.spiritual && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide uppercase">
                Meditation & Awareness
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Access deeper states of consciousness through neural architecture designed for meditation. This frequency facilitates spiritual growth, enhances intuitive clarity, and supports profound inner transformation.
              </p>
              <p className="text-gray-400 text-sm italic">
                Explore new dimensions of awareness, connect with higher consciousness, and experience personalized spiritual development tailored to your neural profile.
              </p>
            </div>
          )}

          {number.meanings.manifestation && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white tracking-wide uppercase">
                Activation & Flow
              </h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Activate your full potential through neural frequency alignment. This scientifically engineered pattern creates optimal conditions for manifestation, creative flow states, and accelerated transformation of thought into reality.
              </p>
              <p className="text-gray-400 text-sm italic">
                Unlock your creative potential, enter deep flow states, and experience the power of science-backed frequency technology for conscious creation.
              </p>
            </div>
          )}
        </div>

        {/* Symbolism */}
        {number.symbolism && number.symbolism.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">Symbolism</h2>
            <div className="flex flex-wrap gap-3">
              {number.symbolism.map((symbol, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-black/60 border border-white/20 rounded-lg text-white/80 text-sm font-medium"
                >
                  {symbol}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* CTA: Generate Custom Orb */}
        <section className="mb-12">
          <div className="bg-black/60 border border-cyan-500/30 rounded-xl p-8 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Create Your Custom Orb
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              This Standard Orb ({number.number}) runs free. Generate your personalized Custom Orb with your unique neural frequency based on your birthdate.
            </p>
            <Link
              href="/generate"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30"
            >
              Generate Your Custom Orb
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              One-time payment $9 • Lifetime access to your personalized frequency
            </p>
          </div>
        </section>

        {/* Digital Products */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">
                Full Numerology Report
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Complete in-depth analysis of {number.number} and its impact on your life path.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">$19</span>
                <button className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors border border-white/30">
                  Get Report
                </button>
              </div>
            </div>

            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white">
                Grabovoi Cheat Sheet
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Digital wallpaper pack with {number.number} codes for daily manifestation.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">$9</span>
                <button className="px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors border border-white/30">
                  Download
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Physical Merch */}
        <section className="mb-12">
          <div className="bg-black/60 border border-white/10 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {number.number} Collection
            </h3>
            <p className="text-gray-300 mb-6">
              Wear your number with purpose. Premium jewelry and apparel featuring {number.number}.
            </p>
            <button className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors border border-white/30">
              Shop {number.number} Collection
            </button>
          </div>
        </section>

        {/* Related Numbers */}
        <section className="border-t border-gray-800 pt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Explore More Angel Numbers</h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-4">
            {["111", "222", "333", "444", "555", "666", "777", "888"].map((num) => (
              <Link
                key={num}
                href={`/number/${num}`}
                className="text-center p-4 bg-black/60 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all group"
              >
                <span className="text-2xl font-bold text-white/80 group-hover:text-white">
                  {num}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
