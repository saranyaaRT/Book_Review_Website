import './Posts.css'
import Post from '../Post/Post'
import React from 'react'

function Posts({ posts }) {
  return (
    <div className='posts'>
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  )
}

export default Posts
