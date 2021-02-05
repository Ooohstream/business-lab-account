import Vuex from 'vuex';
import post from "@/store/post";
import ent from "@/store/enterprise"

export default new Vuex.Store({
    modules:{
        post,
        ent
    }
})