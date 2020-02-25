import axios from "axios";
import * as config from "../constant/config";

export default function callApi(endPoint,method="GET",body){
    return axios({
        method: method,
        url: `${config.API_URL}/${endPoint}`,
        data: body
    }).catch((err) => {
        console.log(err);
    });
}