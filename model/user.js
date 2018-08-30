var mongoose=require("../mongoose.js");
var schemaUser=new mongoose.Schema({
		name:{
			type:String,
			require:true,
			unique:true
			
		},
		age:{
				type:Number
				// require:true
			}
			
		})
var User=mongoose.model("User",schemaUser);
module.exports=User;
