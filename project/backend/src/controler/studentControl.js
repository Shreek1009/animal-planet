const studentModel = require('../models/studentModels');
const { validEmail, validPass, validMobile }= require('../validation/valid')
const jwt=require ("jsonwebtoken")

const createStudent = async function(req,res){
  try{
  let student = req.body;
  let{ name,email,password,mobile,address}=student;

  //validation
 if (!name || !email || !password || !mobile|| !address){
 return res.send({ message: "please provide all info "})
 }
if (!validEmail)return res.send({message:"please enter valid email"})
if (!validPass)return res.send({message:"please enter valid passward"})
if (!validMobile)return res.send({message:"please enter valid phone no"})

// unique validation
let uniqueEmail = await studentModel.findOne({email})
if(uniqueEmail) return res.send({message:"Email already exist "})
let uniqueMobile = await studentModel.findOne({mobile})
if(uniqueMobile) return res.send({message:"Phone no already exist "})



  let createStu =await studentModel.create(student)
  return res.send({message: createStu})
}catch(err){
  console.log(err)
}
}

//login api

let loginStudent = async (req,res)=>{
  try{
let data =req.body
let {email,password}= data
if ( !email || !password ){
  return res.status(400).send({ message: "please provide email & password info "})
  }
let matchStudent  =await studentModel.findOne({email,password})
if (!matchStudent){
  return res.status(200).send({msg:"Student not Registered"})
}
const token= jwt.sign({
  stdId:matchStudent._id.toString(),

}, "mernStack",
{  
expiresIn:"12000sec"
}
)

return res.status(200).send({status:true , msg:"Student logged In Successfully", data:token })

  }catch(error){
return res.status(500).send({status:false,msg:"internal server error"})
  }
}

module.exports ={createStudent,loginStudent};









//get api

// let getStudent = async (req,res)=>{
//   try{
// const{mobile}= req.body;
//   let deleteStu  = await studentModel.findOne({mobile})
//   return res.send(deleteStu)
//   }catch(error){
//   console.log(error);
// }
// };





// const deleteStudent = async (req, res) => {
//   try {
//       const { mobile } = req.body;

//       if (!mobile) {
//           return res.status(400).send({ msg: "Invalid input" });
//       }

//       const deletedBook = await studentModel.findOneAndDelete({ mobile: mobile });

//       if (!deletedBook) {
//           return res.status(404).send({ msg: "Book not found" });
//       }

//       return res.status(200).send({
//           status: true,
//           msg: "Data deleted successfully",
//           data: deletedBook,
//       });
//   } catch (error) {
//       return res.status(500).send(error);
//   }
// };


//model->controller->routes->index