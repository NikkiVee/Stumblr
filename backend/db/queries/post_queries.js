const { db } = require('../index.js');

const createPost = (req, res, next) => {
  db.none('INSERT INTO posts (user_id, type, body, url) VALUES (${user_id}, ${type}, ${body}, ${url})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Added New Post!',
    });
  })
  .catch(err => next(err));
};

const deletePost = (req, res, next) => {
  db.none('DELETE FROM posts WHERE id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted Post',
    });
  })
   .catch(err => next(err));
};

const editPost = (req, res, next) => {
  db.none('UPDATE posts SET user_id=${user_id}, type=${type}, body=${body}, url=${url} WHERE id=${id}', [user_id])
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successful User Edit!',
    });
  })
  .catch(err => next(err));
};

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
  .then(posts => {
    res.status(200).json({
      status: 'success',
      posts: posts,
      message: 'Received ALL Posts!',
    });
  })
  .catch(err => next(err));
};

const dashboardInfo = (req, res, next) => {
  db.any('SELECT body, username, user_id, url, type, pic_url FROM posts JOIN users ON posts.user_id = users.id')
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received all Info',
    });
  })
  .catch(err => next(err));
};

const profileInfo = (req, res, next) => {
  [Number(req.params.id)];
  db.any('SELECT body, username, user_id, url, background, type, pic_url FROM posts JOIN users ON posts.user_id=users.id WHERE posts.user_id=$1',
  [Number(req.params.id)])
  .then(data => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'Received all Info',
    });
  })
  .catch(err => next(err));
};

module.exports = { createPost, deletePost, editPost, getAllPosts, dashboardInfo, profileInfo };
