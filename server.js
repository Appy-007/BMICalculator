const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    var result=num1*num2;
    res.send("The multiplication of the two numbers is: "+result);
})

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname + "/BMICalculator.html");
})

app.post("/bmiCalculator",function(req,res){
    var1=parseFloat(req.body.height);
    var2=parseFloat(req.body.weight);
    var result=var2/(var1*var1);
    res.send("Your BMI is: "+result);
    
})


app.listen(7000,function(){
    console.log("Server started on port 7000 ")
})