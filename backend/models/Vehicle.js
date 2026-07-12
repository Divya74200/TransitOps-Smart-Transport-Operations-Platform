const mongoose=require("mongoose");

const vehicleSchema=new mongoose.Schema({

registrationNumber:{
type:String,
required:true,
unique:true
},

vehicleType:{
type:String,
required:true
},

capacity:{
type:Number,
required:true
},

fuelType:{
type:String
},

status:{
type:String,
enum:[
"Available",
"On Trip",
"Maintenance",
"Retired"
],
default:"Available"
},

purchaseDate:{
type:Date
}

},
{
timestamps:true
});

module.exports=mongoose.model("Vehicle",vehicleSchema);