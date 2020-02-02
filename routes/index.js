var express = require('express');
var router = express.Router();

const userModel = require('../modules/userModule');
var query = userModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
  query.exec(function(err, data){
    if(!err){
      res.render('index', { records: data });
      console.log(data);
    }else{
      console.log("Error occured");
      throw err;
    }
  });
});

  /* Post home page. */
router.post('/', function(req, res, next){
  const userInputDetails = new userModel({
    name: req.body.name,
    email: req.body.email,
    mobileno: req.body.mobileno,
    city: req.body.city
  });
  console.log(userInputDetails);

  userInputDetails.save(function(err, res1){
    query.exec(function(err, data){
      if(err) throw err;
      res.render('index', {records: data});
    });
  });
  
});


module.exports = router;
