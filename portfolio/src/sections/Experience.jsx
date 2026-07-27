import { FaBriefcase } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { experienceData } from "../data/miscData";
import { slideInLeft, slideInRight } from "../animations/variants";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="My professional journey"
          description="Where I've worked and what I've built along the way."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2" aria-hidden="true" />

          <ol className="space-y-10">
            {experienceData.map((exp, i) => (
              <li key={exp.id} className="relative">
                <div className="hidden md:grid grid-cols-2 gap-10 items-start">
                  {i % 2 === 0 ? (
                    <>
                      <RevealOnScroll variants={slideInLeft} className="text-right">
                        <ExperienceCard exp={exp} />
                      </RevealOnScroll>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <RevealOnScroll variants={slideInRight}>
                        <ExperienceCard exp={exp} />
                      </RevealOnScroll>
                    </>
                  )}
                </div>

                <div className="md:hidden pl-12">
                  <RevealOnScroll variants={slideInRight}>
                    <ExperienceCard exp={exp} />
                  </RevealOnScroll>
                </div>

                <span
                  className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs shadow-lg shadow-primary/30"
                  aria-hidden="true"
                >
                  <FaBriefcase />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <GlassCard>
      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{exp.duration}</p>
      <h3 className="font-bold text-lg font-poppins text-slate-900 dark:text-white">{exp.role}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{exp.company} • {exp.location}</p>
      <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400 text-left">
        {exp.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            {pt}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
