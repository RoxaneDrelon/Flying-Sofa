import React, { useState } from "react";
import GetCamera from "./components/GetCamera";
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
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </main>
      <div>
        <button className="ui button" onClick={() => setResource("country=FR")}>
          FR
        </button>
        <button className="ui button" onClick={() => setResource("country=DE")}>
          DE
        </button>
      </div>
      <GetCamera resource={resource} />
    </div>
  );
};

export default App;
