const express = require("express");

const Veiculo = require('../models/veiculos');

const router = express.Router();

//Fetch Data
router.get('', (req, res, next) => {
    Veiculo.find()
    .then((documents) => {
      console.log(documents);
      res.status(200).json({
        message: 'veiculos fetched successfully!',
        veiculos: documents
      });
    })
    .catch((errors) => {
      console.log(errors);
    });
});

module.exports = router;
