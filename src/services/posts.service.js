import { request } from '@/services/generic.service';
import axios from 'axios';
const PORT = '8080';

const getPost = (id, token) =>
  request({
    url: `posts/onepost`,
    method: 'get',
    data: { id: id, access_token: token },
  });

//const  getPosts = (token) => request({url: `posts` , method: 'get', headers:{'access_token':token}})

const takePosts = async token => {
  const config = { headers: { access_token: `${token}` }, json: true };
  const getPosts = await axios.get(
    `http://78.142.222.201:${PORT}/api/posts/`,
    config
  );
  console.log(getPosts);
  return getPosts.data.posts;
};

const takePostsfromEnt = async (token, id) => {
  const config = {body:{access_token: `${token}`, 'interprise_id': `${id}`}, json: true}
  const takeP = await axios.post(`http://78.142.222.201:${PORT}/api/posts/getfroment`, config)

  console.log(takeP);
  return takeP.data;
}

export { getPost, takePosts, takePostsfromEnt };
