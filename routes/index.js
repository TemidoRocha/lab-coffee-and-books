'use strict';

const { Router } = require('express');
const router = Router();
const Place = require('./../models/place');

//get methods
router.get('/', (req, res, next) => {
  Place.find()
    .then(places => {
      console.log(places);
      res.render('index', { places });
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

router.get('/create', (req, res, next) => {
  res.render('place/create');
});

//post methods
router.post('/create', (req, res, next) => {
  const { name, typeOfStore, latitude, longitude } = req.body;
  Place.create({
    name,
    typeOfStore,
    location: {
      coordinates: [longitude, latitude]
    }
  })
    .then(placeCreated => {
      console.log(placeCreated);
      res.render('index', placeCreated);
    })
    .catch(error => {
      console.log(error);
      next(error);
    });
});

module.exports = router;
