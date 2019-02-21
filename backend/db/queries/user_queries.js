const { db } = require('../index.js');
const authHelpers = require('../auth/helpers');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then(users => {
    res.status(200).json({
      status: 'success',
      users: users,
      message: 'Received ALL Users!',
    });
  })
  .catch(err => next(err));
};

const getSingleUser = (req, res, next) => {
  db.one('SELECT * FROM users WHERE id=$1', [Number(req.params.id)])
  .then(users => {
    res.status(200).json({
      status: 'success',
      users: users,
      message: 'Recieved ONE User!',
    });
  })
  .catch(err => next(err));
};

function createUser(req, res, next) {
  const hash = authHelpers.createHash(req.body.password);

  db.none('INSERT INTO users (username, email, pic_url, password_digest) VALUES (${username}, ${email}, ${pic_url}, ${password_digest})',
  {
    username: req.body.username,
    email: req.body.email,
    pic_url: req.body.pic_url,
    password_digest: hash,
  })
  .then(() => {
    res.status(200).json({
      message: 'Registration successful.',
    });
  })
  .catch(err => {
    res.status(500).json({
      message: err,
    });
  });
}

const deleteUser = (req, res, next) => {
  db.none('DELETE FROM users WHERE id=$1',
   [Number(req.params.id)])
   .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted User',
    });
  })
   .catch(err => next(err));
};

const editUser = (req, res, next) => {
  db.none('UPDATE users SET username=${username}, email=${email}, pic_url=${pic_url}, background=${background}, title=${title}, description=${description} WHERE id=${id}',
  {
    id: parseInt(req.params.id),
    username: req.body.username,
    email: req.body.email,
    pic_url: req.body.url,
    background: req.body.background,
    title: req.body.title,
    description: req.body.description,
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successful User Edit!',
    });
  })
  .catch(err => next(err));
};

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send('log out success');
}

function loginUser(req, res) {
  res.json(req.user);
}

function isLoggedIn(req, res) {
  if (req.user) {
    res.json({ username: req.user });
  } else {
    res.json({ username: null });
  }
}

module.exports = { getAllUsers, getSingleUser, createUser, deleteUser, editUser, logoutUser, loginUser, isLoggedIn };
