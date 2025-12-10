import React from "react";
import SectionWrapper from "./SectionWrapper";


const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24 scroll-mt-24">
      <SectionWrapper animation="animate-fadeUp">
      <p className="section-title">About the Summit</p>
      <h2 className="section-heading">
        Powering the next era of digital banking in KSA
      </h2>
      <p className="section-subtitle">
        The 4th Annual Future Banks Summit &amp; Awards – KSA brings together
        senior leaders from banks, regulators, and technology providers to
        explore how digital transformation, open banking frameworks, and new
        payment rails are reshaping the financial services ecosystem in Saudi
        Arabia.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm text-slate-200">
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 hover:scale-105">
          <h3 className="text-sm font-semibold text-white">
            Designed for decision makers
          </h3>
          <p className="mt-2 text-xs text-slate-300">
            CIOs, CTOs, Chief Digital Officers, Heads of Innovation, and
            business leaders shaping the digital roadmap of leading banks and
            financial institutions in the Kingdom.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 hover:scale-105">
          <h3 className="text-sm font-semibold text-white">
            Curated, practical content
          </h3>
          <p className="mt-2 text-xs text-slate-300">
            Use cases, fireside chats, and panel discussions focused on real
            implementations – from cloud-native cores and APIs to AI, data
            analytics, and digital onboarding.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 hover:scale-105">
          <h3 className="text-sm font-semibold text-white">
            Awards & peer recognition
          </h3>
          <p className="mt-2 text-xs text-slate-300">
            Celebrate the banks and fintechs leading innovation in customer
            experience, digital payments, cyber resilience, and operational
            excellence across the region.
          </p>
        </div>
      </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
