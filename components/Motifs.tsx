// Decorative SVG motifs inspired by Warli / folk art and Indian sun imagery.
// Pure SVG — no external image deps.

export function SunRays({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <circle cx="100" cy="100" r="22" />
        <circle cx="100" cy="100" r="34" strokeDasharray="2 3" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="100"
              y1="100"
              x2="100"
              y2="38"
              transform={`rotate(${angle} 100 100)`}
              strokeWidth={i % 2 === 0 ? 1.4 : 0.8}
              strokeLinecap="round"
            />
          );
        })}
      </g>
    </svg>
  );
}

export function WarliBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g fill="currentColor">
        {Array.from({ length: 30 }).map((_, i) => {
          const x = i * 40 + 4;
          // Alternating warli stick figures: tree / person / pot
          if (i % 3 === 0) {
            // tree
            return (
              <g key={i} transform={`translate(${x}, 4)`}>
                <line x1="14" y1="36" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2" />
                <path d="M14 14 L8 22 M14 14 L20 22 M14 18 L6 26 M14 18 L22 26" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="14" cy="12" r="2" />
              </g>
            );
          }
          if (i % 3 === 1) {
            // person
            return (
              <g key={i} transform={`translate(${x}, 4)`} stroke="currentColor" strokeWidth="1.2" fill="none">
                <circle cx="14" cy="10" r="3" />
                <path d="M14 13 L14 24 M14 16 L8 20 M14 16 L20 20 M14 24 L9 34 M14 24 L19 34" strokeLinecap="round" />
              </g>
            );
          }
          // pot/diya
          return (
            <g key={i} transform={`translate(${x}, 4)`} stroke="currentColor" strokeWidth="1.2" fill="none">
              <path d="M8 26 Q14 36 20 26 L18 18 L10 18 Z" />
              <path d="M14 14 Q14 10 12 10" strokeLinecap="round" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function Mandala({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g stroke="currentColor" fill="none" strokeWidth="0.8">
        <circle cx="120" cy="120" r="20" />
        <circle cx="120" cy="120" r="34" strokeDasharray="1 3" />
        <circle cx="120" cy="120" r="60" />
        <circle cx="120" cy="120" r="86" strokeDasharray="2 4" />
        <circle cx="120" cy="120" r="108" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <g key={i} transform={`rotate(${angle} 120 120)`}>
              <path d="M120 12 Q128 60 120 108 Q112 60 120 12 Z" />
              <circle cx="120" cy="60" r="3" />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden
      focusable="false"
    >
      <g stroke="currentColor" fill="none" strokeWidth="1">
        <path d="M0 60 Q30 60 30 30 Q30 0 60 0" />
        <path d="M0 40 Q40 40 40 0" strokeDasharray="2 3" />
        <circle cx="30" cy="30" r="3" fill="currentColor" />
        <circle cx="60" cy="0" r="2" fill="currentColor" />
        <circle cx="0" cy="60" r="2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function DiyaIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden focusable="false">
      <defs>
        <radialGradient id="flame" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFE9C8" />
          <stop offset="60%" stopColor="#F2AC51" />
          <stop offset="100%" stopColor="#B85042" />
        </radialGradient>
      </defs>
      <path d="M10 44 Q32 60 54 44 Q48 36 32 36 Q16 36 10 44 Z" fill="#7A2E27" />
      <path d="M14 42 Q32 52 50 42" stroke="#D4A24C" strokeWidth="1" fill="none" />
      <path d="M32 36 C30 28 28 22 32 14 C36 22 34 28 32 36 Z" fill="url(#flame)" />
      <circle cx="32" cy="22" r="2" fill="#FFF7EB" opacity="0.8" />
    </svg>
  );
}

export function WheatSpike({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" className={className} aria-hidden focusable="false">
      <g stroke="currentColor" fill="none" strokeWidth="1.2" strokeLinecap="round">
        <line x1="30" y1="118" x2="30" y2="40" />
        {Array.from({ length: 7 }).map((_, i) => {
          const y = 40 + i * 10;
          return (
            <g key={i}>
              <path d={`M30 ${y} Q18 ${y - 6} 14 ${y - 14}`} />
              <path d={`M30 ${y} Q42 ${y - 6} 46 ${y - 14}`} />
            </g>
          );
        })}
        <path d="M30 38 Q24 22 30 6 Q36 22 30 38 Z" fill="currentColor" fillOpacity="0.12" />
      </g>
    </svg>
  );
}
