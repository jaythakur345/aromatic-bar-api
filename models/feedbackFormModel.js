const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
   viewDetails:{
    type:String,
    default:"View Details"
   },
   name:{
    type:String,
    required:[true, 'Name field is required']
   },
   email:{
    type:String,
    required:[true, 'Email field is required']
   },
   phone:{
    type:Number,
    required:[true, 'Phone field is required']
   },
   hostRating:{
    type:String,
    required:[true, 'All fields are required']
   },
   beverageRating:{
    type:String,
    required:[true, 'All fields are required']
   },
   restaurantCleanRating:{
    type:String,
    required:[true, 'All fields are required']
   },
   overallExperience:{
    type:String,
    required:[true, 'All fields are required']
   },
   
},
    { timestamps:true }
);

module.exports = mongoose.model("Feedback",FeedbackSchema);