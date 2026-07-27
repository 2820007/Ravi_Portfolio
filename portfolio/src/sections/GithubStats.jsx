import { FaGithub } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { slideInLeft, slideInRight, fadeUp } from "../animations/variants";

const GITHUB_USERNAME = "ravikumar-dev";

export default function GithubStats() {
  return (
    <section id="github" className="relative py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="GitHub"
          title="Open source & contributions"
          description="A live look at my GitHub activity, top languages, and contribution history."
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <RevealOnScroll variants={slideInLeft}>
            <GlassCard>
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&hide_border=true&title_color=3B82F6&icon_color=06B6D4&text_color=94A3B8`}
                alt="Ravi Kumar's GitHub statistics"
                loading="lazy"
                className="w-full h-auto"
              />
            </GlassCard>
          </RevealOnScroll>

          <RevealOnScroll variants={slideInRight}>
            <GlassCard>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&hide_border=true&title_color=3B82F6&text_color=94A3B8`}
                alt="Ravi Kumar's top GitHub languages"
                loading="lazy"
                className="w-full h-auto"
              />
            </GlassCard>
          </RevealOnScroll>
        </div>

        <RevealOnScroll variants={fadeUp}>
          <GlassCard className="overflow-x-auto">
            <div className="flex items-center gap-2 mb-4 text-slate-700 dark:text-slate-300">
              <FaGithub /> <span className="font-semibold">Contribution Graph</span>
            </div>
            <img
              src={`https://ghchart.rshah.org/3B82F6/${GITHUB_USERNAME}`}
              alt="Ravi Kumar's GitHub contribution graph"
              loading="lazy"
              className="w-full min-w-[600px] h-auto"
            />
          </GlassCard>
        </RevealOnScroll>
      </div>
    </section>
  );
}
