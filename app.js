const express = require('express');
const app = express();
const port = 3001;


app.get('/', async(req,res)=>{
console.log('inside the root...');
res.send('ok'); 
})

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
  })