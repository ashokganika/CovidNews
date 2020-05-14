import React from "react";

export default function OnActionButton({ text, onClick }) {
  return (
    <div className="login-button-component" onClick={onClick && onClick}>
      <div className="login-btn">
        {/* google image */}
        {text}
      </div>
    </div>
  );
}
