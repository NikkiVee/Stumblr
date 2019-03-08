import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Dashboard.css';

export const DashboardList = (props) => {
  let allInfo = props.allInfo.map((info, i) => {
    return(
      <div key={i} className="DashboardList">
        <div className="wholeDashboard">

          <Link to={`/users/${info.user_id}`}>
          <div className="profilePicCont">
            <img src={info.pic_url} alt="" className="actualProfilePic"/>
          </div>
          </Link>

          <div className="usernameCont">
            <li className="username">{info.username}</li>
          </div>

          <div className="postCont">
            <img src={info.url} alt="" className="actualPost"/>
          </div>

          <div className="bodyCont">
            <li className="body">{info.body}</li>
          </div>

        </div>

      <br/>
      <br/>
      <br/>
      <br/>

      </div>
    )
  })
  return(
    <>
    {allInfo}
    <br/>
    </>
  )
}
