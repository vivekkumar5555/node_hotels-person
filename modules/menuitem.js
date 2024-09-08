const { default: mongoose } = require("mongoose");

const menuitemSchema=new mongoose.Schema({
name:{
    type:String,
    required:true

},
price:{
    type:Number,
    default:2
},
taste:{
type:String,
enum:["spicy","souro","sweet"],
required:true
},
is_drink:{
    type:Boolean,
    default:false
},
ingredient:{
    type:[String],
    required:true
},
num_sales:{
    type:Number,

    default:0
}
})
const menuitem=mongoose.model('menuitem',menuitemSchema)
module.exports=menuitem;