var express = require('express');
var router = express.Router();
const { createLike, deleteLike, getAllLikesFromPost } = require('../db/queries/likes_queries.js');

router.post('/', createLike);
router.delete('/:id', deleteLike);
router.get('/posts/:id', getAllLikesFromPost);

module.exports = router;
