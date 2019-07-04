create table if not exists newTable (
product_id  Serial Primary Key,
name  varchar(40),
description  varchar(80),
price  integer,
image_url  text
);