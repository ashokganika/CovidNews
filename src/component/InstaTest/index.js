import React from "react";
import "./style.scss";

export default function InstaTest({ seen, onClose }) {
  React.useEffect(() => {
    if (seen) document.body.style.overflow = "hidden";
  });
  const handleChangeSeen = () => {
    if (onClose) {
      onClose();
      document.body.style.overflow = "auto";
    }
  };
  return (
    <>
      {seen && (
        <div className="seen">
          <div className="transparent" onClick={() => handleChangeSeen()}></div>
          <div className="content">
            <div className="op bg bd">Report User</div>
            <div className="op bg bd">Unfollow</div>
            <div className="op bd">Go to post</div>
            <div className="op bd">Share</div>
            <div className="op">Copy Link</div>
          </div>
        </div>
      )}
    </>
  );
}
