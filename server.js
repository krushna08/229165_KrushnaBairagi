const express =require("express")
const path =require("path")
const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'))
})

app.listen(4500);
console.log("Server is running at Port number 4500");