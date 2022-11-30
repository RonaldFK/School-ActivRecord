const sequelize = require('../data/databaseConnect')
const { Sequelize, DataTypes, Model } = require('sequelize')

class Students extends Model {}

Students.init(
  {
    first_name: {
      type: DataTypes.TEXT,
      allowNull: true // default value
    },
    last_name: {
      type: DataTypes.TEXT
      // allowNull defaults to true
    },
    github_username: {
      type: DataTypes.TEXT
      // allowNull defaults to true
    },
    promo: {
      type: DataTypes.BIGINT
      // allowNull defaults to true
    },
    profile_picture_url: {
      type: DataTypes.TEXT
      // allowNull defaults to true
    }
  },
  {
    sequelize,
    modelName: 'Students',
    tableName: 'students',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
module.exports = Students
