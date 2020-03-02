var express = require('express');
const server = express();
const mongoose = require('mongoose');
const Produto = require('./produtoSchema');
const MONGO_URL= "mongodb+srv://user:senha@clusterlp3noite-xjil9.mongodb.net/dbproduto?retryWrites=true&w=majority"

const db = mongoose.connect(MONGO_URL);

var produtos = [
    { id: 1, nome: 'computador', preco: 1200.20},
    { id: 2, nome: 'mouse', preco: 20.50},
    { id: 3, nome: 'processador', preco: 1250.50},
    { id: 4, nome: 'teclado', preco: 50.50},
];
//middlewares:
server.use(express.json());

server.get('/produto', function(request, response){ 
    return response.json(produtos);

})

server.get('/produto/:id', function(request, response){ 
    const id = request.params.id;
    const produto = produtos.filter(p => p.id ==id);
    return response.json(produto);

})

server.post('/produto', function(request, response){
    const produto = request.body;
    produtos.push(produto);
    return response.status(201).send();
})

server.delete('/produto/:id', function(request, response)
{
    const id = request.params.id;
    produtos = produtos.filter(p => p.id != id);
    return response.status(200).send();
})

server.put('/produto/:id', (req,res) =>{
    const id = req.params.id;
    const produto = req.body;

    produtos.forEach(p =>{
        if(p.id ==id){
            p.nome = produto.nome;
            p.preco = produto.preco;
            return;
        }
    })
    return res.send();
})
server.listen(3000);
