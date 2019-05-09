'use strict'

module.exports = function (sequelize, DataTypes) {
  const StrainLabel = sequelize.define('StrainLabel', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
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
  })
  return StrainLabel
}
