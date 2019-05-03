'use strict'

const db = require('../models')

module.exports = function (app) {
  app.get('/', function (req, res) {
    console.log('root route triggered')
    db.User.findAll({
      include: [
        { model: db.Wishlisted_Strain }
      ]
    }).then(results => {
      res.json(results)
    })
  })
}
