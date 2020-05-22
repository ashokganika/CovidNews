import React from "react";
import SecondaryScreenHead from "../../component/secondaryScreenHead";
import NoticeIcon from "../../assets/images/notice.png";
import colors from "../../utils/colors";
import TextDetail from "../../component/textDeatils";

export default function ReportView({ history }) {
  return (
    <section className="survey">
      <SecondaryScreenHead
        title="Notice"
        subTitle="Notice about different cases"
        icon={NoticeIcon}
        color={colors.red}
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
