'use strict';

module.exports = function(sequelize, DataTypes) {
  const TriedStrain = sequelize.define('Tried_Strain', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }, 
    // custy_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'Users',
    //     key: 'id'
    //   }
    // },
    // strain_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'Strains',
    //     key: 'id'
    //   }
    // },
    // label_id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   references: {
    //     model: 'Labels',
    //     key: 'id'
    //   }
    // }
  });
  TriedStrain.associate = models => {
    // TriedStrain.belongsTo(models.User);
    // TriedStrain.belongsTo(models.Strain);
  }
  return TriedStrain;
};


