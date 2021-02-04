import {getPost, getPosts} from "@/services/posts.service"


const state = () => ({
    post: {},
    posts: [],
    postError: null
})

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
    async fetchPost({commit}, id){
        try{
            const post = await getPost(id)
            commit('setPost', post)
        }catch(e){
            commit('setPostError', e)
        }
    },
    async fetchPosts({commit}){
        try{
            const posts = await getPosts()
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


export default {
    mutations,
    state,
    actions,
    getters
}