<template>
    <div v-if="ents.length != 0" class="ent__list">
        <div class="ent__container"  v-for="(ent ,key) in ents" :key="key">
            <EntCard :title="ent.title" :content="ent.content" :id="ent._id" />
        </div>
    </div>
</template>

<script>
import EntCard from "@/components/EntCard";
export default {
    name:"EntLst",
    components:{
        EntCard
    }
}
</script>

<style lang="scss" scoped>
.ent__list{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: block;
  justify-content: space-between;
  width: 50%;
  margin-left: 10%;
  margin-top: 10%;
  align-items: center;
}
</style>