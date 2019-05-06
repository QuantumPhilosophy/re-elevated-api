'use strict';

module.exports = function(sequelize, DataTypes) {
  const GrowerMenu = sequelize.define("Grower_Menu", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
    grower_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    strain_menu_items: {
      type: DataTypes.TEXT,
      allowNull:false
    }
  });
  GrowerMenu.associate = models => {
    GrowerMenu.belongsTo(models.Grower);
  }
  return GrowerMenu;
};


