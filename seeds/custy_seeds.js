// var db = require("./models");


// var custySeeds = [{
//    custy_name: 'Jon Wilkes Booth'
//    custy_user_name: 'AbeLincolnsBOY'
//    custy_email: 'theatreenthusiast@gmail.com'
//    custy_password: 'gotametalsurprise'
//    dob: "5/10/1838"
//    custy_img: 'url at url.com'},
  //  
  
  //    {
  //    custy_name: 'Bob the Builder'
  //    custy_user_name: 'BobbyBoi'
  //    custy_email: 'bobbro29@gmail.com'
  //    custy_password: 'bobthetwat'
  //    dob: "10/10/1910"
  //    custy_img: 'urlz at urlz.com'
  //    },

// //this code checks the DB to see if there is already content (seeds)
// //if no content, add seeds. 
// //if there is content, do not add seeds.
// function seedCustys() {
//     db.Survey.count().then(c => {
//         if (c == 0) {
//             custySeeds.forEach(function (user) {
//                 db.Survey.create(user);
//             })
//         }
//     });
// }

// module.exports = custySeeds