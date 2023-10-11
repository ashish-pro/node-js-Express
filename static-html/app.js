import express from 'express'



const app = express();

app.get('/', (req, res) =>{
    res.sendfile('views/login.html')
})

app.listen(3000)