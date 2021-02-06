<template>
    <Enterprise :ent="ent" :tId="id" />
</template>


<script>
import Enterprise from "@/views/Enterprise"
import { mapGetters, mapActions } from "vuex";
const token = localStorage.getItem("access_token");

//const _id = $route.query.id



export default {
    name: 'EntMiddle',
    components:{
        Enterprise
    },
    data(){
        return{
            id: this.$route.query.id
        }
    },
    
    created() {
        
        console.log(token)
        console.log(this.$route.query.id)
        this.fetchEnt(this.$route.query.id,token);
       
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