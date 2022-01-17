import React from "react";
import "./hero.css";
import "./responsive.css";
import PhoneContainer from "./PhoneContainer";
import Store from "./Store";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <section className="hero">
      <Navbar/>
      <div className="hero-content">
        <h1 className="hero-content-header">
          Build direct, meaninful connections.
        </h1>
        <p className="hero-content-text">
          Ear1 helps you connect directly with your favourite influencers for a
          small fee. What's more? We assure you of getting a reply
        </p>
      </div>
      <Store />
      <PhoneContainer />
    </section>
  );
};

export default HeroSection;
