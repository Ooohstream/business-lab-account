<template>
    <div class="post__card">
        <img :src="imageUrl"/>
        <div class="post__header">
            {{title}}
        </div>
        <div class="post__details">
            {{message}}
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
        message:{
            type: String,
            default: ''
        },
        imageUrl:{
            type: String,
            default: ''
        }
    }
}
</script>