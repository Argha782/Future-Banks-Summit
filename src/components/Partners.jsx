import React from "react";

const categories = [
  {
    title: "Premium Partners",
    items: ["Cloud & Core Banking", "Global Payments Network"],
  },
  {
    title: "Technology Partners",
    items: ["AI & Analytics", "Cybersecurity & Risk", "Digital Onboarding"],
  },
  {
    title: "Supporting Partners",
    items: ["Consulting & Advisory", "Industry Associations"],
  },
];

const Partners = () => {
  return (
    <section id="partners" className="container">
      <p className="section-title">Sponsors & Partners*</p>
      <h2 className="section-heading">
        Enabling innovation across the banking value chain
      </h2>
      <p className="section-subtitle">
        The summit connects banks with global and regional solution providers
        across core banking, payments, CX, analytics, cloud, security, and
        more.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-3xl border border-dashed border-white/15 bg-slate-950/60 p-4"
          >
            <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              {cat.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-slate-400">
        *Logos and final partner line-up would be dynamically managed or loaded
        via configuration in a production deployment.
      </p>
    </section>
  );
};

export default Partners;
