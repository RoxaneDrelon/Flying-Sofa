import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const users = useResources("./users");

  return (
    <ul>
      {users.map((cam) => (
        <li key={cam.id}>{cam.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
