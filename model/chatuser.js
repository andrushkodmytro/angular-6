var mongoose=require('./mongoose');
var schemaChatUser=new mongoose.Schema({
	user:{
		type:String,
		unique:true,
		require:true
	},
	age:{
		type:Number,
		require:true
		}
	

});
var ChatUser=mongoose.model('ChatUser',schemaChatUser);
module.exports=ChatUser;
