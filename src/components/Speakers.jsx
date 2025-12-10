import React from "react";
import SectionWrapper from "./SectionWrapper";

const speakers = [
  {
    name: "Ahmed Al-Farhan",
    title: "Chief Digital Officer, Leading Bank in KSA",
  },
  {
    name: "Sara Al-Harbi",
    title: "Head of Innovation, Regional Bank",
  },
  {
    name: "Mohammed Al-Saadi",
    title: "CIO, Islamic Banking Group",
  },
  {
    name: "Layla Rahman",
    title: "VP, Digital Payments, Global Fintech",
  },
];

const Speakers = () => {
  return (
    <section id="speakers" className="container py-16 md:py-24 scroll-mt-24">
      <SectionWrapper animation="animate-fadeUp">
      <p className="section-title">Featured Speakers*</p>
      <h2 className="section-heading">
        Hear from the leaders shaping banking in KSA
      </h2>
      <p className="section-subtitle">
        Senior executives from leading banks, fintechs, and solution providers
        will share their experience. Below is a representative snapshot.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {speakers.map((sp) => (
          <SectionWrapper animation="animate-fadeUp">
            <article
            key={sp.name}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/10 text-xs font-bold text-brand-accent">
              {sp.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h3 className="mt-3 text-sm font-semibold text-white">
              {sp.name}
            </h3>
            <p className="mt-1 text-[11px] text-slate-300">{sp.title}</p>
          </article>
          </SectionWrapper>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-slate-400">
        *For the technical assignment, speaker details are illustrative. In a
        real project these would be CMS-driven or fetched from an API.
      </p>
      </SectionWrapper>
    </section>
  );
};

export default Speakers;
