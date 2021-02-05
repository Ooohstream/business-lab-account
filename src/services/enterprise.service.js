import axios from "axios"

//const getEnt = (id, token) =>  request({url: `enterprise/onepost` , method: 'get',header:{'access_token':token}, body:{'id':id}})
//const  getEnts = (token) => request({url: `entrerprise/` , method: 'get', header:{'token':token}})


async function createEnt (title,description,token){
    const config = {headers: {"access_token": `${token}` }, body: {"title":`${title}`,"content":`${description}`}, json:true}
    const sendEnt = await axios.post("http://78.142.222.201:80/api/enterprise/createinterpise", config).then(response=>{
        console.log(response)
    })
    console.log(sendEnt)
}

async function getEnts (token){
    const config = {headers: {"access_token": `${token}` }, json:true}
    const takeEnts = await axios.get("http://78.142.222.201:80/api/enterprise/", config).then(response=>{
        console.log(response)
    })
    console.log(takeEnts)
}

async function getEnt(id, token){
    const config = {headers: {"access_token": `${token}` }, body:{"id":`${id}`}, json:true}
    const takeEnts = await axios.get("http://78.142.222.201:80/api/enterprise/onepost", config).then(response=>{
        console.log(response)
    })
    console.log(takeEnts)
}

export {
    getEnt,
    getEnts,
    createEnt
}