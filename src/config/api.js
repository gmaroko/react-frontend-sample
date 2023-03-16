import axios from "axios";

let configOptions = {
    baseUrl: "http://localhost:5500/"
}
let API = axios.create(configOptions);

export default API;