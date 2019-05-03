const bcrypt = require('bcrypt-nodejs')

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING
    },
    user_email: {
      type: DataTypes.STRING
    },
    user_password: {
      type: DataTypes.STRING
    },
    dob: {
      type: DataTypes.DATE
    },
    user_img: {
      type: DataTypes.STRING
    }
  })

  User.associate = models => {
    User.hasMany(models.Wishlisted_Strain, { foreignKey: 'user_id' })
    User.hasMany(models.Tried_Strain, { foreignKey: 'user_id' })
    User.hasMany(models.Strain_Review, { foreignKey: 'user_id' })
  }

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.user_password)
  }

  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook('beforeCreate', function (user) {
    user.user_password = bcrypt.hashSync(user.user_password, bcrypt.genSaltSync(10), null)
  })

  return User
}
