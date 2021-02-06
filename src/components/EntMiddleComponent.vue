<template>
    <Enterprise :ent="ent" />
</template>


<script>
import Enterprise from "@/views/Enterprise"
import { mapGetters, mapActions } from "vuex";
const token = localStorage.getItem("access_token");



export default {
    name: 'EntMiddle',
    components:{
        Enterprise
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