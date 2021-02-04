import {request} from "@/services/generic.service"

const getPost = (id) =>  request({url: `posts/${id}` , method: 'get'})

const  getPosts = () => request({url: `posts` , method: 'get'})

export {
    getPost,
    getPosts
}