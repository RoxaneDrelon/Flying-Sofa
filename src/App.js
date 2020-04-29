import React, { useState } from "react";
import ResourceList from "./ResourceList";

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
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
