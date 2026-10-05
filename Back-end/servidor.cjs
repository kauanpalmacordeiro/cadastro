const express = require("express");
const app = express();
const path = require("node:path");

const sql = require("mssql/msnodesqlv8")

const configuracaoBanco = {
    connectionString:
        "Driver={ODBC Driver 18 for SQL Server};" +
        "Server=localhost;" +
        "Database=cadastroapp;" +
        "Trusted_Connection=Yes;" +
        "Encrypt=Yes;" +
        "TrustServerCertificate=Yes;"
};

async function testarBanco(){
    try {
        const conexao = await sql.connect(configuracaoBanco);
        const resultado = await conexao.request().query(
            "SELECT DB_NAME() AS banco"
        );
        
        console.log("banco conetado:", resultado.recordset[0].banco);

    } catch(erro) {
        console.error("Erro ao tentar conectar ao banco:", erro.message);
    }

    sql.on("error", function(erro){
        console.error("Erro na conexão SQL", erro.message)
    });
}

testarBanco();

app.use(express.static(path.join(__dirname,"Public")))

app.use(express.urlencoded({ extended: false }));

app.get("/status", function(req, res) {
    res.send("NOVA VERSÃO")
})

app.listen(3000, function() {
    console.log("servidor disponivel em http://localhost:3000/status")
})                                      

app.post("/cadastro", function(req, res) {
    const nome_usuario = req.body.nome_usuario
    console.log(nome_usuario)
    res.send("recebi esse nome fudido seu")

})