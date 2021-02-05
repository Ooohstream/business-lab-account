import {request} from "@/services/generic.service"
import axios from "axios"

const getEnt = (id, token) =>  request({url: `enterprise/onepost` , method: 'get',header:{'access_token':token}, body:{'id':id}})
const  getEnts = (token) => request({url: `entrerprise/` , method: 'get', header:{'token':token}})


async function createEnt (title,description,token){
    const config = {headers: {"access_token": `${token}` }, body: {"title":`${title}`,"content":`${description}`}, json:true}
    const sendEnt = await axios.post("http://78.142.222.201:80/api/enterprise/createinterpise", config).then(response=>{
        console.log(response)
    })
    console.log(sendEnt)
}

export {
    getEnt,
    getEnts,
    createEnt
}