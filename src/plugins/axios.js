import axios from "axios";

const _axios = axios.create();
_axios.defaults.baseURL = "https://ccidentifier-rest-api.herokuapp.com";
_axios.defaults.timeout = "20000";
_axios.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("token")}`;

window.$axios = _axios;

export default _axios;
