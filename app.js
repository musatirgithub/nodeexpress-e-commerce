const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const port = process.env.PORT || 5000;

const start = async ()=>{
    try {
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}`)
        })
    } catch (error) {
        
    }
}

start();