module.exports = function (sequelize, DataTypes) {
  const StrainReview = sequelize.define('Strain_Review', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    custy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    strain_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Strains',
        key: 'id'
      }
    },
    label_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Labels',
        key: 'id'
      }
    },
    strain_label_review: {
      type: DataTypes.TEXT
    },
    strain_label_rating: {
      type: DataTypes.INTEGER
    }
  })
  StrainReview.associate = models => {
    StrainReview.belongsTo(models.User)
  }
  return StrainReview
}
