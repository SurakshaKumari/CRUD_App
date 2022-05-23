const express = require('express')
const route = express.Router();

route.use('/index', function(req,res){

    res.render('index')
  
})

route.use('/data', function(req,res){
    res.render('data')
})

route.get('/add-user', function(req,res){
    res.render('index')
})

route.get('/update-user', function(req,res){
    res.render('update')
})

module.exports = route