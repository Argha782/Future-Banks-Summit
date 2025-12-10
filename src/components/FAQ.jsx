import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
const faqs = [
  {
    q: "Is this a physical or virtual event?",
    a: "Future Banks Summit & Awards – KSA is planned as a fully in-person event in Riyadh.",
  },
  {
    q: "Who can attend?",
    a: "Attendance is primarily for banking and financial services professionals, technology providers, regulators, and ecosystem partners.",
  },
  {
    q: "Will I receive the full agenda?",
    a: "Yes. Once your registration is confirmed, you will receive the detailed program, including speakers and session timings.",
  },
  {
    q: "Can I sponsor the event?",
    a: "Yes, there are multiple sponsorship tiers available. Select 'Sponsorship' in the registration form and our team will contact you.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="container py-16 md:py-24 scroll-mt-24">
      <SectionWrapper animation="animate-fadeUp">
      <p className="section-title">FAQ</p>
      <h2 className="section-heading">
        Frequently asked questions about the summit
      </h2>

      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-xs">
        {faqs.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.q} className="border-b border-white/5 last:border-none">
              <button
                onClick={() => setOpenIndex(open ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 py-3 text-left"
              >
                <span className="font-medium text-slate-100">{item.q}</span>
                <span className="text-lg text-brand-accent">
                  {open ? "−" : "+"}
                </span>
              </button>
              {open && (
                <p className="pb-3 text-slate-300">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
      </SectionWrapper>
    </section>
  );
};

export default FAQ;
