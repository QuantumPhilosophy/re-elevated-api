'use strict'

const db = require('../models')
const passport = require('../config/passport')
// const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function (app) {
  app.post('/auth/login', passport.authenticate('local'), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.end()
  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/auth/user/signup', function (req, res) {
    db.User.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: req.body.user_password,
      dob: req.body.dob
    }).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  })

  // Route for signing up as a merchant
  app.post('/auth/merchant/signup', function (req, res) {
    db.Merchant.create({
      merchant_name: req.body.merchant_name,
      merchant_email: req.body.merchant_email,
      merchant_password: req.body.merchant_password,
      merchant_verification: req.body.merchant_verification,
      merchant_verification_img: req.body.merchant_verification_img,
      merchant_img: req.body.merchant_img,
      merchant_location: req.body.merchant_location
    }).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  })

  // Route for signing up as a grower
  app.post('/auth/grower/signup', function (req, res) {
    db.Grower.create({
      grower_name: req.body.grower_name,
      grower_email: req.body.grower_email,
      grower_password: req.body.grower_password,
      // grower_verification: req.body.grower_verification,
      grower_verification_img: req.body.grower_verification_img,
      grower_img: req.body.grower_img,
    }).then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  })

  // Route for logging user out
  app.get('/logout', function (req, res) {
    req.logout()
    res.json('Logged Out')
  })

  // Route for getting some data about our user to be used client side
  app.get('/auth/user_data', function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({})
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      })
    }
  })
}
