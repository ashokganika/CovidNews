import React from "react";
import { Switch, Route } from "react-router-dom";
import OnBoardingViews from "./views/onBoarding/onBoarding";
import CompleteRegistration from "./views/registration/completeRegistration";
import HomeView from "./views/home/homeView/homeView";
import SurveyView from "./views/surveyView/surveyView";
import ReportView from "./views/Reports/report";
import NoticeView from "./views/Notice/notice";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={OnBoardingViews}></Route>
      <Route path="/registration" component={CompleteRegistration}></Route>
      <Route path="/home" component={HomeView}></Route>
      <Route path="/survey" component={SurveyView}></Route>
      <Route path="/report" component={ReportView}></Route>
      <Route path="/notice" component={NoticeView}></Route>
    </Switch>
  );
}

export default App;
