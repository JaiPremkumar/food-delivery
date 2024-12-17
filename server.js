const app = require('./App');

const path = require('path');
const connectDatabase = require('./config/database'); 
const NodeGeocoder = require('node-geocoder')
const cors = require('cors') 



 
connectDatabase();   
 
app.use(cors({
    origin:'https://sparkling-meringue-44e28b.netlify.app/',
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port: ${process.env.PORT} in ${process.env.NODE_ENV}`)
})