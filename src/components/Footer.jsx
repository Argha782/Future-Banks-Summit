import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/90 backdrop-blur">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-emerald-400/40 via-sky-400/40 to-emerald-400/40" />

      <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-[14px] text-slate-400">
        
        {/* Left side */}
        <div className="text-center md:text-left leading-relaxed">
          <p className="text-slate-300 font-medium tracking-wide">
            © {new Date().getFullYear()} Future Banks Summit &amp; Awards – KSA
          </p>
          <p className="text-slate-500">
            Demo website created for Xcode Tech Solutions technical assessment.
          </p>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-slate-300">
            Built with{" "}
            <span className="text-brand-accent font-semibold">React</span> &amp;{" "}
            <span className="text-brand-accent font-semibold">Tailwind CSS</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Argha782/Future-Banks-Summit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="text-slate-400 hover:text-white hover:scale-110 transition-colors"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/argha-saha-80527a208/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-400 hover:text-sky-400 hover:scale-110 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <p className="text-slate-500 text-[14px]">
            Designed &amp; developed by{" "}
            <span className="text-white font-medium">Argha Saha</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
