module.exports = function(sequelize, DataTypes) {
  var TriedStrain = sequelize.define("Tried_Strain", {
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strain_label: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return TriedStrain;
};
