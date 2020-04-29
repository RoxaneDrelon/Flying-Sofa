import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GetCamera = ({ resource }) => {
  const [webcams, setWebcams] = useState([]);
  const [countryList, setList] = useState([]);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = axios
      .get(
        `https://api.windy.com/api/webcams/v2/list?show=countries&key=${API_KEY}`
      )
      .then(({ data }) => {
        console.log("data1", data.result.countries);
        setList(data.result.countries);
      });
  }, []);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/${resource}/limit=1?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        console.log("data2", data);
        setWebcams(data.result.webcams);
      });
  }, [resource]);

  return (
    <div>
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
      <label>Pick a country </label>
      <select ui dropdown>
        {countryList
          .sort((country1, country2) => {
            return country2.count - country1.count;
          })
          .map((list, i) => (
            <option key={i}>
              {list.name} ({list.count} webcams)
            </option>
          ))}
      </select>
    </div>
  );
};

export default GetCamera;
