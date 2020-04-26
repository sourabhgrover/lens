import axios from "axios";

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://virtual-market-researcher.herokuapp.com/",
    headers: {
        'Access-Control-Allow-Origin': true,
    }

});

