




import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import GlassCard from "./GlassCard";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col overflow-hidden p-0 rounded-2xl group">
        {/* Project Image — Vercel-style: full-bleed, fixed aspect ratio */}
        <div className="relative w-full aspect-video overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* subtle gradient so a light badge/text always stays readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-5 line-clamp-2 mb-3">
            {project.description}
          </p>

          {/* Features — inline, compact, not a bulleted list */}
          {project.features?.length > 0 && (
            <ul className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
              {project.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-auto grid grid-cols-2 gap-2.5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 py-2.5 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white py-2.5 text-sm font-semibold hover:opacity-90 transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
