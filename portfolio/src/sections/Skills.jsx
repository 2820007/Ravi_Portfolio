import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { zoomIn } from "../animations/variants";
import CircularProgress from "../components/CircularProgress";
import RevealOnScroll from "../components/RevealOnScroll";
import SectionHeading from "../components/SectionHeading";
import { skillCategories } from "../data/skillsData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A comprehensive toolkit built through hands-on experience across the full stack."
        />

        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25 scale-105"
                  : "glass text-slate-600 dark:text-slate-300 hover:text-primary"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            role="tabpanel"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center"
          >
            {current.skills.map((skill, i) => (
              <RevealOnScroll key={skill.name} variants={zoomIn} index={i}>
                <CircularProgress percentage={skill.level} label={skill.name} />
              </RevealOnScroll>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
