interface VibeOrbProps {
  number: string;
  className?: string;
}

export default function VibeOrb({ number, className = "" }: VibeOrbProps) {
  // Get color scheme based on number meaning
  const getColorScheme = (num: string) => {
    switch (num) {
      case "111":
        // Gold - Manifestation
        return {
          outer: "rgba(255, 215, 0, 0.9)",
          mid: "rgba(255, 180, 0, 0.6)",
          inner: "rgba(184, 134, 11, 0.3)",
          glow: "rgba(255, 215, 0, 0.6)"
        };
      case "222":
        // Silver - Balance
        return {
          outer: "rgba(200, 200, 220, 0.9)",
          mid: "rgba(160, 160, 180, 0.6)",
          inner: "rgba(120, 120, 140, 0.3)",
          glow: "rgba(200, 200, 220, 0.5)"
        };
      case "333":
        // White/Gold - Divine Protection
        return {
          outer: "rgba(255, 255, 255, 0.9)",
          mid: "rgba(255, 240, 180, 0.6)",
          inner: "rgba(255, 215, 0, 0.3)",
          glow: "rgba(255, 255, 255, 0.5)"
        };
      case "444":
        // Deep Blue - Stability
        return {
          outer: "rgba(60, 120, 200, 0.9)",
          mid: "rgba(40, 80, 150, 0.6)",
          inner: "rgba(20, 40, 100, 0.3)",
          glow: "rgba(60, 120, 200, 0.6)"
        };
      case "555":
        // Violet/Purple - Transformation
        return {
          outer: "rgba(150, 100, 220, 0.9)",
          mid: "rgba(120, 70, 180, 0.6)",
          inner: "rgba(90, 50, 140, 0.3)",
          glow: "rgba(150, 100, 220, 0.6)"
        };
      case "666":
        // Indigo - Rebalancing
        return {
          outer: "rgba(90, 100, 200, 0.9)",
          mid: "rgba(60, 70, 160, 0.6)",
          inner: "rgba(40, 50, 120, 0.3)",
          glow: "rgba(90, 100, 200, 0.6)"
        };
      case "777":
        // Gold/Violet - Spiritual Awakening
        return {
          outer: "rgba(220, 150, 255, 0.9)",
          mid: "rgba(180, 100, 220, 0.6)",
          inner: "rgba(140, 70, 180, 0.3)",
          glow: "rgba(220, 150, 255, 0.6)"
        };
      case "888":
        // Gold - Abundance
        return {
          outer: "rgba(255, 200, 80, 0.9)",
          mid: "rgba(255, 160, 40, 0.6)",
          inner: "rgba(220, 120, 20, 0.3)",
          glow: "rgba(255, 200, 80, 0.6)"
        };
      case "999":
        // Deep Purple - Completion
        return {
          outer: "rgba(140, 80, 220, 0.9)",
          mid: "rgba(110, 60, 180, 0.6)",
          inner: "rgba(80, 40, 140, 0.3)",
          glow: "rgba(140, 80, 220, 0.6)"
        };
      case "000":
        // White - Infinite
        return {
          outer: "rgba(255, 255, 255, 0.9)",
          mid: "rgba(220, 220, 240, 0.6)",
          inner: "rgba(180, 180, 200, 0.3)",
          glow: "rgba(255, 255, 255, 0.4)"
        };
      case "1010":
        // Gold/White - New Beginnings
        return {
          outer: "rgba(255, 240, 200, 0.9)",
          mid: "rgba(255, 200, 120, 0.6)",
          inner: "rgba(255, 160, 60, 0.3)",
          glow: "rgba(255, 240, 200, 0.6)"
        };
      case "1111":
        // Gold/Violet - Ultimate Manifestation
        return {
          outer: "rgba(255, 220, 150, 0.9)",
          mid: "rgba(220, 150, 255, 0.6)",
          inner: "rgba(180, 100, 220, 0.3)",
          glow: "rgba(255, 220, 150, 0.6)"
        };
      case "1212":
        // Silver/White - Spiritual Growth
        return {
          outer: "rgba(240, 240, 255, 0.9)",
          mid: "rgba(200, 200, 230, 0.6)",
          inner: "rgba(160, 160, 200, 0.3)",
          glow: "rgba(240, 240, 255, 0.5)"
        };
      case "1313":
        // Violet/Gold - Transformation
        return {
          outer: "rgba(200, 150, 255, 0.9)",
          mid: "rgba(255, 200, 120, 0.6)",
          inner: "rgba(220, 140, 80, 0.3)",
          glow: "rgba(200, 150, 255, 0.6)"
        };
      case "1414":
        // Deep Blue - Foundation
        return {
          outer: "rgba(80, 140, 220, 0.9)",
          mid: "rgba(60, 100, 180, 0.6)",
          inner: "rgba(40, 70, 140, 0.3)",
          glow: "rgba(80, 140, 220, 0.6)"
        };
      case "1515":
        // Orange/Gold - Adventure
        return {
          outer: "rgba(255, 160, 80, 0.9)",
          mid: "rgba(255, 120, 40, 0.6)",
          inner: "rgba(220, 80, 20, 0.3)",
          glow: "rgba(255, 160, 80, 0.6)"
        };
      default:
        // Default purple
        return {
          outer: "rgba(139, 92, 246, 0.9)",
          mid: "rgba(109, 40, 217, 0.6)",
          inner: "rgba(79, 70, 229, 0.3)",
          glow: "rgba(139, 92, 246, 0.6)"
        };
    }
  };

  const colors = getColorScheme(number);

  // Default size is w-28 h-28, but can be overridden via className
  const isFullSize = className.includes('w-full') || className.includes('h-full');
  const containerClass = isFullSize ? 'w-full h-full' : 'w-28 h-28';

  return (
    <div className={`relative ${isFullSize ? className : ''}`}>
      <div className={`${containerClass} mx-auto relative`}>
        {/* Multi-layer outer glow - brightest at edges, fading inward */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.outer} 0%, ${colors.mid} 40%, ${colors.inner} 70%, transparent 100%)`,
            filter: 'blur(25px)',
            opacity: 0.8
          }}
        ></div>
        
        {/* Secondary glow layer for intensity */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.outer} 0%, ${colors.mid} 50%, transparent 80%)`,
            filter: 'blur(15px)',
            opacity: 0.6
          }}
        ></div>
        
        {/* Main orb - ring effect (bright outer edge, dark center) */}
        <div 
          className="relative w-full h-full rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.outer} 0%, ${colors.mid} 35%, ${colors.inner} 60%, rgba(0,0,0,0.1) 85%, transparent 100%)`,
            boxShadow: `0 0 50px ${colors.glow}, 0 0 100px ${colors.glow}, inset 0 0 30px rgba(0,0,0,0.3)`
          }}
        ></div>
      </div>
    </div>
  );
}
