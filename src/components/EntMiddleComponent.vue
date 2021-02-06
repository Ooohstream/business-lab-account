<template>
    <Enterprise :ent="ent" :tId="id" />
</template>


<script>
import Enterprise from "@/views/Enterprise"
import { mapGetters, mapActions } from "vuex";
const token = localStorage.getItem("access_token");

//const _id = $route.query.id

//var id;

export default {
    name: 'EntMiddle',
    components:{
        Enterprise
    },

    props:{
        id:{
            type: String
        }
    },
    
    created() {
        
        console.log(token)
        console.log(this.$route.query.id)
        this.fetchEnt(this.$route.query.id,token);
        //this.id = this.$route.query.id
       
    },
    computed: {
        ...mapGetters({
            ent: "ent",
        }),
    },
    methods: {
        ...mapActions({
            fetchEnt: "fetchEnt",
        })
    }
}
</script>