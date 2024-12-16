const app = require('./App');

const path = require('path');
const connectDatabase = require('./config/database'); 
const NodeGeocoder = require('node-geocoder')
/*const http =require('http')
const cors = require('cors') 
const {Server} = require('socket.io')*/


 
connectDatabase();  
 
/*const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    }
})

io.on("connection",(socket)=>{
    console.log(`User${socket.id}`)
    socket.on("join_room",(data)=>{
        socket.join(data)
        console.log(`userId${socket.id} room with ${data}`)
    })

    socket.on("disconnect",()=>{
        console.log(`disconnet` ,socket.id) 
    })
})*/

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})