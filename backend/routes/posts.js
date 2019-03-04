var express = require('express');
var router = express.Router();
const { createPost, deletePost, editPost, getAllPosts, dashboardInfo, profileInfo } = require('../db/queries/post_queries.js');

router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id', editPost);
router.get('/', getAllPosts);
router.get('/dashboardInfo', dashboardInfo);
router.get('/profileInfo', dashboardInfo);

module.exports = router;
