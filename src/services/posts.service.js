import {request} from "@/services/generic.service"

const getPost = (id, token) =>  request({url: `posts/onepost` , method: 'get',header:{'token':token}, body:{'id':id}})

const  getPosts = (token) => request({url: `posts/` , method: 'get', header:{'token':token}})

export {
    getPost,
    getPosts
}