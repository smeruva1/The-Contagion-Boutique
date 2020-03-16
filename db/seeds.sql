use db_contagion;

INSERT INTO products
  (name, CollectionCategory, Collection, imageURL, Price, Color, Design, Brand, Size, Slogan, createdAt, UpdatedAt)
VALUES
  ('Cashmere Quarantine Suit', 'BURBERRRY - Clothing', 'La Collection CORONA Pretentieuse', '', 7190, 'Ligh Camel', 'Tartan Plaid', 'Burberry', 2, "They might cancel Coachella, but they'll never cancel your love of Plaid!",now(), now());
  
SELECT * FROM db_contagion.products;


INSERT INTO users
  (name, userType,email,password, createdAt, UpdatedAt)
VALUES
  ('Sudar', 'customer', 'meruva@gmail.com', '1234',now(), now());

SELECT * FROM db_contagion.users;


INSERT INTO orders
  (quantity, totalAmount,createdAt, UpdatedAt,UserId,ProductId )
VALUES
  (1, 1450,now(), now(),1,1);

SELECT * FROM db_contagion.orders;

