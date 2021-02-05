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
                    
                    <textarea v-model="description" placeholder="Описание инициативы" class="input-description" ></textarea>
                </div>
                <div class="button-holder">
                    <button type="submit" class="btn btn-primary">Создать</button>
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
    text-align: left;
    margin: auto;
    padding-top:300px;
}
.title-description{
    display: block;
}
input{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 20px;
    border-radius: 5px;
    border: 0.2px solid black;
    width: 500px;
    padding-left: 10px;
    height: 35px;
    
}

.input-description{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 10px;
    border-radius: 5px;
    border: 0.2px solid black;
    height: 150px;
    width: 500px;
    resize: none;
    padding-left: 8px;
    padding-top: 8px;
    font-size: 10pt;
}
</style>