import React from 'react'

export const PostList = (props) => {
  let postList = props.posts.map((post, i) => {
    return (
      <img src={post.url} alt=""/>)
  })
  return(
    <>
      <div>
      {postList}
      </div>
    </>
  )
}
