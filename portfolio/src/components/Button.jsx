import MagneticButton from "./MagneticButton";

const variants = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
  outline:
    "border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white hover:border-primary hover:text-primary",
  ghost: "text-slate-900 dark:text-white hover:bg-white/10",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  as: Tag = "button",
  icon: Icon,
  iconPosition = "right",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]";

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon aria-hidden="true" />}
    </>
  );

  if (Tag === "a") {
    return (
      <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <MagneticButton className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {content}
    </MagneticButton>
  );
}
