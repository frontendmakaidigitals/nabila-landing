import AboutSection from "./sections/about";
import HeroSection from "./sections/hero-section";
import Intro from "./sections/intro";
import WhatWeDo from "./sections/what-we-do";
import Banner from "./sections/banner";
import PortfolioSection from "./sections/portfolio";
import BuiltToBelong from "./sections/built";
const page = () => {
  return (
    <div>
      <HeroSection />
      <Intro />
      <AboutSection />
      <WhatWeDo />
      <Banner />
      <PortfolioSection />
      <BuiltToBelong />
    </div>
  );
};

export default page;
