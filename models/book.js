'use strict';
const { INTEGER } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    authername: DataTypes.STRING,
    ISBN: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};