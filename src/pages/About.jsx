import AboutHero from "../sections/about/AboutHero";
import Founder from "../sections/about/Founder";
import FounderMessage from "../sections/about/FounderMessage";
import Problem from "../sections/home/Problem";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <Founder />
      <FounderMessage />
      
    </div>
  );
};

export default About;
