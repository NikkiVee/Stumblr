const { db } = require('../index.js');

const createLike = (req, res, next) => {
  db.none('INSERT INTO likes (liker_id, post_id) VALUES (${liker_id}, ${post_id})', {
    liker_id: parseInt(req.body.liker_id),
    post_id: req.body.post_id,
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'ADDED LIKE TO POST',
    });
  })
   .catch(err => next(err));
};

const deleteLike = (req, res, next) => {
  db.none('DELETE FROM likes WHERE id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted Like',
    });
  })
   .catch(err => next(err));
};

const getAllLikesFromPost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT * FROM likes WHERE post_id=$1', [postId])
    .then(likes => {
      res.status(200)
      .json({
        status: ' success',
        likes: likes,
        message: 'Received ALL LIKES FROM ONE POST!',
      });
    })
    .catch(err => next(err));
};

module.exports = { createLike, deleteLike, getAllLikesFromPost };
