import axios from "axios";

const Api = axios.create({
    baseURL: "https://refugiosite.herokuapp.com/"
})

export default Api;