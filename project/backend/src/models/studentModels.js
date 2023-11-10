const mongoose =require('mongoose')
const stundentSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

email:{
    type:String,
    require:true,
    unique:true,
},
password:{
    type:String,
    require:true
},
mobile:{
    type:Number,
    require:true,
},
address:{
    type:String,
},


},
{timestamps:true})
module.exports=mongoose.model("Students",stundentSchema)