'use strict'

const bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes) {
    const Merchant = sequelize.define('Merchant', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        }, 
        merchant_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        merchant_email: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        merchant_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        merchant_verification: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        // maybe change to number so we can ping to check their validity
        merchant_verification_img: {
            type: DataTypes.STRING
        },
        merchant_img: {
            type: DataTypes.TEXT
        },
        merchant_location: {
            type: DataTypes.STRING
        },
        merchant_avg_rating: {
            type: DataTypes.DECIMAL(10,2)
        }
    });
    Merchant.associate = models => {
        Merchant.hasMany(models.Merchant_Review, {foreignKey: 'merchant_id'});
        Merchant.hasMany(models.Merchant_Ad, {foreignKey: 'merchant_id'});
    }
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Merchant.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.merchant_password);
    }

    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Merchant.addHook('beforeCreate', function (merchant) {
        merchant.merchant_password = bcrypt.hashSync(merchant.merchant_password, bcrypt.genSaltSync(10), null)
    })
    return Merchant
}
