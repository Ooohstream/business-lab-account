import axios from "axios";

const API_URL = 'http://78.142.222.201:5000/api'

export const request = async ({url, method, data ={}, header={}}) => {
    const response = await axios[method](`${API_URL}/${url}`, data, header);
    return response.data
}
