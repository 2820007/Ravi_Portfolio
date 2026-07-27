import RevealOnScroll from "./RevealOnScroll";

export default function SectionHeading({ eyebrow, title, description, center = true }) {
  return (
    <RevealOnScroll className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-block mb-3 text-xs md:text-sm font-semibold tracking-widest uppercase text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
