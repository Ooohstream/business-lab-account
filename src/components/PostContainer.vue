<template>
    <PostLst :posts="posts" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PostLst from "@/components/PostLst"

export default {
    name:'PostContainer',
    props:{
        postId:{
            type:Number
        }
    },
    components:{
        PostLst
    },
    created() {
        const token = localStorage.getItem("access_token");
        this.fetchEntPosts(token, this.postId);
        console.log(this.$store);
    },
    computed:{
        ...mapGetters({
            posts: "posts",
        })
    },
    methods: {
        ...mapActions({
            fetchEntPosts: "fetchEntPosts",
        }),
  },
}
</script>