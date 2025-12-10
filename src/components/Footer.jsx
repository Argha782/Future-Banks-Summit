import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/80">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3 py-4 text-[11px] text-slate-400">
        <p>
          © {new Date().getFullYear()} Future Banks Summit &amp; Awards – KSA
          (assignment demo).
        </p>
        <p className="text-right">
          Built with <span className="text-brand-accent">React</span> &amp;{" "}
          <span className="text-brand-accent">Tailwind CSS</span> by Argha Saha
          for Xcode Tech Solutions technical test.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
