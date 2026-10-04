const express = require("express");
const app = express();
const path = require("node:path");

app.use(express.static(path.join(__dirname,"Public")))

app.use(express.urlencoded({ extended: false }));

app.get("/status", function(req, res) {
    res.send("NOVA VERSÃO")
})

app.listen(3000, function() {
    console.log("servidor disponivel em http://localhost:3000/status")
})                                      

app.post("/cadastro", function(req, res) {
    res.body.nome_usuario
    console.log(nome_usuario)
    app.send("recebi esse nome fudido seu")

})