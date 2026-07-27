export function CardSkeleton() {
  return (
    <div className="glass rounded-2xl p-6 animate-pulse">
      <div className="h-40 bg-white/10 rounded-xl mb-4" />
      <div className="h-4 bg-white/10 rounded w-3/4 mb-3" />
      <div className="h-3 bg-white/10 rounded w-full mb-2" />
      <div className="h-3 bg-white/10 rounded w-5/6" />
    </div>
  );
}

export function TextSkeleton({ lines = 3 }) {
  return (
    <div className="animate-pulse space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 bg-white/10 rounded" style={{ width: `${90 - i * 10}%` }} />
      ))}
    </div>
  );
}
