import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowRight } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import Button from "../components/Button";
import { personalData } from "../data/personalData";

function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary/40 animate-float-slow"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden bg-mesh"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <Particles />

      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-cyan-300 mb-6"
          >
            <HiOutlineSparkles /> Available for new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-poppins leading-tight text-white mb-4"
          >
            Hi, I'm <span className="text-gradient">{personalData.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold font-grotesk text-slate-200 mb-6 min-h-[2.5rem]"
          >
            <Typewriter
              words={[
                personalData.role,
                "React & Next.js Specialist",
                "Node.js & Express Engineer",
                "Building with MongoDB & PostgreSQL",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={55}
              deleteSpeed={30}
              delaySpeed={1800}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            {personalData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <ScrollLink to="contact" smooth duration={500} offset={-80}>
              <Button variant="primary" icon={FaArrowRight}>
                Hire Me
              </Button>
            </ScrollLink>
            <Button as="a" href={personalData.resumeUrl} download variant="outline" icon={FaDownload}>
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            {[
              { icon: FaGithub, url: personalData.socials.github, label: "GitHub" },
              { icon: FaLinkedin, url: personalData.socials.linkedin, label: "LinkedIn" },
              { icon: FaTwitter, url: personalData.socials.twitter, label: "Twitter" },
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-300 hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-30 blur-2xl animate-pulse-glow" />
            <div className="absolute inset-4 rounded-full border border-white/10 animate-spin-slow" style={{ animationDuration: "16s" }} />
            <div className="relative w-full h-full rounded-full glass-strong p-2">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center overflow-hidden">
                <span className="font-poppins font-black text-7xl sm:text-8xl text-white/90 select-none" aria-hidden="true">
                  <img src="/ra.jpg" alt="" />
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 glass-strong rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs text-slate-400">Experience</p>
              <p className="font-bold font-poppins text-white">1+ Years</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-9 rounded-full border border-slate-500 flex justify-center pt-2">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-1 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
