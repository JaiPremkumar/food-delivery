const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path')
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config({path:path.join(__dirname,"config/config.env")});

app.use(express.json());
app.use(cookieParser());
app.use('/upload',express.static(path.join(__dirname,'upload'))) 



const products = require('./routes/product') 
const users = require('./routes/user') 
const orders = require('./routes/order') 
const restarunt = require('./routes/restarunt') 
const kitchen = require('./routes/kitchen')
const payment = require('./routes/payment')
require('../frontent/my-app/build/')
app.use('/api/v1/',products)
app.use('/api/v1',orders)
app.use('/api/v1/',users)
app.use('/api/v1/',restarunt)
app.use('/api/v1/',kitchen)
app.use('/api/v1/',payment) 

if(process.env.NODE_ENV = "development"){
   app.use(express.static(path.join(__dirname,'../frontent/my-app/build')))
   app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../frontent/my-app/build/index.html'))
   })
}

module.exports = app

