module.exports = function(sequelize, DataTypes) {
    var StrainReview = sequelize.define("Strain_Review", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      custy_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      strain_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      strain_label: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      strain_label_review: {
        type: DataTypes.TEXT
      }, 
      strain_label_rating: {
        type: DataTypes.INTEGER
      }
    });
    return StrainReview;
  };
  