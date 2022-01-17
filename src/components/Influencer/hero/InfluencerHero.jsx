import React from "react";
import "./influencerHero.css";
import "./responsive.css";
import Phone5 from "../../../images/phone5.png";

const InfluencerHero = () => {
  return (
    <section className="earn">
      <div className="influencer-hero-container">
        <div className="phone-content">
          <img src={Phone5} alt="Phone5" />
        </div>
        <div className="space">
          <div className="space-wrapper">
            <div className="section-icon-container influencer">
              <button className="button color"> Influencer</button>
            </div>
            <h2>Earn money while you chat.</h2>
            <p>
              As an influencer, you get paid by your audience to connect with
              them. That way to maximize time while earning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerHero;
