<template>
    <div class="post__card">
        <div class="img__block">
            <img :src="imageUrl"/>
        </div>
        <div class="informaiton__block">
            <div class="post__header">
                <h1>{{title}}</h1>
            </div>
            <div class="post__details">
                <p>{{content}}</p>
            </div>
            <div class="post__footer">
                
                <button class="btn btn-primary" id="about"> Подробнее  </button>
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