<template>
    <div class="container">
        <div class="page__header">
            <h4>Создать инициативу</h4>
        </div>
        <div class="page__container">
            <form @submit.prevent="create">
                <div class="title-description">
                    <input type="text" class="input-title" placeholder="Название инициативы" v-model="title" />
                    <br>
                    <input type="text" class="input-description" placeholder="Описание инициативы" v-model="description" />
                </div>
                <div class="button-holder">
                    <button @click="create">Создать</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import createEnt from "@/services/enterprise.service"
export default {
    name: 'CreateEnterprise',
    data(){
        return{
            title:"",
            description:""
        }
    },
    methods:{
        create(){
            this.title = document.getElementsByClassName("input-title")
            this.description = document.getElementsByClassName("input-description")
            const token = localStorage.getItem("access_token")
            createEnt(this.title,this.description,token)
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
    text-align: center;
    margin: auto;
}
.title-description{
    display: block;
}
</style>