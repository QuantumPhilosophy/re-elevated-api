module.exports = function (sequelize, DataTypes) {
  const MerchantAd = sequelize.define('Merchant_Ads', {
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
  return MerchantAd
}
