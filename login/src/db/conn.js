const mongo=require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/REG")
mongo.connection.on('connected', () => console.log('Connected'));
mongo.connection.on('error', () => console.log('Connection failed with '));
// const mongoose=require("mongoose");
const employschema=new mongo.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    Confirmpassword:{
        type:String,
        require:true
    }

})
// now create a collection
// const Register=new mongoose.Collection("Register",employschema);
// module.exports=Register;
const Register=mongo.model("Register",employschema);
module.export=Register;