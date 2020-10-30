module.exports = {
  getPostLikes: (req, res) => {
    const {id} = req.params,
    db = req.app.get('db')

    db.posts.likes.get_post_likes(id)
    .then(likes => res.status(200).send(likes))
    .catch(err => res.status(500).send(err))
  },
  getLikedPosts: (req, res) => {
    const {id} = req.params,
    db = req.app.get('db')

    db.posts.likes.get_liked_posts(id)
    .then(posts => res.status(200).send(posts))
    .catch(err => res.status(500).send(err))
  },
  likePost: (req, res) => {
    const {id} = req.params,
    { user_id } = req.body,
    db = req.app.get('db')

    console.log(id, user_id)

    db.posts.likes.like_post(id, user_id)
    .then(likes => res.status(200).send(likes))
    // .catch(err => res.status(500).send(err))
    // so for some reason, both the .catch and .then are firing, sending both a 200 and 500 status code.  Removing the .catch didn't work...
  },
  unlikePost: (req, res) => {
    const {id} = req.params,
    {user_id} = req.body,
    db = req.app.get('db')

    db.posts.likes.unlike_post(id, user_id)
    .then(likes => res.status(200).send(likes))
    .catch(err => res.status(500).send(err))
  }
}