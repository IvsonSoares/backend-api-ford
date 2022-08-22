const express = require("express");

const VeiculoData = require('../models/veiculosData');

const router = express.Router();

router.post("/", (req, res, next) => {
  console.log(req.body);
  //Mongoose Object
  const veiculoData =  new VeiculoData({
    vehicle_model_id: req.body.vehicle_model_id,
    vehicledata_vin: req.body.vehicledata_vin,
    vehicledata_odometer: req.body.vehicledata_odometer,
    vehicledata_tirePressure: req.body.vehicledata_tirePressure,
    vehicledata_status: req.body.vehicledata_status,
    vehicledata_batteryStatus: req.body.vehicledata_batteryStatus,
    vehicledata_fuelLevel: req.body.vehicledata_fuelLevel,
    vehicledata_lat: req.body.vehicledata_lat,
    vehicledata_long: req.body.vehicledata_long,
  });
  console.log(veiculoData);
  veiculoData.save().then(createdVeiculoData => {
    res.status(201).json({
      message: 'veiculoData added successfully',
      veiculosData: createdVeiculoData
    });
  }).catch(err => console.log(err));
});

//Update
router.put("/:id", (req, res, next) => {
  VeiculoData.updateOne({_id: req.params['id']}, {$set: req.body}).then(response => {
    console.log(response)
    res.status(200).json({message: 'Update successfull', newData: req.body});
  }).catch(err => console.log(err));
});


//Fetch Data
router.get('', (req, res, next) => {
    VeiculoData.find()
    .populate("vehicle_model_id")
    .then((documents) => {
      console.log(documents)
      res.status(200).json({
        message: 'veiculosData fetched successfully!',
        veiculosData: documents
      });
    })
    .catch((errors) => {
      console.log(errors);
    }); 
});

router.get('/vin/', (req, res, next) => {
  
  console.log("Query", req.query[`vehicledata_vin`]);
  VeiculoData.find({ vehicledata_vin: {$regex: new RegExp(req.query[`vehicledata_vin`], `i`)}})
  .then((documents) => {
    console.log(documents)
    res.status(200).json({
      message: 'veiculosData fetched successfully!',
      veiculosData: documents
    });
  })
  .catch((errors) => {
    console.log(errors);
  });
});

router.get("/:id", (req, res, next) => { 
  //console.log(req.params.id)
    VeiculoData.findById(req.params['id'])
    .populate("vehicle_model_id")
    .then(veiculoData => {
      console.log(veiculoData);
      if(veiculoData){
        res.status(200).json(veiculoData);
        console.log(veiculoData);
      } else {
        res.status(404).json({ message: 'veiculoData not found'})
      }
    });
  })

router.delete("/:id", (req, res, next) => {
    console.log(req.params);
    VeiculoData.deleteOne({ _id: req.params['id'] })
    .then((result) => {
      console.log(result);
    });
  res.status(200).json({ message: "veiculoData deleted!"}); 
});

module.exports = router;
