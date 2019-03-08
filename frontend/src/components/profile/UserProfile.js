import React from 'react';
import axios from 'axios';
import '../css/Profile.css';
import { ProfileList } from './ProfileList';

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: [],
      users: [],
    };
  }

  componentDidMount() {
    this.getProfileInfo();
  }

  getProfileInfo = () => {
    axios.get(`/posts/profileInfo/${this.props.match.params.user_id}`)
    .then(res => {
      this.setState({ profileInfo: res.data.data });
    });
  };

  render() {
    if (!this.state.profileInfo.length) return null;
    return (
      <div className="profile">

          <div className="backgroundContainer">
          <img src={this.state.profileInfo[0].background}
               alt=""
               className="backgroundPicture"/>
          </div>

          <div className="profilePicContainer">
          <img src={this.state.profileInfo[0].pic_url}
               alt=""
               className="img-circle"/>
          </div>

          <ProfileList
            profileInfo={this.state.profileInfo}/>

      </div>
    );
  }
}

export default UserProfile;
