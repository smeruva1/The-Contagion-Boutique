// import express router
const router = require('express').Router();
// import models
const {Product, User, Order} = require('../../models');

// get all Users with associated posts
// will eventually be `/api/users`
router.get('/', (req, res) => {
  User.findAll({
    include: [Order]
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;
