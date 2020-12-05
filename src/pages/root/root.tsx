import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Landing from "src/pages/landing";
import Header from "src/components/header";

//styles
import "./root.scss";

const Root: React.FC = () => {
  return (
    <div className="root">
      <Router>
      <Header />
        <Switch>
          <Route path="/home" component={Landing}></Route>
          <Route path="/" component={Landing}></Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Root;
