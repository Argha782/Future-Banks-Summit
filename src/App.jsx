import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import About from "./components/About";
import Themes from "./components/Topics";
import WhyAttend from "./components/WhyAttend";
import Audience from "./components/Audience";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import Partners from "./components/Partners";
import Venue from "./components/Venue";
import Registration from "./components/Registration";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-dark via-slate-950 to-black">
      <Navbar />
      <main className="mt-16 md:mt-20 space-y-24 md:space-y-32">
        <Hero />
        <StatsStrip />
        <About />
        <Themes />
        <WhyAttend />
        <Audience />
        <Agenda />
        <Speakers />
        <Partners />
        <Venue />
        <Registration />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
