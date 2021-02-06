import axios from 'axios';

const PORT = 8080;
//const getEnt = (id, token) =>  request({url: `enterprise/onepost` , method: 'get',header:{'access_token':token}, body:{'id':id}})
//const  getEnts = (token) => request({url: `entrerprise/` , method: 'get', header:{'token':token}})

async function createEnt(title, description, token) {
  const config = {
    headers: { access_token: `${token}` },
    body: { title: `${title}`, content: `${description}` },
    json: true,
  };
  const sendEnt = await axios
    .post(
      `http://78.142.222.201:${PORT}/api/enterprise/createinterpise`,
      config
    )
    .then(response => {
      console.log(response);
    });
  console.log(sendEnt);
}

async function getEnts(token) {
  const config = { headers: { access_token: `${token}` }, json: true };
  console.log('TOKEN ' + token);
  const takeEnts = await axios.get(
    `http://78.142.222.201:${PORT}/api/enterprise/allinterpises`,
    config
  );

  console.log(takeEnts.data.interprises);
  return takeEnts.data.interprises;
}

async function getEnt(id, token) {
  const smToken = localStorage.getItem("access_token")
  console.log("ID: "+ id)
  console.log("Token: " + token)
  const _id = id
  console.log(_id)
  const config = { headers:{'Content-Type': 'application/*+json', "access_token": `${smToken}`}, params:{'interprise_id': `${_id}`},json: true };
  console.log(config)
  const takeEnt = await axios.get(`http://78.142.222.201:${PORT}/api/enterprise/getbyid`, config)
    
  console.log(takeEnt);
  return takeEnt.data.interprises;
}

export { getEnt, getEnts, createEnt };
