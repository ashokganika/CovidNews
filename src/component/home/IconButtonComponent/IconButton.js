import React from "react";
import "./style.scss";

export default function IconButton({ onClose, visible, children }) {
  React.useEffect(() => {
    if (visible) document.body.style.overflowY = "hidden";
  }, [visible]);

  const handleOverlayClose = () => {
    if (onClose) {
      onClose();
      document.body.style.overflowY = "auto";
    }
  };
  return (
    <>
      {visible && (
        <div className="button-sheet">
          <div className="overlay" onClick={() => handleOverlayClose()}></div>
          <div className="content">{children}</div>
        </div>
      )}
    </>
  );
}

export const IconButtonSheet = ({ color, text, icon, onClick }) => {
  return (
    <div className="icon-button-sheet flex jcb ci" onClick={onClick && onClick}>
      <div className="icon-shape flex jcb ci">
        <div className="shape" style={{ background: color }}>
          <img src={icon} alt=""></img>
        </div>
        <p>{text}</p>
      </div>

      <div className="arrow-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.175 7.15833L10 10.975L13.825 7.15833L15 8.33332L10 13.3333L5 8.33332L6.175 7.15833Z"
            fill="#555555"
          />
        </svg>
      </div>
    </div>
  );
};
