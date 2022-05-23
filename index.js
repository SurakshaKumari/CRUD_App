const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyparser = require('body-parser')
const path = require('path')
dotenv.config({path:'config.env'})
const app = express();
const ejs = require('ejs');
const fs = require('fs')
const port = process.env.port||8080;

//log requests
app.use(morgan('tiny'));

//body parser to serialize the data
app.use(bodyparser.urlencoded({extended : true}))

//set ejs
app.set("view engine", "ejs")

//set assets file
app.use('/style', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/script', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))


app.use('/index', function(req,res){

    res.render('index')
  
})

app.use('/data', function(req,res){
    res.render('data')
})



app.listen(port, function(req, res){
    console.log(`listening to ${port}`)
})