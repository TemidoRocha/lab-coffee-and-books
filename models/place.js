'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  typeOfStore: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  },
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [
      {
        type: Number
      }
    ]
  }
});

schema.index({ location: '2dsphere' });

module.exports = mongoose.model('place', schema);

