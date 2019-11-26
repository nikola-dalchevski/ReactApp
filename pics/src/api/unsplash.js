import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 6da2ce30dd5e3c805dc2cea3868756047241200fb7b269ff160448e1e4fbead4"
  }
});
