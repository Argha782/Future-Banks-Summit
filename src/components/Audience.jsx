import React from "react";

const audienceGroups = [
  {
    title: "Technology & Innovation",
    roles: [
      "CIOs, CTOs, CDOs",
      "Heads of Digital & Innovation",
      "Heads of IT Architecture",
      "Heads of Cloud & Infrastructure",
    ],
  },
  {
    title: "Business & Product",
    roles: [
      "Chief Retail Banking Officers",
      "Heads of SME & Corporate Banking",
      "Heads of Payments & Cards",
      "Heads of Wealth & Private Banking",
    ],
  },
  {
    title: "Risk, Compliance & Security",
    roles: [
      "CROs & CISOs",
      "Heads of Operational Risk",
      "Heads of Cybersecurity",
      "Regulatory & Compliance Leaders",
    ],
  },
  {
    title: "Ecosystem Partners",
    roles: [
      "Fintech Founders & Product Leaders",
      "Technology Providers & Integrators",
      "Consulting & Advisory Firms",
      "Regulators & Industry Bodies",
    ],
  },
];

const Audience = () => {
  return (
    <section id="audience" className="container">
      <p className="section-title">Who Will Attend?</p>
      <h2 className="section-heading">
        Decision-makers across KSA’s banking ecosystem
      </h2>
      <p className="section-subtitle">
        The summit is carefully curated for senior leaders responsible for
        defining and executing the digital agenda of their institutions.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        {audienceGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-3xl border border-white/10 bg-slate-950/70 p-4"
          >
            <h3 className="text-sm font-semibold text-white">{group.title}</h3>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
              {group.roles.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Audience;
