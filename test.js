const axios = require('axios')

async function getCep(cep) {
    axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        console.log(response.data)
    }).catch((err) => {
        console.error(err)
    })
}

getCep(53140230)