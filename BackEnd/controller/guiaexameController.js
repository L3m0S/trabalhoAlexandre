const GuiaexameModel = require('../models/guiaexameModel');

//Instanciando a classe que contem os CRUD's da tabela guiaexame
const guiaexameModel = new GuiaexameModel();

class guiaexameController {

    procuraTodosGuiaexame(req, res) {
        guiaexameModel.buscaTudoGuiaexame((err, resposta) => {
            if(err) {
                throw new Error("Erro ao pesquisar os dados!", err.message);
            };
    
            res.send(resposta);
        });
    };
    
    procuraGuiaexameID(req, res) {
    
        const id = req.params.id
    
        if(!id) {
            throw new Error("Por gentileza, nos informe o ID!");
        }
    
        guiaexameModel.buscaGuiaexamesPorID(id, (err, resposta) => {
            if(err){
                throw new Error("Erro ao pesquisar o registro pelo ID!", err.message);
            } else {
                res.json(resposta);
            };
        });
    };
    
    atualizaStatusGuiaexame(req, res) {
    
        const id = req.params.id
        
        guiaexameModel.buscaGuiaexamesPorID(id, (err, resposta) => {
    
            let status = resposta[0].gui_ativoinativo
    
            if(err){
                throw new Error("Erro ao encontrar o registro!", err.message);
            };
    
            if(status == 'A'){
                status = 'I'
            }else{
                status = 'A'
            };
    
            guiaexameModel.atualizaStatusGuiaexame(id, status, function(err, resposta) {
                
                if(err) {
                    throw new Error(err.message);
                };
    
                res.send(`Registro deletado!`).status(200)
    
            });
        });
    };
    
    registraGuiaexame(req, res) {
    
        const guiaexame = req.body;
    
        guiaexameModel.criaGuiaexame(guiaexame, (err, resposta) => {
            
            if(err) {
                throw new Error(err.message)
            }
    
            res.send('Guia exame inserida no banco!');
        })
    };
    
    mudaGuiaexame(req, res) {
    
        const guiaexame = req.body;
    
        guiaexameModel.atualizaGuiaexame(guiaexame, (err, resposta) => {
            if (err){
                throw new Error(err.message)
            };
    
            res.send('Registro  atualizado no banco!');
        });
    };

}


module.exports = guiaexameController