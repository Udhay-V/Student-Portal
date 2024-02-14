const express = require('express');
const app = express()
const mongoose = require('mongoose');
const Stud = require('../Student')
const cors = require('cors');
const mongodb = require('mongodb');
const client = new mongodb.MongoClient("mongodb://localhost:27017")
const student = client.db("Student")
const router = express.Router()

app.use(cors())

router.post('/login', async (req, res) => {
    console.log(req.body)
    const collection_1 = student.collection("Schedule")
    const collection_2 = student.collection("Accessment")
    const collection_3 = student.collection("Result")
    const { RegisterNumber, DateofBirth } = req.body

    const data = await Stud.findOne({ Register: RegisterNumber, Date:new Date(DateofBirth)  })
    console.log(data)
    if (data !== null) {
        const Schedule = await collection_1.findOne({
            RegisterNumber: RegisterNumber
        })
        const Accessment = await collection_2.findOne({
            RegisterNumber: RegisterNumber
        })
        const Result = await collection_3.findOne({
            RegisterNumber: RegisterNumber
        })
        res.json([data, "success", Schedule, Accessment, Result])
    } else {
        res.json([data, "fail"])
    }
})


module.exports = router;