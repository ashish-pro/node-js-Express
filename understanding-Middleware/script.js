const express = require("express")

const app = express();

app.use((req, res, next)=>{
    console.log("middleware working")
    next();
})

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.get('/index', (req, res) =>{
    res.send("Hello From Index");
})

app.listen(3000);