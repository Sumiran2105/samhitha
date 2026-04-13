import Grading from "../sections/home/Grading";
import Hero from "../sections/home/Hero";
import HowItWorks from "../sections/home/HowItWorks";
import WhatYouGet from "../sections/home/WhatYouGet";
import Testimonials from "../sections/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Testimonials />
      <HowItWorks />
      <Grading />
      <WhatYouGet />
    </>
  );
};

export default Home;
