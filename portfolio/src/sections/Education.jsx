import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { educationData } from "../data/miscData";
import { fadeUp } from "../animations/variants";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="grid md:grid-cols-2 gap-6">
          {educationData.map((edu, i) => (
            <RevealOnScroll key={edu.id} variants={fadeUp} index={i}>
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl mb-4">
                  <FaGraduationCap aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{edu.duration}</p>
                <h3 className="font-bold text-lg font-poppins mb-1 text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{edu.institution} • {edu.grade}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{edu.description}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
