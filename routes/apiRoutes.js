const db = require('../models')

module.exports = function (app) {

  function calcAvg(arr) {
    // iterate through all the ratings and sum them up
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].dataValues.strain_label_rating;
    }
    let avgRating = sum / arr.length;
    return avgRating;
  };

  app.get('/', function (req, res) {
    res.json('Welcome to Elevated!')
  })

  // All of User's Use Cases
  // ==============================
  // Adding new User to DB
  app.post('/auth/user/signup', function (req, res) {
    db.User.create({
      user_name: req.body.name,
      user_email: req.body.email,
      user_password: req.body.password,
      dob: req.body.dob
    }).then(results => {
      res.json(results);
    })
  });

  // below code should be in authRoutes.js

  // // Adding new User to DB
  // app.post('/auth/user/signup', function (req, res) {
  //   db.User.create({
  //     user_name: req.body.name,
  //     user_email: req.body.email,
  //     user_password: req.body.password,
  //     dob: req.body.dob
  //   }).then(results => {
  //     res.json(results);
  //   })
  // });

  // below code should be in authRoutes.js

  // // Adding new User to DB
  // app.post('/auth/user/signup', function (req, res) {
  //   db.User.create({
  //     user_name: req.body.name,
  //     user_email: req.body.email,
  //     user_password: req.body.password,
  //     dob: req.body.dob
  //   }).then(results => {
  //     res.json(results);
  //   })
  // });

  // Get all wishlisted items of the logged in user
  app.get('/wishlisted/:user_id', function (req, res) {
    db.Wishlisted_Strain.findAll({
      where: { user_id: req.params.user_id }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new item to wishlist (post)
  app.post('/wishlisted/:user_id', function (req, res) {
    db.Wishlisted_Strain.create({
      user_id: req.params.user_id,
      strain_id: req.body.strain_id,
      label_id: req.body.label_id
    }).then(results => {
      res.json(results)
    })
  })

  // Remove item from wishlist
  app.delete('/wishlisted/:wish_id', function (req, res) {
    db.Wishlisted_Strain.destroy({
      where: { 
        id: req.params.wish_id,
        user_id: req.body.user_id 
      }
    }).then(results => {
      res.json(results)
    })
  })

  // Get all tried items of the logged in user
  app.get('/tried/:user_id', function (req, res) {
    db.Tried_Strain.findAll({
      where: { 
        user_id: req.params.user_id 
      }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new item to tried list (post)
  app.post('/tried/:user_id', function (req, res) {
    db.Tried_Strain.create({
      user_id: req.params.user_id,
      strain_id: req.body.strain_id,
      label_id: req.body.label_id
    }).then(results => {
      res.json(results)
    })
  })

  // Remove item from tried list
  app.delete('/tried/:tried_id', function (req, res) {
    db.Tried_Strain.destroy({
      where: { 
        id: req.params.tried_id ,
        user_id: req.body.user_id 
      }
    }).then(results => {
      res.json(results)
    })
  })

  // Get all strain reviews written by the logged in user
  app.get('/strainreviews/:user_id', function (req, res) {
    db.Strain_Review.findAll({
      where: { 
        user_id: req.params.user_id 
      }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new review to a strain (post)
  app.post('/strainreviews/:user_id', function (req, res) {
    // create new instance of a review
    db.Strain_Review.create({
      user_id: req.params.user_id,
      strain_id: req.body.strain_id,
      label_id: req.body.label_id,
      strain_label_review: req.body.strain_label_review,
      strain_label_rating: req.body.strain_label_rating
    }).then(results => {
      // grab the all rating of the strain that the new review is about
      console.log("created a new review");
      db.Strain_Review.findAll({
        where: {
          strain_id: results.strain_id
        },
        // selects the strain_label_rating column
        attributes: ['strain_label_rating']
      }).then(results => {
        // update the strain_rating in strain table
        // results should be an array of numbers which is the rating given in all reviews
        console.log("array of ratings", results.length); // this should be an array of ratings
        let newRating = calcAvg(results);
        console.log("avg rating:", newRating);
        db.Strain.update({
          strain_avg_rating: newRating
        }, { 
          where: { id: req.body.strain_id } 
        }).then(results => {
          console.log("updated new strain avg rating");
          // res.json(results);
        })
      })

      // 
      db.Strain_Review.findAll({
        where: {
          label_id: results.label_id
        },
        // selects the strain_label_rating column
        attributes: ['strain_label_rating']
      }).then(results => {
        // update the label_rating in the lables table
        // results should be an array of numbers which is the rating given in all reviews
        console.log("array of ratings", results.length); // this should be an array of ratings
        let newRating = calcAvg(results);
        console.log("avg rating:", newRating);
        
        db.Label.update({
          label_avg_rating: newRating
        }, { 
          where: { id: req.body.label_id } 
        }).then(results => {
          console.log("updated new label avg rating");
          // res.json(results);
        })
      });
      res.json(results);
    });
  });

  // Update already existing reviews
  app.put('/strainreviews/:review_id', function (req, res) {
    db.Strain_Review.update({

    }, {
      where: { id: req.params.review_id }
    }).then(results => {
      res.json(results)
    })
  })

  // Remove a review written
  app.delete('/strainreviews/remove/:review_id', function (req, res) {
    db.Strain_Review.destroy({
      where: { id: req.params.review_id }
    }).then(results => {
      res.json(results)
    })
  })

  // Get all merchant reviews written by the logged in user
  app.get('/merchantreviews/:user_id', function (req, res) {
    db.Merchant_Review.findAll({
      where: { user_id: req.params.user_id }
    }).then(results => {
      res.json(results)
    })
  })

  // Add new review to a merchant (post)
  app.post('/merchantreviews/:user_id', function (req, res) {
    db.Merchant_Review.create({
      user_id: req.params.user_id,
      merchant_id: req.body.merchant_id,
      merchant_review: req.body.merchant_review,
      merchant_rating: req.body.merchant_rating
    }).then(results => {
      // update merchant's ratings
      // grabbing all ratings of the merchant with the given id
      console.log(results);
      db.Merchant_Review.findAll({
        where: { id: results.merchant_id }
      })

      res.json(results);
    })
  })

  // Update already existing merchant review
  app.put('/merchantreviews/update/:user_id', function (req, res) {
    db.Merchant_Review.update(
      {},
      { where: { id: req.params.user_id } }
    ).then(results => {
      res.json(results)
    })
  })

  // Remove a written merchant review 
  app.delete('/merchantreviews/remove/:merchant_id', function (req, res) {
    db.Merchant_Review.destroy({
      where: {
        id: req.params.merchant_id,
      }
    }).then(results => {
      res.json(results)
    })
  })

  // All of Label's/Strain's Use Cases
  // ================================
  // Get all strains available to customers
  app.get('/strains', function (req, res) {
    db.Strain
      .findAll({})
      .then(results => {
        res.json(results);
      })
  });

  // Get all labels in the database 
  app.get('/labels', function (req, res) {
    db.Label
      .findAll({})
      .then(results => {
        res.json(results);
      })
  });

  // Adding new strains to the database (post)
  app.post('/strains', function (req, res) {
    db.Strain
      .create({
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
        res.json(results);
      })
  });

  // All of Merchants's Use Cases
  // ================================
  // Get all verified merchants
  app.get('/merchants', function (req, res) {
    db.Merchant.findAll({}).then(results => {
      res.json(results)
    })
  })

  // Get all reviews written about this merchant
  app.get('merchant/merchantreviews/:merchant_id', function (req, res) {
    db.Merchant_Review.findAll({
      where: { merchant_id: req.params.merchant_id },
    }).then(results => {
      res.json(results)
    })
  })

  // Get all merchant's Ads 
  app.get('/merchantads/:merchant_id', function (req, res) {
    db.Merchant_Review.findAll({
      where: { id: req.params.merchant_id },
    }).then(results => {
      res.json(results)
    })
  })

  // Merchants adding ads (post)
  app.post('merchant/merchantads/add/:merchant_id', function (req, res) {
    db.Merchant_Ad.create({
      merchant_id: req.params.merchant_id,
      ad_img: req.body.ad_img
    }).then(results => {
      res.json(results)
    })
  });

  // Merchant adding growers review (post)
  app.post('merchant/growerreviews/add/:merchant_id', function (req, res) {
    db.Grower_Review.create({
      merchant_id: req.params.merchant_id,
      grower_id: req.body.grower_id,
      grower_review: req.body.grower_review,
      grower_rating: req.body.grower_rating
    }).then(results => {
      // update grower's rating
      res.json(results);
    })
  })

  // All of Growers's Use Cases
  // ================================
  // Get all verified growers
  app.get('/growers', function (req, res) {
    db.Grower.findAll({}).then(results => {
      res.json(results)
    })
  })

  // Get all reviews written about this grower
  app.get('/grower/growerreviews/:grower_id', function() {
    db.Grower_Review.findAll({
      where: { id: req.params.grower_id }
    }).then(results => {
      res.json(results)
    })
  })

  // Get grower's menu
  app.get('/growermenu/:grower_id', function (req, res) {
    db.Grower_Menu.findAll({
      where: { id: req.params.grower_id }
    }).then(results => {
      res.json(results)
    })
  })

  // add grower's menu
  app.post('/growermenu/add/:grower_id', function (req, res) {
    db.Grower_Menu.create({
      grower_id: req.params.grower_id,
      strain_list: req.body.strain_list
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
