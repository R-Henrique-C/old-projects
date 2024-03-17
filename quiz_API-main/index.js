// Comandos de terminal:

//Criar package.json:
//npm init -y

//Dependencias:
//npm install cors express mongoose multer nodemon

//Para parar um terminal (recomendado abrir outro)
//Ctrl + c

// ---------- // ----------

//Comandos de Git:

//Iniciar projeto GIT
// git init

//Adiciona todos os arquivos para enviar ao GitHub
//git add .

// Adiciona um comentário a atualização a ser enviada 
//git commit -m "[Comentário]"

//Envia os arquivos ao repositório
//git push https://<GITHUB_TOKEN>@github.com/<GITHUB_USUARIO>/<REPOSITORIO_NOME>.git
//usar: 'git push https://dallas@github.com/R-Henrique-C/quiz_API.git'

// ---------- // ----------

const cors = require('cors')
const express = require('express')
const { model } = require('mongoose')
const app = express()
const PORT = 3000 //Geralmente é bom usar a porta 3000, porém, é bom ter a variável caso precisarmos mudar
require('./db') //Chama o arquivo DB, formando uma conexão com o banco de dados
const postConstroller = require('./controllers/PostsController') //Chama o postController

app.use(cors()) //Melhora a segurança da API, fazendo as rotas passarem por dentro dele
app.use(express.json())

//Rotas de CRUD
app.post('/posts', postConstroller.cadastrarPost)
//Post => semelhante a um 'print', em outras linguagens
//Posts => enviar dados ao blog (método da API)

app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`)
})