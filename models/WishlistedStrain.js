module.exports = function(sequelize, DataTypes) {
  const WishlistedStrain = sequelize.define("Wishlisted_Strain", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
  });
  WishlistedStrain.associate = models => {
    // WishlistedStrain.belongsTo(models.Label);
    
  }
  return WishlistedStrain;
};
