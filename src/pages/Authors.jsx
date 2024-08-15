import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avator1 from "../assets/my image.jpg";
import Avator2 from "../assets/my photo.png";
import Avator3 from "../assets/photo.jpg";

const authorsData = [
  { id: 1, avator: Avator1, AuthorName: "Md Irshad", post: 2 },
  { id: 2, avator: Avator2, AuthorName: "Md Arish", post: 1 },
  { id: 3, avator: Avator3, AuthorName: "Amaan Ashraf", post: 3 }
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authors_container">
          {authors.map(({ id, avator, AuthorName, post }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className='author'>
                <div className="author_avator">
                  <img src={avator} alt={`images of ${AuthorName}`} />
                </div>
                <div className="author_info">
                  <h4>{AuthorName}</h4>
                  <p>{post}</p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className='center'>No Users/Authors Found</h2>
      )}
    </section>
  );
};

export default Authors;
