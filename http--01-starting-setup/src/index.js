import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
// axios.defaults.headers.post["Content-Type"] = "application/json";

// interceptor for the request
axios.interceptors.request.use(
  config => {
    console.log(config);
    // its common to use this to add costume headers like the token
    //edit request config
    return config;
  },
  error => {
    // this works only if sending request fails like no internet
    //if request send err status code it will not be executed
    console.log(error);
    return Promise.reject(error);
  }
);

//interceptor for the response
axios.interceptors.response.use(
  config => {
    console.log(config);
    //edit request config
    return config;
  },
  error => {
    // this works only if response has error code
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
