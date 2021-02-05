import {getEnt, getEnts} from "@/services/posts.service"


const mutations = {
    setPost(state, ent) {
        state.ent = ent
    },
    setPosts(state, ent) {
        state.ent = ent
    },
    setPostError(state, e) {
        state.entError = e
    }
}

const actions = {
    async fetchEnt({commit}, id, token){
        try{
            const ent = await getEnt(id, token)
            commit('setPost', post)
        }catch(e){
            commit('setPostError', e)
        }
    },
    async fetchEnts({commit}){
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
