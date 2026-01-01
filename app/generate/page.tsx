"use client";

import { useState } from "react";
import Link from "next/link";
import VibeOrb from "@/app/components/VibeOrb";
import { getFrequencyForNumber } from "@/app/utils/frequencies";

export default function GeneratePage() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [soulNumber, setSoulNumber] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const calculateSoulNumber = (day: string, month: string, year: string): number => {
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
      return 0;
    }

    // Sum all digits from day, month, and year
    const daySum = sumDigits(dayNum);
    const monthSum = sumDigits(monthNum);
    const yearSum = sumDigits(yearNum);

    let total = daySum + monthSum + yearSum;

    // Reduce to single digit or master number (11, 22, 33)
    while (total > 9 && total !== 11 && total !== 22 && total !== 33) {
      total = sumDigits(total);
    }

    return total;
  };

  const sumDigits = (num: number): number => {
    return num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!day || !month || !year) {
      alert("Please fill in all fields.");
      return;
    }

    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    // Validation
    if (dayNum < 1 || dayNum > 31) {
      alert("Please enter a valid day (1-31).");
      return;
    }

    if (monthNum < 1 || monthNum > 12) {
      alert("Please enter a valid month (1-12).");
      return;
    }

    if (yearNum < 1900 || yearNum > new Date().getFullYear()) {
      alert("Please enter a valid year.");
      return;
    }

    setIsLoading(true);
    
    // Simulate calculation delay for effect
    setTimeout(() => {
      const calculatedNumber = calculateSoulNumber(day, month, year);
      setSoulNumber(calculatedNumber);
      setShowResult(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setDay("");
    setMonth("");
    setYear("");
    setSoulNumber(null);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Orb Core Engine
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4">
              Initialize your biometric profile
            </p>
            <p className="text-lg text-gray-400 max-w-xl mx-auto mb-4">
              Calculate your Prime-Code and generate your unique Soul Orb
            </p>
            <p className="text-sm text-gray-500 max-w-lg mx-auto">
              Standard Orbs (000-1111) are free. Custom Orbs with personalized frequencies unlock for $9.
            </p>
          </div>
        </div>
      </div>

      {/* Input Form */}
      {!showResult && (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-black/60 border border-white/10 rounded-xl p-8 sm:p-12 backdrop-blur-sm">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="text-center mb-8">
                <p className="text-gray-300 mb-2">
                  Enter your birthdate:
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Day */}
                <div>
                  <label htmlFor="day" className="block text-sm font-medium text-white/80 mb-2">
                    Day
                  </label>
                  <input
                    type="number"
                    id="day"
                    min="1"
                    max="31"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    placeholder="DD"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 text-center text-xl"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Month */}
                <div>
                  <label htmlFor="month" className="block text-sm font-medium text-white/80 mb-2">
                    Month
                  </label>
                  <input
                    type="number"
                    id="month"
                    min="1"
                    max="12"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    placeholder="MM"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 text-center text-xl"
                    required
                    disabled={isLoading}
                  />
                </div>

                {/* Year */}
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-white/80 mb-2">
                    Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    min="1900"
                    max={new Date().getFullYear()}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="YYYY"
                    className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/50 focus:ring-2 focus:ring-white/30 text-center text-xl"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? "Calculating neural rhythm..." : "Initialize Profile"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Result - Soul Orb Preview */}
      {showResult && soulNumber !== null && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-black/60 border border-white/10 rounded-xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="text-center">
              <p className="text-xl text-white/80 mb-2">Your Prime-Code:</p>
              <div className="mb-8">
                <span className="text-8xl sm:text-9xl font-bold text-white">
                  {soulNumber}
                </span>
              </div>

              {/* Soul Orb - Sleeping Mode (slow pulse) */}
              <div className="mb-8 flex justify-center">
                <div 
                  className="relative orb-sleep-pulse"
                  style={{ 
                    width: '12rem', 
                    height: '12rem'
                  }}
                >
                  <VibeOrb number={soulNumber.toString()} className="w-full h-full" />
                </div>
              </div>

              {/* Frequency Info Preview */}
              {(() => {
                const freqInfo = getFrequencyForNumber(soulNumber);
                return (
                  <div className="mb-8 bg-black/40 border border-white/10 rounded-lg p-6 max-w-md mx-auto">
                    <p className="text-cyan-400 text-sm font-medium mb-2">Your Neural Frequency:</p>
                    <p className="text-3xl font-bold text-white mb-1">{freqInfo.frequency}Hz</p>
                    <p className="text-gray-400 text-sm">{freqInfo.type} • {freqInfo.description}</p>
                    <p className="text-gray-500 text-xs mt-2">{freqInfo.benefit}</p>
                  </div>
                );
              })()}

              <p className="text-gray-300 mb-6 max-w-md mx-auto text-sm">
                Your Custom Orb is active in Sleep Mode (visual only). Standard Orbs (000-1111) run free. 
                Unlock Frequency & Active Mode to access your personalized binaural frequency.
              </p>

              {/* Paywall CTA */}
              <div className="bg-black/80 border border-cyan-500/30 rounded-xl p-8 max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  Unlock Your Custom Frequency
                </h3>
                <p className="text-gray-400 text-xs mb-1">
                  What you get:
                </p>
                <ul className="text-gray-300 text-sm mb-6 text-left space-y-2 max-w-xs mx-auto">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Personalized {getFrequencyForNumber(soulNumber).frequency}Hz binaural frequency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Active Mode: Breathing animations & pulse sync</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Full neural architecture analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>Lifetime access to your Custom Orb</span>
                  </li>
                </ul>
                <div className="space-y-4">
                  <button className="w-full px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30">
                    Unlock for $9
                  </button>
                  <p className="text-xs text-gray-400">
                    One-time payment • Lifetime access
                  </p>
                </div>
              </div>

              {/* Link to standard orb */}
              <div className="mt-8">
                <p className="text-gray-500 text-xs mb-2">Or explore the free Standard Orb:</p>
                <Link
                  href={`/number/${soulNumber}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  View Standard Orb {soulNumber} (Free) →
                </Link>
              </div>

              {/* Reset */}
              <div className="mt-6">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors text-sm"
                >
                  Generate New Orb
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

