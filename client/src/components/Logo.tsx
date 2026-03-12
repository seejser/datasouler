/**
 * DataSouler Logo Component
 * Design: OpenClaw lobster with a soul halo ring on top
 * The halo represents the "soul" and also looks like a hat/crown
 * 
 * Variants:
 * - full: Logo + text (for navigation)
 * - icon: Logo only (for favicon, mobile)
 * - hero: Large animated version (for homepage)
 */

interface LogoProps {
  variant?: "full" | "icon" | "hero";
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function Logo({ variant = "full", size = 32, className = "", animated = true }: LogoProps) {
  const iconSize = variant === "hero" ? size : size;
  
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div 
        className="relative"
        style={{ 
          width: iconSize, 
          height: iconSize * 1.15,
        }}
      >
        <svg
          viewBox="0 0 100 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {/* Definitions */}
          <defs>
            {/* Lobster body gradient */}
            <linearGradient id={`logo-body-${variant}`} x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ff5252" />
              <stop offset="50%" stopColor="#e53935" />
              <stop offset="100%" stopColor="#b71c1c" />
            </linearGradient>
            
            {/* Soul halo gradient */}
            <linearGradient id={`logo-halo-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e5cc" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#00bcd4" stopOpacity="1" />
              <stop offset="50%" stopColor="#00e5cc" stopOpacity="0.9" />
              <stop offset="75%" stopColor="#4dd0e1" stopOpacity="1" />
              <stop offset="100%" stopColor="#00e5cc" stopOpacity="0.9" />
            </linearGradient>

            {/* Halo glow filter */}
            <filter id={`halo-glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Body shadow */}
            <filter id={`body-shadow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#ff5252" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* === SOUL HALO (top of head, like a hat/crown) === */}
          <g filter={`url(#halo-glow-${variant})`}>
            {/* Main halo ellipse */}
            <ellipse
              cx="50"
              cy="18"
              rx="22"
              ry="8"
              fill="none"
              stroke={`url(#logo-halo-${variant})`}
              strokeWidth="2.5"
              opacity="0.9"
            >
              {animated && (
                <>
                  <animate
                    attributeName="ry"
                    values="8;9.5;8"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;1;0.9"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </>
              )}
            </ellipse>
            
            {/* Halo inner glow line */}
            <ellipse
              cx="50"
              cy="18"
              rx="18"
              ry="5.5"
              fill="none"
              stroke="#00e5cc"
              strokeWidth="0.8"
              opacity="0.4"
            >
              {animated && (
                <animate
                  attributeName="ry"
                  values="5.5;6.5;5.5"
                  dur="3s"
                  repeatCount="indefinite"
                />
              )}
            </ellipse>

            {/* Sparkle dots on halo */}
            <circle cx="28" cy="17" r="1.2" fill="#00e5cc" opacity="0.8">
              {animated && (
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
              )}
            </circle>
            <circle cx="72" cy="17" r="1.2" fill="#4dd0e1" opacity="0.6">
              {animated && (
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
              )}
            </circle>
            <circle cx="50" cy="10" r="1" fill="#00e5cc" opacity="0.7">
              {animated && (
                <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.8s" repeatCount="indefinite" />
              )}
            </circle>
          </g>

          {/* === LOBSTER BODY === */}
          <g filter={`url(#body-shadow-${variant})`}>
            {/* Main body - rounded lobster shape */}
            <path
              d="M50 28 C32 28 20 42 20 58 C20 74 32 88 44 92 L44 100 L52 100 L52 92 C52 92 56 93 60 92 L60 100 L68 100 L68 92 C80 88 92 74 92 58 C92 42 80 28 50 28Z"
              fill={`url(#logo-body-${variant})`}
            />

            {/* Left Claw */}
            <path
              d="M24 52 C12 48 8 56 12 64 C16 72 24 68 28 60 C30 54 28 52 24 52Z"
              fill={`url(#logo-body-${variant})`}
            >
              {animated && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 28 58;-5 28 58;0 28 58"
                  dur="4s"
                  repeatCount="indefinite"
                />
              )}
            </path>

            {/* Right Claw */}
            <path
              d="M88 52 C100 48 104 56 100 64 C96 72 88 68 84 60 C82 54 84 52 88 52Z"
              fill={`url(#logo-body-${variant})`}
            >
              {animated && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 84 58;5 84 58;0 84 58"
                  dur="4s"
                  repeatCount="indefinite"
                />
              )}
            </path>

            {/* Left Antenna */}
            <path
              d="M42 32 Q34 22 30 25"
              stroke="#ff5252"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            >
              {animated && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 42 32;-3 42 32;3 42 32;0 42 32"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              )}
            </path>

            {/* Right Antenna */}
            <path
              d="M70 32 Q78 22 82 25"
              stroke="#ff5252"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            >
              {animated && (
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 70 32;3 70 32;-3 70 32;0 70 32"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              )}
            </path>

            {/* Eyes - dark base */}
            <circle cx="42" cy="48" r="5.5" fill="#1a0a0a" />
            <circle cx="70" cy="48" r="5.5" fill="#1a0a0a" />

            {/* Eye highlights - soul cyan glow */}
            <circle cx="43" cy="47" r="2" fill="#00e5cc">
              {animated && (
                <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
              )}
            </circle>
            <circle cx="71" cy="47" r="2" fill="#00e5cc">
              {animated && (
                <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite" />
              )}
            </circle>

            {/* Eye tiny white reflection */}
            <circle cx="44" cy="46" r="0.8" fill="white" opacity="0.7" />
            <circle cx="72" cy="46" r="0.8" fill="white" opacity="0.7" />

            {/* Belly highlight */}
            <ellipse cx="56" cy="65" rx="14" ry="10" fill="white" opacity="0.08" />
          </g>
        </svg>
      </div>

      {/* Text label for full variant */}
      {variant === "full" && (
        <span className="font-mono font-bold text-lg tracking-tight">
          DataSouler
        </span>
      )}
    </div>
  );
}
