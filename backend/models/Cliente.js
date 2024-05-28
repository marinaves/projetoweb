const mongoose = require('../db/conecta')
const {Schema} = mongoose

const Cliente = mongoose.model('Cliente',
new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    senha: {type: String, required: true},
    telefone: {type: String, required: true}
},
{timestemps:true}
))

module.exports = Cliente