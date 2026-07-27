import { FaLayerGroup, FaReact, FaServer, FaDatabase, FaPalette, FaRocket } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import RevealOnScroll from "../components/RevealOnScroll";
import GlassCard from "../components/GlassCard";
import { servicesData } from "../data/miscData";
import { fadeUp } from "../animations/variants";

const iconMap = { FaLayerGroup, FaReact, FaServer, FaDatabase, FaPalette, FaRocket };

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          description="From concept to deployment, I offer full-cycle web development services."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealOnScroll key={service.id} variants={fadeUp} index={i}>
                <GlassCard className="h-full group">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl mb-5 group-hover:scale-110 transition-transform">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg font-poppins mb-2 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </GlassCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
