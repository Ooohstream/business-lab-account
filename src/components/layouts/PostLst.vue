<template>
    <div v-if="posts.length != 0">
        <div class="posts__container"  v-for="(post ,key) in posts" :key="key">
            <PostComponent :title="post.title" :content="post.content" :imageUrl="post.imageUrl" />
        </div>
    </div>
    <div v-else>
        <p>Постов нет</p>
    </div>
</template>

<script>
import PostComponent from "../PostComponent"
import {mutations,state,actions,getters} from "../../store/post.store"

export default {
   
    name: 'PostLst',
    props:{
        posts:{
            type: Array,
            default: () => []
        }
    },
    components:{
        PostComponent
    },
    mutations:{
        mutations
    },
    state:{
        state
    },
    actions:{
        actions
    },
    getters:{
        getters
    }
}
</script>