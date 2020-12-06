import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Landing from "src/pages/landing";
import Stocks from "src/pages/stocks";
import Header from "src/components/header";
import HeaderToggle from "src/components/headerToggle";
import Overlay from "src/components/overlay";

//styles
import "./root.scss";

const Root: React.FC = () => {
  return (
    <div className="root">
      <Router>
        <Header />
        <HeaderToggle />
        <Overlay />
        <Switch>
          <Route path="/home" component={Landing}></Route>
          <Route path="/stocks" component={Stocks}></Route>
          <Route path="/" component={Landing}></Route>
        </Switch>
      </Router>
    </div>
  );
};
export default Root;
