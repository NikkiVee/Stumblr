DROP DATABASE IF EXISTS stumblr;
CREATE DATABASE stumblr;

\c stumblr

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR NOT NULL,
  pic_url VARCHAR,
  background VARCHAR,
  title VARCHAR,
  description VARCHAR,
  password_digest VARCHAR NOT NULL
);

CREATE TABLE posts (
   id SERIAL PRIMARY KEY,
   user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
   type VARCHAR NOT NULL,
   body TEXT,
   url VARCHAR,
   created_at TIMESTAMP
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  liker_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  commenter_id INT REFERENCES users(id) ON DELETE CASCADE,
  post_id INT REFERENCES posts(id),
  body TEXT NOT NULL,
  created_at TIMESTAMP
);

INSERT INTO users (username, email, pic_url, background, title, description)
VALUES ('nikkivee','beyoncefan4eva@gmail.com', 'https://66.media.tumblr.com/avatar_84bb5b431416_128.pnj', 'https://mixmag.net/assets/uploads/images/_fullX2/finallead.jpg', 'all photos by NikkiVee', 'Jackson Heights, Queens'), ('earellano','earellano@gmail.com', 'https://66.media.tumblr.com/avatar_0f2ad096183a_128.pnj', 'https://66.media.tumblr.com/19864778f158587795c6992664c02fc0/tumblr_nhqukkmGjv1rrkahjo3_540.png', 'just a small town boy', 'Bronx, New York'), ('jonielovesme','jonielovesme@gmail.com', 'https://66.media.tumblr.com/avatar_fec957214542_128.pnj', 'https://static.tumblr.com/aad540e2b87a4d430611347adcd9ffe8/zpsu4cq/YkFpiioqv/tumblr_static_b7278zj2ngo44w0s08ws04cok.png', 'i have secrets', 'South Ozone, Queens'), ('flowers','flowers4eva@gmail.com', 'https://66.media.tumblr.com/avatar_62253176ddb6_128.pnj', null , null, 'hello. this blog is dedicated to beautiful pictures of flowers.');

INSERT INTO posts (user_id, type, body, url)
VALUES (1, 'text', 'Pixel Forest, February 2017', 'https://66.media.tumblr.com/9c2f84125c159a8c162fbe69b090d473/tumblr_oqhl1ttlmg1uhcdwzo1_1280.jpg'),
(2, 'gif', '"Terrorize my heart"', 'https://media.giphy.com/media/l2R0cE5EqO3QHiCoU/giphy.gif'), (3, 'img', null, 'https://66.media.tumblr.com/9cc7b4d1bff0059642770befd2f6f3cb/tumblr_n6bmtzxVzS1rhay20o1_1280.png'), (4, 'img', null, 'https://66.media.tumblr.com/1f5563a10ef48d717e7fcdad6cc4888e/tumblr_n05mf5jIkY1qcfbigo1_500.jpg');

INSERT INTO likes (liker_id, post_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4);

INSERT INTO comments (commenter_id, post_id, body)
VALUES(1, 1, 'Weird clown. Love it!'), (2, 2, 'Thats what my heart is always doing'), (3, 3, 'Wow! Hahahaha!'), (4, 4, 'Love love love');
