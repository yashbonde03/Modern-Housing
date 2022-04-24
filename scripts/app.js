const express =require("express");
const res = require("express/lib/response");
const app= express();
const path =require("path");
const { json }=require("express");
require("./conn");

const Registration=require("./registration.js");
const static_path=path.join(__dirname,"../styles");
app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.get("index")
});
app.post("/",async(req,res)=>{
    try{

             const registration=new Registration({
                 firstname:req.body.firstname,
                 lastname:req.body.lastname,
                 email:req.body.email,
                 message:req.body.message,
                 })
        const registered = await registration.save();
        res.status(201).render("/");
         }
    
    catch(e){
        res.status(400).send(e);
    }
})
app.listen(8000,()=>{
    console.log("Server is running at 8000")
})