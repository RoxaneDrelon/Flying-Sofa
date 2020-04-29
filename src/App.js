import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = (props) => {
  const [resource, setResource] = useState("country=DE");

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("country=FR")}>FR</button>
        <button onClick={() => setResource("country=DE")}>DE</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
