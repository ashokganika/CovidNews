import React from "react";
import StatusBarComponent from "../../home/statusBarComponent";
import Colors from "../../../utils/colors";
import LastTenDays from "../../lastTenDays";

export default function GlobalStat() {
  return (
    <>
      <div className="wrap">
        <StatusBarComponent
          color={Colors.blue}
          width="100%"
          keyz="Cases"
          value="4000000"
        />{" "}
        <StatusBarComponent
          color={Colors.purple}
          width="60%"
          keyz="Active Cases"
          value="2500000"
        />
        <StatusBarComponent
          color={Colors.green}
          width="40%"
          keyz="Recovered"
          value="1500000"
        />
        <StatusBarComponent
          color={Colors.blue}
          width="10%"
          keyz="Critical Condition"
          value="400000"
        />
        <StatusBarComponent
          color={Colors.blue}
          width="7%"
          keyz="Death"
          value="300000"
        />
      </div>
      <div className="gap x2"></div>
      <LastTenDays option1="Confirmed" option2="Recovered" option3="Death" />
    </>
  );
}
