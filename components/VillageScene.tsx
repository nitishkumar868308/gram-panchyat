// Self-contained SVG illustrations of rural scenes — no external assets.
// Painterly, warm, dignified.

export function SceneSunrise({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} aria-hidden>
      <defs>
        <linearGradient id="sky-sunrise" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2AC51" />
          <stop offset="50%" stopColor="#E8902B" />
          <stop offset="100%" stopColor="#B85042" />
        </linearGradient>
        <linearGradient id="field-sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#608C56" />
          <stop offset="100%" stopColor="#2F4F26" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#sky-sunrise)" />
      <circle cx="540" cy="200" r="80" fill="#FFE9C8" opacity="0.95" />
      <circle cx="540" cy="200" r="120" fill="#FFE9C8" opacity="0.25" />
      {/* Hills */}
      <path d="M0 380 Q200 320 400 360 T800 340 L800 600 L0 600 Z" fill="#7A2E27" opacity="0.85" />
      <path d="M0 430 Q160 380 320 410 T640 400 T800 420 L800 600 L0 600 Z" fill="url(#field-sun)" />
      {/* Trees */}
      {[120, 280, 440, 600, 720].map((x, i) => (
        <g key={i}>
          <rect x={x - 3} y={400 - i * 4} width="6" height="60" fill="#3D1612" />
          <circle cx={x} cy={395 - i * 4} r="22" fill="#23381D" />
        </g>
      ))}
      {/* Hut */}
      <g transform="translate(300 420)">
        <path d="M0 60 L70 60 L70 30 L35 0 L0 30 Z" fill="#FAF5EB" />
        <rect x="28" y="34" width="14" height="26" fill="#7A2E27" />
        <path d="M-5 30 L35 -8 L75 30" stroke="#7A2E27" strokeWidth="3" fill="none" />
      </g>
      {/* Birds */}
      <g stroke="#3D1612" strokeWidth="2" fill="none">
        <path d="M180 140 q10 -8 20 0 q10 -8 20 0" />
        <path d="M280 100 q8 -6 16 0 q8 -6 16 0" />
        <path d="M620 130 q10 -8 20 0 q10 -8 20 0" />
      </g>
    </svg>
  );
}

export function SceneClassroom({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} aria-hidden>
      <rect width="800" height="600" fill="#F1E7D2" />
      {/* Wall + chalkboard */}
      <rect x="60" y="80" width="680" height="320" fill="#FAF5EB" />
      <rect x="120" y="120" width="560" height="220" fill="#23381D" />
      <text x="400" y="200" textAnchor="middle" fill="#FAF5EB" fontFamily="serif" fontSize="42">
        स्वागत है
      </text>
      <text x="400" y="260" textAnchor="middle" fill="#D4A24C" fontFamily="serif" fontSize="22" fontStyle="italic">
        Suryapura Smart Classroom
      </text>
      <text x="400" y="310" textAnchor="middle" fill="#FAF5EB" fontFamily="monospace" fontSize="20">
        2 + 2 = 4    A = अ
      </text>
      {/* Desks */}
      {[160, 300, 440, 580].map((x) => (
        <g key={x} transform={`translate(${x} 440)`}>
          <rect x="0" y="40" width="80" height="14" fill="#7A2E27" />
          <rect x="6" y="54" width="6" height="40" fill="#5A211C" />
          <rect x="68" y="54" width="6" height="40" fill="#5A211C" />
          {/* Child silhouette */}
          <circle cx="40" cy="20" r="14" fill="#A87047" />
          <path d="M20 36 Q40 56 60 36 L58 40 L22 40 Z" fill="#B85042" />
        </g>
      ))}
      {/* Floor */}
      <rect x="0" y="500" width="800" height="100" fill="#8E7553" />
    </svg>
  );
}

