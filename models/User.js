const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create user model
class User extends Model {}

//define table columns and configurations
User.init(
  {
    //table column definitions
    id: {
      type: DataTypes.INTEGER,
      allownull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allownull: false,
    },
    email: {
      type: DataTypes.STRING,
      allownull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allownull: false,
      validate: {
        len: [4],
      },
    },
  },
  {
    //table configurations
    sequelize,
    timestamps: false, //don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, //don't pluralize name of database table
    underscored: true, //use underscored instead camelcasing
    modelName: "user",
  }
);

module.exports = User;
