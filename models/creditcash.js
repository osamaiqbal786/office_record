var mongoose= require("mongoose");
var creditcashschema = new mongoose.Schema({
    name: String,
    date:String,
    month:String,
    year:String,
    amount:String
   
});

module.exports=mongoose.model("creditcash", creditcashschema);