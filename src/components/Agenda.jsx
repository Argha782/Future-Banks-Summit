import React, { useState } from "react";

const days = {
  "Day 1": [
    {
      time: "09:00 – 09:30",
      title: "Opening keynote: Banking in the era of Vision 2030",
    },
    {
      time: "09:30 – 10:15",
      title: "Panel: Digital transformation roadmaps across KSA banks",
    },
    {
      time: "11:00 – 11:30",
      title: "Case study: Cloud-native core modernization in practice",
    },
    {
      time: "14:00 – 15:00",
      title: "Track sessions on open banking, APIs, and partnerships",
    },
  ],
  "Day 2": [
    {
      time: "09:00 – 09:30",
      title: "Fireside chat: Building AI-first banking experiences",
    },
    {
      time: "10:00 – 11:00",
      title: "Panel: Future of payments and real-time rails in KSA",
    },
    {
      time: "13:30 – 14:30",
      title: "Roundtables: CX, cyber, and digital onboarding",
    },
    {
      time: "19:00 – 21:00",
      title: "Future Banks Awards ceremony & gala dinner",
    },
  ],
};

const Agenda = () => {
  const [active, setActive] = useState("Day 1");

  return (
    <section id="agenda" className="container">
      <p className="section-title">Agenda Highlights</p>
      <h2 className="section-heading">
        Two days of content, conversations, and recognition
      </h2>
      <p className="section-subtitle">
        The full program includes keynotes, panels, case studies, roundtables,
        and the Future Banks Awards ceremony. Below is a snapshot of what to
        expect.
      </p>

      <div className="mt-7 rounded-3xl border border-white/10 bg-slate-950/80 p-5">
        <div className="flex gap-3 rounded-full bg-slate-900/80 p-1 w-fit">
          {Object.keys(days).map((day) => (
            <button
              key={day}
              onClick={() => setActive(day)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                active === day
                  ? "bg-brand-accent text-black"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <ul className="mt-5 divide-y divide-white/5 text-xs md:text-sm">
          {days[active].map((session) => (
            <li
              key={session.time + session.title}
              className="flex flex-col gap-2 py-3 md:flex-row md:items-center"
            >
              <span className="w-32 shrink-0 font-mono text-[11px] text-brand-accentSoft">
                {session.time}
              </span>
              <span className="font-medium text-slate-100">
                {session.title}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[11px] text-slate-400">
          *Full agenda with speakers, tracks, and session details will be shared
          with confirmed participants.
        </p>
      </div>
    </section>
  );
};

export default Agenda;
