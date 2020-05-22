import React from "react";
import SecondaryScreenHead from "../../component/secondaryScreenHead";
import ReportIcon from "../../assets/images/report.svg";
import colors from "../../utils/colors";
import TextDetail from "../../component/textDeatils";

export default function ReportView({ history }) {
  return (
    <section className="survey">
      <SecondaryScreenHead
        title="Report"
        subTitle="Report us your problems"
        icon={ReportIcon}
        color={colors.orange}
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
