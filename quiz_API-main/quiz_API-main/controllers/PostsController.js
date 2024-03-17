const express = require('express')
const app = express()
const Posts = require('../models/Posts')

//Cadastrar um Post
//'Exports' permite que eu referencie a variavel de outra parte do código
exports.cadastrarPost = async (req,res) =>{
    try{
        const post = await Posts.create(req.body)
        res.status(201).json(post) 
        //O código '201' significa que deu certo, é um código de sucesso
    } catch (error){
        res.status(500).json({  error: 'Erro ao cadastrar Post.'    })
        //O código '500' significa que deu errado, é um código de erro
    }
} 

exports.listarPosts = async (req, re) => {
    try{
        const listaPosts = await Posts.find()
        res.json(listaPosts)
    } catch (error) {
        res.status(500).json({
            error: 'Erro ao buscar as perguntas.'
        })
    }
}