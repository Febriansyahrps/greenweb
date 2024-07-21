import React from "react";
import LandingPageHero from "../molecules/LandingPageHero";
import LandingPageEnvirontment from "../molecules/LandingPageEnvirontment";
import LandingPageEcosystem from "../molecules/LandingPageEcosystem";
import LandingPageFeatures from "../molecules/LandingPageFeatures";
import FAQ from "../molecules/FAQ";
import ContactSummary from "../molecules/ContactSummary";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <LandingPageHero />
      <LandingPageEnvirontment />
      <LandingPageEcosystem />
      <LandingPageFeatures />
      <FAQ />
      <ContactSummary />
    </div>
  );
};

export default LandingPage;
