import axios from "axios";
require("dotenv").config();

export default {
    addStuff: function (data) {
        console.log('data is');
        console.log(data);
        return axios.post("/api/data", data);
    }

}