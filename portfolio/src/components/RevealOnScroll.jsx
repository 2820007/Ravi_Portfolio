import { motion } from "framer-motion";
import { fadeUp } from "../animations/variants";

export default function RevealOnScroll({
  children,
  variants = fadeUp,
  className = "",
  index = 0,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
