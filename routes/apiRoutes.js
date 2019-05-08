const db = require('../models')

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.json('Welcome to Elevate!')
  })

  // All of User's Use Cases
  // ==============================

  // Get all wishlisted items of the logged in user
  app.get('/wishlisted/:userId', function (req, res) {
    db.Wishlisted_Strain.findAll({
      where: { user_id: req.params.userId }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new item to wishlist (post)
  app.post('/wishlisted/:userId', function (req, res) {
    db.Wishlisted_Strain.create({
      user_id: req.params.userId,
      strain_id: req.body.strainId
    }).then(results => {
      res.json(results)
    })
  })

  // Remove item from wishlist
  app.delete('/wishlisted/:wishId', function (req, res) {
    db.Wishlisted_Strain.destroy({
      where: { id: req.params.wishId }
    }).then(results => {
      res.json(results)
    })
  })

  // Get all tried items of the logged in user
  app.get('/tried/:userId', function (req, res) {
    db.Tried_Strain.findAll({
      where: { user_id: req.params.userId }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new item to tried list (post)
  app.post('/tried/:userId', function (req, res) {
    db.Tried_Strain.create({
      user_id: req.params.userId,
      strain_id: req.body.strainId
    }).then(results => {
      res.json(results)
    })
  })

  // Remove item from tried list
  app.delete('/tried/:triedId', function (req, res) {
    db.Tried_Strain.destroy({
      where: { id: req.params.triedId }
    }).then(results => {
      res.json(results)
    })
  })

  // Get all strain reviews written by the logged in user
  app.get('/strainreviews/:userId', function (req, res) {
    db.Strain_Review.findAll({
      where: { user_id: req.params.userId }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new review to a strain (post)
  app.post('/strainreviews/:userId', function (req, res) {
    db.Strain_Review.create({
      user_id: req.params.userId,
      strain_id: req.body.strainId
    }).then(results => {
      res.json(results)
    })
  })

  // Update already existing reviews
  app.put('/strainreviews/:reviewId', function (req, res) {
    db.Strain_Review.update({

    }, {
      where: { id: req.params.reviewId }
    }).then(results => {
      res.json(results)
    })
  })

  // Remove a review written
  app.delete('/strainreviews/remove/:reviewId', function (req, res) {
    db.Strain_Review.destroy({
      where: { id: req.params.reviewId }
    }).then(results => {
      res.json(results)
    })
  })

  // Get all merchant reviews written by the logged in user
  app.get('/merchantreviews/:userId', function (req, res) {
    db.Merchant_Review.findAll({
      where: { user_id: req.params.userId }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new review to a merchant (post)
  app.post('/merchantreviews/:userId', function (req, res) {
    db.Merchant_Review.create({
      user_id: req.params.userId,
      merchant_id: req.body.merchantId,
      merchant_review: req.body.merchantReview,
      merchant_rating: req.body.merchantRating
    }).then(results => {
      res.json(results)
    })
  })

  // Update already existing merchant review
  app.put('/merchantreviews/update/:userId', function (req, res) {
    db.Merchant_Review.update(
      {},
      { where: { id: req.params.userId } }
    ).then(results => {
      res.json(results)
    })
  })

  // Remove a written merchant review
  app.delete('/merchantreviews/remove/:merchantId', function (req, res) {
    db.Merchant_Review.destroy({
      where: {
        id: req.params.merchantId
      }
    }).then(results => {
      res.json(results)
    })
  })

  // All of Label's/Strain's Use Cases
  // ================================

  // Get all strains available to customers
  app.get('/strains', function (req, res) {
    db.Strain.findAll({}).then(results => {
      res.json(results)
    })
  })

  // Adding new strains to the database (post)
  app.post('/strains', function (req, res) {
    db.Strain.create({
      strain_name: req.body.strainName,
      strain_race: req.body.strainRace,
      strain_flavor: req.body.strainFlavor,
      strain_positive: req.body.strainPositive,
      strain_negative: req.body.strainNegative,
      strain_medical: req.body.strainMedical,
      strain_descr: req.body.strainDescr,
      strain_img: req.body.strainImg,
      strain_avg_rating: req.body.strainAvgRating
    }).then(results => {
      res.json(results)
    })
  })

  // All of Merchants's Use Cases
  // ================================

  // Get all verified merchants
  app.get('/merchants', function (req, res) {
    db.Merchant.findAll({}).then(results => {
      res.json(results)
    })
  })

  // Get all reviews written about this merchant
  app.get('/merchantreviews/:merchantId', function (req, res) {
    db.Merchant_Review.findAll({
      where: { id: req.params.merchantId }
    }).then(results => {
      res.json(results)
    })
  })

  // Get all merchant's Ads
  app.get('/merchantads/:merchantId', function (req, res) {
    db.Merchant_Review.findAll({
      where: { id: req.params.merchantId }
    }).then(results => {
      res.json(results)
    })
  })

  // Merchants adding ads (post)
  app.post('/merchantads/add/:merchantId', function (req, res) {
    db.Merchant_Ad.create({
      merchant_id: req.params.merchantId,
      ad_img: req.body.adImg
    }).then(results => {
      res.json(results)
    })
  })
  // Merchant adding growers review (post)
  app.post('/growerreviews/add/:merchantId', function (req, res) {
    db.Grower_Review.create({
      merchant_id: req.params.merchantId,
      grower_id: req.body.growerId,
      grower_review: req.body.growerReview,
      grower_rating: req.body.growerRating
    }).then(results => {
      res.json(results)
    })
  })

  // All of Growers's Use Cases
  // ================================

  // Get all verified growers
  app.get('/grower', function (req, res) {
    db.Grower.findAll({}).then(results => {
      res.json(results)
    })
  })

  // Get all reviews written about this grower
  app.get('/growerreviews/:growerId', function () {
    db.Grower_Review.findAll({
      where: { id: req.params.growerId }
    }).then(results => {
      res.json(results)
    })
  })

  // Get grower's menu
  app.get('/growermenu/:growerId', function (req, res) {
    db.Grower_Menu.findAll({
      where: { id: req.params.growerId }
    }).then(results => {
      res.json(results)
    })
  })

  // add grower's menu
  app.post('/growermenu/add/:growerId', function (req, res) {
    db.Grower_Menu.create({
      grower_id: req.params.growerId,
      strain_list: req.body.strainList
    }).then(results => {
      res.json(results)
    })
  })

  // ===========================
  // START OF TEST CODE
  // ===========================

  // getting all users
  app.get('/users', function (req, res) {
    db.User.findAll({}).then(results => {
      res.json(results)
    })
  })

  // adding users
  app.post('/adduser', function (req, res) {
    db.User.create({
      user_name: req.body.userName,
      user_email: req.body.userEmail,
      user_password: req.body.userPassword,
      dob: req.body.dob,
      user_img: req.body.userImg
    }).then(results => {
      res.json(results)
    })
  })

  // ===========================
  // END OF TEST CODE
  // ===========================
}
