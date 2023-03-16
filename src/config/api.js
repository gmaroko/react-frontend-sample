import axios from "axios";

// config options for a base axios instance

let configOptions = {
    baseURL: "http://localhost:5500/"
}
let API = axios.create(configOptions);

export default API;