module.exports = function(sequelize, DataTypes) {
    var Custy = sequelize.define("Custy", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      custy_name: {
        type: DataTypes.STRING,
      },
      custy_user_name: {
        type: DataTypes.STRING,
      },
      custy_email: {
        type: DataTypes.STRING,
      },
      custy_password: {
        type: DataTypes.STRING,
      },
      dob: {
        type: DataTypes.DATE,
      }, 
      custy_img: {
        type: DataTypes.STRING,
      }, 
      strain_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      strain_label: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
    });
    Custy.associate = function(models) {
      // Associating Custy with Merchant_Reviews
      // When an Custy is deleted, also delete any associated Reviews
    };
    return Custy;
  };
  