import React from "react";
import Registration from "../../component/completeRegistration/registration";
import OnActionButton from "../../component/onBoarding/onActionButton";

export default function CompleteRegistration({ history }) {
  return (
    <section className="registration">
      <Registration />
      <OnActionButton
        text="Complete Registration"
        onClick={() => history.push("/home")}
      ></OnActionButton>
    </section>
  );
}
