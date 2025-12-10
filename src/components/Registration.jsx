import React, { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  company: "",
  jobTitle: "",
  country: "",
  interest: "Delegate",
};

const Registration = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For assignment: just show a simple confirmation, no backend.
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm(initialForm);
  };

  return (
    <section id="register" className="container">
      <p className="section-title">Register Interest</p>
      <h2 className="section-heading">
        Secure your place at Future Banks Summit &amp; Awards – KSA
      </h2>
      <p className="section-subtitle">
        Please share your details and indicate whether you are interested in
        attending as a delegate, sponsor, or speaker. Someone from the team
        will contact you with next steps.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-xs space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-slate-200 mb-1">Full Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-accent"
                placeholder="e.g. Ahmed Al-Farhan"
              />
            </div>
            <div>
              <label className="block text-slate-200 mb-1">Work Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-accent"
                placeholder="you@bank.com"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-slate-200 mb-1">
                Company / Bank
              </label>
              <input
                required
                name="company"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-accent"
                placeholder="e.g. KSA Bank"
              />
            </div>
            <div>
              <label className="block text-slate-200 mb-1">Job Title</label>
              <input
                required
                name="jobTitle"
                value={form.jobTitle}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-accent"
                placeholder="e.g. Head of Digital"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-slate-200 mb-1">Country</label>
              <input
                required
                name="country"
                value={form.country}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-accent"
                placeholder="e.g. Saudi Arabia"
              />
            </div>
            <div>
              <label className="block text-slate-200 mb-1">
                I&apos;m interested in
              </label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 outline-none focus:border-brand-accent"
              >
                <option>Delegate</option>
                <option>Sponsorship</option>
                <option>Speaking opportunity</option>
                <option>Media partnership</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-accent px-6 py-2.5 text-xs font-semibold text-black shadow-soft hover:bg-emerald-400 transition-colors"
          >
            Submit Registration
          </button>

          {submitted && (
            <p className="mt-3 text-[11px] text-emerald-300">
              Thank you! Your interest has been recorded (front-end only demo).
            </p>
          )}
        </form>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-5 text-xs text-slate-200">
          <h3 className="text-sm font-semibold text-white">
            Who should register?
          </h3>
          <ul className="mt-3 space-y-1.5">
            <li>• Senior leaders from banks &amp; financial institutions</li>
            <li>• Fintechs &amp; technology providers</li>
            <li>• Consulting &amp; advisory firms</li>
            <li>• Regulators &amp; ecosystem enablers</li>
          </ul>

          <h3 className="mt-5 text-sm font-semibold text-white">
            Registration includes
          </h3>
          <ul className="mt-3 space-y-1.5">
            <li>• Access to both days of the summit</li>
            <li>• Networking lunches &amp; coffee breaks</li>
            <li>• Awards evening (for eligible categories)</li>
            <li>• Speaker presentation decks (post-event)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Registration;
