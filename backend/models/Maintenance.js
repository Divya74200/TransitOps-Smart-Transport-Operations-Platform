const mongoose=require("mongoose");

const maintenanceSchema=new mongoose.Schema({

vehicle:{
type:mongoose.Schema.Types.ObjectId,
ref:"Vehicle"
},

issue:String,

cost:Number,

status:{
type:String,
enum:[
"Pending",
"In Progress",
"Completed"
],
default:"Pending"
},

startDate:Date,

endDate:Date

},
{
timestamps:true
});

module.exports=mongoose.model("Maintenance",maintenanceSchema);