import React from 'react'
import '../css/Profile.css';

export const ProfileList = (props) => {
  if (!props.profileInfo) return null
  let profileInfo = props.profileInfo.map((info, i) => {
    return(
      <div key={i} className="ProfileList">
        <div className="wholeProfile">

          <div className="postContainter">
            <img src={info.url} alt="" className="post"/>
          </div>
          <br/>
          
        </div>
      </div>

    )
  })
  return (
    <>
      {profileInfo}
    </>
  )
}
