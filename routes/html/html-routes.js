//defining middleware as it allows us to group the route handlers
const router = require('express').Router();
//Import tables definded in Models folder
const { User, Product, Order } = require('../../models');
const path = require('path');

//const { getProducts } = require('../../controllers/contagion_controllers');
//const apiRoutes = require("../api");

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/catalog/products', (req, res) => {
    Product.findAll()

        .then(productdata => {
            console.log(productdata);
            res.render('product', { product: productdata });
        })
        .catch(err => {
            res.status(500).end();
        });
});

//get one Product with associated orders
router.get('/catalog/products/:id', (req, res) => {
    Product.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(productdata => {
            console.log(productdata);
            res.render('singleProduct', { product: productdata });
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        });
});


router.get('/catalog/orders', (req, res) => {
    Order.findAll({
      include: [User, Product]
    })
    .then(orderdata => {
        //console.log(orderdata);
        res.render('order', { order: orderdata });
    })
    .catch(err => {
        res.status(500).end();
    });
  });
  
module.exports = router;