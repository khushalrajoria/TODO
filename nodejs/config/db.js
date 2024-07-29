const mongoose =require("mongoose");

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/TODO').on(('open'),()=>{
    console.log("Mongoose connected");
}).on('error',()=>{
    console.log("MonoDB connection error");
})

module.exports=connection;