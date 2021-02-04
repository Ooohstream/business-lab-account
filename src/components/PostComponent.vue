<template>
    <div class="post__card">
        <img :src="imageUrl"/>
        <div class="post__header">
            {{title}}
        </div>
        <div class="post__details">
            {{content}}
        </div>
    </div>
    <div class="post__comments">
        <CommentsComponent :postComments="postComments"/>
    </div>
</template>

<script>
import CommentsComponent from "@/services/CommentsComponent"
export default {
    name: 'PostCard',
    props:{
        title:{
            type: String,
            default: ''
        },
        content:{
            type: String,
            default: ''
        },
        imageUrl:{
            type: String,
            default: ''
        },
        likeNumber:{
            type: Number,
            default: 0
        },
        postComments:{
            type: Array,
            default: () => []
        }
    },
    components:{
        CommentsComponent
    }
}
</script>