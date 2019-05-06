'use strict'
const db = require("../models");

module.exports = function (app) {

  // All of User's Use Cases
  // ==============================
  // Get all wishlisted items of the logged in user
  app.get('/:id/wishlisted', function (req, res) {
    db.User.findAll({
      where: { id: req.params.id },
      include: [
        { model: db.Wishlisted_Strain },
      ]
    }).then(results => {
      res.json(results);
    })
  });
  // Add new item to wishlist (post)
  // Remove item from wishlist

  // Get all tried items of the logged in user
  app.get('/:id/tried', function (req, res) {
    db.User.findAll({
      where: { id: req.params.id },
      include: [
        { model: db.Tried_Strain },
      ]
    }).then(results => {
      res.json(results);
    })
  });
  // Add new item to tried list (post)
  // Remove item from tried list

  // Get all strain reviews written by the logged in user
  app.get('/:id/strainreviews', function (req, res) {
    db.User.findAll({
      where: { id: req.params.id },
      include: [
        { model: db.Strain_Review },
      ]
    }).then(results => {
      res.json(results);
    })
  });
  // Add new review to an item (post)
  // Update already existing reviews
  // Remove a review written

  // Get all merchant reviews written by the logged in user
  app.get('/:id/merchantreviews', function (req, res) {
    db.User.findAll({
      where: { id: req.params.id },
      include: [
        { model: db.Merchant_Review },
      ]
    }).then(results => {
      res.json(results);
    })
  });
  // Add new review to an item (post)
  // Update already existing reviews
  // Remove a review written

  // All of Label's/Strain's Use Cases
  // ================================
  // Get all strains available to customers
  app.get('/strains', function (req, res) {
    db.Strain.findAll({}).then(results => {
      res.json(results);
    })
  });
  // Adding new strains to the database (post)

  // All of Merchants's Use Cases
  // ================================
  // Get all verified merchants 
  app.get('/merchants', function (req, res) {
    db.Merchant.findAll({}).then(results => {
      res.json(results);
    })
  });

  // Get all reviews written about this merchant
  app.get('/:merchantid/merchantreview', function (req, res) {
    db.Merchant.findAll({
      where: { id: req.params.merchantid },
      include: [
        { model: db.Merchant_Review }
      ]
    }).then(results => {
      res.json(results);
    })
  });

  // Merchants adding ads (post)
  // Merchant adding growers review (post)

  // All of Growers's Use Cases
  // ================================
  // Get all verified growers
  app.get('/grower', function (req, res) {
    db.Grower.findAll({}).then(results => {
      res.json(results);
    })
  });

  // Get all reviews written about this grower
  app.get('/:growerid/growerreviews', function() {
    db.Grower.findAll({
      where: { id: req.params.growerid },
      include: [
        { model: db.Grower_Review }
      ]
    }).then(results => {
      res.json(results);
    })
  });

  // Get grower's menu
  app.get('/:growerid/growermenu', function (req, res) {
    db.Grower.findAll({
      where: { id: req.params.growerid },
      include: [
        { model: db.Grower_Menu }
      ]
    }).then(results => {
      res.json(results);
    })
  });
}
