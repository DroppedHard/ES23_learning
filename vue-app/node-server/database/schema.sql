create table PRODUCTS (
	product_id int NOT NULL PRIMARY KEY,
	title varchar(32) NOT NULL , 
	category int NOT NULL,
	price decimal(10, 2) NOT NULL,
	description varchar(255)
);

CREATE TABLE CATEGORIES (
	category_id int NOT NULL PRIMARY KEY,
	category_name varchar(32) NOT NULL
);

create table ACCOUNTS (
  username varchar(50) NOT NULL PRIMARY KEY,
  password_hash varchar(64) NOT NULL,
  is_admin bit NOT NULL
);

create table FAVOURITES (
  account_id int not null,
  product_id int not null
);

create table clients
-- Categories
INSERT INTO CATEGORIES (category_id, category_name)
VALUES
  (1, 'Bakery'),
  (2, 'Dairy'),
  (3, 'Meat'),
  (4, 'Fruits'),
  (5, 'Beverages');

-- Products
INSERT INTO PRODUCTS (product_id, title, category, price, description)
VALUES
  (1, 'Bread', 1, 2.99, 'Freshly baked bread'),
  (2, 'Milk', 2, 1.99, 'Whole milk'),
  (3, 'Bun', 1, 0.99, 'Soft bun for sandwiches'),
  (4, 'Ham', 3, 4.49, 'Sliced ham for deli'),
  (5, 'Cheese', 2, 3.75, 'Cheddar cheese block'),
  (6, 'Apple', 4, 0.75, 'Fresh red apple'),
  (7, 'Orange Juice', 5, 2.49, '100% natural orange juice'),
  (8, 'Butter', 2, 2.99, 'Creamy butter'),
  (9, 'Water', 5, 1.29, 'Bottled natural water'),
  (10, 'Yogurt', 2, 1.79, 'Low-fat yogurt cup');
