import React from "react";
import "./help.css";
import "./responsive.css";
import AboutLogo from "../../images/aboutlogo.png";
import AboutLogo2 from "../../images/aboutlogo2.png";

const HelpSection = () => {
  return (
    <section className="helpSection">
      <div className="main-container">
        <div className="inner-container">
          <div className="help-container">
            <img src={AboutLogo2} alt="" className="aboutlogo2" />
            <h2>What can Ear1 help you do?</h2>
            <p className="pd">
              As you an individual looking to connect with an influencer without
              the hassle of waiting for a reply over a long time, or an
              influencer looking to filter your dm's and connect with your
              audience, Ear1 has got you covered.
            </p>
          </div>
          <div className="about-logo">
            <img src={AboutLogo} alt="aboutLogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
