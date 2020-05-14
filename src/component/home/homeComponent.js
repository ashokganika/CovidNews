import React from "react";
import UserImage from "../../assets/images/avatar-male.png";
import Option from "../../assets/images/more_vert.svg";
import KnowMoreImg from "../../assets/images/know_more.png";
import NepalFlag from "../../assets/images/nepalFlag.png";
import GlobalFlag from "../../assets/images/world.png";
import ArrownBtn from "../../assets/images/arrow_btn.svg";
import StatusBar from "../../component/home/statusBarComponent";
import Color from "../../utils/colors";
import { Link } from "react-router-dom";

const style = {
  textDecoration: "none",
  marginTop: "10px",
  display: "block",
  fontSize: "16px",
  fontWeight: "900",
  color: "dodgerblue",
  textAlign: "center",
};

export const AppBar = ({ user }) => {
  return (
    <div className="appBar">
      <div className="flex jcb ci">
        <div className="left flex">
          <img className="userImgIcon" src={UserImage} alt=""></img>
          <p className="name-text">Hello {user}</p>
        </div>
        <div className="right">
          <img src={Option} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export const StaySafeText = () => {
  return (
    <div className="stay-safe-text">
      <p className="stay-safe">
        Stay Home <br /> Stay Safe
      </p>
    </div>
  );
};

export const BtnIcon = ({ color, text, image, onClick }) => {
  return (
    <div className="icon-btn" onClick={onClick && onClick}>
      <div className="shape" style={{ background: color }}>
        <img src={image} className="img-pos" alt=""></img>
      </div>
      <p className="icon-text">{text && <p>{text}</p>}</p>
    </div>
  );
};

export const KnowMore = () => {
  return (
    <div className="know-more">
      <div className="knowMoreTextButton">
        <p>All you need to know about corona virus!</p>
        <button className="knowMoreBtn">Know More</button>
      </div>
      <div className="illustration">
        <img src={KnowMoreImg} alt=""></img>
      </div>
    </div>
  );
};

export const NepalStatus = () => {
  return (
    <div className="nepal-status">
      <div className="header flex jcb ">
        <div className="left flex jcb">
          <img src={NepalFlag} alt=""></img>
          <div className="nepal-text">
            <p className="nepal-heading">Nepal</p>
            <p className="nepal-updated">Updated: 8 min ago.</p>
          </div>
        </div>
        <div className="right">
          <img src={ArrownBtn} alt=""></img>
        </div>
      </div>
      <div className="gap x2"></div>
      <div className="flex jcb">
        <StatusBar
          keyz="Tested"
          value={134232}
          width="100%"
          color={Color.purple}
        />
        <div className="hgap x2"></div>
        <StatusBar
          keyz="Positive"
          value={248}
          width="15%"
          color={Color.orange}
        />
      </div>
      <div className="flex jcb">
        <StatusBar keyz="Recovered" value={30} width="5%" color={Color.green} />
        <div className="hgap x2"></div>
        <StatusBar keyz="Death" value={0} width="1%" color={Color.red} />
      </div>
      <footer>Source:moph.gov.info</footer>
    </div>
  );
};

export const GlobalStatus = () => {
  return (
    <div className="nepal-status">
      <div className="header flex jcb ">
        <div className="left flex jcb">
          <img src={GlobalFlag} alt=""></img>
          <div className="nepal-text">
            <p className="nepal-heading">Global</p>
            <p className="nepal-updated">Updated: 8 min ago.</p>
          </div>
        </div>
        <div className="right">
          <img src={ArrownBtn} alt=""></img>
        </div>
      </div>
      <div className="gap x2"></div>
      <StatusBar
        keyz="Cases"
        value={4000000}
        width="100%"
        color={Color.purple}
      />
      <StatusBar
        keyz="Recovered"
        value={1000000}
        width="25%"
        color={Color.orange}
      />
      <StatusBar
        keyz="Active"
        value={3000000}
        width="75%"
        color={Color.green}
      />
      <StatusBar keyz="Death" value={300000} width="10%" color={Color.red} />
      <div className="statstics">
        <Link to="/" style={style}>
          Statstics By Country >
        </Link>
      </div>
      <footer>Source:worldcovid.info</footer>
    </div>
  );
};
