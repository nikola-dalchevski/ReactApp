import axios from "axios";

const axioss = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

axioss.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

export default axioss;
