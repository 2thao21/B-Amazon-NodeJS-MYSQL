DROP DATABASE IF EXISTS bAmazonDB;

CREATE DATABASE bAmazonDB;

USE bAmazonDB;

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price INT,
    stock_quantity INT
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Intro to JavaScript", "Books", 39, 50), ("BAmazonBASEK Intro to Python", "Books", 39, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Alaxy S12", "Cell Phones & Accessories", 900, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK 1TB microSD card", "Electronics", 450, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Running Shoes", "Clothing & Shoes", 50, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Bed Sheet", "Bedding & Bath", 24, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Laptop", "Laptops", 999, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Espresso Machine", "Home & Kitchen", 115, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Hoodie", "Clothing & Shoes", 55, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BAmazonBASEK Shovel ", "Garden & Outdoor", 11, 32);











