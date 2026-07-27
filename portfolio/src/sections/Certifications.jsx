import { FaCertificate } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { certificationsData } from "../data/miscData";
import { zoomIn } from "../animations/variants";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Certifications"
          title="Courses & credentials"
          description="Continuous learning through industry-recognized certifications."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, i) => (
            <RevealOnScroll key={cert.id} variants={zoomIn} index={i}>
              <GlassCard className="h-full flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white">
                  <FaCertificate aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white leading-snug mb-1">{cert.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuer} • {cert.year}</p>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
