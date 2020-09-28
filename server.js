const { json } = require('body-parser')
const { response } = require('express')
const cors = require('cors')
const express = require('express')
// starting express
const app = express()
// using cors
app.use(cors())

// creating route and function
// req => requisition 
// res => response
app.get('/', (req, res) => {
    return res.json([
        {name: 'bruneras'},
        {name: 'zézão'},
        {name: 'pepe'},
    ])
})

// listening the gate 4567
app.listen('4567')
