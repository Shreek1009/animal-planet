const express = require('express')
const router=express.Router()
const {createStudent,loginStudent } = require('../controler/studentControl')
const {createCourse}= require('../controler/courseControl')
//router method
router.get('/',(req,res)=>{
   res.send("Router Method !!")
})
//router for create
router.post('/students',createStudent) //POST method for create
router.post("/login",loginStudent)
router.post("/create",createCourse)


module.exports=router;