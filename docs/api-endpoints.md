# API Endpoints

## HTML API

### Root
* `GET /`
  * loads React web app


### Users
* `POST /api/users`
  * Creates new user
* `GET /api/users/:userId`
  * Fetches single existing user profile
* `PATCH /api/users/:userId`
  * Allows user to update their profile
* `DELETE /api/user/:id`
  * Deletes single user

### Posts
* `POST /api/post`
  * Add post
* `GET /api/post/:id`
  * Get single existing post
* `GET /api/post/:userId`
  * Get all posts from one user
* `GET /api/post/:userId/notes`
  * Get all notes from one post
* `PATCH /post/:id`
  * Edit post
* `DELETE /api/post/:id`
  * Deletes single post

### Likes
* `POST /like`
  * Adds like
* `DELETE /like/:id`
  * Deletes single like

### Comments
* `POST /comments`
  * Creates new comment
* `PATCH /comment/:id`
    * Edit comment
* `DELETE /comment/:id`
    * Deletes single comment

### Bonus
* `Followers`
* `Hashtags`
* `Notes`
* `Repost`
