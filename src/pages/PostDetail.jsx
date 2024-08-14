import React from 'react'
import PostAuthor from "../components/PostAuthor";
import { Link } from 'react-router-dom';
import Thumbnail from "../assets/post1.png"
const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="conatainer post-detail_container">
        <div className="post-detail_header">
          <PostAuthor/>
          <div className="post-detail_buttons">
            <Link to = {'/posts/werwer/edit'} className = "btn sm primary"> Edit</Link>
            <Link to = {'/posts/werwer/delete'} className = "btn sm danger"> Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail_thumbnail">
          <img src={Thumbnail} alt= ""/>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse repellat quaerat officiis vero, iure quis ab odit quae sequi est, possimus nisi quisquam beatae. Adipisci sint doloribus reprehenderit consequuntur unde voluptates autem saepe distinctio, impedit sequi ex dolore atque repellendus?</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse repellat quaerat officiis vero, iure quis ab odit quae sequi est, possimus nisi quisquam beatae. Adipisci sint doloribus reprehenderit consequuntur unde voluptates autem saepe distinctio, impedit sequi ex dolore atque repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aut perferendis sequi dicta, doloribus tenetur nostrum sed voluptatem quas, officiis itaque repudiandae quidem laudantium incidunt unde amet obcaecati excepturi numquam?</p>

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse repellat quaerat officiis vero, iure quis ab odit quae sequi est, possimus nisi quisquam beatae. Adipisci sint doloribus reprehenderit consequuntur unde voluptates autem saepe distinctio, impedit sequi ex dolore atque repellendus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia placeat officia laudantium dolor sunt animi voluptas odit perspiciatis quas quae?</p>
      </div>
    </section>
  )
}

export default PostDetail