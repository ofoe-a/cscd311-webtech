const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/cscd-311-project-api')
.then(()=>{
 console.log('Connected')
})
.catch((e)=>{
 console.log(e)
})