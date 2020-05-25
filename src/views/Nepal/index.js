import React from "react";
import SecondaryScreenHead from "../../component/secondaryScreenHead";
import OptionBtnSwipe from "../../component/OptionBtnSwipe";
import NepalImg from "../../assets/images/nepal.png";
import NepalStat from "../../component/NepalOption/Statstics";
import NepalNews from "../../component/NepalOption/News";

export default function Nepal({ history }) {
  return (
    <section className="nepal">
      <SecondaryScreenHead
        title="Nepal"
        subTitle="Latest Corona Update"
        icon={NepalImg}
        onClick={() => history.push("/home")}
      />
      <OptionBtnSwipe
        button1="News"
        button2="Statstics"
        Button1Component={NepalNews}
        Button2Component={NepalStat}
      />
    </section>
  );
}
