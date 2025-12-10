import React from "react";

const reasons = [
  {
    title: "Benchmark with peers",
    text: "Hear how leading banks across KSA are prioritizing their digital and innovation roadmaps.",
  },
  {
    title: "Real implementations",
    text: "Case studies across retail, corporate and Islamic banking – not just high-level theory.",
  },
  {
    title: "Meet solution partners",
    text: "Explore technologies across core banking, payments, CX, AI, cloud, and security.",
  },
  {
    title: "Actionable takeaways",
    text: "Leave with frameworks, checklists, and playbooks you can apply immediately.",
  },
];

const WhyAttend = () => {
  return (
    <section id="why-attend" className="container">
      <p className="section-title">Why Attend?</p>
      <h2 className="section-heading">
        A focused platform for banking leaders in KSA
      </h2>
      <p className="section-subtitle">
        Whether you are driving digital transformation, leading technology
        delivery, or reimagining customer journeys, the summit is built to help
        you move faster and with greater confidence.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {reasons.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-4"
          >
            <h3 className="text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-xs text-slate-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyAttend;
