export default function GlassCard({ children, className = "", hover = true, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={`glass rounded-2xl p-6 md:p-8 ${
        hover ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
