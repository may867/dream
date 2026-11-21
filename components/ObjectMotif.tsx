import type { MotifId } from "@/lib/data";

const palettes: Record<MotifId, { from: string; to: string; ink: string }> = {
  qipao: { from: "#e8c9b4", to: "#9a4d4a", ink: "#4a241f" },
  suitcase: { from: "#c9a27a", to: "#4a3428", ink: "#2b1c14" },
  letters: { from: "#f0e2c4", to: "#b07a4a", ink: "#4a3018" },
  chest: { from: "#d7b07a", to: "#6b4424", ink: "#3a2412" },
  scarf: { from: "#f0d5c8", to: "#c4848a", ink: "#5a2c34" },
  sewing: { from: "#dce3c8", to: "#6f7d4a", ink: "#2f3a1c" },
  camera: { from: "#c9c2b4", to: "#3a3a3a", ink: "#1c1c1c" },
  teacup: { from: "#d7e4f0", to: "#2d5d8c", ink: "#16324a" },
  songbook: { from: "#efe6d2", to: "#5a4a38", ink: "#2c2118" },
  handkerchief: { from: "#f4e4ea", to: "#c48aa0", ink: "#5a3040" },
  flowers: { from: "#ead8b4", to: "#8a6a38", ink: "#3a2a14" },
  tickets: { from: "#d5e4d8", to: "#3d6a58", ink: "#17342c" },
};

function Drawing({ motif, ink }: { motif: MotifId; ink: string }) {
  switch (motif) {
    case "qipao":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.6" strokeLinejoin="round">
          <path d="M50 22c8 3 14 14 12 28-18 6-42 6-60 0-2-14 4-25 12-28 4-10 32-10 36 0Z" />
          <path d="M32 18c8 8 10 14 8 22" />
          <path d="M38 24c6 2 10 1 14-2" />
          <path d="M28 48c2 18 4 28 4 38M36 48c-1 18-2 28-2 38" />
          <path d="M22 86c8 6 20 6 28 0" />
          <circle cx="40" cy="30" r="1.6" fill={ink} />
          <path d="M20 58c8-6 16-4 22 2M18 70c10-5 20-3 26 4" opacity="0.7" />
        </g>
      );
    case "suitcase":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.6">
          <rect x="14" y="36" width="68" height="42" rx="4" />
          <path d="M14 54h68M32 36v42M64 36v42" />
          <path d="M38 28h20c2 0 4 2 4 8H34c0-6 2-8 4-8Z" />
          <rect x="44" y="50" width="8" height="10" rx="1" />
          <path d="M22 64h8M66 64h8" />
        </g>
      );
    case "letters":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.5">
          <rect x="18" y="28" width="52" height="38" rx="2" transform="rotate(-8 44 47)" />
          <rect x="24" y="34" width="52" height="38" rx="2" />
          <path d="M24 34l26 16 26-16" />
          <circle cx="62" cy="58" r="7" fill="#7a2a28" stroke="none" opacity="0.85" />
          <path d="M32 48h16M32 56h12" opacity="0.7" />
        </g>
      );
    case "chest":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.6">
          <path d="M16 44h64l-4 28H20L16 44Z" />
          <path d="M20 44c2-16 16-24 28-24s26 8 28 24" />
          <path d="M16 56h64" />
          <circle cx="48" cy="62" r="3" />
          <path d="M28 44v28M68 44v28" opacity="0.5" />
        </g>
      );
    case "scarf":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.6">
          <path d="M18 30c18-16 42-8 58 8-8 10-22 18-38 14-12 12-28 8-34-4 6-8 10-14 14-18Z" />
          <path d="M30 28c6 8 8 16 4 24M54 36c4 8 4 16-2 24" opacity="0.7" />
          <circle cx="40" cy="40" r="3" />
          <circle cx="52" cy="48" r="2.2" />
        </g>
      );
    case "sewing":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.6">
          <ellipse cx="48" cy="58" rx="28" ry="16" />
          <path d="M22 54c4-18 16-30 26-30 8 0 16 8 20 22" />
          <path d="M40 40c6 10 4 20-4 28" />
          <circle cx="36" cy="34" r="5" />
          <path d="M58 38l12-16" />
          <circle cx="72" cy="20" r="2.4" fill={ink} />
        </g>
      );
    case "camera":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.6">
          <rect x="18" y="36" width="60" height="36" rx="6" />
          <circle cx="48" cy="54" r="12" />
          <circle cx="48" cy="54" r="6" />
          <rect x="36" y="28" width="16" height="8" rx="2" />
          <circle cx="68" cy="46" r="2.4" fill={ink} />
        </g>
      );
    case "teacup":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.6">
          <path d="M28 34c2 28 8 38 20 38s18-10 20-38Z" />
          <path d="M28 34h40" />
          <path d="M68 40c10 0 14 8 8 16-6 4-10 2-12 0" />
          <path d="M36 48c6 4 16 4 24 0M34 58c8 4 18 4 28 0" opacity="0.7" />
          <ellipse cx="48" cy="34" rx="20" ry="5" />
        </g>
      );
    case "songbook":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.5">
          <rect x="24" y="22" width="48" height="58" rx="2" />
          <path d="M24 30h48M34 40h20M34 48h16M34 56h22" />
          <path d="M38 68c8-10 18-8 22 2" />
          <circle cx="38" cy="70" r="2.2" fill={ink} />
        </g>
      );
    case "handkerchief":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.5">
          <path d="M22 30h46l6 12-8 34H28L22 42Z" />
          <path d="M28 38h34M30 50c8-6 18-6 26 2" />
          <circle cx="40" cy="58" r="3" />
          <path d="M38 62c6 6 10 4 12-2" />
        </g>
      );
    case "flowers":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.5">
          <path d="M36 86c2-22 4-36 2-52M48 86c-2-18 6-34 12-48M58 86c0-16-8-30-6-46" />
          <circle cx="38" cy="28" r="8" />
          <circle cx="60" cy="34" r="6" />
          <circle cx="52" cy="22" r="5" />
          <rect x="28" y="78" width="40" height="10" rx="2" />
        </g>
      );
    case "tickets":
      return (
        <g stroke={ink} fill="none" strokeWidth="1.5">
          <path d="M22 34h52l-6 40H28L22 34Z" />
          <path d="M30 44h28M30 52h18M30 60h22" />
          <circle cx="62" cy="48" r="5" />
          <path d="M20 70h56" strokeDasharray="4 4" />
        </g>
      );
    default:
      return null;
  }
}

export function ObjectMotif({
  motif,
  className = "",
}: {
  motif: MotifId;
  className?: string;
}) {
  const palette = palettes[motif];
  return (
    <div className={`object-plate ${className}`} style={{ background: `linear-gradient(160deg, ${palette.from}, ${palette.to})` }}>
      <svg viewBox="0 0 96 96" className="absolute inset-0 opacity-90" aria-hidden>
        <Drawing motif={motif} ink={palette.ink} />
      </svg>
      <div className="absolute -right-4 -bottom-6 opacity-20 text-white">
        <svg viewBox="0 0 64 64" className="h-24 w-24">
          <path d="M32 28C22 8 6 14 11 31c5 6 13 4 21-3Z" stroke="currentColor" fill="none" />
          <path d="M32 28C42 8 58 14 53 31c-5 6-13 4-21-3Z" stroke="currentColor" fill="none" />
        </svg>
      </div>
    </div>
  );
}
