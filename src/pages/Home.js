import React, { useState } from "react";
import GetCamera from "../components/GetCamera";

const Home = (props) => {

    const [resource, setResource] = useState("country=DE");

    return (

        <div>
            <GetCamera resource={resource} />
        </div>



    );
}

export default Home;