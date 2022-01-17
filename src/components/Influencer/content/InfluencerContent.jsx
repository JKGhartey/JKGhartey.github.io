import React from "react";
import "./influencerContent.css";
import "./responsive.css";
import CallerID from "../../../images/chat-img.png";
import FilterICon from "../../../images/filter-icon.png";

const InfluencerContent = () => {
  return (
    <section className="filter">
      <div className="filter-hero-container">
        <div className="filter-inner-container">
          <div className="call-container">
            <div className="call-wrapper">
              <div className="p-background">
                <div className="incoming-call-background">
                  <div className="incoming-call">
                    <div className="caller">
                      <img src={CallerID} alt="CallerID" />
                      <p>
                        <strong>Femi Adekunle </strong>
                        has paid and requested to you
                      </p>
                    </div>
                    <div className="call-status">
                      <div className="decline">
                        <p>Decline</p>
                      </div>
                      <div className="accept">
                        <p>Accept</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="influencer-space filter">
            <div className="influencer-space-wrapper">
              <div className="section-icon-container influencer">
                <button className="button color"> Influencer</button>
                <img src={FilterICon} alt="FilterIcon" />
              </div>
              <h2>Filter the noise from your dm’s</h2>
              <p>
                Ear1 helps you get rid of all the noise in your dm's across
                other social media apps. This way, you are sure to connect with
                serious people and make genuine business and personal
                connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerContent;
