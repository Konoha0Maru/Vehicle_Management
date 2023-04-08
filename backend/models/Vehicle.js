const mongoose = require("mongoose");
const { Schema } = mongoose;

const vehicleSchema = new Schema({

  ownerName: {type: String, required : true}, 
  brand: {type: String, required : true},
  model: {type: String, required : true},
  vehicleNumber : {type: String, required : true},
  capacity : {type: Number, required : true},
  transmissionType : {type: String, required : true},
  fuelType : {type: String, required : true},
  price : {type: Number, required : true},
  insuranceImgs: [{ type: String, required : true }],
  vehicleMainImg: {type : String, required : true},
  vehicleImgs: [{ type: String, required : true }]
  
});

module.exports = mongoose.model('Vehicle', vehicleSchema);