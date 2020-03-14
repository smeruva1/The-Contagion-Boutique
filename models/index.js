// import other models
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');

// connect (associate) models
User.hasMany(Order, {
  onDelete: 'CASCADE'
});

Product.hasMany(Order, {
    onDelete: 'CASCADE'
  });
  
  
  // this will create a column in Post table called 'UserId'
  Order.belongsTo(User);
  Order.belongsTo(Product);

module.exports = { Product, User, Order };
