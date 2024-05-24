const express = require("express");
const app = express();

let PORT = 3000;
app.use(express.json());

app.listen(PORT,(error)=>{
    if(!error){
        console.log('Your server is running fine on port : ',PORT)
    }
    else{
        console.log('Your application is not running ,error : ',error)
    }
});

let productsList = [
    {
        id:1,
        name:"Pencil",
        price:5
    },
    {
        id:2,
        name:"Amul Butter",
        price:65
    },
    {
        id:3,
        name:"Ice cream",
        price:50
    },
    {
        id:4,
        name:"Deodrant",
        price:250
    },
    {
        id:5,
        name:"Aloo Bhujiya",
        price:120
    },
    {
        id:6,
        name:"ToothPaste",
        price:90
    },
    {
        id:7,
        name:"Bread",
        price:40
    },
    {
        id:8,
        name:"Cold drinks",
        price:60
    },
    {
        id:9,
        name:"ToothBrush",
        price:30
    },
    {
        id:10,
        name:"Pen",
        price:10
    },
    {
        id:11,
        name:"Amul Cheese",
        price:80
    },
    {
        id:12,
        name:"Chips",
        price:20
    },
    {
        id:13,
        name:"Pencil",
        price:5
    },
    {
        id:14,
        name:"Plates",
        price:170
    },
     {
        id:15,
        name:"ToothPaste",
        price:90
    },
    {
        id:16,
        name:"Face Wash",
        price:200
    },
    {
        id:17,
        name:"LunchBox",
        price:250
    },
    {
        id:18,
        name:"Lays",
        price:20
    },
    {
        id:19,
        name:"Hide n Seek",
        price:40
    },
    {
        id:20,
        name:"Maggie",
        price:50
    },
]

app.put('/addProduct',(req,res)=>{
    productsList.forEach((product)=>{
        if(product.id.toString()===req.body.id.toString()){
            product['name']=req.body.name;
            product['price']=req.body.price
        }
    })
    res.send({
        data:productsList
    })
})