const express = require("express")

const app = express();

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.get('/index', (req, res) =>{
    res.send("this is index ");
})

app.listen(3000);