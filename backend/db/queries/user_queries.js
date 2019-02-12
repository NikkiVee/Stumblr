const { db } = require('./index.js');

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id=$1', [userId])
    .then(data => {
      res.status(200)
      .json({
        status: ' success',
        data: data,
        message: 'Received ONE USER!',
      });
    })
    .catch(err => {
      return next(err);
    });
};

const createUser = (req, res, next) => {
  db.none('INSERT INTO users (name, age) VALUES (${name}, ${age})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Congrats new user',
    });
  })
  .catch(err => {
    return next(err);
  });
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'You murdered a user soooo good',
      result: result,
    });
  })
  .catch(err => {
    return next(err);
  });
};

module.exports = { getSingleUser, createUser, deleteUser };
