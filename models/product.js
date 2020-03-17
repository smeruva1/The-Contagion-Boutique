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
      type: DataTypes.STRING,
      allowNull: false
    },
    CollectionCategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Collection: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING,
      isURL: true
    },
    Price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Design: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Slogan: {
      type: DataTypes.STRING,
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

module.exports = Product;