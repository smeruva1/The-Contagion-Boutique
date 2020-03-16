const router = require('express').Router();

const { getProducts } = require('../../controllers/contagion_controllers');

router.get('/', (req, res) => {
    getProducts()
        .then(productdata => {
            res.render('home', { product: productdata });
        })
        .catch(err => {
            res.status(500).end();
        });
});

module.exports = router;