var express = require("express");
var app = express();
var path =require("path");
var fs =require("fs");
var body_parser = require("body-parser");
app.use(body_parser());

app.get("/",function(req,res){
    res.sendfile('home.html',{root :__dirname});
 
});
app.post("/user",function(req,res){ 
res.send("my name is "+JSON.stringify(req.body.name)+" "+"and age is"+JSON.stringify(req.body.age));
    
});
app.listen(8080,function(){
    console.log("server is runing");
});
