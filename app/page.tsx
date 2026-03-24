import AboutSection from "./sections/about";
import HeroSection from "./sections/hero-section";
import Intro from "./sections/intro";
import WhatWeDo from "./sections/what-we-do";
import Banner from "./sections/banner";
import PortfolioSection from "./sections/portfolio";
import BuiltToBelong from "./sections/built";
import Testimonials from "./sections/testimonial";
import CTA from "./sections/cta";
import ContactSection from "./sections/contact";
import Marquee from "./sections/marquee";
const page = () => {
  return (
    <div>
      <HeroSection />
      <Intro />
      <AboutSection />
      <WhatWeDo />
      <Marquee />
      <Banner />
      <PortfolioSection />
      <BuiltToBelong />
      <Testimonials />
      <CTA />
      <ContactSection />
    </div>
  );
};

export default page;
