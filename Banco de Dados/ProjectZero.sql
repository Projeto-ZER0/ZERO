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
Fita1 varchar(45),
Fita2 varchar(45),
Fita3 varchar(45),
Personagem1 varchar(45),
Personagem2 varchar(45),
Personagem3 varchar(45),
fkUsuario int,
constraint fkUsuario
foreign key (fkUsuario) 
references Usuario(idUsuario)
) auto_increment = 1000;

create table TierListFavorita (
idTierListFavorita int primary key auto_increment,
FitaFav varchar(45),
PersonagemFav varchar(45),
fkTierList int,
constraint FkTL foreign key (fkTierList)
references Tierlist(idTierList)
);