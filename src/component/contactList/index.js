import React from "react";
import contactImg from "../../assets/images/contactt.svg";
import locationImg from "../../assets/images/location.svg";
import "./style.scss";

export default function ContactList({
  hospitalName,
  phone,
  address,
  hospital,
}) {
  return (
    <div className="contact-list flex jcb ci">
      <div className="left">
        <p className="name">{hospitalName}</p>
        <p className="phone">{phone}</p>
        <p className="address">{address}</p>
      </div>
      <div className="right">
        <img className="contact" src={contactImg} alt=""></img>
        <br />
        {hospital && <img className="location" src={locationImg} alt=""></img>}
      </div>
    </div>
  );
}
