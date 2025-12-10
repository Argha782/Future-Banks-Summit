import React from "react";
import logo from "../assets/Future-Banks-Summit-KSA-2023.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-20"
    >
      {/* Softer gradient so things don't disappear */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.20),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.25),_transparent_55%),linear-gradient(to_bottom,_#020617,_#020617)]" />

      <div className="container relative mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-1">
          <p className="section-title">Riyadh, Kingdom of Saudi Arabia</p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white">
            4th Annual Future Banks
            <span className="block text-brand-accent">
              Summit &amp; Awards – KSA
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm md:text-base text-slate-300">
            Bringing together leading banks, regulators, and technology
            innovators to reimagine the future of banking in Saudi Arabia – from
            open banking and instant payments to AI-driven customer journeys and
            embedded finance.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              11–12 September 2023
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Riyadh, KSA
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              In-person | 2 days | Awards
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#register"
              className="rounded-full bg-brand-accent px-6 py-2.5 text-sm font-semibold text-black shadow-soft hover:bg-emerald-400 transition-colors"
            >
              Register Interest
            </a>
            <a
              href="#agenda"
              className="rounded-full border border-white/15 bg-transparent px-6 py-2.5 text-sm font-semibold text-slate-100 hover:bg-white/5 transition-colors"
            >
              View Agenda Highlights
            </a>
          </div>
        </div>

        {/* Card on the right */}
        <div className="flex-1 w-full max-w-md md:max-w-sm lg:max-w-md">
          {/* LOGO WITH ITS OWN BACKGROUND */}
          <div className="mb-4 inline-flex items-center rounded-2xl bg-white px-4 py-3 border border-white/10 shadow-soft">
            <img
              src={logo}
              alt="Future Banks Summit KSA"
              className="h-14 md:h-20 w-auto"
            />
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-soft">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-accentSoft">
              Snapshot
            </p>
            <h2 className="mt-3 text-lg font-semibold text-white">
              Banking on a Digital-First KSA
            </h2>
            <p className="mt-2 text-xs text-slate-300">
              Explore how Vision 2030, open banking, cloud-native core
              platforms, and real-time payments are transforming the banking
              landscape across Saudi Arabia.
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <dt className="text-brand-muted">Speakers</dt>
                <dd className="mt-1 text-lg font-semibold text-white">40+</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <dt className="text-brand-muted">Attendees</dt>
                <dd className="mt-1 text-lg font-semibold text-white">200+</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <dt className="text-brand-muted">Countries</dt>
                <dd className="mt-1 text-lg font-semibold text-white">15+</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <dt className="text-brand-muted">Senior Decision Makers</dt>
                <dd className="mt-1 text-lg font-semibold text-white">80%</dd>
              </div>
            </dl>

            <p className="mt-4 text-[11px] text-slate-400">
              *All numbers based on previous editions and projected attendance
              for the 2023 KSA edition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
