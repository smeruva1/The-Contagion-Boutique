use db_contagion;

INSERT INTO products
  (name, CollectionCategory, Collection, imageURL, Price, Color, Design, Brand, Size, Slogan, createdAt, UpdatedAt)
VALUES
  ('Cashmere Quarantine Suit', 'BURBERRRY - Clothing', 'La Collection CORONA Pretentieuse', '', 7190, 'Ligh Camel', 'Tartan Plaid', 'Burberry', 2, "They might cancel Coachella, but they'll never cancel your love of Plaid!",now(), now());

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

VALUES
  ('Prada Cahier Bio Hazard Bag', 'Prada - Accessory', 'La Collection CORONA Pretentieuse', '', 3500, 'Black & Gold', 'Calf Leather & Polypropylene Mesh', 'Prada', 26, "You could always tell a fashion victim by their handbag, and now a Covid-19 victim as well!",now(), now());

  INSERT INTO products
  (name, CollectionCategory, Collection, imageURL, Price, Color, Design, Brand, Size, Slogan, createdAt, UpdatedAt)
VALUES
  ('Chanel Branded Toilet Tissue', 'Chanel - other', 'La Collection CORONA Pretentieuse', '', 1700, 'Alabaster Blanche', 'Virgin Paper & 22 carat 3 ply Gold', 'Chanel', 'One size wipes all!', "If you're gonna take someone's shit, you might as well do it in Style!",now(), now());

INSERT INTO products
  (name, CollectionCategory, Collection, imageURL, Price, Color, Design, Brand, Size, Slogan, createdAt, UpdatedAt)
VALUES
  ('Supreme Dunlop Hazmat Overboots', 'Supreme - Shoes', 'La Collection CORONA Pretentieuse', '', 1500, 'Red & Blue', 'PVC/Polyester', 'Supreme', 'Mens 13 or 15', "Even if you can afford Supreme, you'll never be able to actually buy Supreme, its harder to find then toilet paper!",now(), now());