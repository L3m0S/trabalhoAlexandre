const mysql = require('mysql2')
const databaseName = 'dados212d'//Altere para o nome do seu banco de dados

const database =  mysql.createConnection({
    user: 'root',//Altere para o usuario de seu banco de dados
    password: 'mysqlpw',//Altere para a senha de seu banco de dados
    host: 'localhost',
    port: '55000',//Altere para a porta em que seu banco de dados esta escutando 
    database: databaseName
})

database.connect((err) => {
    if(err) {
        console.log('Erro ao conectar ao bando de dados!', err.message)
        return  
    }
    else {
        console.log(`Conectado ao banco de dados: ${databaseName}`)       
    }
})

module.exports = database
