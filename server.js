// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server
// ******************************************************************************

// Dependencies
// =============================================================
const express = require('express')
const session = require('express-session')
const passport = require('./config/passport')

// Sets up the Express App
// =============================================================
const app = express()
const PORT = process.env.PORT || 3030

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// Requiring our models for syncing
const db = require('./models')

// Routes
require('./routes').apiRoutes(app);
require('./routes').authRoutes(app);

const syncOptions = {
  force: false
}

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true
}

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    )
  })
})
