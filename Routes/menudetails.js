const express=require('express');
const route=express.Router();
const menuitem=require('./../modules/menuitem')
 route.post('/'
    ,async(req,res)=>{
    try{
        const data=req.body;
        const newmenu=new menuitem(data);
        const response=await newmenu.save();
        console.log("menu data is saved")
        res.status(200).json(response)


    }
    catch(error){
         res.status(500).json({error:"error is occur"})

    }

 })
 //get the menu data
 route.get('/',async(req,res)=>{
    try{
const response=await menuitem.find();
console.log("menu is found");
res.status(200).json(response);

    }
    catch(error){
res.status(500).json({error:'error'})
    }
 })
 //use peramitized varivle in get;
  route.get('/:tastetype',async(req,res)=>{
    try{
        const tastetype=req.params.tastetype;
        if(tastetype== "spicy"||tastetype=="souro"||tastetype=="sweet"){
           const response= await menuitem.find({taste:tastetype})
           console.log("data is find");
           res.status(200).json(response);

        }
        else{
            res.status(404).json({response:"enter the valid type"})
        }

    }
    catch(error){
res.status(500).json({error:'error'})
    }
  })
  //update the data using put mathod
  route.put('/:id',async(req,res)=>{
    try{
const menuID=req.params.id;;
const updatemeunitem=req.body;
const response=await menuitem.findByIdAndUpdate(menuID,updatemeunitem,{
new:true,
runValidators:true
})
console.log("data is update")
res.status(200).json(response)
    }
    catch(error){
        res.status(500).json({error:"internal error"})
    }
  })
  //delete using Delete Method
  route.delete("/:id",async(req,res)=>{
    try{
const menuid=req.params.id;
const response=await menuitem.findByIdAndDelete(menuid)
console.log("data is remove")
res.status(200).json(response)
    }
    catch(error){
        res.status(500).json({error:"server error"})
    }
  })


 module.exports=route;