import React, { useState } from "react";
import GetCamera from "./components/GetCamera";

const App = (props) => {
  const [resource, setResource] = useState("country=DE");

  return (
    <div>
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
