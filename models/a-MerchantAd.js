'use strict'

module.exports = function (sequelize, DataTypes) {
  const MerchantAd = sequelize.define('Merchant_Ad', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    merchant_id: {
      type: DataTypes.INTEGER
    },
    ad_img: {
      type: DataTypes.TEXT
    }
  })
  MerchantAd.associate = models => {
    MerchantAd.belongsTo(models.Merchant, { foreignKey: 'merchant_id' })
  }
  return MerchantAd
}
