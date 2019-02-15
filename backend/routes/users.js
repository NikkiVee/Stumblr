var express = require('express');
var router = express.Router();
const { getAllUsers, getSingleUser, createUser, deleteUser, editUser } = require('../db/queries/user_queries.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', editUser);

module.exports = router;
