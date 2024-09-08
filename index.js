// const fs=require('fs');
// const os=require('os');
// const indf=os.userInfo();
// console.log(indf);
// const look=fs.appendFile("info.txt","data full in this"+","+indf.homedir,()=>{
//     console.log("every thing is done")
// })
// console.log(look)
// const main=require('./main.js')
// function umar(){
// console.log(a+b+age)
// }
// umar(5,7,age)
// console.log("hello world2");
// const age=main.age;
// var result=main.addnumber(age+10,18)
// console.log(result)
// console.log(age);

const express =require('express')
const app=express();
const db=require('./db')
const person=require('./modules/person');

const menuitem=require('./modules/menuitem')
//Add bodyparser middle ware to for httpbodydata
const bodyParser = require('body-parser');
// use body parser
app.use(bodyParser.json())






//get method  the menuitem
// app.get("/menu",async(req,res)=>{
// try{
//    const getmenu=await menuitem.find();
//    console.log("data is shown")
//    res.status(200).json(getmenu)
// }
// catch(error){
//     res.send(500).json({error:"eooe is occure in get menu"})
// }
// }) 


app.get('/',function(req,res){
    res.send(" the viratkolhi is the best player in the wordds")
})
// app.get("/user",function(req,res){
//     res.send("the bolthe public this is the user page")
// }
// )

// app.get("/user/blote",function(req,res){
//     const vaariable={
//         name:"vivek",
//         class:"btech",
//         Rollno:72110826,
//         semster:"7th",
//         location:"ludhiana"

//     }
//     res.send(vaariable)
// })

// app.post("/item",(req,res)=>{
//     res.send("data is saved")
// })
const persondetails=require('./Routes/persondetails')
app.use('/person',persondetails)
 const menudetails=require("./Routes/menudetails")
 app.use('/menu',menudetails)

app.listen(3000,()=>{
    console.log("server is started")
})


