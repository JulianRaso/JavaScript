const express = require ('express');
const { Http2ServerRequest } = require('http2');
const app = express()
const path = require('path')

app.listen(3000);
console.log("Server Running on Port 3000");

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})