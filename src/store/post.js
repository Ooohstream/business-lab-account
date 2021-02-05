import {getPost, takePosts} from "@/services/posts.service"


const mutations = {
    setPost(state, post) {
        state.post = post
    },
    setPosts(state, posts) {
        state.posts = posts
    },
    setPostError(state, e) {
        state.postError = e
    }
}

const actions = {
    async fetchPost({commit}, id, token){
        try{
            const post = await getPost(id, token)
            commit('setPost', post)
        }catch(e){
            commit('setPostError', e)
        }
    },
    async fetchPosts({commit}, token){
        try{
            console.log("FetchToken: "+token)
            const posts = await takePosts(token)
            commit('setPosts', posts)
        }catch(e){
            commit('setPostError', e)
        }
    }
}

const getters = {
    post: ({post}) => post,
    posts: ({posts})=> posts,
    postError: ({postError})=> postError
}

const state = () => ({
    post: {},
    posts: [],
    postError: null
})


export default {
    state, 
    mutations, 
    actions, 
    getters
}
