import CountUp from "react-countup";
import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { personalData } from "../data/personalData";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "../animations/variants";

const highlights = [
  {
    icon: FaCode,
    title: "Clean Code Advocate",
    text: "I write maintainable, well-tested code following industry best practices and design patterns.",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    text: "I enjoy breaking down complex requirements into elegant, scalable technical solutions.",
  },
  {
    icon: FaUsers,
    title: "Team Player",
    text: "I collaborate closely with designers, PMs, and fellow engineers to ship great products.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Get to know me a little better"
          description="A snapshot of who I am, what drives me, and how I build software."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <RevealOnScroll variants={slideInLeft}>
            <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-4 text-slate-900 dark:text-white">
              {personalData.role} based in {personalData.location}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {personalData.objective}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Over the past few years, I've built and shipped production applications across
              job portals, healthcare systems, food-ordering platforms, and e-commerce stores —
              always focusing on performance, accessibility, and clean architecture.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variants={slideInRight}>
            <div
              className="grid grid-cols-2 gap-5"
              role="list"
              aria-label="Career statistics"
            >
              {personalData.stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center" role="listitem">
                  <p className="text-3xl md:text-4xl font-extrabold font-poppins text-gradient mb-1">
                    
                     {stat.value}
                  {stat.suffix}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll
          as="ul"
          variants={staggerContainer(0.15)}
          className="grid sm:grid-cols-3 gap-6"
        >
          {highlights.map((h, i) => (
            <RevealOnScroll as="li" key={h.title} variants={fadeUp} index={i} className="list-none">
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl mb-4">
                  <h.icon aria-hidden="true" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-slate-900 dark:text-white">{h.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{h.text}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
