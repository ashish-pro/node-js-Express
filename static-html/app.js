import express from 'express'
import process from 'process'
import path from 'path';



const app = express();

app.get('/', (req, res) =>{
    res.sendFile(path.join(process.cwd(),'views','index.html'))
})

app.listen(3000)