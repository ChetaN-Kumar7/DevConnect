//making server using express js
const express = require('express');
const app = express()
// this is request handler
app.use((req,res)=>{
    res.send("Hello from the server");
});

app.listen(3000,()=>{
    console.log("server is running and listening on port 3000")
});