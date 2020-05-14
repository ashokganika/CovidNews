import React from "react";
import moreDetails from "../../assets/images/details.svg";

export default function Registration() {
  return (
    <div className="swipeable">
      <img src={moreDetails} alt="stay updated"></img>
      <div className="gap"></div>
      <h3 className="title">Few More Details</h3>
      <input type="text" placeholder="Phone Number"></input>
      <div className="gap"></div>
      <div className="gap"></div>
      <div className="inputSection">
        <select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
}
