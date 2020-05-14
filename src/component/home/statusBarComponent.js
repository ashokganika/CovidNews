import React from "react";
import "./statusBarComponent.scss";

export default function StatusBarComponent({ color, width, keyz, value }) {
  return (
    <div className="status-bar">
      <div className="key-value flex jcb">
        <p className="key">{keyz}</p>
        <p className="value">{value}</p>
      </div>
      <div className="bar complete"></div>
      <div
        className="bar full"
        style={{ width: width, backgroundColor: color }}
      ></div>
    </div>
  );
}
