'use strict'

module.exports = function (sequelize, DataTypes) {
  const MerchantReview = sequelize.define('Merchant_Review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    custy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Merchants',
        key: 'id'
      }
    },
    merchant_review: {
      type: DataTypes.TEXT
    },
    merchant_rating: {
      type: DataTypes.INTEGER
    }
  })
  MerchantReview.associate = models => {
    MerchantReview.belongsTo(models.User)
    MerchantReview.belongsTo(models.Merchant)
  }
  return MerchantReview
}
