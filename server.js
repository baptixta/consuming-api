const { json } = require('body-parser')
const { response } = require('express')
const axios = require('axios')
const cors = require('cors')
const express = require('express')
// starting express
const app = express()
// using cors
app.use(cors())

// creating route and function
// req => requisition 
// res => response
app.get('/', async(req, res) => {
    try {
        // response is the axios response but I remove the data from inside the response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)

        return res.json(data)   
    } catch (error) {
        console.error(error)    
    }
})

// listening the gate 4567
app.listen('4567')
