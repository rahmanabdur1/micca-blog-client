import React, { useContext, useEffect, useState } from 'react';
import './Authors.css';
import Author from './Author';
import { ThemeContext } from '../../../context/ThemeContext';

const Authors = () => {
    const [authors, setAuthors] = useState([]);
    const { theme} = useContext(ThemeContext);

    useEffect(() => {
        fetch('http://localhost:5000/author')
          .then(response => response.json())
          .then(data => setAuthors(data))
          .catch(error => console.error('Error fetching authors:', error));
      }, []);

      return(

        <div className={`auth-container ${theme ? 'dark' : ''}`}>
            <div className='auth-info'>
                <h1>Meet Our Authors</h1>
                <p >Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue.</p>
            </div>

            <div className='authors'>
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
