const express = require('express');
const app = express();
const port = '8000';

app.listen(port , (req , res) => {
    console.log('hello world');
});

app.get("/", (req, res) => {
    res.send("API Running");
});