const mongoose = require("mongoose") 
const houseSchema = mongoose.Schema({ 
 house_type: {type: String, required: [true, 'house Name should not be empty']}, 
 size: {type: String, required: [true, 'house Name should not be empty']}, 
 cost: {type: Number, required: [true, 'house Name should not be empty']} 
}) 
 
module.exports = mongoose.model("house", 
houseSchema)