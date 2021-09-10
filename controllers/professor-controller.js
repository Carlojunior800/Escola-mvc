const professor_bd = require("../models/professor-model");


exports.listar_professor = (req, res) => {
    professor_bd.find({}, (err, professor) => {
        if (err)
            return res.status(500).send("Erro ao listar");
        res.render("views/pages/professor", { resultado: professor });
    });
};

exports.cadastrar_professor_get = (req, res) => {
    res.render("views/pages/formProfessor");
};

exports.cadastrar_professor_post = (req, res) => {
    let salva_professor = new professor_bd();

    salva_professor.nome = req.body.nome;
    salva_professor.idade = req.body.idade;
    salva_professor.materia = req.body.materia;
    salva_professor.gostaDe = req.body.gostaDe;

    salva_professor.save((err) => {
        if (err)
            return res.status(500).send("Erro ao cadastrar");
        return res.redirect("/professores");
    });
};

exports.deletar_professor = (req, res) => {
    var id = req.params.id;
    professor_bd.deleteOne({ _id: id }, (err) => {
        if (err)
            return res.status(500).send("Erro o deletar");
        res.redirect("/professores");
    });
};

exports.editar_professor_get = (req, res) => {
    var id = req.params.id;
    professor_bd.findById(id, (err, professor) => {
        if (err)
            return res.status(500).send("Erro ao editar");
        res.render("views/pages/formEditarProfessor", { resultado: professor });
    });
};


exports.editar_professor_post = (req, res) => {
    var id = req.body.id;
    professor_bd.findById(id, (err, professor) => {
        if (err)
            return res.status(500).send("Erro ao editar");

        professor.nome = req.body.nome;
        professor.idade = req.body.idade;
        professor.materia = req.body.materia;
        professor.gostaDe = req.body.gostaDe;

        professor.save((err) => {
            if (err)
                return res.status(500).send("Erro ao cadastrar");
            return res.redirect("/professores");
        });
    });
};


