import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import List from "./components/List";

export default () => {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Route exact path="/iSense" component={Main} />
      <Route path="/iSense/list" component={List} />
      {/* </Switch> */}
    </BrowserRouter>
  );
};
