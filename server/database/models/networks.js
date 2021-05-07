'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class networks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  networks.init({
    mcc: DataTypes.INTEGER,
    mnc: DataTypes.INTEGER,
    iso: DataTypes.TEXT,
    country: DataTypes.TEXT,
    country_code: DataTypes.INTEGER,
    network: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'networks',
  });
  return networks;
};