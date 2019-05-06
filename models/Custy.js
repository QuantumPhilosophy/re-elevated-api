'use strict';

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
    },
    user_email: {
      type: DataTypes.STRING,
    },
    user_password: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    }, 
    user_img: {
      type: DataTypes.STRING,
    }, 
  });
  User.associate = models => {
    User.hasMany(models.Wishlisted_Strain, {foreignKey: "user_id"});
    User.hasMany(models.Tried_Strain, {foreignKey: "user_id"});
    User.hasMany(models.Strain_Review, {foreignKey: "user_id"});
  }
  return User;
};


