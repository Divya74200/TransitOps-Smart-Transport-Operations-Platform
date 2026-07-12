const mongoose=require("mongoose");

const fuelLogSchema=new mongoose.Schema({

vehicle:{
type:mongoose.Schema.Types.ObjectId,
ref:"Vehicle"
},

liters:Number,

cost:Number,

date:{
type:Date,
default:Date.now
}

},
{
timestamps:true
});

module.exports=mongoose.model("FuelLog",fuelLogSchema);