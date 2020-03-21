use db_contagion;

INSERT INTO products
  (name, CollectionCategory, Collection, imageURL, Price, Color, Design, Brand, Size, Slogan, createdAt, UpdatedAt)
VALUES
  ('Cashmere Quarantine Suit', 'BURBERRRY - Clothing', 'La Collection CORONA Pretentieuse', '/img/burberryproduct.jpg', 7190, 'Ligh Camel', 'Tartan Plaid', 'Burberry', "2-10", "They might cancel Coachella, but they'll never cancel your love of Plaid!",now(), now()),
  ('Prada Cahier Bio Hazard Bag', 'Prada - Accessory', 'La Collection CORONA Pretentieuse', '/img/pradaproduct.jpg', 3500, 'Black & Gold', 'Calf Leather & Polypropylene Mesh', 'Prada', "Petite- XL", "You could always tell a fashion victim by their handbag, and now a Covid-19 victim as well!",now(), now()),
  ('Chanel Branded Toilet Tissue', 'Chanel - other', 'La Collection CORONA Pretentieuse', '/img/chanelproduct.jpg', 1700, 'Alabaster Blanche', 'Virgin Paper & 22 carat 3 ply Gold', 'Chanel', 'One size wipes all!', "If you're gonna take someone's shit, you might as well do it in Style!",now(), now()),
  ('Supreme Dunlop Hazmat Overboots', 'Supreme - Shoes', 'La Collection CORONA Pretentieuse', '/img/supremeproduct.jpg', 1500, 'Red & Blue', 'PVC/Polyester', 'Supreme', 'Mens 13 or 15', "Even if you can afford Supreme, you'll never be able to actually buy Supreme, its harder to find then toilet paper!",now(), now());
  
INSERT INTO products
  (name, CollectionCategory, Collection, imageURL, Price, Color, Design, Brand, Size, Slogan, createdAt, UpdatedAt)
  VALUES
  ('Dolce & Gabbana Golden Heart Hazmat Mask', 'Dolce & Gabbana - Accessory', 'La Collection CORONA Pretentieuse', '/img/dolcegabbanaproduct.jpg', 20000, 'Galvanic Gold', 'Embossed and embellished with filigree and crystal jewels', 'Dolce & Gabbana', 'Adjustable strap, one size fits most', "Fashion takes its inspiration from society and everyday life. So wearing this, what does that tell you about today?",now(), now()),
  ('Gucci Transparent Ophidia Social Distancing Suit', 'Gucci - Clothing', 'La Collection CORONA Pretentieuse', '/img/gucciproduct.jpg', 9000, 'Transparent PVC & Pink Grained Leather', 'Leather & Polyvinyl Chloride', 'Gucci', 'Adjustable, one size fits most', "Quality is remembered long after price is forgotten",now(), now()),
  ('Versace Aurum Face Mask', 'Versace - Accessory', 'La Collection CORONA Pretentieuse', '/img/versaceproduct.jpg', 7500, 'Gold', 'Polished Italian 14K Gold Mesh exterior with an inner lining of non-fabric material', 'Versace', 'Adjustable, one size fits most', "People will stare. Make it worth their while.",now(), now()),
  ('Calvin Kline Ready for Tomorrow Ensemble', 'Calvin Kline - Clothing', 'La Collection CORONA Pretentieuse', '/img/calvinklienproduct.jpg', 11000, 'Blue & Yellow', 'Trimmed with coyote fur and apocalypse ready Kevlar weave.', 'Calvin Kline', 'Small, Medium, & Large', "Just buy the outfit....no point in being the richest bitch in the cemetery",now(), now());



SELECT * FROM db_contagion.products;


INSERT INTO users
  (name, userType,email,password, createdAt, UpdatedAt)
VALUES
  ('Alex', 'customer', 'alex@gmail.com', '1234',now(), now()),
  ('Josh', 'customer', 'josh@gmail.com', '5634',now(), now()),
  ('Joey', 'customer', 'joey@gmail.com', '7734',now(), now());

SELECT * FROM db_contagion.users;


INSERT INTO orders
  (quantity, totalAmount,createdAt, UpdatedAt,UserId,ProductId )
VALUES
  (1, 1450,now(), now(),1,1);

SELECT * FROM db_contagion.orders;

