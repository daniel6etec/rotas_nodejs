const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Início")
})

app.get("/cadastrar/produto", function(req, res){
    res.send("Cadastrar produto")
})

app.get("/pesquisar/produto/modelo", function(req, res){
    res.send("Pesquisando produto modelo")
})

app.get("/contato/sac/produto", function(req, res){
    res.send("Produto")
})

app.get("/contato/sac/:produto", function(req, res){
    res.send("Produto: "+ req.params.produto)
})

app.listen(8081, function(){
    console.log("Tá on")
})