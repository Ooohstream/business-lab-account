<template>
    <div v-if="posts.length != 0">
        <div class="posts__container"  v-for="(post ,key) in posts" :key="key">
            <PostCard :title="post.title" :content="post.content" :imageUrl="post.imageUrl" />
        </div>
    </div>
</template>
<script>
import PostCard from "@/components/PostCard";

export default {
    name: 'PostLst',
    props:{
        posts:{
            type: Array,
            default: () => []
        },
    },
    components:{
       PostCard
    }
};
</script>