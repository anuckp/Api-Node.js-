const express = require('express')
const app = express()
const studentRoutes = require('./api/routes/student')
const facultyRoutes = require('./api/routes/faculty')


app.use('/student',studentRoutes)
app.use('/faculty',facultyRoutes)

app.use((req,res,next)=>{
    res.status(200).json({
        message:"app is running lllllll"
    })
})

module.exports = app