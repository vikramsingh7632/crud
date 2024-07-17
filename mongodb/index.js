const express=require("express");
const app= express();

require("./connect");

const product= require("./productSchema");


app.use(express.json());

app.post("/create",async(req,res)=>{
    console.log('req.body):', req.body);
    let data=new product(req.body);
    let result= await data.save();
    // let result = await product.create(req.body);
    console.log(result);
res.send(result);
});

app.get("/list",async(req,res)=>{
    let data = await product.find();
    console.log('data: ', data);
    res.send(data);
})

app.delete("/delete/:id",async(req,res)=>{
  console.log(req.params);  
  let data = await product.deleteOne(req.params);
  console.log('data: ', data);
    res.send(data);

})

app.put("/update/:_id",async(req,res)=>{
    console.log(req.params);  
    let data = await product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    console.log('data: ', data);
      res.send(data);
})
app.listen(8541, () => {
    console.log("app is running ");
});