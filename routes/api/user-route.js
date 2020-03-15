// import express router
const router = require('express').Router();
// import models
const { Product, User, Order } = require('../../models');

// get all Users with associated orders
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

// get one User with associated orders
router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    },
    include: [Order]
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


// create a new user
router.post('/', (req, res) => {
  /* 
  {
    "name": "Alex",
    "userType": "customer",
    "email": "alex.rosenkranz@hotmail.biz",
    "password": "1234"
  }

  INSERT INTO users
  (name, userType,email,password, createdAt, UpdatedAt)
VALUES
  ('Sudar', 'customer', 'meruva@gmail.com', '1234',now(), now());

  */

  User.create(req.body)
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update user by id
router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// delete user by id
router.delete('/:id', (req, res) => {
  User.destroy(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
