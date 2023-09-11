import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Post.css'


const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
      });

    fetch(`http://localhost:5000/blog/${id}/related`)
      .then(res => res.json())
      .then(data => {
        setRelatedPosts(data);
      });
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='postContainer'>
      <div className='singlePost'>
        <h3>{post.title}</h3>
        <p>{post.author.name}</p>
        <img src={post?.img} alt='blog img' />
        <p>{post.des}</p>
      </div>
      <h2>Related Posts</h2>
      <div className='post'>
        {relatedPosts.map(relatedPost => (
          <div key={relatedPost._id}>
            <Link to={`/blog/${relatedPost?._id}`} onClick={scrollToTop}>
              <img className='img' src={relatedPost?.img} alt='blog img' />
            </Link>
            <div className='relatedPost'>
              <p className='relatedPostTitle'>{relatedPost.title}</p>
              <p className='relatedPostDetails'>{relatedPost.des}</p>
            </div>

            <div className="authors">
              {relatedPost.author.map(postAuthor => (
                <div className="" key={postAuthor._id}>
                  <Link to={`/author/${postAuthor._id}`} style={{ textDecoration: 'none' }} onClick={scrollToTop}> <p>{postAuthor.name}</p></Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
