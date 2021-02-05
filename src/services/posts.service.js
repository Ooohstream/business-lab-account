import { request } from '@/services/generic.service';
import axios from 'axios';

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
    'http://78.142.222.201:80/api/posts/',
    config
  );
  console.log(getPosts);
  return getPosts.data.posts;
};

export { getPost, takePosts };
