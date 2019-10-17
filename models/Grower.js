'use strict'

const bcrypt = require('bcrypt-nodejs')

module.exports = function (sequelize, DataTypes) {
  const Grower = sequelize.define('Grower', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    grower_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grower_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grower_password: {
      type: DataTypes.STRING
    },
    grower_verification_img: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
      // allowNull: false
    },
    grower_img: {
      type: DataTypes.TEXT
    },
    grower_avg_rating: {
      type: DataTypes.INTEGER
    }
  })
  Grower.associate = models => {
    Grower.hasMany(models.Grower_Review, { foreignKey: 'grower_id' })
    Grower.hasOne(models.Grower_Menu, { foreignKey: 'grower_id' })
  }
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Grower.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.grower_password)
  }

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Grower.addHook('beforeCreate', function (grower) {
    grower.grower_password = bcrypt.hashSync(grower.grower_password, bcrypt.genSaltSync(10), null)
  })
  return Grower
}
