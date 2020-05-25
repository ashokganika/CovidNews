import React from "react";
import Icon from "../../../assets/images/arrow_btn.svg";
import "./style.scss";

const newsItem = [
  " Department of Road is doing a very good utilization of lockdown by repairing, maintaining & marking all the roads inside Kathmandu valley.",
  "COVID-19 ko 9th case vetiyesi next 3 days (hijo evening) samma vayeko sabai (new 232) sample test ko result negative ayeko chha. ",
  "COVID-19 ko 9th case vetiyesi next 3 days (hijo evening) samma vayeko sabai (new 232) sample test ko result negative ayeko chha. ",
];

export default function NepalNews() {
  const item = newsItem.map((newitem, i) => (
    <NewsList news={newitem} key={i} />
  ));
  return (
    <div className="nepal-news">
      <div className="secondary-heading">5th April, 2020</div>
      {item}
      <div className="secondary-heading">4th April, 2020</div>
      {item}
    </div>
  );
}

export const NewsList = (props) => {
  return (
    <div className="news-list flex jcb ci">
      <div className="left flex">
        <div className="shape"></div>
        <div className="news">{props.news}</div>
      </div>
      <div className="icon">
        <img src={Icon} alt=""></img>
      </div>
    </div>
  );
};
