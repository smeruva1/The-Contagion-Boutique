// import express router
const router = require('express').Router();
// import models
const {Product, User, Order} = require('../../models');

// get all orders with associated users
// will eventually be `/api/orders`
router.get('/', (req, res) => {
  Order.findAll({
    include: [User, Product]
  })
    .then(orderdata => res.json(orderdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


// get one orders with associated users
// will eventually be `/api/orders/1`
router.get('/:id', (req, res) => {
  Order.findOne({
    where: {
      id: req.params.id
    },
    include: [User, Product]
  })
    .then(orderdata => res.json(orderdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


// create a new order
router.post('/', (req, res) => {
  /* 
  {
    "quantity": 3,
    "totalamount": 2300,
    "UserId": 1,
    "ProductId": 1    
  }
  
  INSERT INTO orders
  (quantity, totalAmount,createdAt, UpdatedAt,UserId,ProductId )
VALUES
  (1, 1450,now(), now(),1,1);

  */

  Order.create(req.body)
    .then(orderdata => res.json(orderdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});

// update one orders with associated users
// will eventually be `/api/orders/1`
router.put('/:id', (req, res) => {
  Order.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(orderdata => res.json(orderdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


// delete one orders with associated users
// will eventually be `/api/orders/1`
router.delete('/:id', (req, res) => {
  Order.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(orderdata => res.json(orderdata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;
