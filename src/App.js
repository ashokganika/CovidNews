import React from "react";
import { Switch, Route } from "react-router-dom";
import OnBoardingViews from "./views/onBoarding/onBoarding";
import CompleteRegistration from "./views/registration/completeRegistration";
import HomeView from "./views/home/homeView/homeView";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={OnBoardingViews}></Route>
      <Route path="/registration" component={CompleteRegistration}></Route>
      <Route path="/home" component={HomeView}></Route>
    </Switch>
  );
}

export default App;
