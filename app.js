const express = require('express')
const app = express()
const studentRoutes = require('./api/routes/student')
const facultyRoutes = require('./api/routes/faculty')
const mongoose = require('mongoose')



mongoose.connect('mongodb+srv://Anurodh13:9795586131@mongodb-v2jdz.mongodb.net/test?retryWrites=true&w=majority')

mongoose.connection.on('error',err=>{
    console.log('connection failed');
})

mongoose.connection.on('connected',connected=>{
    console.log('connected with database...');
})

app.use('/student',studentRoutes)
app.use('/faculty',facultyRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        error:"bad request"
    })
})



app.use((req,res,next)=>{
    res.status(200).json({
        message:"app is running lllllll"
    })
})

module.exports = app