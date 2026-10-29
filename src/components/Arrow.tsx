export default function Arrow({ left = false }: { left?: boolean }) {
  return (
    <svg
      className="arrow"
      viewBox="0 0 32 20"
      fill="none"
      aria-hidden="true"
      style={left ? { transform: "rotate(180deg)" } : undefined}
    >
      <path d="M1 10h27M21 3l7 7-7 7" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
