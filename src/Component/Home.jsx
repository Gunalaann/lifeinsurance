import React from 'react';
import '../Css/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navig = useNavigate();
    return (
        <div className="home-container">
            <main>
                <div className='contents'>
                    <h2>Welcome to Our Insurance Company</h2>
                    <p>
                        We are committed to providing the best insurance services to ensure your peace of mind.<br></br>
                        Whether you need life, health, auto, home, or business insurance, we've got you covered.
                    </p>
                    <p>
                        Explore our services to learn more about how we can help protect what matters most to you.
                    </p>
                </div>
            </main>
            <footer>
                <p>&copy; 2024 Insurance Company. All rights reserved.</p>
                <ul>
                    <li><span onClick={() => { navig('/about') }}>About Us</span></li>
                    <li><span onClick={() => { navig('/contact') }}>Contact Us</span></li>
                    <li><span onClick={() => { navig('/service') }}>Service</span></li>
                    <li>Privacy Policy</li>
                </ul>
        </footer>
        </div>
    );
}

export default Home;
