<template>
    <div class="comments__wrapper" v-if="postComments.length !=0">
        <div class="post__comment" v-for="(comment,key) in postComments" :key="key">
            <div class="author">{{comment.author}}</div>
            <div class="comment__message">{{comment.message}}</div>
        </div>
    </div>
    <div class="comments__else__wrapper" v-else>
        <p>Комментариев нет</p>
    </div>
</template>

<script>
export default {
    name: 'CommentsComponent',
    props:{
        postComments:{
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss">
.comments__wrapper{
    margin-top:20px;
}
</style>