import React from "react";
import { Switch, Route } from "react-router-dom";
import OnBoardingViews from "./views/onBoarding/onBoarding";
import CompleteRegistration from "./views/registration/completeRegistration";
import HomeView from "./views/home/homeView/homeView";
import SurveyView from "./views/surveyView/surveyView";
import ReportView from "./views/Reports/report";
import NoticeView from "./views/Notice/notice";
import EventView from "./views/Event/eventView";
import NewsView from "./views/news";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={OnBoardingViews}></Route>
      <Route path="/registration" component={CompleteRegistration}></Route>
      <Route path="/home" component={HomeView}></Route>
      <Route path="/survey" component={SurveyView}></Route>
      <Route path="/report" component={ReportView}></Route>
      <Route path="/notice" component={NoticeView}></Route>
      <Route path="/event" component={EventView}></Route>
      <Route path="/news" component={NewsView}></Route>

      <Route path="/test" component={Test}></Route>
    </Switch>
  );
}

const Test = () => {
  const [value, setvalue] = React.useState(0);
  let text;
  text = value === 5 ? <h3>Magic</h3> : <h3>you clicked {value} times</h3>;

  React.useEffect(() => {
    if (value === 10) {
      setvalue(0);
      document.title = "inital";
    }
  });

  return (
    <>
      <div>Test</div>
      {text}
      <button onClick={() => setvalue(value + 1)}>Test</button>
    </>
  );
};

export default App;
