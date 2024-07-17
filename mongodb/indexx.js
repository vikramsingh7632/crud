const express =require("express");

require("./connect");

const product= require("./productSchema");

const app=express();

app.use(express.json());

app.post("/create",async(req,res)=>{

   let dataResp = await product.create(req.body)

    let data = await product.create(req.body);
    console.log('data: ', data);

    res.send(data);
})

app.get ("/find/:_id",async(req,res,)=>{
    let data =await product.find(req.params);
    console.log('data: ', data);
    res.send(data);
})

app.put("/update/:_id",async(req,res)=>{
    let data = await product.updateOne(req.params,req.body);
    res.send(data);
})

app.delete("/delete/:id",async(req,res)=>{
    console.log(req.params);  
    let data = await product.deleteOne(req.params,res.body);
    
      res.send(data);
})


app.listen(4000, () => {
    console.log("App is running on port 4000");
})