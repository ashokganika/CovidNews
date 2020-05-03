import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import stayUpdated from "./../../assets/images/stay_updated.svg";
import stayAlert from "./../../assets/images/stay_alert.svg";
import readNews from "./../../assets/images/read_news.svg";

export default function OnBoarding() {
  const [index, setIndex] = useState(0);

  const handleChange = (index) => {
    setIndex(index);
  };

  const Item = (props) => {
    return (
      <div className="swipeable">
        <img src={props.image} alt="stay updated"></img>
        <div className="gap"></div>
        <h3 className="title">{props.title}</h3>
        <p className="desc">{props.desc}</p>
      </div>
    );
  };
  return (
    <div className="swipeableViews">
      <SwipeableViews index={index} onChangeIndex={handleChange}>
        <Item
          image={stayUpdated}
          title="Stay Updated"
          desc="Loreum Epsum main t init tj ttrh dgsasjg..."
        ></Item>
        <Item
          image={stayAlert}
          title="Stay Alert"
          desc="Loreum Epsum main t init tj ttrh dgsasjg..."
        ></Item>
        <Item
          image={readNews}
          title="Read News"
          desc="Loreum Epsum main t init tj ttrh dgsasjg..."
        ></Item>
      </SwipeableViews>
      <div className="pagination">
        <div className={`dot ${index === 0 && "active"}`}></div>
        <div className={`dot ${index === 1 && "active"}`}></div>
        <div className={`dot ${index === 2 && "active"}`}></div>
      </div>
    </div>
  );
}
