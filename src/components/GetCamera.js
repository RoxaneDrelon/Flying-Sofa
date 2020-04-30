import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const GetCamera = ({ resource }) => {
  const [webcam, setWebcam] = useState({});
  const [countryList, setList] = useState([]);
  const [countryId, setCountryId] = useState("US");
  const [index, setIndex] = useState(0);
  const [nombreCam, setNombreCam] = useState(1);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list?show=countries&key=${API_KEY}`
      )
      .then(({ data }) => {
        setList(data.result.countries);
      });
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=US/limit=1?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        setWebcam(data.result.webcams[0]);
      });
  }, []);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=${countryId}/limit=15000?show=webcams:image,location,player&key=${API_KEY}`
      )
      .then(({ data }) => {
        setNombreCam(data.result.webcams.length);
        const getCam = () => {
          setWebcam(data.result.webcams[index]);
        };
        getCam();
      });
  }, [countryId, index]);

  return (
    <div>
      <ul>
        {webcam.player && (
          <div>
            <p>{webcam.title}</p>
            <iframe
              className='"ui embed"'
              id="myCam"
              title="myCam"
              width="300"
              height="200"
              src={webcam.player.lifetime.embed + "?autoplay=1"}
              allowFullScreen={true}
              alt="webcam"
            />
          </div>
        )}
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
      <div>
        <input
          type="button"
          value="Random !"
          onClick={() =>
            setIndex(Math.floor(Math.random() * Math.floor(nombreCam)))
          }
        />
      </div>
    </div>
  );
};

export default GetCamera;
