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
