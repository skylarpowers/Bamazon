drop database if exists bamazon_db;
create database bamazon_db;
use bamazon_db;
CREATE TABLE products (
ID integer not null auto_increment,
product_name varchar(30),
department_name varchar(30),
price int(30),
stock_quantity int(30),
primary key (ID)
);
 
insert into products (product_name, department_name, price, stock_quantity)
values ("Madden 18", "Video Games", 59, 20);
insert into products (product_name, department_name, price, stock_quantity)
values ("Beats", "Electronics", 299, 17);
insert into products (product_name, department_name, price, stock_quantity)
values ("Backpack", "School", 25, 95);
insert into products (product_name, department_name, price, stock_quantity)
values ("Wallet", "Accessories", 12, 140);
insert into products (product_name, department_name, price, stock_quantity)
values ("Water Bottles", "Food", 2, 305);
insert into products (product_name, department_name, price, stock_quantity)
values ("T.V", "Electronics", 599, 85);
insert into products (product_name, department_name, price, stock_quantity)
values ("Laundry Basket", "Household", 25, 75);
insert into products (product_name, department_name, price, stock_quantity)
values ("Mirror", "Household", 10, 68);
insert into products (product_name, department_name, price, stock_quantity)
values ("Vacuum", "Household", 215, 50);
insert into products (product_name, department_name, price, stock_quantity)
values ("Hairspray", "Personal", 15, 75);