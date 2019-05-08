'use strict'

module.exports = function (sequelize, DataTypes) {
  const Grower = sequelize.define('Grower', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    grower_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grower_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grower_password: {
      type: DataTypes.STRING
    },
    grower_verification_img: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    grower_img: {
      type: DataTypes.TEXT
    },
    grower_avg_rating: {
      type: DataTypes.INTEGER
    }
  })
  Grower.associate = models => {
    Grower.hasMany(models.Grower_Review, { foreignKey: 'grower_id' })
    Grower.hasOne(models.Grower_Menu, { foreignKey: 'grower_id' })
  }
  return Grower
}
