import React from "react";
import { ReactComponent as CallIcon } from "../../assets/images/phone-call.svg";

export default function EventItem({ icon, organizer, time, title }) {
  return (
    <div className="event-item">
      <header className="event-header">
        <img src={icon} alt=""></img>
        <div className="organizer">
          <p>{organizer}</p>
        </div>
      </header>
      <div className="wrap">
        <div className="content flex jcb ci">
          <div className="left">
            <div className="time">{time}</div>
            <div className="title">{title}</div>
          </div>
          <div className="right">
            <CallIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
