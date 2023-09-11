import React from 'react';
import './Contact.css'


const Contact = () => {
    return (
        <div>
            <h1 className='title'>Get In Touch</h1>
            <p className='titleInfo'>Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse.</p>
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
                <div className='contactInfo'>
                   <h2>Contact Info</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;