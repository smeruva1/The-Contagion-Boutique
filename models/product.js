const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class Product extends Model {
  // set up method to run on instance data (per user) to check password
  //   checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password);
  //   }
}

// create fields/columns for User model
Product.init(
  {
    name: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    CollectionCategory: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    Collection: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    imageURL: {
      Type: DataTypes.STRING,
      isURL: true
    },
    Price: {
      type: DataTypes.Price,
      allowNull: false
    },
    Color: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    Design: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    Brand: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    Size: {
      Type: DataTypes.STRING,
      allowNull: false
    },
    Slogan: {
      Type: DataTypes.STRING,
      allowNull: false
    }
  },
  //   {
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

module.exports = Product;
