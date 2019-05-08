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
  app.post('/auth/signup', function (req, res) {
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

  // Route for signing up a merchant. We *must* be certain when setting up routes on web/mobile side that there is actually a receiving route setup on the api side.
  app.post('/auth/merchant/signup', function (req, res) {
    db.User.create({
      user_name: req.body.name,
      user_email: req.body.email, 
      user_password: req.body.password,
      user_address: req.body.address
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
