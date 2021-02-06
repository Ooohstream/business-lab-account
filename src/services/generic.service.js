import axios from 'axios';

const PORT = 8080;

const API_URL = `78.142.222.201:${PORT}/api`;

export const request = async ({
  url,
  method,
  data = {},
  headers = { access_token: '' },
}) => {
  const json = true;
  console.log('Headers: ' + headers);
  const response = await axios[method](
    `${API_URL}/${url}`,
    headers,
    data,
    json
  ).json(true);
  return response.data;
};
