import { FaArrowRight, FaRegCalendar, FaRegClock } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { blogData } from "../data/miscData";
import { fadeUp } from "../animations/variants";

export default function Blog() {
  return (
    <section id="blog" className="relative py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Blog"
          title="Latest articles & writing"
          description="Thoughts on frontend engineering, backend architecture, and everything in between."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {blogData.map((post, i) => (
            <RevealOnScroll key={post.id} variants={fadeUp} index={i}>
              <GlassCard className="h-full flex flex-col group">
                <span className="inline-block w-fit text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                  {post.tag}
                </span>
                <h3 className="font-bold text-lg font-poppins mb-3 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5"><FaRegCalendar /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><FaRegClock /> {post.readTime}</span>
                </div>
                <a
                  href={post.url}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                >
                  Read Article <FaArrowRight size={12} />
                </a>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
