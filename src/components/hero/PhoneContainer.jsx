import React from "react";
import Phone1 from "../../images/phone1.png";
import Phone2 from "../../images/phone2.png";
import Phone4 from "../../images/phone4.png";

const PhoneContainer = () => {
  return (
    <div className="phone-container active">
      <img src={Phone1} alt="Phone1" />
      <img src={Phone2} alt="Phone2" />
      <img src={Phone4} alt="Phone4" />
    </div>
  );
};

export default PhoneContainer;
