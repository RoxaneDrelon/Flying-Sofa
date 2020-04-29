import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GetCamera = ({ resource }) => {
  const [webcams, setWebcams] = useState([]);
  const [countryList, setList] = useState([]);
  /*const [oneCountry, setOneCountry] = useState({}); ${oneCountry.count}*/
  const [countryId, setCountryId] = useState("FR");

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
    const response2 = axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/${resource}/limit=1?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        console.log("data2", data);
        setWebcams(data.result.webcams);
      });
  }, []);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response3 = axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${countryId}/limit=1?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        console.log("data3", data);
        setWebcams(data.result.webcams);
      });
  }, [countryId]);

  return (
    <div>
      <ul>
        {webcams.map((cam, i) => (
          <div ke={i}>
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
      <select
        className="ui dropdown"
        onChange={(event) => setCountryId(event.target.value)}
      >
        {countryList
          .sort((country1, country2) => {
            return country2.count - country1.count;
          })
          .map((list, i) => (
            <option key={i} value={list.id}>
              {list.name} ({list.count} webcams)
            </option>
          ))}
      </select>
    </div>
  );
};

export default GetCamera;
