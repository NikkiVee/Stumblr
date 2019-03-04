import React from 'react';
import axios from 'axios'
import { ProfileList } from './ProfileList'


class UserProfile extends React.Component{
  constructor(){
    super()
    this.state = {
      profileInfo: [],
      user: []
    }
  }

  componentDidMount() {
      this.getProfileInfo();
    }

  getProfileInfo = () => {
    axios.get('/posts/profileInfo')
    .then(res => {
      this.setState({ profileInfo: res.data.data})
    })
  }


  render() {
    return (
      <>
      <ProfileList
        profileInfo={this.state.profileInfo}/>
      </>
    )
  }
}

export default UserProfile;
