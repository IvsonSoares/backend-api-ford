const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const usersRoutes = require('../routes/users')
const veiculosRoutes = require('../routes/veiculos')
const veiculosDataRoutes = require('../routes/veiculosData')

const api_key = process.env.API_KEY;
const app = express();

    mongoose.connect(`mongodb+srv://ivsonsoares:Z2HjgpgCpt0K4thZ@cluster0.axkjwwx.mongodb.net/node-angular?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Origin', '*'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use("/users", usersRoutes);
app.use("/vehicle", veiculosRoutes);
app.use("/vehicleData", veiculosDataRoutes);

module.exports = app;
