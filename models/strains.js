module.exports = function(sequelize, DataTypes) {
  var Strain = sequelize.define("Strain", {
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
    strain_labels: {
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
  return Strain;
};

