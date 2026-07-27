import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { useActiveSection } from "../hooks/useActiveSection";
import { personalData } from "../data/personalData";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(navItems.map((n) => n.id));
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass-strong shadow-lg shadow-black/5" : "py-5 bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between" aria-label="Primary">
        <RouterLink
          to="/"
          className="font-poppins font-bold text-xl md:text-2xl text-slate-900 dark:text-white"
          aria-label="Home"
        >
          Ravi<span className="text-gradient">Mandal</span>
        </RouterLink>

        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              {isHome ? (
                <ScrollLink
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                    active === item.id
                      ? "text-primary bg-primary/10"
                      : "text-slate-700 dark:text-slate-300 hover:text-primary"
                  }`}
                >
                  {item.label}
                </ScrollLink>
              ) : (
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
         

          <a
            href={personalData.resumeUrl}
            download
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-transform shadow-md shadow-primary/25"
          >
            Resume
          </a>

          <button
            className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-slate-700 dark:text-slate-200"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden glass-strong mx-4 mt-3 rounded-2xl"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  {isHome ? (
                    <ScrollLink
                      to={item.id}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                    >
                      {item.label}
                    </ScrollLink>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className="block w-full text-left px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={personalData.resumeUrl}
                  download
                  className="block mt-2 text-center px-4 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-secondary text-white"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
