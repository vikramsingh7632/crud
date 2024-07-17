const mongooes=require("mongoose");
const productSchema= new mongooes.Schema({

    name:String,
    lastName:String,
    mobileNumber:Number,
    email:String,
    houseNumber:Number,

})
model.exports=mongooes.model("product",productSchema);