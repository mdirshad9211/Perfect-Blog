import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
        <li><Link to= "/posts/categories/information"> Information</Link></li>
        <li><Link to= "/posts/categories/education"> Education</Link></li>
        <li><Link to= "/posts/categories/investment"> Investment</Link></li>
        <li><Link to= "/posts/categories/entertainment"> Entertainment</Link></li>
        <li><Link to= "/posts/categories/anime"> Anime</Link></li>
        <li><Link to= "/posts/categories/games"> Games</Link></li>
        <li><Link to= "/posts/categories/job-openings"> Job Openings</Link></li>
        <li><Link to= "/posts/categories/technology"> Technology</Link></li>
        <li><Link to= "/posts/categories/uncategorized"> Uncategorized</Link></li>
      </ul>

      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, Perfect Notes.</small>
      </div>
    </footer>
  )
}

export default Footer