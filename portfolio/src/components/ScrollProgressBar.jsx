import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
