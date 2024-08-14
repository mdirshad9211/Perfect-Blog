import React from 'react'
import { Link } from 'react-router-dom'
import Avator from "../assets/profile-pic.png"
const PostAuthor = () => {
  return (
    <Link to = {'/posts/users/sdfsdf'} className='post_author'>
        <div className="post_author-avatar">
            <img src={Avator} alt="" />
        </div>
        <div className="post_author_details">
            <h5>By: Md Irshad</h5>
            <small>Just Now</small>
        </div>
    </Link>
  )
}

export default PostAuthor