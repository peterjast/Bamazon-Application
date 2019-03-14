DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

create table products (
itemid integer(10) not null auto_increment,
productname varchar(100),
departmentname varchar(50),
price decimal(20,2),
stockquantity integer(20),
primary key(itemid)
);

insert into products (itemid, productname, departmentname, price, stockquantity)
values (1, "Pants", "Apparel", 45.99, 42),
(2,"Rubix Cube", "Toys", 5.99, 100),
(3,"Tech Deck", "Toys", 4.99, 140),
(4,"Shoes", "Apparel", 49.99, 25),
(5, "Basketball", "Toys", 19.99, 14),
(6, "Hat", "Apparel", 19.99, 101),
(7, "Cheese Sticks", "Food", 3.99, 167),
(8, "Socks", "Apparel", 10.99, 7),
(9, "Slinky", "Toys", 7.99, 154),
(10, "Soup", "Food", 2.99, 162); 
