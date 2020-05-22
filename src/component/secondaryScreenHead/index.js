import React from "react";
import BackArrow from "../../assets/images/arrow_back.svg";
import "./style.scss";

export default function SecondaryScreenHead({
  title,
  icon,
  subTitle,
  color,
  onClick,
}) {
  return (
    <div className="sec-screen-head">
      <div className="gap x2"></div>
      <div className="wrap">
        <div className="back-arrow" onClick={onClick && onClick}>
          <img src={BackArrow} alt=""></img>
        </div>
        <div className="gap x2 "></div>
        <div className="gap x2 "></div>

        <div className="nav-bar flex ci">
          <div className="shape" style={{ background: color }}>
            <img src={icon} className="img-pos" alt=""></img>
          </div>
          <div className="text">
            <p className="title">{title}</p>
            <p className="subtitle">{subTitle}</p>
          </div>
        </div>
      </div>
      <div className="gap x2 "></div>
      <div className="gap x2 "></div>
    </div>
  );
}
