import CountUp from "react-countup";
import RevealOnScroll from "../components/RevealOnScroll";
import { achievementsData } from "../data/miscData";
import { zoomIn } from "../animations/variants";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto glass-strong rounded-3xl p-10 md:p-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievementsData.map((a, i) => (
            <RevealOnScroll key={a.id} variants={zoomIn} index={i} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold font-poppins text-gradient mb-2">
                <CountUp end={a.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                {a.suffix}
              </p>
              <p className="text-sm text-slate-400 font-medium">{a.label}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
