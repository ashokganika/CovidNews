import React from "react";
import OnBoarding from "./component/onBoarding/onBoarding";

function App() {
  return (
    <div>
      <OnBoarding />
      <div className="login-button-component">
        <div className="login-btn">
          {/* google image */}
          Login with Google
        </div>
      </div>
    </div>
  );
}

export default App;
