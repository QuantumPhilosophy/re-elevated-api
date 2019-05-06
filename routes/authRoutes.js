'use strict'

const db = require('../models')
const passport = require('../config/passport')
// const isAuthenticated = require('../config/middleware/isAuthenticated')

module.exports = function (app) {
  // app.get('/', function (req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.render('members', {
  //       msg: 'Welcome to Elevate!'
  //     })
  //   } else {
  //     res.render('signup', {
  //       msg: 'Welcome to Elevate!'
  //     })
  //   }
  // })

  // app.get('/login', function (req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect('/members')
  //   } else {
  //     res.render('login', {
  //       msg: 'Welcome to Elevate!'
  //     })
  //   }
  // })

  app.post('/api/login', passport.authenticate('local'), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.end()
  })

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', function (req, res) {
    console.log('/api/signup route triggered')
    // res.json(req.body)
    db.User.create({
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: req.body.user_password,
      dob: req.body.dob
    }).then(function () {
      // res.redirect(307, '/api/login')
      res.send('user created')
    }).catch(function (err) {
      console.log(err)
      res.json(err)
      // res.status(422).json(err.errors[0].message);
    })
  })

  // Route for logging user out
  // app.get('/logout', function (req, res) {
  //   req.logout()
  //   res.redirect('/')
  // })

  // Route for getting some data about our user to be used client side
  app.get('/api/user_data', function (req, res) {
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
