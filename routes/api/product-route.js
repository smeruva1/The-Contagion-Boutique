//defining middleware as it allows us to group the route handlers
const router = require('express').Router();
//Import tables definded in Models folder
const {User, Product, Order} = require('../../models');

// get all Products with associated Orders
// will eventually be `/api/Products`
router.get('/', (req, res) => {
  Product.findAll({
    include: [Order]
  })
    .then(productdata => res.json(productdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// get one Product with associated orders
router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [Order]
  })
    .then(Productdata => res.json(Productdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


// create a new Product
router.post('/', (req, res) => {
  /* 
  {
    "name": "Prada Cahier Bio Hazard Bag",
    "CollectionCategory": "Prada - Medical",
    "Collection": "La Collection CORONA Pretentieuse",
    "imageURL": "",
    "Price": 3500,
    "Color": "Black & Gold",
    "Design": "Calf Leather & Polypropylene Mesh",
    "Brand": "Prada",
    "Size": "12",
    "Slogan": "You could always tell a fashion victim by their handbag, and now a COVID-19 victim as well!"
  }

  INSERT INTO products
  (name, CollectionCategory, Collection, imageURL, Price, Color, Design, Brand, Size, Slogan, createdAt, UpdatedAt)
VALUES
  ('Cashmere Quarantine Suit', 'BURBERRRY - Clothing', 'La Collection CORONA Pretentieuse', '', 7190, 'Ligh Camel', 'Tartan Plaid', 'Burberry', 2, "They might cancel Coachella, but they'll never cancel your love of Plaid!",now(), now());

  */

  Product.create(req.body)
    .then(Productdata => res.json(Productdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update Product by id
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(Productdata => res.json(Productdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// delete Product by id
router.delete('/:id', (req, res) => {
  Product.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(Productdata => res.json(Productdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
