<!--Created by sigarachi-->
<template>
  
  <EntLst :ents="ents" />
</template>


<script>
import EntLst from "@/components/EntLst.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    EntLst,
  },
  data: () => ({}),
  created() {
    const token = localStorage.getItem("access_token");
    this.fetchEnts(token);
    console.log(this.$store);
  },
  computed: {
    ...mapGetters({
      ents: "ents",
    }),
  },
  methods: {
    ...mapActions({
      fetchEnts: "fetchEnts",
    }),
  },
};
</script>

<style lang="scss">
</style>