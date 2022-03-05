const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

//create user model
class User extends Model {
  checkPassword(loginPw){
    return bcrypt.compareSync(loginPw,this.password);
  }
}

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
    hooks: {
        // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },      
      async beforeUpdate(updatedUserData){
        updatedUserData.password = await bcrypt.hash(updatedUserData.password,10);
        return updatedUserData;
      }
    },
    //table configurations
    sequelize,
    timestamps: false, //don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, //don't pluralize name of database table
    underscored: true, //use underscored instead camelcasing
    modelName: "user",
  }
);

module.exports = User;
