const app =require("./app");
const express = require('express');
const db=require("./config/db");
const UserModel=require("./model/user_model");

const PORT=3000;
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`Server listening on Port http://localhost:${PORT}`);
});

