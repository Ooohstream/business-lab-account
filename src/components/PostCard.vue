<template>
    <div class="post__card">
        <div class="img__block">
            <img :src="imageUrl"/>
        </div>
        <div class="informaiton__block">
            <div class="post__header">
                <span>{{title}}</span>
            </div>
            <div class="post__details">
                {{content}}
            </div>
            <div class="post__footer">
                <button class="btn btn-primary"> ♥ {{likeNumber}}</button>
            </div>
        </div>
    </div>
</template>

<script>
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
};
</script>