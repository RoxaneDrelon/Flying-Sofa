import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ResourceList = ({ resource }) => {
  const [webcams, setWebcams] = useState([]);
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/${resource}/limit=1?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        console.log(data);
        setWebcams(data.result.webcams);
      });
  }, [resource]);

  return (
    <ul>
      {webcams.map((cam, i) => (
        <div>
          <p>{cam.title}</p>
          <iframe
            className='"ui embed"'
            id="myCam"
            title="myCam"
            width="300"
            height="200"
            src={cam.player.lifetime.embed}
            key={cam}
            alt="webcam"
          />
        </div>
      ))}
    </ul>
  );
};

export default ResourceList;
