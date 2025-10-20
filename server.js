import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mysql from  "mysql2";


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express;

app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))

app.post("enviar",(req,res)=>{
    const nome= req.body.nome;
    const preco=req.body.preco;
    const quantidade=req.body.quantidade;
})

const conexao = mysql.createConnection({
    host:"localhost",
    user:
})

