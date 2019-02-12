const { db } = require('./index.js');

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

const createUser = (req, res, next) => {
  db.none('INSERT INTO users (username, email) VALUES (${username}, ${email})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successfully Added New User!',
    });
  })
  .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  db.none("DELETE FROM users WHERE id=$1",
   [Number(req.params.id)])
   .then(() => {
     res.status(200).json({
       status: "success",
       message: "Successfully Deleted User"
     })
   })
   catch(err => next(err))
}

const editUser = (req, res, next) => {
  db.none('UPDATE users SET username=${username}, email=${email} WHERE id=${id}', {
    id: parseInt(req.params.id),
    username: req.body.username,
    email: req.body.email,
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Successful User Edit!',
    });
  })
  .catch(err => next(err));
};


module.exports = { getSingleUser, createUser, deleteUser, editUser };
