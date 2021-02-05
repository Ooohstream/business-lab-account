import {request} from "@/services/generic.service"

const getEnt = (id, token) =>  request({url: `enterprise/onepost` , method: 'get',header:{'access_token':token}, body:{'id':id}})
const  getEnts = (token) => request({url: `entrerprise/` , method: 'get', header:{'token':token}})

export {
    getEnt,
    getEnts
}