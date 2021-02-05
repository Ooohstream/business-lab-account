import axios from "axios";

const API_URL = 'http://efb13b1f15f6.ngrok.io:80/api'

export const request = async ({url, method, data ={} , headers={'access_token':''}}) => {
    const json = true
    console.log("Headers: "+ headers)
    const response = await axios[method](`${API_URL}/${url}`,  headers, data, json).json(true);
    return response.data
}
