// A cinematic animated SVG sunrise village scene.
// Pure SVG + CSS — zero network deps, ~10KB on the wire, runs at 60fps
// because we only animate transform / opacity.
//
// What's living in this scene:
//  · Sky gradient + stars fading into dawn
//  · Sun rising slowly with a rotating ray halo
//  · 3 parallax hill layers + temple shikhara + huts cluster
//  · Smoke curling up from a hut chimney
//  · A kite floating in the sky on a long string
//  · Two cattle grazing in the field (heads bob)
//  · A bullock cart slowly crossing the dirt path
//  · A woman with a water pot on her head walking one direction
//  · A man with a stick + a child running, the other direction
//  · Wheat stalks swaying in the foreground
//  · Birds in V-formation flying across at dawn
//  · Mist drifting over the fields

export function AnimatedVillageScene({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3D1F00" />
          <stop offset="32%" stopColor="#7A2E27" />
          <stop offset="62%" stopColor="#D97706" />
          <stop offset="88%" stopColor="#F2AC51" />
          <stop offset="100%" stopColor="#FFE9C8" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE9C8" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFE9C8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFE9C8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE9C8" stopOpacity="0" />
          <stop offset="100%" stopColor="#FFE9C8" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF5EB" stopOpacity="0" />
          <stop offset="50%" stopColor="#FAF5EB" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFE9C8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFE9C8" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="wheatTip" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE9C8" />
          <stop offset="100%" stopColor="#B68534" stopOpacity="0" />
        </radialGradient>
        {/* Smoke gradient — fades into sky */}
        <linearGradient id="smoke" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#FAF5EB" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FAF5EB" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ─── Sky ─────────────────────────────────────────────────────────── */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#sky)" />

      {/* Stars (only top, fading near horizon) */}
      <g fill="#FFE9C8" opacity="0.55">
        {[
          [120, 60], [240, 100], [340, 50], [520, 80], [680, 40],
          [820, 90], [990, 60], [1180, 100], [1340, 50], [1480, 80],
          [80, 160], [420, 180], [760, 150], [1100, 170], [1440, 160],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 2 ? 1.2 : 0.8} className="star" />
        ))}
      </g>

      {/* ─── Sun + glow + rays ───────────────────────────────────────────── */}
      <g className="sun">
        <circle cx="1100" cy="540" r="420" fill="url(#sunGlow)" />
        <circle cx="1100" cy="540" r="220" fill="url(#sunGlow)" opacity="0.85" />
        <g className="rays" style={{ transformOrigin: "1100px 540px" }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <rect
              key={i}
              x="1098"
              y="60"
              width="4"
              height="380"
              fill="url(#ray)"
              transform={`rotate(${i * 30} 1100 540)`}
              opacity="0.4"
            />
          ))}
        </g>
        <circle cx="1100" cy="540" r="92" fill="#FFE9C8" />
        <circle cx="1100" cy="540" r="92" fill="#F2AC51" opacity="0.45" />
      </g>

      {/* ─── Kite high in the sky ────────────────────────────────────────── */}
      <g className="kite">
        <g>
          {/* String going down to ground (children holding it) */}
          <line
            x1="0"
            y1="0"
            x2="-180"
            y2="640"
            stroke="#2C1810"
            strokeWidth="0.8"
            opacity="0.55"
          />
          {/* Kite diamond */}
          <g className="kite-flutter">
            <polygon points="0,-22 18,0 0,22 -18,0" fill="#D97706" stroke="#7A2E27" strokeWidth="1.5" />
            <line x1="0" y1="-22" x2="0" y2="22" stroke="#7A2E27" strokeWidth="0.8" />
            <line x1="-18" y1="0" x2="18" y2="0" stroke="#7A2E27" strokeWidth="0.8" />
            {/* Tail */}
            <path d="M0 22 Q4 32 -2 42 Q4 52 -2 62 Q4 72 -2 82" stroke="#B85042" strokeWidth="1.4" fill="none" />
            <circle cx="-2" cy="44" r="2" fill="#3F6634" />
            <circle cx="-2" cy="62" r="2" fill="#FAF5EB" />
            <circle cx="-2" cy="80" r="2" fill="#3F6634" />
          </g>
        </g>
      </g>

      {/* ─── Far hills (lightest, hazy) ──────────────────────────────────── */}
      <path
        d="M0 540 Q200 470 380 510 T720 490 T1080 500 T1420 480 T1600 510 L1600 700 L0 700 Z"
        fill="#7A2E27"
        opacity="0.6"
      />
      <rect x="0" y="500" width="1600" height="220" fill="url(#haze)" />

      {/* ─── Mid hills ──────────────────────────────────────────────────── */}
      <path
        d="M0 620 Q160 560 320 590 T640 580 T960 595 T1280 575 T1600 600 L1600 800 L0 800 Z"
        fill="#5A211C"
      />

      {/* ─── Smoke rising from one of the huts ──────────────────────────── */}
      <g className="smoke">
        <path
          d="M676 600 Q672 580 680 562 Q670 542 678 522 Q668 500 680 478 Q672 458 680 438"
          stroke="url(#smoke)"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* ─── Near hills + village silhouette ─────────────────────────────── */}
      <g fill="#2C1810">
        <path d="M0 700 Q120 650 260 685 T520 680 T800 690 T1080 680 T1340 700 T1600 690 L1600 900 L0 900 Z" />

        {/* Village cluster — huts, temple, trees */}
        <g transform="translate(560 600)">
          <rect x="-2" y="44" width="4" height="40" />
          <circle cx="0" cy="38" r="22" />
          <circle cx="-14" cy="46" r="14" />
          <circle cx="14" cy="44" r="14" />
        </g>
        <g transform="translate(640 632)">
          <rect x="0" y="20" width="40" height="32" />
          <path d="M-6 22 L20 0 L46 22 Z" />
          <rect x="14" y="32" width="12" height="20" fill="#5A211C" />
        </g>
        <g transform="translate(672 596)">
          {/* Chimney from which smoke rises (see .smoke above) */}
          <rect x="0" y="0" width="8" height="14" />
        </g>
        <g transform="translate(700 624)">
          {/* Temple shikhara */}
          <rect x="0" y="20" width="36" height="42" />
          <path d="M-4 22 L18 -8 L40 22 Z" />
          <circle cx="18" cy="-14" r="3" fill="#D97706" />
          <rect x="14" y="40" width="8" height="22" fill="#7A2E27" />
        </g>
        <g transform="translate(750 636)">
          <rect x="0" y="14" width="34" height="28" />
          <path d="M-4 16 L17 -2 L38 16 Z" />
        </g>
        <g transform="translate(790 632)">
          <rect x="0" y="18" width="30" height="26" />
          <path d="M-4 20 L15 4 L34 20 Z" />
        </g>
        <g transform="translate(830 624)">
          <rect x="-2" y="40" width="4" height="38" />
          <circle cx="0" cy="36" r="18" />
          <circle cx="-12" cy="44" r="11" />
        </g>
      </g>

      {/* ─── Mist drifting in front of village ───────────────────────────── */}
      <g className="mist">
        <rect x="-200" y="660" width="2000" height="60" fill="url(#mist)" opacity="0.7" />
      </g>
      <g className="mist mist-slow">
        <rect x="-200" y="690" width="2000" height="80" fill="url(#mist)" opacity="0.55" />
      </g>

      {/* ─── Two cows / cattle grazing in the field ─────────────────────── */}
      <g className="cattle-a" fill="#1C0E08">
        <g>
          {/* Body */}
          <rect x="-20" y="-12" width="40" height="14" rx="3" />
          {/* Head bobbing */}
          <g className="cattle-head-a">
            <rect x="18" y="-10" width="14" height="10" rx="2" />
            <line x1="20" y1="-12" x2="22" y2="-16" stroke="#1C0E08" strokeWidth="1.5" />
            <line x1="30" y1="-12" x2="32" y2="-16" stroke="#1C0E08" strokeWidth="1.5" />
          </g>
          {/* Legs */}
          <rect x="-18" y="0" width="3" height="12" />
          <rect x="-8" y="0" width="3" height="12" />
          <rect x="8" y="0" width="3" height="12" />
          <rect x="16" y="0" width="3" height="12" />
          {/* Tail */}
          <line x1="-20" y1="-6" x2="-26" y2="2" stroke="#1C0E08" strokeWidth="1.5" />
        </g>
      </g>
      <g className="cattle-b" fill="#1C0E08">
        <g>
          <rect x="-18" y="-10" width="36" height="12" rx="3" />
          <g className="cattle-head-b">
            <rect x="16" y="-8" width="12" height="9" rx="2" />
            <line x1="18" y1="-10" x2="20" y2="-13" stroke="#1C0E08" strokeWidth="1.4" />
            <line x1="26" y1="-10" x2="28" y2="-13" stroke="#1C0E08" strokeWidth="1.4" />
          </g>
          <rect x="-16" y="0" width="3" height="10" />
          <rect x="-7" y="0" width="3" height="10" />
          <rect x="6" y="0" width="3" height="10" />
          <rect x="14" y="0" width="3" height="10" />
          <line x1="-18" y1="-4" x2="-23" y2="2" stroke="#1C0E08" strokeWidth="1.4" />
        </g>
      </g>

      {/* ─── Bullock cart slowly crossing the path ───────────────────────── */}
      <g className="bullock-cart" fill="#1C0E08">
        <g>
          {/* Two bullocks side-by-side */}
          <g transform="translate(-30 -8)">
            <rect x="-22" y="-10" width="40" height="14" rx="3" />
            <rect x="14" y="-8" width="12" height="10" rx="2" />
            <line x1="16" y1="-10" x2="18" y2="-14" stroke="#1C0E08" strokeWidth="1.5" />
            <line x1="22" y1="-10" x2="24" y2="-14" stroke="#1C0E08" strokeWidth="1.5" />
            <rect x="-20" y="0" width="3" height="10" />
            <rect x="-10" y="0" width="3" height="10" />
            <rect x="4" y="0" width="3" height="10" />
            <rect x="14" y="0" width="3" height="10" />
          </g>
          <g transform="translate(-30 6)">
            <rect x="-22" y="-10" width="40" height="14" rx="3" />
            <rect x="14" y="-8" width="12" height="10" rx="2" />
            <line x1="16" y1="-10" x2="18" y2="-14" stroke="#1C0E08" strokeWidth="1.5" />
            <line x1="22" y1="-10" x2="24" y2="-14" stroke="#1C0E08" strokeWidth="1.5" />
            <rect x="-20" y="0" width="3" height="10" />
            <rect x="-10" y="0" width="3" height="10" />
            <rect x="4" y="0" width="3" height="10" />
            <rect x="14" y="0" width="3" height="10" />
          </g>
          {/* Yoke connecting to cart */}
          <line x1="-12" y1="-2" x2="22" y2="-2" stroke="#1C0E08" strokeWidth="2" />
          {/* Cart bed */}
          <rect x="22" y="-14" width="46" height="14" rx="2" />
          {/* Driver / farmer figure */}
          <g transform="translate(34 -14)">
            <circle cx="0" cy="-10" r="5" />
            <path d="M-5 -6 L5 -6 L7 6 L-7 6 Z" />
            {/* Turban */}
            <ellipse cx="0" cy="-13" rx="6" ry="2.5" fill="#D97706" />
          </g>
          {/* Wagon wheels — rotating */}
          <g className="wheel-a" style={{ transformOrigin: "32px 8px" }}>
            <g transform="translate(32 8)">
              <circle cx="0" cy="0" r="9" fill="none" stroke="#1C0E08" strokeWidth="2.5" />
              <line x1="-9" y1="0" x2="9" y2="0" stroke="#1C0E08" strokeWidth="1.5" />
              <line x1="0" y1="-9" x2="0" y2="9" stroke="#1C0E08" strokeWidth="1.5" />
              <line x1="-6" y1="-6" x2="6" y2="6" stroke="#1C0E08" strokeWidth="1.2" />
              <line x1="-6" y1="6" x2="6" y2="-6" stroke="#1C0E08" strokeWidth="1.2" />
            </g>
          </g>
          <g className="wheel-b" style={{ transformOrigin: "60px 8px" }}>
            <g transform="translate(60 8)">
              <circle cx="0" cy="0" r="9" fill="none" stroke="#1C0E08" strokeWidth="2.5" />
              <line x1="-9" y1="0" x2="9" y2="0" stroke="#1C0E08" strokeWidth="1.5" />
              <line x1="0" y1="-9" x2="0" y2="9" stroke="#1C0E08" strokeWidth="1.5" />
              <line x1="-6" y1="-6" x2="6" y2="6" stroke="#1C0E08" strokeWidth="1.2" />
              <line x1="-6" y1="6" x2="6" y2="-6" stroke="#1C0E08" strokeWidth="1.2" />
            </g>
          </g>
        </g>
      </g>

      {/* ─── Foreground — wheat field ────────────────────────────────────── */}
      <path d="M0 740 Q400 720 800 740 T1600 740 L1600 900 L0 900 Z" fill="#3D1612" />

      {/* Field rows */}
      <g stroke="#1C0E08" strokeWidth="1.5" fill="none" opacity="0.6">
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${760 + i * 14} Q800 ${750 + i * 14} 1600 ${760 + i * 14}`}
          />
        ))}
      </g>

      {/* Wheat stalks — swaying */}
      <g className="wheat">
        {Array.from({ length: 30 }).map((_, i) => {
          const x = 30 + i * 53 + (i % 3) * 8;
          const baseY = 770 + (i % 4) * 6;
          const h = 60 + (i % 3) * 10;
          return (
            <g
              key={i}
              transform={`translate(${x} ${baseY})`}
              style={{
                transformOrigin: `${x}px ${baseY + h}px`,
                animation: `wheatSway 3.2s ease-in-out ${(i * 0.07).toFixed(2)}s infinite alternate`,
              }}
            >
              <line x1="0" y1={h} x2="0" y2="0" stroke="#5C4A33" strokeWidth="1.5" />
              <ellipse cx="0" cy="-2" rx="3" ry="8" fill="url(#wheatTip)" />
              <path d="M0 6 Q-5 2 -7 -4 M0 6 Q5 2 7 -4" stroke="#D4A24C" strokeWidth="1.2" fill="none" />
              <path d="M0 14 Q-5 10 -7 4 M0 14 Q5 10 7 4" stroke="#D4A24C" strokeWidth="1.2" fill="none" />
            </g>
          );
        })}
      </g>

      {/* ─── Birds in V-formation ────────────────────────────────────────── */}
      <g className="birds" stroke="#2C1810" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <g>
          <path d="M0 220 q12 -10 24 0 q12 -10 24 0" />
          <path d="M-30 240 q10 -8 20 0 q10 -8 20 0" transform="translate(36 -6)" />
          <path d="M-60 252 q10 -8 20 0 q10 -8 20 0" transform="translate(72 -4)" />
          <path d="M-90 244 q10 -8 20 0 q10 -8 20 0" transform="translate(108 0)" />
          <path d="M-120 256 q10 -8 20 0 q10 -8 20 0" transform="translate(144 4)" />
        </g>
      </g>

      {/* ─── A woman with a water pot on her head walking ───────────────── */}
      <g className="walker-woman" fill="#1C0E08">
        <g>
          {/* Pot on head — terracotta */}
          <ellipse cx="0" cy="-44" rx="10" ry="4" fill="#7A2E27" />
          <path d="M-8 -42 Q-10 -36 -7 -34 L7 -34 Q10 -36 8 -42 Z" fill="#7A2E27" />
          {/* Head */}
          <circle cx="0" cy="-26" r="5" />
          {/* Saree drape — flowing */}
          <path d="M-7 -22 L7 -22 L10 -2 L-10 -2 Z" fill="#D97706" />
          <path d="M-10 -2 L10 -2 L14 22 L-14 22 Z" fill="#7A2E27" />
          <path d="M-14 22 L14 22 L12 28 L-12 28 Z" fill="#5A211C" />
          {/* Arms (one raised to balance pot) */}
          <line x1="-6" y1="-18" x2="-2" y2="-30" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="-18" x2="10" y2="-8" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
          {/* Legs */}
          <line x1="-4" y1="28" x2="-7" y2="44" stroke="#1C0E08" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="4" y1="28" x2="7" y2="44" stroke="#1C0E08" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </g>

      {/* ─── A man with a stick + a small child running ─────────────────── */}
      <g className="walker-man" fill="#1C0E08">
        <g>
          {/* Man */}
          <g>
            {/* Turban (saffron) */}
            <ellipse cx="0" cy="-40" rx="7" ry="3" fill="#D97706" />
            <path d="M-6 -40 Q-7 -36 -5 -34 L5 -34 Q7 -36 6 -40 Z" fill="#D97706" />
            <circle cx="0" cy="-30" r="5" />
            {/* Kurta */}
            <path d="M-7 -24 L7 -24 L9 0 L-9 0 Z" fill="#FAF5EB" />
            {/* Dhoti */}
            <path d="M-9 0 L9 0 L11 26 L-11 26 Z" fill="#FAF5EB" />
            {/* Stick */}
            <line x1="9" y1="-12" x2="20" y2="32" stroke="#5C4A33" strokeWidth="2" strokeLinecap="round" />
            {/* Arms */}
            <line x1="-6" y1="-20" x2="-10" y2="0" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="-20" x2="10" y2="-8" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
            {/* Legs */}
            <line x1="-4" y1="26" x2="-7" y2="42" stroke="#1C0E08" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="4" y1="26" x2="7" y2="42" stroke="#1C0E08" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          {/* Child running ahead */}
          <g transform="translate(-22 8)" className="child-bob">
            <circle cx="0" cy="-18" r="3.5" fill="#A87047" />
            <path d="M-5 -14 L5 -14 L6 -2 L-6 -2 Z" fill="#3F6634" />
            <line x1="-5" y1="-10" x2="-8" y2="-4" stroke="#1C0E08" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="5" y1="-10" x2="9" y2="-14" stroke="#1C0E08" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="-3" y1="-2" x2="-5" y2="10" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
            <line x1="3" y1="-2" x2="6" y2="10" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
            {/* Hoop / wheel they're rolling */}
            <circle cx="14" cy="8" r="6" fill="none" stroke="#5C4A33" strokeWidth="1.5" />
          </g>
        </g>
      </g>

      {/* ─── A pair of children flying the kite (at the bottom of string) ── */}
      <g className="kite-kids" fill="#1C0E08" transform="translate(220 800)">
        {/* Child 1 — holding string */}
        <g>
          <circle cx="0" cy="-22" r="4" fill="#A87047" />
          <path d="M-5 -18 L5 -18 L6 -6 L-6 -6 Z" fill="#B85042" />
          <line x1="-5" y1="-12" x2="-9" y2="-6" stroke="#1C0E08" strokeWidth="1.5" strokeLinecap="round" />
          {/* Arm raised holding string */}
          <line x1="5" y1="-12" x2="-100" y2="-160" stroke="#1C0E08" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-3" y1="-6" x2="-5" y2="6" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="-6" x2="6" y2="6" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
        </g>
        {/* Child 2 — jumping / looking up */}
        <g transform="translate(16 0)" className="kid-jump">
          <circle cx="0" cy="-20" r="4" fill="#A87047" />
          <path d="M-5 -16 L5 -16 L6 -4 L-6 -4 Z" fill="#3F6634" />
          <line x1="-5" y1="-10" x2="-8" y2="-16" stroke="#1C0E08" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="5" y1="-10" x2="8" y2="-16" stroke="#1C0E08" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-3" y1="-4" x2="-5" y2="8" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="-4" x2="6" y2="8" stroke="#1C0E08" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
