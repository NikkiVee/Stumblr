import React from 'react';
import '../css/Dashboard.css';
import axios from 'axios'
import AuthForm from "../../login/AuthForm";
import Auth from "../../utils/Auth";
import PrivateRoute from "../../utils/AuthRouting";
import { DashboardList } from './DashboardList'


class Dashboard extends React.Component{
  constructor(){
    super()
    this.state = {
      allInfo: [],
      isLoggedIn: false,
      user: []
    }
  }

  componentDidMount() {
      this.getDashboardInfo();
      this.checkAuthenticateStatus();
    }

  getDashboardInfo = () => {
    axios.get('/posts/dashboardInfo')
    .then(res => {
      this.setState({ allInfo: res.data.data})
    })
  }

  checkAuthenticateStatus = () => {
      axios.get("/users/isLoggedIn").then(user => {
        if (user.data.username === Auth.getToken()) {
          this.setState({
            isLoggedIn: Auth.isUserAuthenticated(),
            username: Auth.getToken()
          })
        } else {
          if (user.data.username) {
            this.logoutUser();
          } else {
            Auth.deauthenticateUser();
          }
        }
      })
    }

    logoutUser = () => {
      axios
        .post("/users/logout")
        .then(() => {
          Auth.deauthenticateUser();
        })
        .then(() => {
          this.checkAuthenticateStatus();
        })
    }

  render() {
    return (
      <>
      <DashboardList
        allInfo={this.state.allInfo}/>
      </>
    )
  }
}

export default Dashboard;
