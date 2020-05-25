import React from "react";
import SecondayScreenHead from "../../component/secondaryScreenHead";
import contactImg from "../../assets/images/phone-call.svg";
import Colors from "../../utils/colors";
import OptionBtnSwipe from "../../component/OptionBtnSwipe";
import Hospital from "../../component/contactOption/hospital";
import Emergency from "../../component/contactOption/Emergency";

function ContactView({ history }) {
  return (
    <section className="contact">
      <SecondayScreenHead
        color={Colors.blue}
        title="Contacts"
        subTitle="Useful contacts for all"
        icon={contactImg}
        onClick={() => history.push("/home")}
      />
      <div className="gap x2"></div>
      <OptionBtnSwipe
        button1="Emergency"
        button2="Hospitals"
        Button1Component={Emergency}
        Button2Component={Hospital}
      />
    </section>
  );
}

export default ContactView;
