var express = require('express');
const res = require('express/lib/response');
var app = express()
var port = process.env.port || 3000;


app.use(express.static(__dirname + '/public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', function(req, res){
    res.render('index.html')
});

/*Function for doing the calculation */
function complete(num1, num2,sym){
    switch(sym){
        case "+" : return parseInt(num1) + parseInt(num2);
                   break;
        case "*" : return parseInt(num1) * parseInt(num2);
                   break;
        case "/" : return parseInt(num1) / parseInt(num2);
                   break;
        default : return ("sorry, wrong command")
    }
    
}

/*For adding the number*/
app.get('/AddTwoNumbers',(req,res)=>{

    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = complete(number1, number2,"+");
    res.json({statuscode: 2000, data:result, message:'sucess'})

})

/*For multiplying the number*/
app.get('/MultiNumbers',(req,res)=>{

    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = complete(number1, number2, "*");
    res.json({statuscode: 2000, data:result, message:'sucess'})

})

/*For Division of the number*/
app.get('/DivNumbers',(req,res)=>{

    var number1 = req.query.number1;
    var number2 = req.query.number2;
    var result = complete(number1, number2, "/");
    res.json({statuscode: 2000, data:result, message:'sucess'})

})

app.listen(port, ()=>{
    console.log('App lisitening to:' + port)
})