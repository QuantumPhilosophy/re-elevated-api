module.exports = function(sequelize, DataTypes) {
  const GrowerMenu = sequelize.define("Grower_Menu", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
  });
  return GrowerMenu;
};
