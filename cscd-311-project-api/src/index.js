const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Sent')
})
app.get('/home/',(req,res)=>{
    res.send('Homes')
})
app.listen(port,()=> console.log(port))