require('dotenv').config()
const express = require('express')
const massive = require('massive')

const { SERVER_PORT, 
    CONNECTION_STRING, 
    SESSION_SECRET 
    } = process.env

    
const app = express()

app.use(express.json())
// app.use( express.static( `${__dirname}/../build` ) );
// app.use(
//     session({
//         resave: false,
//         saveUninitialized: false,
//         secret: SESSION_SECRET,
//         cookie: {
//             maxAge: 1000 * 60 * 60
//         }
//     })
// )


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db set')
})
.catch(err => {
    console.log(err.message)
})





app.listen(SERVER_PORT, () => console.log(`All ears on port: ${SERVER_PORT}`))