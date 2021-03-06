require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const auth = require('./controllers/authController')
const s3Controller = require('./controllers/s3Controller')
const omdbController = require('./controllers/omdbController')


const { SERVER_PORT, 
    CONNECTION_STRING, 
    SESSION_SECRET 
    } = process.env

    
const app = express()

app.use(express.json())
// app.use( express.static( `${__dirname}/../build` ) )
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db set')
})
.catch(err => {
    console.log(err.message)
})

app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.post('/auth/fbregistered', auth.fBookRegisterCheck)

app.get('/sign-s3', s3Controller.awsCall) 

app.post('/search/title', omdbController.searchByTitle)





app.listen(SERVER_PORT, () => console.log(`All ears on port: ${SERVER_PORT}`))