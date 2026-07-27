import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCode } from "react-icons/fa";
import { personalData } from "../data/personalData";

const quickLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialIcons = [
  { icon: FaGithub, url: personalData.socials.github, label: "GitHub" },
  { icon: FaLinkedin, url: personalData.socials.linkedin, label: "LinkedIn" },
  { icon: FaTwitter, url: personalData.socials.twitter, label: "Twitter" },
  { icon: FaCode, url: personalData.socials.leetcode, label: "LeetCode" },
  { icon: FaInstagram, url: personalData.socials.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-8 px-6 md:px-10 bg-slate-950/40 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-poppins font-bold text-2xl mb-3 text-white">
            Ravi<span className="text-gradient">.dev</span>
          </h3>
          <p className="text-slate-400 max-w-xs leading-relaxed">{personalData.tagline}</p>
          <div className="flex gap-3 mt-6">
            {socialIcons.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-primary hover:-translate-y-1 transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-80}
                  className="text-slate-400 hover:text-primary cursor-pointer transition-colors"
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-slate-400">
            <li>{personalData.email}</li>
            <li>{personalData.phone}</li>
            <li>{personalData.location}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        <p>Designed &amp; built with React, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
