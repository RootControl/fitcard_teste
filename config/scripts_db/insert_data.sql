use fitcard;

insert into status(status) values('Ativo'), ('Inativo');

insert into categoria(categoria) values('Supermercado'),
                                        ('Restaurante'),
                                        ('Borracharia'),
                                        ('Posto'),
                                        ('Oficina');


insert into cadastro(razao_social, nome, cnpj, email, endereco, cidade, estado, telefone, data_cadastro, categoria_id, status_id, agencia, conta) 
values ('Latam Ltda.', 'Latam', '89.077.089/0001-06', 'latam@latam.com', 'Rua Coronel Quirino, 1273 - Cambuí', 'Campinas', 'São paulo', '(19)92519-0022', '2018-01-02', 4, 1, '325-1', '76.569-3'),
        ('Ifood', 'ifood', '07.322.330/0001-42', 'ifood@ifood.com', 'R. Jasmim, 660 - Mansões Santo Antônio', 'Campinas', 'São paulo', '(19)93634-3370', '2018-01-03', 1, 1, '854-6', '54.743-2'),
        ('NuBank', 'NuBank', '82.168.653/0001-49', 'nu@nubank.com', 'R. Capote Valente, 39 - Pinheiros', 'São Paulo', 'São paulo', '(19)92039-0650', '2018-01-04', 5, 1, '364-3', '98.286-7'),
        ('CI&T', 'CI&T', '88.822.515/0001-18', 'ci_and_t@cit.com', 'R. Dr. Ricardo Benetton Martins, 1.000. Pólis de Tecnologia', 'Campinas', 'São paulo', '(19)92102-4500', '2018-01-05', 2, 1, '768-3', '21.876-8');