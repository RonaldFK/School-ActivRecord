const sequelize = require('../data/databaseConnect')
const { Sequelize, DataTypes, Model } = require('sequelize')

class Promo extends Model {}

Promo.init(
  {
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    github_organization: {
      type: DataTypes.TEXT
      // allowNull defaults to true
    }
  },
  {
    sequelize,
    modelName: 'Promo',
    tableName: 'promo',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
module.exports = Promo
