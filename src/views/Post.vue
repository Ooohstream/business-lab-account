<template>
    <div class="container">
        <div class="img__block">
            <img :src="imageUrl" />
        </div>
        <div class="post__content">
            <div class="content__header">
                <h1>{{title}}</h1>
                <h3>by: {{author}}</h3>
            </div>
            <div class="content__main">
                <p>{{content}}</p>
            </div>
            <div class="content__footer">
                <button class="btn btn-primary"> ♥ {{likeNumber}}</button>
            </div>
        </div>
        <br>
        <CommentsComponent :postComments="postComments"/>
    </div>
</template>

<script>
import CommentsComponent from "@/components/CommentsComponent"
export default {
    name: "Post",
    props:{
        title:{
            type: String,
            default: ''
        },
        author:{
            type: String,
            default: ''
        },
        content:{
            type: String,
            defult: ''
        },
        likeCount:{
            type: Number,
            default: 0
        },
        postComments:{
            type: Array,
            default: () => []
        },
        imageUrl:{
            type: String,
            default: ''
        }
    },
    components:{
        CommentsComponent
    }
}
</script>