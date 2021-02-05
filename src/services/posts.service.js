import {request} from "@/services/generic.service"

const getPost = (id, token) =>  request({url: `posts/${id}` , method: 'get',header:{'token':token}})

const  getPosts = (token) => request({url: `posts` , method: 'get', header:{'token':token}})

export {
    getPost,
    getPosts
}