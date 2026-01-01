"use client";

import { useState } from "react";
import Link from "next/link";

export default function CalculatorPage() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateAngelNumber = (day: string, month: string, year: string): number => {
    const dayNum = parseInt(day);
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);

    if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) {
      return 0;
    }

    // Sum all digits from day, month, and year
    // Example: 15.03.1990 = (1+5) + (0+3) + (1+9+9+0) = 6 + 3 + 19 = 28
    const daySum = sumDigits(dayNum);
    const monthSum = sumDigits(monthNum);
    const yearSum = sumDigits(yearNum);

    let total = daySum + monthSum + yearSum;

    // Reduce to single digit or master number (11, 22, 33)
    // Example: 28 → 2+8 = 10 → 1+0 = 1
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

  const handleCalculate = (e: React.FormEvent) => {
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

    const angelNumber = calculateAngelNumber(day, month, year);
    setResult(angelNumber);
    setShowResult(true);
  };

  const handleReset = () => {
    setDay("");
    setMonth("");
    setYear("");
    setResult(null);
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
              Angel Number Calculator
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-4">
              Find your personal Angel Number based on your birthdate
            </p>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Enter your birthdate and discover which number your angels have chosen for you.
            </p>
          </div>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-black/60 border border-white/10 rounded-xl p-8 sm:p-12 backdrop-blur-sm">
          <form onSubmit={handleCalculate} className="space-y-6">
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
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30 text-lg"
              >
                Calculate ✨
              </button>
              {showResult && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-4 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </form>

          {/* Result */}
          {showResult && result !== null && (
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <p className="text-xl text-white/80 mb-4">Your Angel Number is:</p>
                <div className="mb-6">
                  <span className="text-8xl sm:text-9xl font-bold text-white">
                    {result}
                  </span>
                </div>
                <p className="text-gray-300 mb-6 max-w-md mx-auto">
                  This number has a special meaning for you. Discover what your angels are trying to tell you.
                </p>
                <Link
                  href={`/number/${result}`}
                  className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/20 border border-white/30 text-lg"
                >
                  Discover the meaning of {result} →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* How it works */}
        <div className="mt-12 bg-black/60 border border-white/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">How does the calculation work?</h2>
          <div className="space-y-3 text-gray-300">
            <p>
              Your Angel Number is calculated by adding all digits of your birthdate (Day + Month + Year).
            </p>
            <p>
              The sum is then reduced to a single digit (1-9), unless it's a Master Number (11, 22, 33), which retains its full power.
            </p>
            <p className="text-sm text-gray-400 pt-2">
              <strong>Example:</strong> 03.15.1990 = 0+3+1+5+1+9+9+0 = 28 → 2+8 = 10 → 1+0 = <strong>1</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

