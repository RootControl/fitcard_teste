create database if not exists fitcard;

use fitcard;

create table status (
    status_id int primary key not null auto_increment,
    status varchar(10)
);

create table categoria (
    categoria_id int primary key not null auto_increment,
    categoria varchar(20)
);

create table cadastro (
    cadastro_id int primary key not null auto_increment,
    razao_social varchar(50) not null,
    nome varchar(50),
    cnpj varchar(20) not null,
    email varchar(50),
    endereco text,
    cidade varchar(30),
    estado varchar(30),
    telefone varchar(20),
    data_cadastro varchar(10),
    categoria_id int,
    status_id int,
    agencia varchar(10),
    conta varchar(10),

    constraint categoria_fk
    foreign key (categoria_id) references categoria(categoria_id)
    on update cascade
    on delete restrict,

    constraint status_fk
    foreign key (status_id) references status(status_id)
    on update cascade
    on delete restrict
);

source insert_data.sql;