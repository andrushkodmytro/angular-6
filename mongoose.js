var mongoose=require('mongoose');
mongoose.connect('mongodb://user:User2010@ds135852.mlab.com:35852/newangular');
console.log("mongodb connect...")
module.exports=mongoose;