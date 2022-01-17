import React from "react";
import Hand from "../../images/hand.png";
import "./advert.css";
import "./responsive.css";
import AppStore from "../../images/Appstore.png";
import PlayStore from "../../images/Playstore.png";

const Advert = () => {
  return (
    <section className="advert">
      <div className="advert-hero-container">
        <div className="advert-inner-container">
          <div className="phone-advert">
            <img src={Hand} alt="Hand" />
            <div className="phone-advert-content">
              <h3>Get ahead of your game</h3>
              <p>Only have high level conversations from now on.</p>
              <div className="advert store">
                <img src={PlayStore} alt="PlayStore" />
                <img src={AppStore} alt="AppStore" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advert;
