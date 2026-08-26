export function SurgeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <polyline
        points="5,23 11,18 15,20 21,9 24,12 28,6"
        className="stroke-primary-foreground"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="28" cy="6" r="2.2" className="fill-spike" />
    </svg>
  );
}
