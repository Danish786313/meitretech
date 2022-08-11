'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Book, {foreignKey: "user_id"});
    }
  }
  User.init({
    username: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    DOB: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};