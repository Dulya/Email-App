var express=require('express');
var app=express();


app.get("/",(req,res)=>{
    res.send("Hello this is my email application");
});

app.listen(3000);

console.log("server is listening");