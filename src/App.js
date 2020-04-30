import React, { useState } from "react";

import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import { Switch, Route } from "react-router-dom";

const App = (props) => {
  const [resource, setResource] = useState("country=DE");

  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
        </Switch>
      </main>

      <button className="ui button" onClick={() => setResource("country=FR")}>
        FR
        </button>
      <button className="ui button" onClick={() => setResource("country=DE")}>
        DE
        </button>
    </div>
  );
};

export default App;
