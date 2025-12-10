import React from "react";

const themes = [
  { title: "Corporate Culture & CX Transformation", text: "Top tips to successfully spearhead CX change internally." },
  { title: "Brand Communities & Advocacy", text: "Turn loyal customers into brand advocates." },
  { title: "Hyper-Personalisation", text: "Delivering highly personalized experiences across channels." },
  { title: "Loyalty Programs & Revenue", text: "How loyalty mechanics boost revenue and measurement." },
  { title: "Data, CRM & Automation", text: "Using data and marketing automation to reduce friction." },
  { title: "Omnichannel Strategy", text: "Consistent experience across digital and physical touchpoints." },
];

const Themes = () => {
  return (
    <section id="themes" className="container">
      <p className="section-title">Key Themes</p>
      <h2 className="section-heading">
        What the Future Banks Summit KSA will cover
      </h2>
      <p className="section-subtitle">
        A curated program aligned with the priorities of leading banks in the
        Kingdom – blending strategic insights with hands-on best practices.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {themes.map((theme) => (
          <div
            key={theme.title}
            className="group rounded-3xl border border-white/10 bg-slate-950/80 p-5 hover:border-brand-accent hover:-translate-y-1 transition-all"
          >
            <h3 className="text-sm font-semibold text-white">
              {theme.title}
            </h3>
            <p className="mt-2 text-xs text-slate-300">{theme.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Themes;
