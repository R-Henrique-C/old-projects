const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

//Função para conectar com o Mongo Atlas
async function main(){ 
//'Async' atualiza os dados sem precisar recarregar a página
    await mongoose.connect('mongodb+srv://R-Henrique:ofnHkUvg9xCJpGKa@cluster0.uy4xd0d.mongodb.net/?retryWrites=true&w=majority') 
    //'await' espera a conexão do MongoDB
    console.log('conectado ao MongoDB!')
}

//Executa o 'main()' e, caso der errado, exibe no console o codigo de erro
main().catch((err) => console.log(err))

//Exporta o modulo 'main' para ser usado em outro arquivo  
module.exports = main