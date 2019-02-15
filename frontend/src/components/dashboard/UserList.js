import React from 'react'

export const UserList = (props) => {
  let userList = props.users.map((user, i) => {
    return (
      <>
        <img src={user.pic_url} alt=""/>
        <li>{user.username}</li>
      </>
    )
  })
  return (
    <>
      <div>
      {userList}
      </div>
    </>
  )
}
