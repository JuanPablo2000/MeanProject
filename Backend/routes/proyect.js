'use strict'

var express=require('express');

var proyectcontroller=require('../controllers/proyect');

var router=express.Router();
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:'./uploads'});

router.get('/home',proyectcontroller.home);
router.get('/test',proyectcontroller.test);
router.post('/save',proyectcontroller.save);
router.get('/project/:id?',proyectcontroller.getProject);
router.get('/all',proyectcontroller.getAllProjects);
router.put('/projectupdate/:id',proyectcontroller.updateprojects);
router.delete('/delete/:id',proyectcontroller.deleteproject);
router.post('/img/:id',multipartMiddleware,proyectcontroller.uploadimg);
router.get('/loadimage/:image',proyectcontroller.loadimg);
module.exports=router;
