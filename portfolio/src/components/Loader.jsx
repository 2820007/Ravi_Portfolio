import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F172A]"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />
        <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-secondary border-b-accent border-l-transparent animate-spin" />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 font-poppins text-white/70 tracking-widest text-sm uppercase"
      >
        Loading Portfolio
      </motion.p>
    </motion.div>
  );
}
