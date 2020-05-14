import React from "react";
import OnBoarding from "../../component/onBoarding/onBoarding";
import OnActionButton from "../../component/onBoarding/onActionButton";

export default function OnBoardingViews({ history }) {
  console.log(history);
  const handleGoogleLogin = () => {
    history.push("/registration");
  };
  return (
    <section className="onBoarding">
      <OnBoarding></OnBoarding>
      <OnActionButton
        text="Login with Google"
        onClick={() => handleGoogleLogin()}
      ></OnActionButton>
    </section>
  );
}
