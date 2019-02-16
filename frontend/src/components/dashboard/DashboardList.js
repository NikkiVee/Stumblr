import React from 'react'
import '../css/Dashboard.css';

export const DashboardList = (props) => {
  console.log(props)
  let allInfo = props.allInfo.map((info, i) => {
    return(
      <>

      <div>
        <img src={info.pic_url} alt="" className="profilePic"/>
      </div>

      <div className="wholepost">
      <div className="usernameCont">
        <li className="username">{info.username}</li>
      </div>
      <div>
        <img src={info.url} alt="" className="post"/>
      </div>
      <div className="bodyCont">
        <li className="body">{info.body}</li>
      </div>
      </div>


      <br/>
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
