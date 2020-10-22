require('dotenv').config()

// require packages
const express = require('express'),
session = require('express-session'),
massive = require('massive')
// require controllers
const authCtrl = require('./controllers/authController'),
      mainCtrl = require('./controllers/mainController');

// destructure environmental variables

const { CONNECTION_STRING, SESSION_SECRET } = process.env

port = 4000;

// create an express session
const app = express()

app.use(express.json())

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db);
  console.log('db connected');
});

// auth endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);

// main endpoints
app.post('/api/post', mainCtrl.createPost);
app.get('/api/posts', mainCtrl.getAllPosts);
app.get('/api/posts/:id', mainCtrl.getUserPosts);
app.put('/api/post/:id', mainCtrl.editPost);
app.delete('/api/post/:id', mainCtrl.deletePost);

// listen

app.listen(port, () => console.log(`Giving free hugs on port ${port}`))
