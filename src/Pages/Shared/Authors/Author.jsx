import React, { useContext } from "react";
import "./Author.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const Author = ({ author }) => {
  const { img, posts, authorname } = author;
  const { theme } = useContext(ThemeContext);

  if (!author) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className={`singleauth ${theme ? "dark" : ""}`}>
      <Link to={`/author/${author?.authId}`}>
        <img src={img} />
      </Link>
      <h2>{authorname}</h2>
      <p>{posts} Posts </p>
    </div>
  );
};

export default Author;
