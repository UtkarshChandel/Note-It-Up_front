import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import StudentHome from "./components/Student-Home";
import SubjectListItem from "./components/Subject-List-Item";
import TLDR from "./components/TLDR";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/student" exact component={StudentHome} />
          <Route path="/student/tldr" exact component={TLDR} />
          {/* <Route path="/quiz" exact component={QuizPage} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
