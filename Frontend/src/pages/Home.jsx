import React from "react";
import Hero from "../components/Home/Hero.jsx";
import CampusToCubicle from "../components/Home/CampusToCubicle.jsx";
import About from "../components/Home/About.jsx";
import WhyChooseTalentConnect from "../components/Home/WhyChooseTalentConnect.jsx";
import OurServices from "../components/Home/OurService.jsx";
import SuccessStories from "../components/Home/SuccessStories.jsx";
import ReadyToTransform from "../components/Home/ReadyToTransform.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <CampusToCubicle />
      <About />
      <WhyChooseTalentConnect />
      <OurServices />
      <SuccessStories />
      <ReadyToTransform />
      {/* Your other page components or routes can go here */}
    </>
  );
};

export default Home;
