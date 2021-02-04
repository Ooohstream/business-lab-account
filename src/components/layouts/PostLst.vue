<template>
    <div class="posts__wrapper" v-if="posts.lenght != 0">
        <div class="posts__container"  v-for="(post ,key) in posts" :key="key">
            <PostComponent :title="post.title" :message="post.message" :imageUrl="post.imageUrl" />
        </div>
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