export function SceneFarm({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} aria-hidden>
      <defs>
        <linearGradient id="sky-noon" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE9C8" />
          <stop offset="100%" stopColor="#F2AC51" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#sky-noon)" />
      <circle cx="120" cy="120" r="50" fill="#FAF5EB" opacity="0.95" />
      {/* Fields with rows */}
      <path d="M0 350 L800 320 L800 600 L0 600 Z" fill="#608C56" />
      {Array.from({ length: 18 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${360 + i * 14} Q400 ${340 + i * 14} 800 ${330 + i * 14}`}
          stroke="#3F6634"
          strokeWidth="1.2"
          fill="none"
          opacity={0.8 - i * 0.03}
        />
      ))}
      {/* Wheat sheaves */}
      {[100, 250, 420, 580, 700].map((x, i) => (
        <g key={i} transform={`translate(${x} 360)`}>
          <line x1="0" y1="0" x2="0" y2="80" stroke="#894902" strokeWidth="2" />
          <path d="M0 0 Q-12 -10 -16 -22 M0 0 Q12 -10 16 -22" stroke="#D4A24C" strokeWidth="2" fill="none" />
          <path d="M0 10 Q-12 0 -16 -10 M0 10 Q12 0 16 -10" stroke="#D4A24C" strokeWidth="2" fill="none" />
        </g>
      ))}
      {/* Farmer figure */}
      <g transform="translate(360 280)">
        <circle cx="0" cy="0" r="14" fill="#A87047" />
        <path d="M-10 -10 Q0 -22 10 -10 L12 -2 L-12 -2 Z" fill="#D97706" />
        <rect x="-2" y="14" width="4" height="40" fill="#7A2E27" />
        <path d="M-12 14 Q0 24 12 14 L14 60 L-14 60 Z" fill="#FAF5EB" />
        <line x1="14" y1="20" x2="34" y2="0" stroke="#5A211C" strokeWidth="3" />
        <path d="M30 -4 L42 -16 L38 4 Z" fill="#5A211C" />
      </g>
    </svg>
  );
}

export function SceneWomenSHG({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} aria-hidden>
      <rect width="800" height="600" fill="#7A2E27" />
      <rect width="800" height="240" fill="#B85042" />
      {/* Sun */}
      <circle cx="700" cy="100" r="48" fill="#FFE9C8" />
      {/* Women circle */}
      {[180, 320, 460, 600].map((x, i) => {
        const colors = ["#D97706", "#3F6634", "#D4A24C", "#5C4A33"];
        return (
          <g key={i} transform={`translate(${x} 360)`}>
            <circle cx="0" cy="0" r="22" fill="#A87047" />
            <path d="M-18 -14 Q0 -34 18 -14 L20 -2 L-20 -2 Z" fill={colors[i]} />
            <path d="M-26 18 Q0 38 26 18 L30 120 L-30 120 Z" fill={colors[i]} />
            {/* Bindi */}
            <circle cx="0" cy="-8" r="2" fill="#D97706" />
          </g>
        );
      })}
      <rect x="0" y="500" width="800" height="100" fill="#3D1612" />
      <text x="400" y="560" textAnchor="middle" fill="#FAF5EB" fontFamily="serif" fontSize="22" fontStyle="italic">
        Mahila Swayam Sahayata Samuh
      </text>
    </svg>
  );
}

export function SceneSolarLamp({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} aria-hidden>
      <defs>
        <radialGradient id="lamp-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FFE9C8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFE9C8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D301F" />
          <stop offset="100%" stopColor="#5A211C" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#dusk)" />
      <circle cx="400" cy="280" r="280" fill="url(#lamp-glow)" />
      {/* Lamp post */}
      <rect x="396" y="240" width="8" height="320" fill="#2C1810" />
      <path d="M380 240 L420 240 L412 220 L388 220 Z" fill="#D4A24C" />
      <circle cx="400" cy="240" r="16" fill="#FFE9C8" />
      {/* Solar panel */}
      <g transform="translate(380 180)">
        <rect width="40" height="20" fill="#1C0E08" stroke="#D4A24C" strokeWidth="1" />
        <line x1="10" y1="0" x2="10" y2="20" stroke="#D4A24C" />
        <line x1="20" y1="0" x2="20" y2="20" stroke="#D4A24C" />
        <line x1="30" y1="0" x2="30" y2="20" stroke="#D4A24C" />
      </g>
      {/* Houses silhouette */}
      <path d="M0 560 L80 560 L80 510 L120 470 L160 510 L160 560 L240 560 L240 530 L280 500 L320 530 L320 560 L800 560 L800 600 L0 600 Z" fill="#1C0E08" />
      {/* Stars */}
      {[
        [120, 100],
        [240, 60],
        [500, 80],
        [620, 130],
        [700, 60],
        [80, 200],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.5" fill="#FAF5EB" />
      ))}
    </svg>
  );
}

export function SceneRoad({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 600" className={className} aria-hidden>
      <defs>
        <linearGradient id="dawn-road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2AC51" />
          <stop offset="100%" stopColor="#FAF5EB" />
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#dawn-road)" />
      <circle cx="650" cy="140" r="60" fill="#FFE9C8" />
      {/* Hills */}
      <path d="M0 360 Q200 300 400 340 T800 320 L800 600 L0 600 Z" fill="#608C56" />
      {/* Road */}
      <path d="M380 360 L420 360 L520 600 L280 600 Z" fill="#5C4A33" />
      <path d="M398 380 L402 600" stroke="#FAF5EB" strokeWidth="3" strokeDasharray="14 14" />
      {/* Trees flanking */}
      {[200, 600, 130, 670].map((x, i) => (
        <g key={i} transform={`translate(${x} ${380 + (i % 2) * 20})`}>
          <rect x="-3" y="0" width="6" height="40" fill="#3D1612" />
          <circle cx="0" cy="-8" r="22" fill="#2F4F26" />
        </g>
      ))}
      <text x="400" y="240" textAnchor="middle" fill="#7A2E27" fontFamily="serif" fontSize="20" fontStyle="italic">
        "Roads of dignity"
      </text>
    </svg>
  );
}
