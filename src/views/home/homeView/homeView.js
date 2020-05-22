import React from "react";
import contactImg from "../../../assets/images/phone-call.svg";
import NewsImg from "../../../assets/images/Group.svg";
import ChatImg from "../../../assets/images/message.svg";
import MoreImg from "../../../assets/images/bullhorn.svg";
import Events from "../../../assets/images/Group.svg";
import colors from "../../../utils/colors";
import IconButton, {
  IconButtonSheet,
} from "../../../component/home/IconButtonComponent/IconButton";
import {
  AppBar,
  StaySafeText,
  BtnIcon,
  KnowMore,
  NepalStatus,
  GlobalStatus,
} from "../../../component/home/homeComponent";

export default function HomeView({ history }) {
  const [visible, setVisibility] = React.useState(false);

  const handleContact = () => {
    history.push("/registration");
  };

  return (
    <section className="home-view">
      <IconButton visible={visible} onClose={() => setVisibility(false)}>
        <IconButtonSheet color={colors.purple} text="Events" icon={Events} />
        <IconButtonSheet
          color={colors.yellow}
          text="Survey"
          icon={Events}
          onClick={() => history.push("/survey")}
        />
        <IconButtonSheet
          color={colors.blue}
          text="Reports"
          icon={Events}
          onClick={() => history.push("/report")}
        />
        <IconButtonSheet
          color={colors.green}
          text="Notice"
          icon={Events}
          onClick={() => history.push("/notice")}
        />
      </IconButton>
      <div className="wrap">
        <AppBar user="Guest" />
        <StaySafeText />
        <div className="flex jcb">
          <BtnIcon
            color={colors.blue}
            text="Contacts"
            image={contactImg}
            onClick={() => handleContact()}
          />
          <BtnIcon
            color={colors.orange}
            text="News"
            image={MoreImg}
            onClick={() => handleContact()}
          />
          <BtnIcon
            color={colors.purple}
            text="Chat"
            image={ChatImg}
            onClick={() => handleContact()}
          />
          <BtnIcon
            color={colors.yellow}
            text="More"
            image={NewsImg}
            onClick={() => setVisibility(true)}
          />
        </div>
        <div className="gap x2 "></div>
        <KnowMore />
        <div className="gap x2 "></div>
        <div className="gap x2 "></div>
        <NepalStatus />
        <div className="gap x2 "></div>
        <div className="gap x2 "></div>
        <GlobalStatus />
        <div className="gap x2 "></div>
      </div>
    </section>
  );
}
