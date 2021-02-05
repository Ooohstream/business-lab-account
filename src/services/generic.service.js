import axios from "axios";

const API_URL = 'http://78.142.222.131/api'

export const request = async ({url, method, data ={}, header={}, body={}}) => {
    const response = await axios[method](`${API_URL}/${url}`, data, header, body);
    return response.data
}
