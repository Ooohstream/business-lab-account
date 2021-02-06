<template>
    <div class="mate__avatar">
            <img src="@/assets/logo.png" />
    </div>
    <div class="mate__about">
        <div class="name" v-if="ent.author == mate">
                  <h4><a href="http://78.142.222.201:80/user/{{ mate }}">Автор {{currentUser.lastName}}</a></h4>
        </div>
        <div v-else>
                  <h4><a href="http://78.142.222.201:80/user/{{ mate }}">Участник</a></h4>
        </div>
        <div class="status">
              {{ mate.status }}
        </div>
    </div>
</template>

<script>
import axios from "axios";
var currentUser = {}
const token = localStorage.getItem('access_token')

export default {
    name: 'EntUserComponent',
    props:{
        userId:{
            type: String
        },
        currentUser:{
            type: Object,
            default: currentUser
        }
    },
    created(){
        currentUser = this.getUser()
    },
    methods: {
        async getUser(){
            const takeUser = await axios.post("http://78.142.222.201:8080/api/userupdate/alluserinfo", {'access_token':`${token}`, 'user_id': this.userId}).then((response)=>{
                response.data
            })
            console.log(takeUser)
        }
    },
}
</script>