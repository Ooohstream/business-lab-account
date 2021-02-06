<template>
    <Enterprise :ent="ent"/>
</template>


<script>
import Enterprise from "@/views/Enterprise"
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'EntMiddle',
    components:{
        Enterprise
    },
    
    created() {
        const token = localStorage.getItem("access_token");
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
        }),
    }
}
</script>