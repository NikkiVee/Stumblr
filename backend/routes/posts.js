var express = require('express');
var router = express.Router();
const { createPost, deletePost, editPost, getAllPosts } = require('../db/queries/post_queries.js');

router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', editPost);
router.get('/', getAllPosts);

module.exports = router;
