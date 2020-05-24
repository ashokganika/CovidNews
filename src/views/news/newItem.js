import React from "react";

export default function NewsItem({
  sourceImg,
  source,
  title,
  time,
  newsImage,
}) {
  return (
    <div className="news-item flex jcb ci">
      <div className="left">
        <header className="flex ci">
          <img src={sourceImg} alt=""></img>
          <div className="title-time">
            <div className="title">{source}</div>
            <div className="time">{time}</div>
          </div>
        </header>
        <p className="desc">{title}</p>
      </div>
      <div className="right">
        <img src={newsImage} alt=""></img>
      </div>
    </div>
  );
}
