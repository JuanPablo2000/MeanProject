'use strict'

var Project = require('../models/proyect');
var fs=require('fs');
var path=require('path');

var controller={

home: function(req,res) {
return res.status(200).send({
  message: 'soy la home'
});
},

test: function(req,res){
return res.status(200).send({
  message:'En tesst'
});
},

save: function(req,res) {

var project=new Project();

var parametros=req.body;
project.name=parametros.name;
project.description=parametros.description;
project.category=parametros.category;
project.langs=parametros.langs;
project.year=parametros.year;
project.image=null;

project.save((err,projectStored)=>{
  if(err) return res.status(500).send({message:"Error al Insertar el objeto"});
  if(!projectStored) return res.status(404).send({message:"No se ha podido guardar el objeto"});
  return res.status(200).send({project: projectStored});
});
/*
return res.status(200).send({
  proyecto:project,
  message: "Metodo Save"
});
*/

},

getProject: function(req,res) {
  var projectId=req.params.id;
if (projectId==null) return res.status(404).send({message:"El objeto no existe"});


  Project.findById(projectId,(err,project)=>{
    if(err) return res.status(500).send({message:"Error al Mostrar el objeto"});
    if(!project) return res.status(404).send({message:"El objeto no existe"});
    return res.status(200).send({
      project
    })
  });
},

getAllProjects: function(req, res){

  Project.find({}).sort('year').exec((err,projects)=>{
    if(err) return res.status(500).send({message:"Error al Mostrar el objeto"});
    if(!projects) return res.status(404).send({message:"No existe ningun proyecto"});
    return res.status(200).send({projects});
  });

},
updateprojects: function(req,res) {
  var projectId=req.params.id;
  var update=req.body;

  Project.findByIdAndUpdate(projectId,update,{new:true},(err,projectUpdate)=>{
    if(err) return res.status(500).send({message:"Error al Update el objeto"});
    if(!projectUpdate) return res.status(404).send({message:"No existe el proyecto para actualizar"});
    return res.status(200).send({project:projectUpdate});

  });
},

deleteproject: function(req,res){
  var idProject=req.params.id;
  Project.findByIdAndRemove(idProject,(err,projectDeleted)=>{
    if(err) return res.status(500).send({message:"Error al Eliminar el objeto"});
    if(!projectDeleted) return res.status(404).send({message:"No existe el proyecto para Eliminar"});
    return res.status(200).send({project:projectDeleted});

  });
},
 uploadimg: function(req,res) {
   var projectId=req.params.id;
   var filename='No subida la imagen';

   if (req.files) {
     var filePath=req.files.image.path;
     var filesplit=filePath.split('\\');
     var filename=filesplit[1];

Project.findByIdAndUpdate(projectId,{image:filename},{new:true},(err,projectUpdate)=>{
  if (err)return res.status(500).send({message:"Error al Subir la imagen"});
  if(!projectUpdate) return res.status(404).send({message:"No existe el proyecto"});
  return res.status(200).send({project:projectUpdate});
});

   }else {
      return res.status(200).send({message:filename});
   }
 },

 loadimg: function(req, res) {
   var file=req.params.image;
   var path_file='./uploads/'+file;

   fs.exists(path_file,(exists)=>{
     if (exists) {
       return res.sendFile(path.resolve(path_file));
     }else {
       return res.status(200).send({
         message:"No existe la img"
       });
     }
   });
 }


};

module.exports=controller;
