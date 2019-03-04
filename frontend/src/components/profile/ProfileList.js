import React from 'react'

export const ProfileList = (props) => {
  let allInfo = props.allInfo.map((info, i) => {
    return(
      <div key={i} className="ProfileList">
        <div className="">
        </div>
      </div>
    )
  })
  return(
    <>
      Hello
    </>
  )
}
