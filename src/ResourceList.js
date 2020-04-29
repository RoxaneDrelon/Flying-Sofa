import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [webcams, setWebcams] = useState([]);
  useEffect(() => {
    const response = axios
      .get(`https://api.windy.com/api/webcams/v2/list/${resource}?key={key}`)
      .then(({ data }) => {
        console.log(data);
        setWebcams(data.result.webcams);
      });
  }, [resource]);

  return (
    <ul>
      {webcams.map((cam, i) => (
        <li key={i}>
          id : {cam.id} {cam.status} {cam.title}
        </li>
      ))}
    </ul>
  );
};

export default ResourceList;
