import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route path="/books/:id" component={Detail} />
        <Route component={NoMatch}/>
        
      </Switch>
    </Router>
  );
}

export default App;
