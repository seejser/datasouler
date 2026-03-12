/**
 * OpenClaw SVG Animated Lobster Component
 * Extracted from openclaw.ai official website
 * 
 * Animations:
 * - float: gentle up/down bobbing
 * - blink: eye glow blinking
 * - wiggle: antenna wiggling
 * - clawSnap: claw snapping motion
 * - soul: ethereal soul aura effect
 */

interface LobsterSvgProps {
  size?: number;
  showSoul?: boolean;
  className?: string;
}

export default function LobsterSvg({ size = 160, showSoul = true, className = "" }: LobsterSvgProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Soul Aura Effect */}
      {showSoul && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer soul ring */}
          <div 
            className="absolute rounded-full"
            style={{
              width: size * 1.8,
              height: size * 1.8,
              background: 'radial-gradient(circle, rgba(0, 229, 204, 0.15) 0%, rgba(255, 77, 77, 0.1) 40%, transparent 70%)',
              animation: 'soulPulse 4s ease-in-out infinite',
            }}
          />
          {/* Inner soul ring */}
          <div 
            className="absolute rounded-full"
            style={{
              width: size * 1.4,
              height: size * 1.4,
              background: 'radial-gradient(circle, rgba(255, 77, 77, 0.2) 0%, rgba(0, 229, 204, 0.1) 50%, transparent 70%)',
              animation: 'soulPulse 4s ease-in-out 2s infinite',
            }}
          />
          {/* Soul particles orbiting */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: 4,
                height: 4,
                background: i % 2 === 0 ? '#00e5cc' : '#ff4d4d',
                boxShadow: i % 2 === 0 ? '0 0 8px #00e5cc' : '0 0 8px #ff4d4d',
                animation: `soulOrbit ${6 + i * 0.5}s linear infinite`,
                animationDelay: `${i * 1}s`,
                transformOrigin: `${size * 0.6}px 0px`,
              }}
            />
          ))}
        </div>
      )}

      {/* Lobster Icon Container */}
      <div 
        className="lobster-icon relative cursor-pointer transition-transform duration-300 hover:scale-110"
        style={{
          width: size,
          height: size,
          animation: 'lobsterFloat 4s ease-in-out infinite',
        }}
      >
        <svg 
          viewBox="0 0 120 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '100%',
            filter: 'drop-shadow(0 0 20px rgba(255, 77, 77, 0.4))',
            transition: 'filter 0.3s',
          }}
          className="hover:drop-shadow-[0_0_30px_rgba(0,229,204,0.6)]"
        >
          {/* Lobster Body */}
          <path 
            d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z" 
            fill="url(#lobster-gradient)" 
            className="claw-body" 
          />
          {/* Left Claw */}
          <path 
            d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z" 
            fill="url(#lobster-gradient)" 
            className="claw-left"
            style={{
              animation: 'clawSnap 4s ease-in-out infinite',
              transformOrigin: 'right center',
            }}
          />
          {/* Right Claw */}
          <path 
            d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z" 
            fill="url(#lobster-gradient)" 
            className="claw-right"
            style={{
              animation: 'clawSnap 4s ease-in-out 0.2s infinite',
              transformOrigin: 'left center',
            }}
          />
          {/* Left Antenna */}
          <path 
            d="M45 15 Q35 5 30 8" 
            stroke="#ff4d4d" 
            strokeWidth="2" 
            strokeLinecap="round" 
            className="antenna"
            style={{
              animation: 'wiggle 2s ease-in-out infinite',
              transformOrigin: 'center',
            }}
          />
          {/* Right Antenna */}
          <path 
            d="M75 15 Q85 5 90 8" 
            stroke="#ff4d4d" 
            strokeWidth="2" 
            strokeLinecap="round" 
            className="antenna"
            style={{
              animation: 'wiggle 2s ease-in-out 0.3s infinite',
              transformOrigin: 'center',
            }}
          />
          {/* Eyes */}
          <circle cx="45" cy="35" r="6" fill="#050810" className="eye" />
          <circle cx="75" cy="35" r="6" fill="#050810" className="eye" />
          {/* Eye Glow */}
          <circle 
            cx="46" cy="34" r="2" fill="#00e5cc" className="eye-glow"
            style={{ animation: 'blink 3s ease-in-out infinite' }}
          />
          <circle 
            cx="76" cy="34" r="2" fill="#00e5cc" className="eye-glow"
            style={{ animation: 'blink 3s ease-in-out infinite' }}
          />
          <defs>
            <linearGradient id="lobster-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes lobsterFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.3; }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }
        @keyframes clawSnap {
          0%, 85%, 100% { transform: rotate(0deg); }
          90% { transform: rotate(-8deg); }
          95% { transform: rotate(0deg); }
        }
        @keyframes soulPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
        @keyframes soulOrbit {
          0% { transform: rotate(0deg) translateX(${size * 0.6}px) rotate(0deg); opacity: 0.4; }
          50% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(${size * 0.6}px) rotate(-360deg); opacity: 0.4; }
        }
        .lobster-icon:hover svg {
          filter: drop-shadow(0 0 30px rgba(0, 229, 204, 0.6)) !important;
        }
      `}</style>
    </div>
  );
}
