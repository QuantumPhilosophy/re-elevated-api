'use strict'

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const db = require('../models')

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  {
    passReqToCallback: true
  },
  function (req, username, password, done) {
    console.log(req.body.type)
    if (req.body.type === 'user') {
      console.log('check if user is actually a user')
      db.User.findOne({
        where: { user_name: username }
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        done(null, user)
      })
    } else if (req.body.type === 'merchant') {
      console.log('check if user is actually a merchant')
      db.Merchant.findOne({
        where: { merchant_name: username }
      }).then(user => {
        console.log('got stuff back from merchant query call')
        if (!user) {
          console.log('not working')
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      })
    } else if (req.body.type === 'grower') {
      console.log('check if user is actually a grower')
      db.Grower.findOne({
        where: { grower_name: username }
      }).then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' })
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' })
        }
        return done(null, user)
      })
    }
  }
))

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, cb) {
  cb(null, user)
})

passport.deserializeUser(function (obj, cb) {
  cb(null, obj)
})

// Exporting our configured passport
module.exports = passport
