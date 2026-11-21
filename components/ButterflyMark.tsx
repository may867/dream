type Props = {
  className?: string;
  title?: string;
};

export function ButterflyMark({ className = "h-10 w-10", title }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M32 28C22 8 6 14 11 31c5 6 13 4 21-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 28C42 8 58 14 53 31c-5 6-13 4-21-3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 31c-10 3-18 16-9 21 6-1 9-10 9-21Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M32 31c10 3 18 16 9 21-6-1-9-10-9-21Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="20.5" cy="46" r="2.3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="43.5" cy="46" r="2.3" stroke="currentColor" strokeWidth="1.2" />
      <path d="M32 18v28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M32 18c-4-7-9-9-12-8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M32 18c4-7 9-9 12-8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="19.5" cy="10.2" r="1.3" fill="currentColor" />
      <circle cx="44.5" cy="10.2" r="1.3" fill="currentColor" />
    </svg>
  );
}
