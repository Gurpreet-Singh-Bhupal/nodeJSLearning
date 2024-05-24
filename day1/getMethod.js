const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json())

app.listen(PORT,(error)=>{
    if(!error){
        console.log('Server is running fine on port :',PORT)
    }
    else{
        console.log('Server is not running ,Error:',error)
    }
})

let count=0;

//Getting count here
app.get('/',(req,res)=>{
   count++;
   let Count = {
    count
   }
   res.send(Count)
})

//Getting JSON
// app.get('/',(req,res)=>{
//     let student={
//         "name":"Guru",
//         "job":"fullStackDEVeloper"
//     }
//     res.send(student)
//  })

//Getting query
// app.get('/',(req,res)=>{
//     res.send("Your name is : "+req.query.name)
//  })

//Getting params
// app.get('/:id',(req,res)=>{
//     res.send("Your given id is : "+req.params.id)
//  })

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

app.get('/getProducts',(req,res)=>{
    let pageLimit = parseInt(req.query.limit);
    let pageNo= parseInt(req.query.pageNo);
    let totalProducts = productsList.length;
    let TotalPages = Math.ceil(totalProducts/pageLimit);
    let startingIndex = pageLimit*(pageNo-1)
    let endingIndex = startingIndex+pageLimit
    let requiredData = productsList.slice(startingIndex,endingIndex)
    res.send({
        data:requiredData,
        totalPages:TotalPages,
        currentPage:pageNo
    })
})

app.get('/getProducts/:productId',(req,res)=>{
   let productId = parseInt(req.params.productId);
   let requiredProduct = productsList.find((product)=>product.id===productId)
    res.send({
        data:requiredProduct
    })
})