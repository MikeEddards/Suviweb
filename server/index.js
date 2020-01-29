require('dotenv').config()
const express = require('express')
const massive = require('massive')
const fbcontroller = require('./controllers/fbcontroller')

const { SERVER_PORT, 
    CONNECTION_STRING
    } = process.env

    
const app = express()

app.use(express.json())
// app.use( express.static( `${__dirname}/../build` ) );


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db set')
})
.catch(err => {
    console.log(err.message)
})

app.get('/fblogin', fbcontroller.login)



app.listen(SERVER_PORT, () => console.log(`All ears on port: ${SERVER_PORT}`))