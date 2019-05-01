module.exports = function(sequelize, DataTypes) {
  const WishlistedStrain = sequelize.define("Wishlised_Strain", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
    custy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strain_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strain_label: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  WishlistedStrain.associate = function(models) {
    // Associating Custy with Merchant_Reviews
    // When an Custy is deleted, also delete any associated Reviews
    WishlistedStrain.hasMany(models.Custy)
    WishlistedStrain.hasMany(models.Strain)
  };
  return WishlistedStrain;
};
