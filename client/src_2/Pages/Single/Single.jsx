import './Single.css'
import React from 'react'
import SideBar from '../../SideBar/SideBar'
import SinglePost from '../../SinglePost/SinglePost'

function Single() {
  return (
    // <h1>HAii</h1>
    <div className='single'>
        {/* <h1>HAii</h1>  */}
        <SinglePost/>
        <SideBar/>
      
    </div>
  )
}

export default Single
