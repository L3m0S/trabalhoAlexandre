const { query } = require('../config/db_connect');
const database = require('../config/db_connect')

//Classe com todos os metodos de CRUD da tabela internacao
class InternacaoModel{


    //Retorna todos os dados da tabela internacao
    buscaTudoInternacao(callback) {
        database.query(
            'select * from internacao', callback
        );
    };

    //Busca por ID na tabela internacao
    buscaInternacaoPorID(id, callback) {
        database.query(
            `select * from internacao WHERE int_codigo=${id}`, callback
        );
    };

    //Cria um registro na tabela internacao
    criaInternacao(internacao, callback) {
        
        const queryMSQL  = 'INSERT INTO internacao SET ?';
        
        database.query(
            queryMSQL,
            internacao,
            callback
        );
    };

    //Atualiza o campo status na tabela guiaexame
    atualizaStatus(id,status, callback) {
        
        const query = `DELETE FROM internacao WHERE int_codigo = '${id}'`    
       
        database.query(
            query, 
            callback
        );    
    }

    atualizaInternacao(internacao, callback) {
        const queryMSQL = "UPDATE internacao SET int_ativoinativo = '" + internacao.int_ativoinativo + 
        "' , int_paciente      = '" + internacao.int_paciente + 
        "' , int_medico        = '"  + internacao.int_medico + 
        "' , int_convenio        = '" + internacao.int_convenio +   
        "' , int_codigocid      =  '" + internacao.int_codigocid + 
        "'  WHERE int_codigo  = '" + internacao.int_codigo + "'";

        database.query(
            queryMSQL,
            callback
        );
    }
}


module.exports = InternacaoModel;