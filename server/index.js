require('dotenv').config()

// require packages
const express = require('express')

// require controllers

// destructure environmental variables

port = 4000;

// create an express session
app = express()

app.use(express.json())

// app.use(session({
//   resave: false,
//   saveUninitialized: true,
//   secret: SESSION_SECRET,
//   cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
// }))

// auth endpoints

// main endpoints

// listen

app.listen(port, () => console.log(`Uplifting port ${port}`))
