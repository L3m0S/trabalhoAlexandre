const InternacaoModel = require('../models/internacaoModel')
//Instanciando a classe que contem os CRUD's da tabela internacao
const internacaoModel = new InternacaoModel();

class internacaoController {

    procuraTodosInternacao(req, res) {
        internacaoModel.buscaTudoInternacao((err, resposta) => {
            if(err) {
                throw new Error("Erro ao pesquisar no banco de dados!", err.message)
            };
            
            res.json(resposta);
        });
    };
    
    procuraInternacaoID(req, res) {
        const id = req.params.id
    
        if(!id) {
            throw new Error("Por gentileza, nos informe o ID!");
        };
    
        internacaoModel.buscaInternacaoPorID(id, (err, resposta) => {
            if(err){
                throw new Error("Erro ao buscar no banco de dados!", err.message);
            } else {
                res.json(resposta);
            };
        });
    };
    
    atualizaStatusInternacao(req, res) {
        const id = req.params.id
        
        internacaoModel.buscaInternacaoPorID(id, (err, resposta) => {
            let status = resposta[0].int_ativoinativo
    
            if(err) {
                throw new Error("Erro ao buscar no banco de dados!", err.message)
            };
    
            if(status == 'A') {
                status = 'I'
            } else {
                status = 'A'
            };
            
            internacaoModel.atualizaStatus(id, status, function(err, callback) {
                if(err) {
                    throw new Error("Erro ao atualizar o status!", err.message);
                };
    
                res.send("O registro foi atualizado!").status(200)
            });
        });
    };
    
    registraInternacao(req, res) {
    
        const internacao = req.body;
    
        internacaoModel.criaInternacao(internacao, (err, resposta) => {
            if (err) {
                throw new Error(err.message);
            };
    
            res.send("Registo criado no banco!").status(200)
        });
    };
    
    mudaInternacao(req, res) {
    
        const internacao = req.body;
    
        internacaoModel.atualizaInternacao(internacao, (err, resposta) => {
            if (err) {
                throw new Error(err.message);
            };
    
            res.send('Internação atualizado!');
        });
    }
}



module.exports = internacaoController;