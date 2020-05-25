import React from "react";
import SecondaryScreenHead from "../../component/secondaryScreenHead";
import globalImg from "../../assets/images/gloabl.png";
import OptionBtnSwipe from "../../component/OptionBtnSwipe";
import GlobalNews from "../../component/globalOption/news";
import GlobalStat from "../../component/globalOption/stats";

export default function GloablInfo({ history }) {
  return (
    <section className="global">
      <SecondaryScreenHead
        icon={globalImg}
        title="Global"
        subTitle="Latest Corona Update"
        onClick={() => history.push("/home")}
      />
      <OptionBtnSwipe
        button1="News"
        button2="Statstics"
        Button1Component={GlobalNews}
        Button2Component={GlobalStat}
      />
    </section>
  );
}
