var express = require('express');
var router = express.Router();

const passport = require('../auth/local');
const { loginRequired } = require('../auth/helpers');
const { getAllUsers, getSingleUser, createUser, deleteUser, editUser, logoutUser, loginUser, isLoggedIn } = require('../db/queries/user_queries.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', editUser);
router.post('/logout', loginRequired, logoutUser);
router.post('/login', passport.authenticate('local', {}), loginUser);
router.get('/isLoggedIn', isLoggedIn);

module.exports = router;
