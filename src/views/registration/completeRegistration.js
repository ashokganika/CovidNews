import React from "react";
import Registration from "../../component/completeRegistration/registration";
import OnActionButton from "../../component/onBoarding/onActionButton";

export default function CompleteRegistration() {
  return (
    <section className="registration">
      <Registration />
      <OnActionButton text="Complete Registration"></OnActionButton>
    </section>
  );
}
