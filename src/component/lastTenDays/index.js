import React from "react";
import "./style.scss";

export default function LastTenDays({ option1, option2, option3 }) {
  const [swipe, setSwipe] = React.useState(0);
  console.log(swipe);
  return (
    <div className="last-ten-days">
      <div className="secondary-heading">Last 10 Days</div>
      <div className="wrap">
        <div className="options">
          <div
            className={swipe === 0 ? "option1 bg" : "option1"}
            onClick={() => setSwipe(0)}
          >
            {option1}
          </div>
          <div
            className={swipe === 1 ? "option2 bg" : "option2"}
            onClick={() => setSwipe(1)}
          >
            {option2}
          </div>
          <div
            className={swipe === 2 ? "option3 bg" : "option3"}
            onClick={() => setSwipe(2)}
          >
            {option3}
          </div>
        </div>
      </div>
    </div>
  );
}
