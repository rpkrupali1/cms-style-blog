const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create post model
class Post extends Model {}

// create fields/columns for post model
Post.init(
  //define table columns
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id'
      }
    },
  },
  {
    sequelize,
    underscored: true,
    freezeTableName: true,
    modelName: "post",
  }
);

module.exports = Post;
