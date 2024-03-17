const mongoose = require('mongoose')

//Definindo o esquema dos Posts
//É semelhante a um 'Create table' do MySQL
const postsSchema = new mongoose.Schema({
    titulo: {type: String, require: true},
    msg: {type: String, require: true},
    tipo_msg: {type: Number, require: true},
    autor: {type: String, require: false}
})

//Exporta o modulo 'posts' para ser usado em outro arquivo
module.exports = mongoose.model('posts', postsSchema)