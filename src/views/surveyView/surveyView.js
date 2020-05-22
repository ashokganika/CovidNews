import React from "react";
import SecondaryScreenHead from "../../component/secondaryScreenHead";
import SurveyIcon from "../../assets/images/survey.svg";
import colors from "../../utils/colors";
import TextDetail from "../../component/textDeatils";

export default function SurveyView({ history }) {
  return (
    <section className="survey">
      <SecondaryScreenHead
        title="Survey"
        subTitle="Help us filling the form"
        icon={SurveyIcon}
        color={colors.purple}
        onClick={() => history.push("/home")}
      />
      <div className="wrap">
        <TextDetail text="Protocols when entering home" />
        <TextDetail text="Protocols when entering home" />
        <TextDetail text="Protocols when entering home" />
        <TextDetail text="Protocols when entering home" />
        <TextDetail text="Protocols when entering home" />
      </div>
    </section>
  );
}
