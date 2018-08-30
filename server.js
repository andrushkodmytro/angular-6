

var express=require('express');
var app=express();
var User=require('./model/user.js');
app.use(express.static(__dirname+'/dist/first-app'));  /*відображення статичного контенту*/
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var users=[{
//   	name:"Petro",
//   	age:10
//   }, {
//   	name:"Stepan",
//   	age:15
//   }, {
//   	name:"Stepan",
//   	age:25
//   }, {
//   	name:"Ivan",
//   	age:30
//   },  {
//     name:"Petro",
//     age:3
//   },  {
//     name:"Stepan",
//     age:37
//   },  {
//     name:"Stepan",
//     age:38
//   },  {
//     name:"Ivan",
//     age:35
//   }]
  

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/dist/first-app/index.html')
})
app.get("/getusers",(req,res)=>{
  
  User.find((err,data)=>{
  	console.log(data);
  	res.send(data)
  })

	
})
app.post("/adduser",(req,res)=>{
 console.log(req.body)
  var user=new User(req.body);
  user.save((err,data)=>{
  	console.log(data)
  	 res.send("add user")
  })


	
})
app.post("/removeuser",(req,res)=>{
 console.log(req.body)
  
  User.remove({_id:req.body.id},(err,data)=>{
  	console.log(data)
  	 res.send("remove user")
  })


	
})



app.listen(process.env.PORT||5000)
console.log('Server run');