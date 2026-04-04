import AboutHero from "../sections/about/AboutHero";
import Founder from "../sections/about/Founder";
import FounderMessage from "../sections/about/FounderMessage";
import Problem from "../sections/home/Problem";
import Solution from "../sections/home/Solution";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <Founder />
      <FounderMessage />
      <Problem />
      <Solution />
    </div>
  );
};

export default About;