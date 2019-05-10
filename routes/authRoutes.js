'use strict'

const db = require('../models')
const passport = require('../config/passport')
// const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function (app) {
  // Route for authenticating a user for login
  app.post('/auth/login', function(req,res,next){
    console.log("authRoutes.js connected to stand alone api");
    console.log(req.body.type);
    passport.authenticate('local',function (){
      return res.redirect('/');
    })(req,res,next);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/auth/signup", function(req, res) {
    let account_type = req.body.account_type;
    if (account_type === "user") {
      db.User.create({
        user_name: req.body.name,
        user_email: req.body.email,
        user_password: req.body.password,
        dob: req.body.dob
      })
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err) {
          res.json(err);
        });
    } else if (account_type === "merchant") {
      db.Merchant.create({
        merchant_name: req.body.name,
        merchant_email: req.body.email,
        merchant_password: req.body.password,
        merchant_verification: true,
        merchant_verification_img: req.body.verification_img,
        merchant_img: req.body.img,
        merchant_location: req.body.location
      })
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err) {
          res.json(err);
        });
    } else if (account_type === "grower") {
      db.Grower.create({
        grower_name: req.body.name,
        grower_email: req.body.email,
        grower_password: req.body.password,
        // grower_verification: req.body.grower_verification,
        grower_verification_img: req.body.grower_verification_img,
        grower_img: req.body.grower_img
      })
        .then(function(data) {
          res.json(data);
        })
        .catch(function(err) {
          res.json(err);
        });
    }
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.json("Logged Out");
  });

  // Route for getting some data about our user to be used client side
  app.get("/auth/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};

