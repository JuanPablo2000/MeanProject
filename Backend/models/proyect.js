var mongoose=require('mongoose');
var schema= mongoose.Schema;


var ProyectSchema=schema({
  name:String,
  description:String,
  category:String,
  langs:String,
  year:Number,
  image: String
});

module.exports=mongoose.model('Proyect',ProyectSchema);
//Guarda en proyects, lo convierte a minuscula
