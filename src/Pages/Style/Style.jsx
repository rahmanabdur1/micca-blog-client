import React, { useContext } from 'react';
import './Style.css'
import img1 from '../../imges/img1.jpg.webp'
import img2 from '../../imges/img2.jpg'
import fullimg from '../../imges/full-img.jpg'
import { ThemeContext } from '../../context/ThemeContext';
import useTitle from '../../hook/useTitle';

const Style = () => {
    
    const { theme } = useContext(ThemeContext);

    useTitle("style");

    return (
        <div className={`style-container ${theme ? 'dark' : ''}`}>
            <div className='style-guide'>
                <div className='style'>
                    <div className='style-guide'>
                        <h1>Style guide</h1>
                        <p>Praesent ullamcorper tellus nec tincidunt volutpat. Vivamus tempor egestas justo eu lobortis. Etiam malesuada eleifend urna vel pretium. Etiam eu lorem vulputate, egestas ante pharetra, facilisis lectus. Integer tortor lectus, lacinia non vulputate ut, dignissim a felis. Sed purus lectus, ultricies et urna sit amet, maximus cursus ipsum. Vivamus ut luctus urna, ut efficitur sapien. Vivamus erat nibh, iaculis et imperdiet in, luctus vitae felis.</p>
                    </div>
                    <div className='heading-1'>
                        <h1>Level 1 Heading</h1>
                        <p>Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue.</p>
                    </div>
                    <div className='heading-2'>
                        <h2>Level 2 Heading</h2>
                        <p>Praesent accumsan leo at facilisis elementum. Nulla metus ligula, sagittis non commodo suscipit, porttitor eu risus.</p>
                    </div>
                    <div className='heading-3'>
                        <h3>Level 3 Heading</h3>
                        <p>Est culpa officia fugiat aliquip do velit aute excepteur veniam laboris magna voluptate veniam qui est velit eu.</p>
                    </div>
                    <div className='heading-4'>
                        <h4>Level 4 Heading</h4>
                        <p>Sint ad Lorem commodo deserunt nostrud ex fugiat aliqua sint exercitation est labore elit sint esse ad.</p>
                    </div>
                    <div className='emphasis-text'>
                        <h2>Emphasis</h2>
                        <h3>This text will be italic</h3>
                        <h3>This text will be italic</h3>
                        <h3>You can combine them</h3>
                    </div>
                    <div className='lists'>
                        <h2>Lists</h2>
                        <div>
                        <h2>Unordered</h2>
                            <ul>
                                <li>Pariatur Lorem exercitation in ut nulla nostrud ullamco tempor nulla sit tempor veniam adipisicing excepteur reprehenderit exercitation.</li>
                                <li>Sint eiusmod enim proident irure voluptate aliquip laboris in duis in esse qui anim excepteur id dolor enim et.</li>
                                <li>Sint culpa irure nostrud duis irure pariatur Lorem mollit mollit nulla duis id ut enim est sit nostrud magna mollit.</li>
                                <li>Laborum adipisicing excepteur quis id irure voluptate mollit velit ex ea minim deserunt eu cupidatat aute commodo proident commodo.</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Ordered</h2>
                            <ol  type="1">
                            <li>Veniam adipisicing excepteur reprehenderit exercitation.</li>
                            <li>Laboris in duis in esse qui anim excepteur id dolor enim et.</li>
                            <li>Nulla duis id ut enim est sit nostrud magna mollit.</li>
                            <li>Velit ex ea minim deserunt eu cupidatat aute commodo proident commodo.</li>
                            </ol>
                        </div>
                    </div>
                    <div className='images'>
                        <h2>Images</h2>
                        <p>Sed tincidunt hendrerit metus, sit amet molestie urna vestibulum sed. Donec mollis blandit pharetra. Aliquam efficitur scelerisque urna, sit amet mollis augue.</p>
                        <img className='container-img' src={img1} />
                    </div>
                </div>
                <div>
                    <div class="wider-container">
                        <img src={img2} class="wider-container-img" />
                    </div>
                </div>
            </div>
            <img className='full-screen-img' src={fullimg} />
        </div>
    );
};

export default Style;