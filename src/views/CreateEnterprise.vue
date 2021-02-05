<template>
    <div class="container">
        <div class="page__header">
            <h4>Создать инициативу</h4>
        </div>
        <div class="page__container">
            <form @submit="create" method="post">
                <div class="title-description">
                    <input type="text" class="input-title" placeholder="Название инициативы" v-model="title" />
                    <br>
                    <input type="text" class="input-description" placeholder="Описание инициативы" v-model="description" @keyup.enter="create"/>
                </div>
                <div class="button-holder">
                    <button type="submit">Создать</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'CreateEnterprise',
    data(){
        return{
            title:"",
            description:""
        }
    },
    methods:{
        create(e){
            const token = localStorage.getItem('access_token')
            console.log(this.title)
            const config = {headers: {"access_token": `${token}` }, body: {"title":`${this.title}`,"content":`${this.description}`}, json:true}
            axios.post("http://a42f800fa614.ngrok.io:80/api/enterprise/createinterpise", config).then((response)=>{
                console.log(response)
            })
            e.preventDefault();
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