import React from "react";
import StatusBarComponent from "../../home/statusBarComponent";
import Colors from "../../../utils/colors";
import LastTenDays from "../../lastTenDays";

export default function NepalStat() {
  return (
    <>
      <div className="wrap">
        <StatusBarComponent
          color={Colors.blue}
          width="100%"
          keyz="Tested"
          value="134232"
        />
        <StatusBarComponent
          color={Colors.orange}
          width="20%"
          keyz="Positive"
          value="1000"
        />
        <StatusBarComponent
          color={Colors.green}
          width="10%"
          keyz="Recovered"
          value="100"
        />
        <StatusBarComponent
          color={Colors.purple}
          width="15%"
          keyz="Isolation"
          value="150"
        />
        <StatusBarComponent
          color={Colors.red}
          width="3%"
          keyz="Death"
          value="3"
        />
      </div>
      <div className="gap x2"></div>
      <LastTenDays option1="Positive" option2="Recovered" option3="Death" />
    </>
  );
}
