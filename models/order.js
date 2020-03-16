const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Order extends Model {
  // set up method to run on instance data (per user) to check password
  //   checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password);
  //   }
}

// create fields/columns for User model
Order.init(
  {
    userId: {
      Type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      Type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      Type: DataTypes.INTEGER,
      allowNull: false
    },
    totalAmount: {
      Type: DataTypes.PRICE,
      allowNull: false
    }
  },
  {
    //     hooks: {
    //       // set up beforeCreate lifecycle "hook" functionality
    //       async beforeCreate(newUserData) {
    //         const hashedPw = await bcrypt.hash(newUserData.password, 10);
    //         newUserData.password = hashedPw;
    //         return newUserData;
    //       }
    //     },
    sequelize,
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // productId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    //     hooks: {
    //       // set up beforeCreate lifecycle "hook" functionality
    //       async beforeCreate(newUserData) {
    //         const hashedPw = await bcrypt.hash(newUserData.password, 10);
    //         newUserData.password = hashedPw;
    //         return newUserData;
    //       }
    //     },
    sequelize

  }
);

module.exports = Order;
