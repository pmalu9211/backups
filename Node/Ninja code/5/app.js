const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.sendFile('./view/home.html', {root: __dirname});
})

app.get('/about',(req,res)=>{
    res.sendFile('./view/index.html', {root: __dirname});
})

app.use((req,res)=>{
    res.status(404).sendFile('./view/error.html', {root: __dirname});
})


// app.get('/')

app.listen(3000);