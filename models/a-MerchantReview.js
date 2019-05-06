'use strict';

module.exports = function(sequelize, DataTypes) {
  const MerchantReview = sequelize.define('Merchant_Review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    merchant_review: {
      type: DataTypes.TEXT
    },
    merchant_rating: {
      type: DataTypes.INTEGER
    }
  });
  MerchantReview.associate = models => {
    MerchantReview.belongsTo(models.User, {foreignKey: 'user_id'});
    MerchantReview.belongsTo(models.Merchant, {foreignKey: 'merchant_id'});
  }
  return MerchantReview;
};


