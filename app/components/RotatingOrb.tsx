"use client";

export default function RotatingOrb() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto">
      {/* Outer atmospheric glow layers */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 0, 0, 0.4) 0%, rgba(204, 0, 0, 0.3) 30%, rgba(153, 0, 0, 0.2) 50%, transparent 80%)',
          filter: 'blur(50px)',
          borderRadius: '50%',
          transform: 'scale(1.6)'
        }}
      ></div>
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 0, 0, 0.3) 0%, rgba(204, 0, 0, 0.2) 35%, transparent 70%)',
          filter: 'blur(35px)',
          borderRadius: '50%',
          transform: 'scale(1.4)'
        }}
      ></div>
      
      {/* Main orb */}
      <div 
        className="relative w-full h-full"
        style={{
          borderRadius: '50%'
        }}
      >
        {/* Base sphere with asymmetric gradient for visible rotation */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 120% 100% at 30% 30%, rgba(255, 100, 100, 1) 0%, rgba(255, 0, 0, 0.98) 8%, rgba(230, 0, 0, 0.92) 18%, rgba(200, 0, 0, 0.85) 30%, rgba(160, 0, 0, 0.75) 42%, rgba(120, 0, 0, 0.65) 55%, rgba(80, 0, 0, 0.55) 68%, rgba(40, 0, 0, 0.45) 82%, rgba(0, 0, 0, 0.95) 95%)',
            borderRadius: '50%',
            boxShadow: 'inset -25px -35px 70px rgba(0, 0, 0, 0.9), inset 25px 35px 50px rgba(255, 120, 120, 0.4), 0 0 100px rgba(255, 0, 0, 0.8), 0 0 200px rgba(255, 0, 0, 0.5), 0 0 300px rgba(255, 0, 0, 0.3)'
          }}
        >
          {/* Bright highlight that rotates with the sphere */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 85% 65% at 25% 22%, rgba(255, 220, 220, 1) 0%, rgba(255, 180, 180, 0.95) 10%, rgba(255, 120, 120, 0.85) 20%, rgba(255, 60, 60, 0.7) 30%, rgba(255, 0, 0, 0.5) 42%, transparent 65%)',
              borderRadius: '50%'
            }}
          ></div>
          
          {/* Intense specular highlight */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 50% 35% at 28% 24%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 240, 240, 0.7) 8%, rgba(255, 200, 200, 0.4) 15%, rgba(255, 150, 150, 0.2) 22%, transparent 35%)',
              borderRadius: '50%',
              filter: 'blur(1px)'
            }}
          ></div>
          
          {/* Shadow/dark area opposite to highlight */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 95% 75% at 72% 78%, rgba(0, 0, 0, 0.95) 0%, rgba(20, 0, 0, 0.85) 15%, rgba(40, 0, 0, 0.65) 28%, rgba(60, 0, 0, 0.45) 40%, rgba(80, 0, 0, 0.3) 52%, transparent 68%)',
              borderRadius: '50%'
            }}
          ></div>
          
          {/* Secondary shadow for depth */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 78% 80%, rgba(0, 0, 0, 0.8) 0%, rgba(30, 0, 0, 0.5) 20%, rgba(60, 0, 0, 0.3) 35%, transparent 60%)',
              borderRadius: '50%',
              filter: 'blur(3px)'
            }}
          ></div>
          
          {/* Inner core glow */}
          <div 
            className="absolute inset-[12%]"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 120, 120, 0.7) 0%, rgba(255, 40, 40, 0.5) 35%, rgba(255, 0, 0, 0.3) 50%, transparent 75%)',
              borderRadius: '50%',
              filter: 'blur(10px)'
            }}
          ></div>
          
          {/* Rim light effect - visible edge */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 90% at 50% 50%, transparent 65%, rgba(255, 80, 80, 0.4) 75%, rgba(255, 0, 0, 0.6) 85%, rgba(255, 100, 100, 0.4) 92%, transparent 100%)',
              borderRadius: '50%'
            }}
          ></div>
        </div>
        
        {/* Outer ring */}
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: '50%'
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255, 80, 80, 0.5) 90deg, rgba(255, 0, 0, 0.7) 180deg, rgba(255, 80, 80, 0.5) 270deg, transparent 360deg)',
              borderRadius: '50%',
              mask: 'radial-gradient(circle at center, transparent 88%, black 95%)',
              WebkitMask: 'radial-gradient(circle at center, transparent 88%, black 95%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
