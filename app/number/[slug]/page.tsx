import { getAngelNumberBySlug, getAllSlugs } from "@/data/angel-numbers";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import VibeOrb from "@/app/components/VibeOrb";

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
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                {number.meanings.general}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Detailed Meanings Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {number.meanings.love && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <span>💕</span> Love
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {number.meanings.love}
              </p>
            </div>
          )}

          {number.meanings.career && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <span>💼</span> Career
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {number.meanings.career}
              </p>
            </div>
          )}

          {number.meanings.spiritual && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <span>🔮</span> Spiritual
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {number.meanings.spiritual}
              </p>
            </div>
          )}

          {number.meanings.manifestation && (
            <div className="bg-black/60 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
                <span>🌟</span> Manifestation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {number.meanings.manifestation}
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

        {/* Monetization: Affiliate Button */}
        <section className="mb-12">
          <div className="bg-black/60 border border-white/20 rounded-xl p-8 text-center backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Get Your Personal Reading
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Discover the deeper meaning behind {number.number} with a personalized reading from an experienced spiritual advisor.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30"
            >
              Connect with an Advisor Now
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Starting from $0.99/min | Trusted by 50,000+ seekers
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
              <a
                key={num}
                href={`/number/${num}`}
                className="text-center p-4 bg-black/60 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all group"
              >
                <span className="text-2xl font-bold text-white/80 group-hover:text-white">
                  {num}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
