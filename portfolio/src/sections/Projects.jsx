import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { projectsData, projectCategories } from "../data/projectsData";

const PAGE_SIZE = 4;

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilterChange = (fn) => {
    fn();
    setPage(1);
  };

  return (
    <section id="projects" className="relative py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work & case studies"
          description="A mix of full stack applications, e-commerce platforms, and frontend builds."
        />

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <label htmlFor="project-search" className="sr-only">Search projects</label>
            <input
              id="project-search"
              type="text"
              placeholder="Search projects or tech..."
              value={query}
              onChange={(e) => handleFilterChange(() => setQuery(e.target.value))}
              className="w-full pl-11 pr-4 py-3 rounded-full glass text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(() => setCategory(cat))}
                aria-pressed={category === cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md shadow-primary/25"
                    : "glass text-slate-600 dark:text-slate-300 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {paginated.length === 0 ? (
          <div className="text-center py-20 text-slate-500 dark:text-slate-400">
            No projects match your search. Try a different keyword or filter.
          </div>
        ) : (
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            <AnimatePresence mode="popLayout">
              {paginated.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {totalPages > 1 && (
          <nav className="flex items-center justify-center gap-3" aria-label="Projects pagination">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Previous page"
              className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:text-primary transition-colors"
            >
              <FaChevronLeft size={14} />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : undefined}
                className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                  page === i + 1
                    ? "bg-gradient-to-r from-primary to-secondary text-white"
                    : "glass text-slate-600 dark:text-slate-300 hover:text-primary"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Next page"
              className="w-10 h-10 rounded-full glass flex items-center justify-center disabled:opacity-30 hover:text-primary transition-colors"
            >
              <FaChevronRight size={14} />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
