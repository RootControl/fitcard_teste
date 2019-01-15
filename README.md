# Fitcard
Projeto desenvolvido para o processo seletivo da Fitcard.  

## Pré requisitos
Nodejs  
NPM (nodemon)  
MySQL  

## Tecnologias Utilizadas
Nodejs  
JQuery  
Bootstrap  
MySQL  

## Configurar o Banco de Dados
Primeiramente, é necessário trocar o usuário e senha para conectar com o banco  
Para trocar, entre no arquivo config/dbConn.js  
```
host: 'localhost',
user: 'seu_usuário',
password: 'sua_senha',
database: 'fitcard'
```

Após trocar e salvar, entre na pasta config/scripts_db, pelo Terminal ou CMD, e entre com o seu usuário do banco:
```
~config/scripts_db$ mysql -u seu_usuario -p
```

Dentro do banco ditige o seguite comando:
```
mysql> source create_db.sql
```
Esse comando irá criar e popular o banco de dados    

## Iniciando o Sistema
Na raiz do projeto execute o seguinte comando para iniciar o sistema
```
$ nodemon app
```

Ao executar esse comando, é só abrir o browser e digitar:
```
localhost:3000
```
