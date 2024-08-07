var mongoose=require('mongoose')
var Schema = mongoose.Schema
var spaSchema=Schema({
    nombre:String,
})
module.exports=mongoose.model('Spa', spaSchema)