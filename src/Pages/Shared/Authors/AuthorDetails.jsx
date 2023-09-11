import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './AuthorDetails.css'

const AuthorDetails = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [authorCategories, setAuthorCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/author/${id}`)
      .then(res => res.json())
      .then(data => {
        setAuthor(data);
      });

    fetch(`http://localhost:5000/author/${id}/categories`)
      .then(res => res.json())
      .then(data => {
        if (data.categories) {
          setAuthorCategories(data.categories);
        }
      });
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {author && (
        <div>
          <h2>{author.name}</h2>
          <p>{author.title}</p>
          {/* <img src={author.img} alt={author.name} /> */}
          <p>Number of Posts: {author.posts}</p>
        </div>
      )}
      <div>
        <h3>Author Categories:</h3>
        {authorCategories.length > 0 ? (
          <ul className='authPosts'>
            {authorCategories.map(category => (
              <li key={category._id}>
                <p>{category.name}</p>
                <Link to={`/blog/${category?._id}`} onClick={scrollToTop}>
                  <img src={category.img}  alt={`${category.title} Image`} />
                </Link>
                <p>{category.des}</p>

              </li>
            ))}
          </ul>
        ) : (
          <p>No categories found for this author.</p>
        )}
      </div>
    </div>
  );
};

export default AuthorDetails;
