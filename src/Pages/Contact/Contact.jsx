import React, { useContext } from 'react';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../context/ThemeContext';
import useTitle from '../../hook/useTitle';

const Contact = () => {
    const { theme} = useContext(ThemeContext);

    useTitle("contact");
    
    return (
        <div className={`contact-container ${theme ? 'dark' : ''}`}>
            <h1 className='title'>Get In Touch</h1>
            <p className='title-info'>Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse.</p>
            <div className='content'>
                <form className='form'>
                    <input type="text" placeholder="name" className='input' />
                    <input type="text" placeholder="email" className='input' />
                    <textarea
                        className='textArea'
                        placeholder="message"
                        cols="20"
                        rows="8"
                    ></textarea>
                    <button className='button'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;