import React, { useState, useEffect, useContext } from "react";
import "./PaginationBlog.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const PaginationBlog = ({ currentPage }) => {
  const [paginationPosts, setPaginationPosts] = useState([]);
  const { theme } = useContext(ThemeContext);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchBlogsData() {
      try {
        const response = await fetch(
          `http://localhost:5000/blogs?page=${currentPage}&limit=${itemsPerPage}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPaginationPosts(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchBlogsData();

    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className={`pagination-blog-container ${theme ? "dark" : ""}`}>
      {currentPage === 1 ? (
        <h3 className="latest-blog">LATEST BLOGS</h3>
      ) : (
        <div className="all-blogs">
          <h2>All Blogs</h2>
          <p>
            Commodo ea nisi enim aute veniam reprehenderit cillum laborum
            aliquip sit eiusmod occaecat laborum fugiat mollit.
          </p>
        </div>
      )}
      <div className="pagination-blogs">
        {paginationPosts.map((blog) => (
          <div key={blog._id}>
            <Link to={`/blog/${blog?._id}`}>
              <img src={blog?.img} alt="blog img" />
            </Link>

            <div className="pagination-blog-info">
              <div className="blog-categoryname-time">
                <Link
                  to={`/category/${blog?.category}`}
                  style={{ textDecoration: "none" }}
                >
                  <span>{blog.category_name}</span>
                </Link>
                <span>{blog.time}</span>
              </div>
              <div className="pagination-blog-title-des">
                <h3>{blog.title}</h3>
                <p>{blog.des}</p>
              </div>
              <div className="blog-authors-info">
                <div className="blog-authors">
                  {blog.author.map((author) => (
                    <div className="blog-author" key={author.authId}>
                      <Link
                        to={`/author/${author?.authId}`}
                        style={{ textDecoration: "none" }}
                      >
                          <img
                            src={author.img}
                            alt={`Image of ${author.name}`}
                          />
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="blog-authorsname">
                  {blog.author.map((author, index) => (
                    <div key={author.id}>
                      <p>
                        {author.name}
                        {index < blog.author.length - 1 ? "," : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaginationBlog;
