const courseModel = require('../models/courseModel');

const createCourse = async function (req, res){
    try{
        let course = req.body;
        let { coursecode, name, description, students } = course;

        let uniqueCode = await courseModel.findOne({coursecode})
        if(uniqueCode) return res.send({message: cousreCreate})
        let data = await courseModel.create(course)

        return res.send({message : "Course created successfully" , data : data})

    }

    catch(error){
        res.send("internal server error")
        console.log("error", error)
    }
}
module.exports={createCourse};    