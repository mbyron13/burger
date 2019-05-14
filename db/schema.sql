create database if not exists burgers_db;
use burgers_db;

drop table if exists burgers;

create table burgers(
    id integer NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    burger_name VARCHAR(70) not null,
    devoured BOOLEAN default false
)