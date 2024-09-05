import express from "express";
import cors from "cors";
import { DatabaseModel } from './model/DatabaseModel';
import { log } from "console";

//definindo a porta do servidor
const port: number = 3333;

//criando servidor web
const server = express();
server.use(cors());
server.use(express.json());

//rotas de aplicação
server.get('/', (req, res) => {
    res.json({mensagem: "Olá mundo, está é minha primeira aplicação web"});
});

server.get('/pessoas', (req, res) => {
    res.json({mensagem: "Aqui será apresentado os dados das pessoas."});
});

new DatabaseModel().testeConexao().then((resdb) =>{
    if(resdb) {
        console.log("Conexão com banco de dados realizada com sucesso!");
        //iniciando o servidor
        server.listen(port, () => {
            console.log(`Servidor iniciado no endereço http://localhost:${port}`);
});
    } else {
        console.log("Erro ao conectar com o banco de dados");
    }
})
