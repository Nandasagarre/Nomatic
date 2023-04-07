const mongodb = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const inventory = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
  
});

const Inventory = mongoose.model('inventory', inventory);

module.exports = Inventory;