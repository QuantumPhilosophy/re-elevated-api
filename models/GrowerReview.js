module.exports = function(sequelize, DataTypes) {
  const GrowerReview = sequelize.define("Grower_Review", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
    merchant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Merchants',
        key: 'id'
      }
    },
    grower_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    grower_review: {
      type: DataTypes.TEXT,
    },
    grower_rating: {
      type: DataTypes.INTEGER,
    }
  });
  GrowerReview.associate = models => {
    GrowerReview.belongsTo(models.Merchant);
    GrowerReview.belongsTo(models.Grower);
  }
  return GrowerReview;
};
 