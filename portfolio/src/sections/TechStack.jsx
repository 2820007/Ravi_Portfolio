import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiFirebase,
  SiJsonwebtokens, SiCloudinary, SiGit, SiGithub, SiVercel, SiRender, SiNetlify,
} from "react-icons/si";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import { staggerContainer, zoomIn } from "../animations/variants";

const stackIcons = [
  { icon: SiReact, name: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: SiRedux, name: "Redux Toolkit", color: "#764ABC" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express.js", color: "#FFFFFF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiPrisma, name: "Prisma", color: "#FFFFFF" },
  { icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
  { icon: SiJsonwebtokens, name: "JWT", color: "#FB015B" },
  { icon: SiCloudinary, name: "Cloudinary", color: "#3448C5" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
  { icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
  { icon: SiRender, name: "Render", color: "#46E3B7" },
  { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools & technologies I love"
          description="The core stack I use to design, build, and ship modern web applications."
        />

        <RevealOnScroll
          variants={staggerContainer(0.05)}
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-6"
        >
          {stackIcons.map((tech, i) => (
            <RevealOnScroll
              key={tech.name}
              variants={zoomIn}
              index={i}
              className="flex flex-col items-center gap-2 group animate-float"
              style={{ animationDelay: `${(i % 6) * 0.4}s` }}
            >
              <div
                className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-3xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300"
                style={{ color: tech.color }}
              >
                <tech.icon aria-hidden="true" />
              </div>
              <span className="text-[11px] text-center text-slate-500 dark:text-slate-400 font-medium">
                {tech.name}
              </span>
            </RevealOnScroll>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
