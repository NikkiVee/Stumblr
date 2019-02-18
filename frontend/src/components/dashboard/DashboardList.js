import React from 'react'
import '../css/Dashboard.css';

export const DashboardList = (props) => {
  console.log(props)
  let allInfo = props.allInfo.map((info, i) => {
    return(
      <>
      <div className="wholeDashboard">

      <div className="profilePicCont">
        <img src={info.pic_url} alt="" class="actualProfilePic"/>
      </div>

      <div className="usernameCont">
        <li className="username">{info.username}</li>
      </div>
      <div className="postCont">
        <img src={info.url} alt="" className="actualPost"/>
      </div>
      <div className="bodyCont">
        <li className="body">{info.body}</li>
      <div className="likes">
      </div>
      </div>

      </div>

      <br/>
      </>
    )
  })
  return(
    <>
    {allInfo}
    </>
  )
}
