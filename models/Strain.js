module.exports = function(sequelize, DataTypes) {
  const Strain = sequelize.define("Strain", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    strain_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strain_race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    strain_flavor: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strain_positive: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strain_negative: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strain_medical: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strain_descr: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strain_img: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    strain_avg_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
  Strain.associate = models => {
    // models.(table_name)
    Strain.belongsToMany(models.Label, {
      through: "StrainLabel",
      foreignKey: "strain_id"
    });
    Strain.hasMany(models.Wishlisted_Strain);
    // Strain.belongsTo(models.User);
  }
  return Strain;
};

