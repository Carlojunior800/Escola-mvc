var express = require("express");
const app = express();
var mongoose = require("mongoose");

const porta = 3000;

mongoose.connect("mongodb+srv://carlos_junior:carlos_junior@cluster0.smdgh.mongodb.net/professor?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true});

app.set("view engine", "ejs");
app.set("views", __dirname,"/views"); //\\views
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const professores_router = require("./routers/professor-router");

app.use("/professores", professores_router);

app.get("/", (req,res)=>{
    res.send("Página inicial");
});

app.listen(porta,()=>{
    console.log("Servidor esta rodando na porta ", porta);
});

