<!--Created by sigarachi-->
<template>
  <EntLst />
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
  mounted() {
    const token = localStorage.getItem("access_token");
    this.fetchPosts(token);
    console.log(this.$store);
  },
  computed: {
    ...mapGetters({
      ents: "ents",
    }),
  },
  methods: {
    ...mapActions({
      fetchPosts: "fetchPosts",
    }),
  },
};
</script>

<style lang="scss">
</style>