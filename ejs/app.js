import  express  from "express";

const app = express();

app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render("index");
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

app.get('/contact',(req,res)=>{
    res.render("contact")
});

app.listen(3000) 