module.exports = {
  createPost: (req, res) => {
    const { id, content } = req.body
    const db = req.app.get('db')

    db.posts.create_post(id, content)
    .then(() => res.sendStatus(200))
    .catch(err => res.sendStatus(500).send(err))
  },
  getAllPosts: (req, res) => {
    const db = req.app.get('db');

    db.posts.get_posts()
    .then(posts => res.status(200).send(posts))
    .catch(err => res.status(500).send(err))
  },
  getUserPosts: (req, res) => {
    const {id} = req.params,
           db = req.app.get('db');

    db.posts.get_user_posts(id)
    .then(posts => res.status(200).send(posts))
    .catch(err => res.status(500).send(err));
  },
  deletePost: (req, res) => {
    const {id} = req.params,
          db = req.app.get('db');

    db.posts.delete_post(id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
  },
  editPost: (req, res) => {
    const {id} = req.params,
      {content} = req.body,
      db = req.app.get('db');

      db.posts.update_post(content, id)
      .then(res.sendStatus(200))
      .catch(err => res.status(500).send(err));
  }
}