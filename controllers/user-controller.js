const connection = require('../config/connection');
//Import tables definded in Models folder
const { Product, User, Order } = require('../../models');

// GET ALL users
const getUsers = () => {
    
   return User.findAll({
        include: [Order]
      }).then().catch() 

  };

  
  