import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-5ca4a.firebaseio.com/"
});

export default instance;
