interface StarRatingProps {
  value: number;
  max?: number;
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${filled ? "text-gold-400" : "text-night-700"}`}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 2l2.9 6.26 6.6.72-4.95 4.52 1.38 6.5L12 16.9 6.07 20l1.38-6.5L2.5 8.98l6.6-.72L12 2z"
      />
    </svg>
  );
}

export function StarRating({ value, max = 5 }: StarRatingProps) {
  return (
    <span className="flex items-center gap-1" aria-label={`Dificuldade ${value} de ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </span>
  );
}
