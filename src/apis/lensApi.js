import axios from "axios";

const instance = axios.create({
    baseURL: "https://virtual-market-researcher.herokuapp.com/",
    headers: {
        'Access-Control-Allow-Origin': true,
    }

});

instance.interceptors.request.use(function (config) {

    let datasetId = sessionStorage.getItem('datasetId');
    if (datasetId !== null) {
        config.data.datasetId = datasetId;
    } else {
        config.data.datasetId = '';
    }
    return config;
});

instance.interceptors.response.use(function (response) {

    let datasetId = response?.data?.datasetId;
    if (datasetId !== undefined && datasetId !== '') {
        sessionStorage.setItem('datasetId', datasetId)
    }
    return response;
});

export default instance;