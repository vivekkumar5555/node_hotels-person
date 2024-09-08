const mongoose=require('mongoose');

//Define the MongoDB URL connection
const MongoURL='mongodb://localhost:27017/hotels'//Replace hotels with your datbase name any you wants


//setup MongoDB connection
mongoose.connect(MongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//get the default connection
//mongoose  mi=aintain a default connection object representing the mongoDB Connection
const db=mongoose.connection;

//define event listner for the database connection
db.on('connected',()=>{
    console.log("monogoDB is connected")
})

db.on('error',()=>{
    console.log("monogoDB connection error")
})
db.on('disconnected',()=>{
    console.log("monogoDB is disconnected")
})
//export database connection
module.exports={db};