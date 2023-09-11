import React, { useEffect, useState } from 'react';
import './Authors.css';
import Author from './Author';



const Authors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/author')
          .then(response => response.json())
          .then(data => setAuthors(data))
          .catch(error => console.error('Error fetching authors:', error));
      }, []);
    return (
        <div className='authsection'>
            <div className='authinfo'>
                <h2>Meet Our Authors</h2>
                <p >Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue.</p>
            </div>
            <div className='author'>
                {authors.map(author => (
                    <Author
                     key={author._id} 
                     author={author} />
                ))}
            </div>
        </div>
    );
};

export default Authors;
