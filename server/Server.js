const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Stud = require('./Student');
const cors = require('cors');
const router = require('./Routes/Route');
const path = require('path')
app.use(cors())
app.use(express.json());

app.listen(4000, () => {
    console.log('server 4000 connected successfully')
})

app.use(router)

mongoose.connect('mongodb://localhost:27017/Student/').then(res => {
    console.log('database connected successfully')
})

