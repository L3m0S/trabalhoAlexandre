****************
Projeto desenvolvido com o intuito de aprender a consumir API's e realizar operações de CRUD na disciplina de Programação de Scripts Fatec Franca.

A parte de API desse trabalho foi desenvolvido utilizando como essencia a API construida em sala de aula durante as aulas do professor Neto.

*****************

Instruções:

1 - Para criar as tabelas no bando de dados iremos rodas o script escrito em MYSQL com o comando:

	./script_gabriel_lemos.sql



2 - Alterar o arquivo de configuração do banco de dados() que se encontra na pasta "BackEnd", "config", "db_connect.js", nesse arquivo deve realizar alterações no usuario do banco , senha e porta utilizada: 

    const database =  mysql.createConnection({
    user: 'root',//Altere para o usuario de seu banco de dados
    password: 'teste123**',//Altere para a senha de seu banco de dados
    host: 'localhost',
    port: '3306',//Altere para a porta em que seu banco de dados esta escutando 
    database: databaseName
    })


3 - Utilizar o comando de instalçao de pacotes dentro da pasta "BackEnd":

	npm i 



4 - Dentro da pasta "BackEnd" para rodar o servidor da API utilize o comando: 

	npm run dev
	

5 - Dentro da pasta "FrontEnd" usar o comando de instalação de pacotes novamente:

	npm i 



6 - Tambem dentro da pasta "FrontEnd" por padrão para iniciar o servidor react utilizamos o comando:
	
	npm start

OBS: Gostaria de informar que o front-end desenvolvido nesse projeto foi com base no desenvolvido no semestre passado com o Professor Fausto onde o mesmo nos ensinou a consumir componentes prontos do Material-ui, por isso a semelhança, pois utilizei os mesmos componentes que ele nos ensinou.
