//defining middleware as it allows us to group the route handlers
const router = require('express').Router();
//Import tables definded in Models folder
const {User, Product, Order} = require('../../models');

//const { getProducts } = require('../../controllers/contagion_controllers');
//const apiRoutes = require("../api");

router.get('/', (req, res) => {
    Product.findAll()
        //getProducts()
        .then(productdata => {
            console.log(productdata);
            res.render('home', { product: productdata });
        })
        .catch(err => {
            res.status(500).end();
        });
});

module.exports = router;