const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5001;  

// app.get('/api/contacts',(req,res)=>{
//     res.send("Get all contact");
// })

app.use(express.json());

app.use('/api/contacts',require('./routes/contactRout'))

app.use(errorHandler);

app.listen(port, () =>{
    console.log(`Server running on port number ${port}`)
})