import student from './models/student.js'
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use (express.json())
mongoose.connect('mongodb+srv://velchoorigayathri:wYeFRButW9ToGqop@gayathri.imktbdd.mongodb.net/?retryWrites=true&w=majority')

.then(()=>app.listen(5000))
.then(()=>
     console.log("connected to databse and listening to local host 6000")
)
.catch((err)=>console.log(err));
     app.post('/addstud',(req,res,next)=>{
     console.log(req.body.formdata) //formdata from the frontend
     const {username,email,password} = req.body.formdata//distract method
     const stud = new student({
          username,
          email,
          password
     })
     try{
          stud.save()      
     }
     catch(err){
          console.log(err)
     }
     return res.send({msg:"inserted",result:stud})//for displaying message in the
}) 
app.get('/getstudent',async(req,res,next)=>{  //asynchronous await for data fetching
     //res.send("success")
      let studentdata
     try{
          studentdata = await student.find()
     }
     catch(err){
          console.log(err)
     }
     if(!studentdata){
         console.log("no students found")
     }
     return res.status(200).json({studentdata})
})



       
  
   
   