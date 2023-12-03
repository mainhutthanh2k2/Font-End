import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8081/",
    timeout: 5000,
    headers: { "X-Custom-Header": "foobar", token: "" },
});

export default instance;
