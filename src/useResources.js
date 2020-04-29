import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resource) => {
  const [resources, setResources] = useState([]);
  const [webcams, setWebcams] = useState([]);
  useEffect(() => {
    (async (resource) => {
      const response = await axios.get(
        `https://api.windy.com/api/webcams/v2/list/${resource}?key=zaVNvGhmGpBQYe2fJhx847nAihRIwVlz`
      );
      console.log(response.data.result.webcams);
      setWebcams(response.data.result.webcams);
    })(resource);
  }, []);

  return webcams;
};

export default useResources;
