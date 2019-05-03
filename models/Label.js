module.exports = function (sequelize, DataTypes) {
  const Label = sequelize.define('Label', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    label_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    label_img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    label_avg_rating: {
      type: DataTypes.INTEGER
    }
  })
  Label.associate = models => {
    // models.(table_name)
    Label.belongsToMany(models.Strain, {
      through: 'StrainLabel',
      foreignKey: 'label_id'
    })
  }
  return Label
}
