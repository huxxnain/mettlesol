import React from "react";
import About from "../About/About";
import Cliens from "../Cliens/Cliens";
import Contact from "../Contact/Contant";
import Contant from "../Contact/Contant";
import CtaSection from "../CtaSection/CtaSection";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Skils from "../Skils/Skils";
import Team from "../Team/Team";

const Main = () => {
  return (
    <main id="main">
      {/* ======= Cliens Section ======= */}
      <Cliens />
      {/* ======= About Us Section ======= */}
      <About />
      {/* ======= Skills Section ======= */}
      <Skils />
      {/* ======= Services Section ======= */}
      <Services />
      {/* ======= Cta Section ======= */}
      <CtaSection />
      {/* ======= Portfolio Section ======= */}
      <Portfolio />
      {/* ======= Team Section ======= */}
      <Team />
      {/* ======= Pricing Section ======= */}
      {/* ======= Contact Section ======= */}
      <Contact />
    </main>
  );
};

export default Main;
