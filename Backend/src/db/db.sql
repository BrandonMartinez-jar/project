create database ecommerce;
use ecommerce;

create table users(
    id VARCHAR(11) NOT NULL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(70) NOT NULL
);

create table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    price int NOT NULL,
    image TEXT NOT NULL
);

create table Orders(
    id int not null AUTO_INCREMENT PRIMARY KEY,
    idUser varchar(11) not null,
    address text not null,
    city varchar(30) not null,
    state varchar(30) not null,
    telephone varchar(13) not null,
    total int not null
);

alter table Orders
add foreign key (idUser) references users(id);

create table kart(
    idProduct int not null,
    idOrder int not null,
    idUser varchar(11) not null,
    amount int not null,
    totalPrice int not null
);

alter table kart
add foreign key (idProduct) references products(id);

alter table kart
add foreign key (idOrder) references Orders(id);

alter table kart
add foreign key (idUser) references users(id);

alter table kart
add primary key (idProduct,idOrder,idUser);
