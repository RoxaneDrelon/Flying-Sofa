import React from "react";
import axios from "axios";

class WebcamDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webtable: [],
    };
    /*this.getWebtable = this.getWebtable.bind(this);*/
  }

  componentDidMount() {
    this.getWebtable();
  }

  getWebtable() {
    //demande de l'API -- API's request
    const API_KEY = process.env.REACT_APP_API_KEY;
    axios
      .get(
        `https://api.windy.com/api/webcams/v2/list/country=FR/category=beach/orderby=popularity/limit=20?key=${API_KEY}`
      )

      // extrait les data de l'api et l'enregistre dans reponse -- extract datas from API and register the answers
      .then((response) => response.data.result.webcams)

      // utilise le data pour mettre à jour le state -- use data to update the state.
      .then((data) => {
        this.setState({
          webtable: data,
        });
      });
  }

  render() {
    let cam = this.state.webtable;
    return (
      <div>
        <h1>Hello</h1>
        <p>World ?</p>
        {cam.map((webcam, key) => {
          return (
            <div key={key}>
              <p>{webcam.id}</p>
              <p>{webcam.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WebcamDisplay;
