<template>
    <div class="container">
        <div class="content__head">
            <div class="img__block">
                <img src="@/assets/logo.png">
            </div>
            <div class="content__header">
                <h1>Lorem ipsum{{title}}</h1>
                <h3>by: Sigarachi{{author}}</h3>
            </div>
        </div>
        <div class="post__content">
            <div class="content__main">
                <p>{{content}}
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dignissimos quae, non mollitia, nulla provident et explicabo voluptas, exercitationem consequuntur dolore quia alias natus aliquid deleniti amet cumque eaque voluptate?
                </p>
            </div>
            <hr />

            <div class="content__footer">
                <button class="btn btn-primary"> ♥ {{likeCount}}</button>
                Понравилась запись? Продвинь её в топ!
            </div>
            
            <CommentsComponent :postComments="postComments"/>
        </div>
        <br>
        
    </div>
</template>

<script>
import CommentsComponent from "@/components/CommentsComponent"
import {mapGetters, mapActions} from "vuex";
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
            default: '@/assets/logo.png'
        }
    },
    mounted(){
        this.fetchPost(this.$route.params.id)
    },
    components:{
        CommentsComponent
    },
    computed:{
        ...mapGetters({
            post: "post"
        })
    },
    methods:{
        ...mapActions({
            fetchPost: "fetchPost"
        })
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

.container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    padding-top: 70px;
    left: 10%;
    width: 50%;
    display: block;
    justify-content: space-between;
    .img__block{
        width: 30%;
        margin-top: 84px;
        margin-left: 30px
    }
    .content__head{
        display: flex;
        height: 200px;
        margin-bottom: 30px;
        .content__header{
            position: absolute;
            top: 205px;
            left: 35%;
        }
    }
    .post__content{
        .content__main{
            margin-bottom: 20px;
        }
        .content__footer{
            margin-top: 20px;
            margin-bottom: 20px;
        }
        
    }
    
}
</style>