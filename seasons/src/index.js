import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );
    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
