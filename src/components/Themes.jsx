import React from "react";
import SectionWrapper from "./SectionWrapper";

const themes = [
  {
    title: "Open Banking & APIs",
    text: "Building secure, interoperable platforms that enable ecosystem partnerships and embedded finance.",
  },
  {
    title: "Digital Customer Journeys",
    text: "Designing hyper-personalized, end-to-end digital experiences from onboarding to servicing.",
  },
  {
    title: "Next-Gen Payments",
    text: "Real-time rails, instant payments, cross-border remittances, and digital wallets at scale.",
  },
  {
    title: "AI, Data & Analytics",
    text: "Leveraging AI, ML and advanced analytics for risk, fraud, credit, and customer intelligence.",
  },
  {
    title: "Core Modernization & Cloud",
    text: "Transitioning from legacy systems to cloud-native, API-first architectures.",
  },
  {
    title: "Cybersecurity & Compliance",
    text: "Strengthening resilience, meeting regulatory expectations, and protecting customer trust.",
  },
];

const Themes = () => {
  return (
    <section id="themes" className="container py-16 md:py-24 scroll-mt-24">
      <SectionWrapper animation="animate-fadeUp">
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
            className="group rounded-3xl border border-white/10 bg-slate-950/80 p-5 
             hover:border-brand-accent hover:-translate-y-1 hover:shadow-soft
             transition-transform transition-shadow transition-colors duration-300"
          >
            <h3 className="text-sm font-semibold text-white">
              {theme.title}
            </h3>
            <p className="mt-2 text-xs text-slate-300">{theme.text}</p>
          </div>
        ))}
      </div>
      </SectionWrapper>
    </section>
  );
};

export default Themes;
