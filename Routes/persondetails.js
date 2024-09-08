const express = require('express');

const route = express.Router();
const person = require('./../modules/person');




route.post("/", async (req, res) => { // Changed to POST
  try {
    const data = req.body;
    
    const newperson = new person(data);
    const response = await newperson.save();
    console.log("data is saved");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "Error occurred" });
  }
});

//get mathod to get the person data
route.get("/",async(req,res)=>{

try{
const persondata= await person.find();
console.log("data is get");
res.status(200).json(persondata)

}
catch(error){
res.status(500).json({error:'internal error'})
    
}
})

//paramertise API calls
route.get("/:worktype",async(req,res)=>{
try{
    const worktype=req.params.worktype;
if(worktype =="chef"|| worktype=="owner"|| worktype== "manager"|| worktype== "waiter")
    {
        const response=await person.find({work:worktype})
        console.log('response fetched')
        res.status(200).json(response)
}
else{
res.send(404).json({error:'invalid worktype'})
}
}
catch(error){
    res.send(500).json({error:"error is occur"})

}
})
//using put method for update the data 
route.put('/:id',async(req,res)=>{
    try{
const personId=req.params.id;
const updatedpersondata=req.body;
const response=await person.findByIdAndUpdate(personId,updatedpersondata,{
    new: true, runValidators: true 
})
console.log("data is update")
res.status(200).json(response);

    }
    catch(err){
        res.status(500).json({error:"internal error"})
    }
})
//using Delete method for deleting.
route.delete('/:id',async(req,res)=>{
    try{
const personid=req.params.id;
const response=await person.findByIdAndDelete(personid)
console.log("data is delete")
res.status(200).json(response)
    }
    catch(error){
        res.status(500).json({error:"internal error"})
    }
})
module.exports = route;