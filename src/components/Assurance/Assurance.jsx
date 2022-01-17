import React from "react";
import "./assurance.css";
import "./responsive.css";
import Phone3 from "../../images/phone3.png";
import { bulletPoints } from "../../data";
import ChainLink from "../../images/chain-link.png"

const Assurance = () => {
  return (
    <section>
      <section className="assurance" id="features">
        <div className="assurance-hero-container">
          <h2 className="assurance-heading">The ear1 assurance.</h2>
          <div className="assurance-inner-container">
            <div className="features-container">
              <div className="features-content-wrapper">
                <div className="bullet-wrapper">
                  <img src={ChainLink} alt="ChainLink" />
                </div>
                <div className="features-content">
                  {bulletPoints.map((point) => (
                    <div key={point.id}>
                      <h3>{point.title} </h3>
                      <p>{point.text} </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="profile-phone">
              <img src={Phone3} alt="Phone3" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Assurance;
