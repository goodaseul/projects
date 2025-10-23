import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://learn.codeit.kr/api/codeitmall/",
});

export default axiosClient;
