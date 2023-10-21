import  express  from "express";

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello from root page")
});
app.get('/home',(req,res)=>{
    res.send("Hello from Home page")
});
app.get('/about',(req,res)=>{
    res.send("Hello from about page")
});

app.get('/about/:username',(req,res)=>{
    res.send(`Hello from ${req.params.username}`)
});

app.get('/service',(req,res)=>{
    res.send("Hello from service page")
});

app.listen(3000) 