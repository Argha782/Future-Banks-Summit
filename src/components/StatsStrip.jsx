import React from "react";

const stats = [
  { label: "Days of Insights", value: "2" },
  { label: "Industry Speakers", value: "40+" },
  { label: "Banks & Fintechs", value: "80+" },
  { label: "Networking Meetings", value: "300+" },
];

const StatsStrip = () => {
  return (
    <section className="border-y border-white/5 bg-slate-950/60">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-5 text-xs md:text-sm">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-brand-accentSoft font-semibold text-base md:text-lg">
              {stat.value}
            </span>
            <span className="text-slate-300">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;
