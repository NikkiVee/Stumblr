import React from 'react';
import '../css/Dashboard.css';
import axios from 'axios'

import { PostList } from './PostList'
import { UserList } from './UserList'

class Dashboard extends React.Component{
  constructor(){
    super()
    this.state = {
      posts: [],
      users: []
    }
  }

  componentDidMount() {
      this.getPosts();
      this.getUsers();
    }

  getPosts = () => {
    axios.get('/posts')
    .then(res => {
      this.setState({ posts: res.data.posts });
    });
  }

  getUsers = () => {
    axios.get('/users')
    .then(res => {
      this.setState({ users: res.data.users });
    });
  }

  render() {
    return (
      <>
      <PostList posts={this.state.posts}/>
      <UserList users={this.state.users}/>
      </>
    );
  }
}

export default Dashboard;
