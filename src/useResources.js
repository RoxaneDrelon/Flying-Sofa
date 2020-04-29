import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [webcams, setWebcams] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `https://api.windy.com/api/webcams/v2/list/${resource}?key=${API_KEY}`
      );
      console.log(response.data.result.webcams);
      setWebcams(response.data.result.webcams);
    })(resource);
  }, []);

  return webcams;
};

export default useResources;
