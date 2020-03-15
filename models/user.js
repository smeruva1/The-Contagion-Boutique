const { Model, DataTypes } = require('sequelize');
//const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    //   checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password);
    //   }
}

// create fields/columns for User model
User.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userType: {
            type: DataTypes.STRING, //Customer or Admin
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
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

module.exports = User;
