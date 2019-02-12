DROP DATABASE IF EXISTS stumblr;
CREATE DATABASE stumblr;

\c stumblr;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL
);

CREATE TABLE posts (
   id SERIAL PRIMARY KEY,
   user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
   type VARCHAR NOT NULL,
   body TEXT,
   url VARCHAR
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  liker_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id)
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  commenter_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id),
  body TEXT NOT NULL
);

INSERT INTO users (username, email)
VALUES ('nikkivee','beyoncefan4eva@gmail.com'), ('earellano','earellano@gmail.com'), ('jonielovesme','jonielovesme@gmail.com');

INSERT INTO posts (user_id, type, body, url)
VALUES (1, 'text', 'babys first post', 'https://i0.wp.com/www.chiefjosephdays.org/rodeo/wp-content/uploads/2012/03/Brian-Potter-Rodeo-Clown.jpg'),
(2, 'gif', null, 'https://media.giphy.com/media/l2R0cE5EqO3QHiCoU/giphy.gif'), (3, 'img', null, 'https://litreactor.com/sites/default/files/imagecache/header/images/column/headers/jerk-shakespeare.jpg');

INSERT INTO likes (liker_id, post_id)
VALUES (1, 1), (2, 2), (3, 3);

INSERT INTO comments (commenter_id, post_id, body)
VALUES(1, 1, 'Weird clown. Love it!'), (2, 2, 'Thats what my heart is always doing'), (3, 3, 'Wow! Hahahaha!');
