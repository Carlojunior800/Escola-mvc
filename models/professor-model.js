var mongoose = require("mongoose");

const Professor = mongoose.model("professor", {
    nome:String,
    idade:Number,
    materia:String,
    gostaDe:String
})

module.exports = Professor;