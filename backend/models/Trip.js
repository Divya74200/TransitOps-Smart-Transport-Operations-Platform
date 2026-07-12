const mongoose=require("mongoose");

const tripSchema=new mongoose.Schema({

tripNumber:{
type:String,
required:true,
unique:true
},

vehicle:{
type:mongoose.Schema.Types.ObjectId,
ref:"Vehicle"
},

driver:{
type:mongoose.Schema.Types.ObjectId,
ref:"Driver"
},

source:String,

destination:String,

cargoWeight:Number,

distance:Number,

status:{
type:String,
enum:[
"Scheduled",
"Dispatched",
"Completed",
"Cancelled"
],
default:"Scheduled"
},

startDate:Date,

endDate:Date

},
{
timestamps:true
});

module.exports=mongoose.model("Trip",tripSchema);