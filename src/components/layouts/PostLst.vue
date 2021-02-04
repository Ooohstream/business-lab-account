<template>
    <div class="posts__if__wrapper" v-if="posts.lenght != 0">
        <div class="posts__container"  v-for="(post ,key) in posts" :key="key">
            <PostComponent :title="post.title" :message="post.message" :imageUrl="post.imageUrl" />
        </div>
    </div>
    <div class="posts__else__wrapper" v-else> 
        <p>Постов нет</p>
    </div>
</template>

<script>
import PostComponent from "@/services/PostComponent"

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
    }
}
</script>