export type SilkVariant = "home" | "mist" | "story" | "flow";

const SRC: Record<SilkVariant, string> = {
  home: "/textures/silk-home.png?v=1",
  mist: "/textures/silk-other.png?v=1",
  story: "/textures/silk-story.png?v=1",
  flow: "/textures/blue-flow.png?v=1",
};

export function SilkBackground({ variant = "mist" }: { variant?: SilkVariant }) {
  return (
    <div className={`silk-root silk-${variant}`} aria-hidden>
      <div className="silk-layer" style={{ backgroundImage: `url("${SRC[variant]}")` }} />
    </div>
  );
}
