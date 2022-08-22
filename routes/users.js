const express = require("express");

const User = require('../models/users');

const router = express.Router();

  //Fetch Data
  router.post('/login', (req, res, next) => {
    User.find()
    .then((documents) => {
      if(documents[0]['user_name'] !== req.body.user_name || documents[0]['user_password'] !== req.body.user_password){
        res.status(200).json({message: 'Username ou Password Incorreto'})
      }else {
        res.status(200).json({documents});
      }
      })
    .catch((errors) => {
      console.log(errors);
    });
  });


module.exports = router;