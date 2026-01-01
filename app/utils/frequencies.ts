// Frequency mapping for numbers (Hz)
// Based on brainwave frequencies and binaural beats

export interface FrequencyInfo {
  frequency: number;
  type: string;
  description: string;
  benefit: string;
}

export function getFrequencyForNumber(number: string | number): FrequencyInfo {
  const numStr = typeof number === 'string' ? number : number.toString();
  const num = typeof number === 'string' ? parseInt(number) : number;
  
  // Reduce to single digit for frequency calculation (or keep master numbers)
  let reducedNum = num;
  if (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    reducedNum = numStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    if (reducedNum > 9 && reducedNum !== 11 && reducedNum !== 22 && reducedNum !== 33) {
      reducedNum = reducedNum.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
  }

  const frequencyMap: { [key: number]: FrequencyInfo } = {
    0: { frequency: 10, type: "Delta", description: "Deep Sleep", benefit: "Restoration & Healing" },
    1: { frequency: 40, type: "Gamma", description: "High Focus", benefit: "Peak Performance & Problem Solving" },
    2: { frequency: 8, type: "Alpha", description: "Relaxed Focus", benefit: "Creativity & Flow State" },
    3: { frequency: 528, type: "Solfeggio", description: "Transformation", benefit: "DNA Repair & Transformation" },
    4: { frequency: 6, type: "Theta", description: "Deep Meditation", benefit: "Intuition & Subconscious Access" },
    5: { frequency: 12, type: "Alpha", description: "Active Relaxation", benefit: "Learning & Memory Retention" },
    6: { frequency: 432, type: "Natural", description: "Harmony", benefit: "Natural Balance & Healing" },
    7: { frequency: 741, type: "Solfeggio", description: "Expression", benefit: "Self-Expression & Communication" },
    8: { frequency: 15, type: "Beta", description: "Active Mind", benefit: "Concentration & Alertness" },
    9: { frequency: 639, type: "Solfeggio", description: "Connection", benefit: "Relationships & Harmony" },
    11: { frequency: 852, type: "Solfeggio", description: "Intuition", benefit: "Spiritual Awakening & Clarity" },
    22: { frequency: 396, type: "Solfeggio", description: "Liberation", benefit: "Release & Freedom" },
    33: { frequency: 963, type: "Solfeggio", description: "Oneness", benefit: "Unity & Higher Consciousness" },
  };

  return frequencyMap[reducedNum] || frequencyMap[0];
}

