// Decorative skyline silhouette drawn inline so the page needs no image assets.
export default function Skyline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 320" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c2532" />
          <stop offset="1" stopColor="#0b0f14" />
        </linearGradient>
      </defs>
      <g fill="url(#tower)">
        <rect x="20" y="190" width="70" height="130" />
        <rect x="100" y="150" width="55" height="170" />
        <rect x="165" y="210" width="80" height="110" />
        <path d="M262 320V120l30-30 30 30v200z" />
        <rect x="340" y="170" width="60" height="150" />
        <rect x="410" y="200" width="45" height="120" />
        {/* Supertall spire */}
        <path d="M560 320V150h14v-40h10V60h6V0h4v60h6v50h10v40h14v170z" />
        <rect x="470" y="180" width="70" height="140" />
        <path d="M640 320V140q35-50 70 0v180z" />
        <rect x="725" y="190" width="55" height="130" />
        {/* Sail-shaped hotel */}
        <path d="M800 320V110q90 60 90 210z" />
        <rect x="905" y="160" width="60" height="160" />
        <rect x="975" y="205" width="70" height="115" />
        <path d="M1055 320V135l25-25 25 25v185z" />
        <rect x="1120" y="185" width="70" height="135" />
      </g>
      <g fill="#c8a96a" opacity="0.5">
        {Array.from({ length: 40 }).map((_, i) => (
          <rect key={i} x={30 + ((i * 97) % 1150)} y={200 + ((i * 53) % 100)} width="3" height="5" />
        ))}
      </g>
    </svg>
  );
}
