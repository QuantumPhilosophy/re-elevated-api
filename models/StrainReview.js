'use strict'

module.exports = function (sequelize, DataTypes) {
  const StrainReview = sequelize.define('Strain_Review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    strain_label_review: {
      type: DataTypes.TEXT
    },
    strain_label_rating: {
      type: DataTypes.INTEGER
    },
    strain_label_img: {
      type: DataTypes.STRING
    }
  }, { timestamps: true })
  StrainReview.associate = models => {
    StrainReview.belongsTo(models.User, { foreignKey: 'user_id' })
    StrainReview.belongsTo(models.Strain, { foreignKey: 'strain_id' })
  }
  return StrainReview
}
