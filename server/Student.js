const mongoose= require('mongoose');
const Student = mongoose.createConnection('mongodb://localhost:27017/Student')
const LoginSchema=mongoose.Schema({
Register:{type:String},
Date:{type:Date},
})

const Studentlogin =Student.model('login',LoginSchema);
module.exports=Studentlogin