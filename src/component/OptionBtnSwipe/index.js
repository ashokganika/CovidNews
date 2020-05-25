import React from "react";
import "./style.scss";

export default function OptionBtnSwipe({
  button1,
  button2,
  Button1Component,
  Button2Component,
}) {
  const [defaults, setDefault] = React.useState(true);
  console.log("testttttttttttttt");
  const Swipe = defaults ? <Button2Component /> : <Button1Component />;
  return (
    <div className="wrap">
      <div className="option-button-swipe">
        <div
          className={defaults === false ? "button1 bg" : "button1"}
          onClick={() => setDefault(false)}
        >
          {button1}
        </div>
        <div
          className={defaults === true ? "button2 bg" : "button2"}
          onClick={() => setDefault(true)}
        >
          {button2}
        </div>
      </div>
      {Swipe}
    </div>
  );
}
