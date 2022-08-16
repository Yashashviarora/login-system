const express =require("express");
const app=express();
const path=require("path")
const hbs=require("hbs")
const port=process.env.port||3000;
// const static_path=path.join(__dirname,"../public")
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Register=require("./db/conn")
// const Register=require("./models/register");
app.set('views', path.join(__dirname, '../views'))
// app.engine('hbs', require('hbs').renderFile);
app.set("view engine","hbs");
app.get('/',(req,res)=>{
     res.render("register");
    
})
app.post('/register',async(req,res)=>{

    const name = req.body.firstname

    res.send(name)
   const Reg = Register()
   Reg.firstname = name

   Reg.save()
    // try{
    //     res.send( req.body.password);
    //    const password=req.body.password;
    //  const  Cpassword=req.body.Cpassword;
    //  if(password == Cpassword){
    //     console.log("i'm inside the schema blokc to styore in db")
    //     const REg = new Register({
    //         firstname: req.body.firstname,
    //         lastname:req.body.lastname,
    //         email:req.body.Email,
    //         password:password,
    //         Confirmpassword:Cpassword
    //     })
    //     const reg=await REg.save(function (err){console.log("worked..")});
    //       res.send(201).render("register")
    //  }else res.send("password are not mayching");
    // }catch(error){
    //     return res.status(400).send(error);
    // }
     //res.render("register");
   
})


app.listen(port,()=>{
    console.log("hellosajf");
    console.log(`server ${port}` );
})