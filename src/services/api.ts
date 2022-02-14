import axios from "axios";

const api = axios.create({
  baseURL: "https://thingproxy.freeboard.io/fetch/http://18.118.129.38/api/",
});

export default api;