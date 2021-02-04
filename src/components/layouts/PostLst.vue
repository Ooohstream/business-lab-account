<template>
    <div class="posts__container" v-for="(post ,key) in posts" :key="key">
        <PostComponent :title="post.title" :message="post.message" :imageUrl="post.imageUrl" />
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