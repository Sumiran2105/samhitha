import AboutHero from "../sections/about/AboutHero";
import Founder from "../sections/about/Founder";
import FounderMessage from "../sections/about/FounderMessage";
import WhatMakesUsDifferent from "../sections/about/WhatMakesUsDifferent";
import WhySamhithaExists from "../sections/about/WhySamhithaExists";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      
      <Founder />
      <FounderMessage />
      <WhySamhithaExists />
      <WhatMakesUsDifferent />
    </div>
  );
};

export default About;
