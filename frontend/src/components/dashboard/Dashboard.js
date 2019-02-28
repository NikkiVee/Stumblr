import React from 'react';
import '../css/Dashboard.css';
import axios from 'axios'
import { DashboardList } from './DashboardList'


class Dashboard extends React.Component{
  constructor(){
    super()
    this.state = {
      allInfo: [],
      user: []
    }
  }

  componentDidMount() {
      this.getDashboardInfo();
    }

  getDashboardInfo = () => {
    axios.get('/posts/dashboardInfo')
    .then(res => {
      this.setState({ allInfo: res.data.data})
    })
  }

  render() {
    return (
      <>

      <button className="logout">Log Out</button>

      <DashboardList
        allInfo={this.state.allInfo}/>
      </>
    )
  }
}

export default Dashboard;
