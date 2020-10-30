require('dotenv').config()

// require packages
const express = require('express'),
session = require('express-session'),
massive = require('massive')
// require controllers
const authCtrl = require('./controllers/authController'),
      mainCtrl = require('./controllers/mainController'),
      likeCtrl = require('./controllers/likeController');

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

// like endpoints

app.post('/api/like/:id', likeCtrl.likePost);
app.post('/api/unlike/:id', likeCtrl.unlikePost);
// I'm not entirely sure that this should be a post request
// I'm thinking it might be a delete request instead, but
// it uses req.body, which I'm not sure a delete request gets...
app.get('/api/post-likes/:id', likeCtrl.getPostLikes);
app.get('/api/liked-posts/:id', likeCtrl.getLikedPosts);

// listen

app.listen(port, () => console.log(`Giving free hugs on port ${port}`))
