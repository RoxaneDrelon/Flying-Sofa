import React, { useState } from "react";
import GetCamera from "./components/GetCamera";

const App = (props) => {
  const [resource, setResource] = useState("country=DE");

  return (
    <div>
      <GetCamera resource={resource} />
    </div>
  );
};

export default App;
