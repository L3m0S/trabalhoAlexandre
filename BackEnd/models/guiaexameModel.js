const database = require('../config/db_connect')

//Classe com todos os metodos de CRUD da tabela guiaexame
class guiaexameModel {

    //Retorna todos os dados da tabela guiaexames
    buscaTudoGuiaexame(callback) {
        database.query(
            'select * from guiaexame', callback
        );
    };

    

    //Busca por ID na tabela guiaexame
    buscaGuiaexamesPorID(id, callback) {
        database.query(
            `select * from guiaexame WHERE gui_codigo=${id}`, callback
        );
    };

    

    //Cria um registro na tabela guiaexames
    criaGuiaexame(guiaexame, callback) {

        const queryMSQL = 'INSERT INTO guiaexame SET ?';

        database.query(
            queryMSQL, 
            guiaexame, 
            callback
        );
    };


    //Atualiza um registro na tabela guiaexame
    atualizaGuiaexame(guiaexame, callback) {
        const queryMSQL = "UPDATE guiaexame SET gui_ativoinativo = '" + guiaexame.gui_ativoinativo + 
        "' , gui_numeroguia      = '" + guiaexame.gui_numeroguia +    
        "' , gui_exame        = '" + guiaexame.gui_exame +   
        "'  WHERE gui_codigo  = '" + guiaexame.gui_codigo + "'";

        database.query(
            queryMSQL,
            callback
        );
    };

    //Atualiza o campo status na tabela guiaexame
    atualizaStatusGuiaexame(id,status, callback) {
    
        const query = `DELETE FROM guiaexame WHERE gui_codigo = '${id}'`
        database.query(
            query, 
            callback
        );    
    }
};

module.exports = guiaexameModel;