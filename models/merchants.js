
module.exports = function(sequelize, DataTypes) {
    const Merchant = sequelize.define("Merchant", {
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
            type: DataTypes.INTEGER
        }
    });

    Merchant.associate = function(models) {
        // Associating Merchant with Merchant_Reviews
        // When an Merchant is deleted, also delete any associated Reviews
        // Merchant.hasMany(models.Merchant_Review);
        // Merchant.hasMany(models.Merchant_Ad);
        // Merchant.hasMany(models.Grower_Review)
    };
    return Merchant;
};
  