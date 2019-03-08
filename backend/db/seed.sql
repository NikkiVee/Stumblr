DROP DATABASE IF EXISTS stumblr;
CREATE DATABASE stumblr;

\c stumblr

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL UNIQUE,
  email VARCHAR,
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
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  body TEXT NOT NULL,
  created_at TIMESTAMP
);

INSERT INTO users (username, email, pic_url, background, title, description, password_digest)
VALUES ('drex','drex@gmail.com', 'https://66.media.tumblr.com/avatar_adb0efbec3fe_64.pnj', 'http://www.lovethesepics.com/wp-content/uploads/2012/01/Why-fear-the-Chinese-Red-dragon.jpg', null, null , '1234'), ('hoodwitch','hoodwitch@gmail.com', 'https://66.media.tumblr.com/avatar_66e7ec8c903f_128.pnj', 'https://previews.123rf.com/images/pilens/pilens1708/pilens170800031/84808185-nature-texture-pattern-of-nacre-mother-of-pearl-inner-side-of-paua-perlemoen-or-abalone-shell-macro-.jpg', null, null, '1234'),
('renhang','renhang@gmail.com', 'http://i44.photobucket.com/albums/f6/nicollevee/renicon_zpsrcligxdu.jpg?t=1551378268', 'https://blog.quantum.com/wp-content/uploads/Blue_Clouds.jpg', null, null, '1234'),
('dragme','dragme@gmail.com', 'https://66.media.tumblr.com/avatar_1fced9b5ff2b_128.pnj', 'https://scstylecaster.files.wordpress.com/2016/05/light-pink-lipsticks-feat.jpg', null, null, '1234');

INSERT INTO posts (user_id, type, body, url)
VALUES (1, 'gif', 'Lissette…', 'https://66.media.tumblr.com/33c6036d5c2fe5596474d0f87f6a4559/tumblr_p2cv20bFh91s8okido1_640.gif'),
(2, 'img', null, 'http://static1.squarespace.com/static/53d5b207e4b0125510c263aa/t/5c65c76de79c70730e5db3be/1550174068951/image5.jpeg?format=500w'),
(3, 'img', null, 'https://i.pinimg.com/originals/2b/41/e8/2b41e85bf69c95e9865b313bfa4921ea.jpg'),
(4, 'img', 'Monét X Change', 'https://66.media.tumblr.com/940431cfe4d0bf3dce8d1093bc783d5d/tumblr_plx3u20xjp1u2vnvw_1280.jpg'),
(1, 'gif', null, 'https://66.media.tumblr.com/a21b529542ed1f0dcad97d6a8b315bac/tumblr_oxvpncYozE1s8okido1_640.gif'),
(2, 'img', null, 'http://static1.squarespace.com/static/53d5b207e4b0125510c263aa/t/5c51f09a898583aa2a5c7ff6/1548873904975/IMG_6842.JPG?format=500w'),
(3, 'img', null, 'https://www.joseph-fashion.com/on/demandware.static/-/Sites-Joseph-Library/default/dw2fcc9694/joseph-curates/ren/2017_04_05_REN_HANG_Mobile_8.jpg'),
(4, 'img', null, 'https://66.media.tumblr.com/8e9628c5a2c381da161b2b30262cd6e1/tumblr_plx3u0d2hR1u2vnvw_1280.jpg'),
(1, 'gif', null, 'https://66.media.tumblr.com/ad6a61d3ef562bc66856e462969354eb/tumblr_onzzqs5lKz1s8okido1_640.gif'),
(2, 'img', null, 'http://static1.squarespace.com/static/53d5b207e4b0125510c263aa/t/5b45cdb003ce642895758182/1531301301681/b9b815f6e461a33e2772789768d23ed7.jpg?format=original'),
(3, 'img', null, 'https://singapore-grlk5lagedl.stackpathdns.com/production/singapore/images/1488008865575726-lofficiel-malaysia-ren-hang-rila-fukushima-march-2017-4.jpg?w=802&h=720&fit=clip&fm=pjpg&auto=compress&crop=faces'),
(4, 'img', null, 'https://66.media.tumblr.com/237e68dba18557a593b6450682c4d56d/tumblr_ph0mukHhkJ1wpme4c_1280.jpg'),
(1, 'gif', null, 'https://66.media.tumblr.com/460fb1c8c503e8876f06afea074df5ab/tumblr_ouorbp4Kj21s8okido1_1280.gif'),
(2, 'img', null, 'http://static1.squarespace.com/static/53d5b207e4b0125510c263aa/t/5c4fa5854ae237da1ec4bd9b/1548723601148/unnamed+%2858%29.jpg?format=500w'),
(3, 'img', null, 'https://dazedimg-dazedgroup.netdna-ssl.com/786/azure/dazed-prod/1190/8/1198327.jpg'),
(4, 'img', null, 'https://66.media.tumblr.com/c40eb6bd7ffaa34c52cdd2057ca05105/tumblr_os2lxbAeON1vl3jhco1_1280.jpg'),
(1, 'gif', null, 'https://66.media.tumblr.com/d3a464e9db0d4d5f0dd8c39bff5ed696/tumblr_oz341753oI1s8okido1_1280.gif'),
(2, 'img', null, 'http://static1.squarespace.com/static/53d5b207e4b0125510c263aa/t/5b47643770a6ad5986cbe2b0/1531405372213/9cfeb48e74b8d7cbc9092f213a246767.jpg?format=original'),
(3, 'img', null, 'https://i.pinimg.com/originals/15/f5/18/15f5183e8281b9391342a12035071f71.jpg'),
(4, 'img', null, 'https://66.media.tumblr.com/998068324dbb443d637ad7080b0e4ce2/tumblr_plx3u1MxJB1u2vnvw_1280.jpg');

INSERT INTO likes (liker_id, post_id)
VALUES (1, 1), (2, 2), (3, 3), (4, 4), (1, 5);

INSERT INTO comments (commenter_id, post_id, body)
VALUES(1, 1, 'Beautiful'), (2, 2, 'Amazing'), (3, 3, 'Love. Love. Love');
