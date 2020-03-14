// import express router
const router = require('express').Router();
// import models
const {Product, User, Order} = require('../../models');

// get all Users with associated posts
// will eventually be `/api/users`
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


module.exports = router;
