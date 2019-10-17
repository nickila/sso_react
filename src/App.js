import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Results from "./pages/Results";
import NoMatch from "./pages/NoMatch";
// import Data from "./pages/Data";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/results" component={Results} />
                {/*<Route exact path="/data" component={Data} />*/}
                <Route component={NoMatch} />
              </Switch>
          </div>
        </Router>
    );
  }
}

export default App;