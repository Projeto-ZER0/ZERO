create database ProjectZero;
use ProjectZero;

create table Usuario (
idUsuario int primary key auto_increment,
Nome Varchar(50),
Email Varchar(50),
Senha char(8)
);
select * from usuario;
create table Tierlist (
idTierlist int primary key auto_increment,
FitaFav varchar(45),
PersonagemFav varchar(45),
fkUsuarioT int,
constraint fkUsuarioT
foreign key (fkUsuarioT) 
references Usuario(idUsuario)
) auto_increment = 1000;

create table Quiz (
idQuiz int primary key auto_increment,
Acertos int,
Erros int,
fkUsuario int,
constraint fkUsuario
foreign key (fkUsuario) 
references Usuario(idUsuario)
);
select * from Quiz;
INSERT INTO Quiz values
(null, 10, 0);

INSERT INTO usuario values
(null, 'Teste6', 'teste6@teste.com', 123456, 1);

INSERT INTO Quiz (Acertos, Erros) VALUES (10, 0);

select COUNT(Acertos) AS quantidade, Acertos AS acertos from Quiz GROUP BY Acertos;

select * from Usuario left join Quiz on fkUsuario = idUsuario;
