// const mongoose = require("mongoose");

// const main =async()=>{
//  await mongoose.connect("mongodb://localhost:27017/e-comm");
// const productschema=new mongoose.Schema({
//     name:String,
//     price:Number,
//     brand:String,
//     category:String
// });
// const productsmodel = mongoose.model('user', productschema);
// let data= new productsmodel({name:"moile",price:"250",brand:"samsung",category:"mobile"});
// let result = await data.save();
// console.log(result);
// }

// main();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const productschema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});


// CREATE 
const saveInDB = async () => {
  const productsmodel = mongoose.model("product", productschema);
  let data = new productsmodel({
    name: "mobile",
    price: "250",
    brand: "samsung",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

// saveInDB();

// UPDATE
const updateInDB = async () => {
  const product = mongoose.model("product", productschema);
  let data = await product.updateOne(
    { name: "mobile" },
    {
      $set: { price: 700, name:"vikram" },
    }
  );
  console.log(data);
};

updateInDB();


const deleteProduct  = async () => {

    const product = mongoose.model("product", productschema);

    let data = await product.deleteOne(
        {price : 700},
        {new : true}
    )
    console.log('data: ', data);

}
// deleteProduct();



// FIND

const findInDB  = async () => {

    const product = mongoose.model("product", productschema);

    let data = await product.find();
    console.log('data: ', data);
}
findInDB();