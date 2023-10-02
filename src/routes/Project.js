import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";

const Project = () => {
  return <div>
    <Navbar />
    <HeroImg2 heading='Try Our Model' text="This model classifies thousand's of tweets for you according to 4 main categories: food, electricity. medcine and water for efficient and quick disaster relief management"/>
    <PricingCard />
    <Footer />
  </div>;
};

export default Project;
