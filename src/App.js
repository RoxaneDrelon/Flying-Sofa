import React, { useState } from "react";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/footer";

const App = (props) => {
  const [resource, setResource] = useState("country=DE");

  return (
    <div className="background">
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/team" component={Team} />
          </Switch>
        </main>
      </div>
      <Footer />
    </div>

  );
};

export default App;
