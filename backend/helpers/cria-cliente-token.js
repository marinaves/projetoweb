const jwt = require('jsonwebtoken')
const criarClienteToken =
async(Cliente, req, res) =>{
    const token = jwt.sign({
        nome: cliente.nome,
        id: cliente._id
    }, "mysecret")

    /* Retornando o token */
    res.status(200).json({
        mensagem: "Você está autenticado",
        token: token, 
        cienteId: cliente._id
    })
    
}
module.exports = criarClienteToken