import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   lat: null,
  //   //   errorMessage: ""
  //   // };
  // }
  state = {
    lat: null,
    errorMessage: ""
  };

  //Main Life cycles
  componentDidMount() {
    // called one time whet component is first time called
    //good location for data loading-some thing that we need to use one time
    console.log("did mount");

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  componentDidUpdate() {
    //first is called render method
    //called any time component is updated - state is changed
    //data loading when we need to load every single time component is updated
    console.log("did update");
  }

  componentWillUnmount() {
    // when component is removed from dom
    // ist used for clean up
  }

  //second Life cycles

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()};</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
