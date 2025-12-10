import React from "react";

const Venue = () => {
  return (
    <section id="venue" className="container">
      <p className="section-title">Venue & Format</p>
      <h2 className="section-heading">
        Hosted in the heart of Riyadh&apos;s financial district
      </h2>
      <p className="section-subtitle">
        The summit is designed as an in-person, high-touch experience with
        curated networking, private meetings, and an exclusive awards gala.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.3fr_1fr] text-sm">
        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-white">Event Details</h3>
          <dl className="mt-4 space-y-3 text-xs text-slate-200">
            <div className="flex gap-3">
              <dt className="w-24 text-brand-muted">Dates</dt>
              <dd>11–12 September 2023</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 text-brand-muted">Location</dt>
              <dd>Riyadh, Kingdom of Saudi Arabia</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 text-brand-muted">Format</dt>
              <dd>2-day summit &amp; awards gala</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-24 text-brand-muted">Audience</dt>
              <dd>Banking &amp; financial services leadership</dd>
            </div>
          </dl>

          <p className="mt-4 text-xs text-slate-300">
            The program is designed to maximize meaningful connections between
            banks and solution providers through structured networking
            sessions, roundtables, and dedicated meeting areas.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-5">
          <h3 className="text-sm font-semibold text-white">At a glance</h3>
          <ul className="mt-4 space-y-2 text-xs text-slate-300">
            <li>• Strategic keynotes &amp; thought leadership</li>
            <li>• Parallel content tracks for business &amp; technology</li>
            <li>• Curated one-to-one meetings</li>
            <li>• Exclusive awards &amp; gala evening</li>
          </ul>

          <p className="mt-4 text-[11px] text-slate-400">
            *Exact venue details are typically confirmed closer to the event
            date and shared with registered attendees.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Venue;
