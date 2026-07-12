const mongoose=require("mongoose");

const driverSchema=new mongoose.Schema({

name:{
type:String,
required:true
},

licenseNumber:{
type:String,
required:true,
unique:true
},

licenseExpiry:{
type:Date,
required:true
},

phone:{
type:String
},

status:{
type:String,
enum:[
"Available",
"On Trip",
"Suspended"
],
default:"Available"
}

},
{
timestamps:true
});

module.exports=mongoose.model("Driver",driverSchema);