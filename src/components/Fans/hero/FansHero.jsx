import React from "react";
import "./fansHero.css";
import "./responsive.css";
import Person1 from "../../../images/person1.png";
import Person2 from "../../../images/person2.png";
import Person3 from "../../../images/person3.jpg";
import Person4 from "../../../images/person4.jpg";
import Person5 from "../../../images/person5.jpg";

const FansHero = () => {
  return (
    <section className="FansHero" id="fans">
      <div className="fans-container">
        <div className="fans-inner-container">
          <div className="space">
            <div className="section-icon-wrapper">
              <button className="button">Fans</button>
            </div>
            <h2 className="space-head">Connect with top influencers in your field</h2>
            <p>
              From Tech to music to business, Ear1 has a wide range of industry
              experts in diverse fields you have always wanted to connect with.
              Now is your best chance.
            </p>
          </div>
          <div className="fans-img-wrapper">
            <div className="fan-img">
              <img src={Person5} alt="Person5" />
              <img src={Person4} alt="Person4" />
              <img src={Person3} alt="Person3" />
              <img src={Person2} alt="Person2" />
              <img src={Person1} alt="Person1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FansHero;
