import React, { useState } from "react";
import logo from "../assets/Future-Banks-Summit-KSA-2023.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Why Attend", href: "#why-attend" },
  { label: "Audience", href: "#audience" },
  { label: "Agenda", href: "#agenda" },
  { label: "Speakers", href: "#speakers" },
  { label: "Venue", href: "#venue" },
  { label: "Register", href: "#register" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 md:h-20 items-center justify-around px-4">
        <a href="#hero" className="flex items-center gap-4">
          {/* CHIP BEHIND LOGO */}
          <div className="flex items-center justify-normal gap-3 rounded-xl bg-slate-900/85 px-3 py-2 shadow-soft border border-white/10">
            <div className="rounded-xl bg-white px-3 py-2 shadow-sm">
              <img
                src={logo}
                alt="Future Banks Summit KSA"
                className="h-9 md:h-10 w-auto"
              />
            </div>
            <div className="leading-tight hidden sm:block">
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-emerald-400">
                4th Annual
              </p>
              <p className="text-xs md:text-sm font-semibold text-white">
                Future Banks Summit &amp; Awards – KSA
              </p>
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="rounded-full border border-brand-accent bg-brand-accent/10 px-5 py-2 text-xs font-semibold text-brand-accent hover:bg-brand-accent hover:text-black transition-colors"
          >
            Register Interest
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {/* simple hamburger / close icon */}
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-white transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-white transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-white/5 bg-black/90">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-slate-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border border-brand-accent bg-brand-accent/10 px-4 py-2 text-xs font-semibold text-brand-accent hover:bg-brand-accent hover:text-black transition-colors"
            >
              Register Interest
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
