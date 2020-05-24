import React from "react";
import SecondaryScreenHead from "../../component/secondaryScreenHead";
import NewsIcon from "../../assets/images/bullhorn.svg";
import Color from "../../utils/colors";
import NewsItem from "./newItem";
import sourceImg from "../../assets/images/ekantipur.jpg";
import newsImage from "../../assets/images/covid.jpg";

export default function NewsView({ history }) {
  return (
    <section className="news-view">
      <SecondaryScreenHead
        title="News"
        subTitle="Updated news and latest news "
        icon={NewsIcon}
        color={Color.orange}
        onClick={() => {
          history.push("/home");
        }}
      />
      <div className="wrap">
        <NewsItem
          sourceImg={sourceImg}
          source="Kantipur"
          time="4 hours ago"
          title="facts and statistics collected together for reference or analysis."
          newsImage={newsImage}
        />
        <NewsItem
          sourceImg={sourceImg}
          source="Kantipur"
          time="4 hours ago"
          title="facts and statistics collected together for reference or analysis."
          newsImage={newsImage}
        />
        <NewsItem
          sourceImg={sourceImg}
          source="Kantipur"
          time="4 hours ago"
          title="facts and statistics collected together for reference or analysis."
          newsImage={newsImage}
        />
        <NewsItem
          sourceImg={sourceImg}
          source="Kantipur"
          time="4 hours ago"
          title="facts and statistics collected together for reference or analysis."
          newsImage={newsImage}
        />
        <NewsItem
          sourceImg={sourceImg}
          source="Kantipur"
          time="4 hours ago"
          title="facts and statistics collected together for reference or analysis."
          newsImage={newsImage}
        />
      </div>
    </section>
  );
}
