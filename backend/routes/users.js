var express = require('express');
var router = express.Router();
const { getSingleUser, createUser, deleteUser } = require('../db/queries/users_queries.js');

router.get('/:id', getSingleUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;
